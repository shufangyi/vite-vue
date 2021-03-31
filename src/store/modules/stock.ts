import { getModule, Module, VuexModule } from 'vuex-module-decorators'
import { store } from '../index'

interface IStock {
  name: string
  code: string
}

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'stock',
})
export default class StockModule extends VuexModule {
  private stocks: IStock[] = []

  get getStockByCode() {
    return (code: string) => this.stocks.find((i) => i.code === code)
  }
}

export const stockStore = getModule(StockModule)
