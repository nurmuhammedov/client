export interface IListResponse<T> {
  count: number
  totalPages: number
  results: T
}

export type IQueryParams = Record<string, string | number | boolean | undefined | null | (string | number | boolean)[]>
