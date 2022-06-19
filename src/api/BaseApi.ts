import { UserSort } from '@/entities/users/lib/enums/UserSort'
import { Entities } from '@/shared/enums'
import { Order } from '@/shared/enums/Order'
import axios from 'axios'

export const BaseApi = <SearchResponse, GetResponse, Sort=UserSort>(
  entity: Entities
) => ({
    search (params: Partial<{
      q: string,
      sort: Sort,
      order: Order,
      per_page: number,
      page: number
    }>) {
      return axios.get<SearchResponse>(`/search/${entity}`, { params })
    },
    get (id: string) {
      return axios.get<GetResponse>(`/${entity}/${id}`)
    }
  })
