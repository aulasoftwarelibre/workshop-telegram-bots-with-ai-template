import { embed, embedMany } from 'ai'
import { cosineDistance, desc, sql } from 'drizzle-orm'

import { registry } from '../../setup-registry'
import { db as database } from '../db'
import { embeddings } from '../db/schema/embeddings'
import { environment } from '../environment.mjs'

const embeddingModel = registry.textEmbeddingModel(environment.MODEL_EMBEDDING)

const generateChunks = (input: string): string[] => {
  return input
    .trim()
    .split('.')
    .filter((index) => index !== '')
}

export const generateEmbeddings = async (
  value: string,
): Promise<Array<{ content: string; embedding: number[] }>> => {
  const chunks = generateChunks(value)
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: chunks,
  })
  return embeddings.map((embedding, index) => ({
    content: chunks[index] as string,
    embedding,
  }))
}

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll(String.raw`\n`, ' ')
  const { embedding } = await embed({
    model: embeddingModel,
    value: input,
  })
  return embedding
}

export const findRelevantContent = async (
  userQuery: string,
): Promise<{ name: string; similarity: number }[]> => {
  const userQueryEmbedded = await generateEmbedding(userQuery)
  const similarity = sql<number>`1 - (${cosineDistance(
    embeddings.embedding,
    userQueryEmbedded,
  )})`
  const similarGuides = await database
    .select({ name: embeddings.content, similarity })
    .from(embeddings)
    // .where(gt(similarity, 0.1))
    .orderBy((t) => desc(t.similarity))
    .limit(4)

  return similarGuides
}
