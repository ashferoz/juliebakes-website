import { sampleProducts } from './data'

function App() {
  return (
    <div className="h-screen p-10 text-center">
      <header>Julie Bakes</header>
      <main>
        <ul className='flex justify-between'>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img src={product.image} alt={product.name} className='w-80'/>
              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved</footer>
    </div>
  )
}

export default App
