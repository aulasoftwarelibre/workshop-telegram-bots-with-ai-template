import { db as database } from '../db'
import { embeddings as embeddingsTable } from '../db/schema/embeddings'
import {
  insertResourceSchema,
  type NewResourceParameters,
  resources,
} from '../db/schema/resources'
import { generateEmbeddings } from './embeddings'

export const createResource = async (
  input: NewResourceParameters,
): Promise<string> => {
  try {
    const { content } = insertResourceSchema.parse(input)

    const [resource] = await database
      .insert(resources)
      .values({ content })
      .returning()

    if (!resource) {
      return 'Resource not found'
    }

    const embeddings = await generateEmbeddings(content)
    await database.insert(embeddingsTable).values(
      embeddings.map((embedding) => ({
        resourceId: resource.id,
        ...embedding,
      })),
    )

    return 'Resource successfully created and embedded.'
  } catch (error) {
    return error instanceof Error && error.message.length > 0
      ? error.message
      : 'Error, please try again.'
  }
}
