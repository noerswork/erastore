'use client'
import React, { useState } from 'react';
import { data } from '@/utils/data'
import Product from '@/components/Product';

export default function Search() {
    const [search, setSearch] = useState('');

    const { items } = data;

    const filteredProducts = items.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div className="w-full">
            <div className="search-wrapper w-full">
                <div className="w-[100%] lg:w-[50%] h-16 relative bg-white rounded-xl">
                    <input className="left-[18px] top-[18px] outline-none absolute text-stone-900 text-opacity-50 text-lg font-medium" placeholder="What are you looking for?"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap w-full mt-[80px] gap-3 '>
                {
                    filteredProducts.map((item) => (
                    <Product item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}