'use client';
import { useCart } from "@/context/CartContext";
import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  const { cart } = useCart();
  return (
    <div className='w-full flex justify-end my-10'>
        <Link href={`/`}>
        <div className='link-menu text-stone-900'>
            Home
        </div>
        </Link>
        <Link href={`/cart`}>
        <div className='link-menu text-stone-900 ml-2'>
            Cart <span className="text-[#e63f66]">{cart ?`(${cart.length})` : ''}</span>
        </div>
        </Link>
    </div>
  )
}
