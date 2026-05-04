import Link from 'next/link'
import { Package, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Package className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">ShopHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your premium destination for quality products at unbeatable prices. 
              Shop with confidence knowing we prioritize customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">Products</Link></li>
              <li><Link href="/cart" className="hover:text-primary-400 transition-colors">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/products?category=electronics" className="hover:text-primary-400 transition-colors">Electronics</Link></li>
              <li><Link href="/products?category=clothing" className="hover:text-primary-400 transition-colors">Clothing</Link></li>
              <li><Link href="/products?category=accessories" className="hover:text-primary-400 transition-colors">Accessories</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}