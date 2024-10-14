import { ShoppingCartIcon } from 'lucide-react'
import { sampleProducts } from './data'

function App() {
  return (
    <div className="">
      <header className="bg-slate-100 px-10 py-2">
        <nav className="flex justify-between items-center mx-auto">
          <div>
            <img src="logo/logoipsum-284.svg" alt="" />
          </div>
          <div>
            <ul className="flex items-center gap-[4vw]">
              <li>
                <a className="hover:text-gray-500" href="/menu">
                  Menu
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="/faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <a
              href="/cart"
              className="bg-[#ff8686] flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#ff9d9d]"
            >
              <span>Cart (0)</span>
              <ShoppingCartIcon />
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col h-min-screen mx-12 my-10">
        <div className="">
          <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
            {sampleProducts.map((product) => (
              <li key={product.slug} className="flex flex-col items-center">
                <img src={product.image} alt={product.name} className="" />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  )
}

export default App
