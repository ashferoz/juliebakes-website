import { ShoppingCartIcon } from 'lucide-react'
import { Outlet } from 'react-router-dom'

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
              className="bg-[#A03221] text-white flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#ad3f2e]"
            >
              <span>Cart (0)</span>
              <ShoppingCartIcon />
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col h-min-screen mx-12 my-10">
        <div>
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  )
}

export default App
