import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { CartProvider } from '@/context/CartContext'

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Erastore',
  description: 'Buy your dream gadgets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <CartProvider>
        <div className="min-h-screen px-14 md:px-24 py-10 bg-gradient-to-r from-rose-100 to-teal-100">
          <Navbar />
          {children}
        </div>
        </CartProvider>
      </body>
    </html>
  )
}
