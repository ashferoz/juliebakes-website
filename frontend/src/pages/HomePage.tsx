import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'

export default function HomePage() {
  return (
    <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
      {sampleProducts.map((product) => (
        <li key={product.slug} className="flex flex-col items-center">
          <Link to={'/product/' + product.slug}>
          <img src={product.image} alt={product.name} className="" />
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          </Link>
          
        </li>
      ))}
    </ul>
  )
}
