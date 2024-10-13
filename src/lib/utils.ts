import { customAlphabet } from 'nanoid'

export const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789')

export function tomorrow(): Date {
  return new Date(new Date().setDate(new Date().getDate() + 1))
}
