import { BaseApi } from '@/api/BaseApi'
import { BaseEntityModel } from '@/entities/base/model/BaseEntityModel'
import { Entities } from '@/shared/enums'
import { UserSort } from './enums/UserSort'
import { UserModel, UserSearchResultModel } from './models/UserSearchResultModel'

export const UsersApi = BaseApi<BaseEntityModel<UserSearchResultModel>, UserModel, UserSort>(Entities.Users)
