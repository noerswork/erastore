import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='w-full flex justify-end my-10'>
        <Link href={`/`}>
        <div className='link-menu'>
            Home
        </div>
        </Link>
        <Link href={`/cart`}>
        <div className='link-menu ml-2'>
            Cart
        </div>
        </Link>
    </div>
  )
}
