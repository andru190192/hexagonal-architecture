import { http } from '../http/http'
import { ProductDTO } from '../http/dto/ProductDTO'
import { Product } from '../../domain/models/Product'

export const productRepository = {
  getProducts: async () => {
    const products = await http.get<ProductDTO[]>('https://603719ee5435040017721978.mockapi.io/products')
    // we can extract this transform to a function inside this file to be reused by different methods
    return products.map((productDto): Product => ({
      id: productDto.product_id,
      title: productDto.title,
      price: Number(productDto.price)
    }))
  }
}
