import { z } from 'zod'

export type IQueryParams = Record<string, string | number | boolean | undefined | null | (string | number | boolean)[]>

// eslint-disable-next-line
export type TypeAny = any

export interface IPage {
  totalElements: number
  totalPages: number
}

export interface IListResponse<T> {
  content: T[]
  page: IPage
}

export interface IAxiosResponse<T> {
  message: string
  errors: TypeAny
  data: T
}

export interface IIDName {
  id: string | number
  name: string
}

export type InferType<T extends z.ZodTypeAny> = z.infer<T>
