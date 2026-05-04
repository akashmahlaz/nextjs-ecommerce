import Link from 'next/link'
import { ShoppingCart, Package, Home } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">ShopHub</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link 
              href="/products" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Package className="h-5 w-5" />
              <span>Products</span>
            </Link>

            <Link 
              href="/cart" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}