import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { store } from '../index'

interface IUserInfo {
  name: string
  age: number
  email: string
}

@Module({
  namespaced: true,
  name: 'user',
  dynamic: true,
  store,
})
export default class UserModule extends VuexModule {
  private info: IUserInfo | null = null
  private token: string = ''

  get userToken(): string {
    return this.token
  }

  get userInfo(): IUserInfo | null {
    return this.info
  }

  @Mutation
  updateUserToken(token: string) {
    this.token = token
  }

  @Action({ commit: 'updateUserToken' })
  async login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('user-token')
      }, 3000)
    })
  }
}

export const userStore = getModule(UserModule)
