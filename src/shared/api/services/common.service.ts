import { apiClient } from '@topcoder/api'
import { IListResponse, IQueryParams } from '@topcoder/types'
import { AxiosResponse } from 'axios'

export const CommonService = {
  getPaginatedData: async <TResponse>(
    endpoint: string,
    params: IQueryParams = {}
  ): Promise<IListResponse<TResponse>> => {
    const response: AxiosResponse<IListResponse<TResponse>> = await apiClient.get(endpoint, { params })
    return response.data
  },

  async addData<TPayload, TResponse>(endpoint: string, payload: TPayload) {
    const res = await apiClient.post<TResponse>(endpoint, payload)
    return res.data
  },

  async updateData<TPayload, TResponse>(endpoint: string, payload: TPayload, id: string | number | undefined | null) {
    const res = await apiClient.put<TResponse>(endpoint + id, payload)
    return res.data
  },

  async partialUpdateData<TPayload, TResponse>(
    endpoint: string,
    payload: TPayload,
    id: string | number | undefined | null
  ) {
    const res = await apiClient.patch<TResponse>(endpoint + id, payload)
    return res.data
  },

  async deleteData<TResponse>(endpoint: string, id: string | number | undefined | null) {
    const res = await apiClient.delete<TResponse>(endpoint + id)
    return res.data
  },

  async getDetail<TResponse>(endpoint: string, id: string | number | undefined | null, params: IQueryParams = {}) {
    const res = await apiClient.get<TResponse>(endpoint + id, { params })
    return res.data
  },

  async getData<T>(endpoint: string, params: IQueryParams = {}): Promise<T> {
    const res = await apiClient.get<T>(endpoint, { params })
    return res.data
  },
}
