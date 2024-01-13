'use client';
import { useCart } from "@/context/CartContext";
import Image from 'next/image'

export default function ProductCart(){
    const { cart, removeFromCart, incrementProduct, decrementProduct } = useCart();

    return(
        <>
        {
        cart && cart.map((item) => (
        <div className="w-full flex py-10 gap-3 border-b-4" key={item.product.id}>
            <div className="product-image">
                <Image
                    src={item.product.imageUrl}
                    width={200}
                    height={200}
                    alt={item.product.name}
                    className="rounded-xl object-cover"
                />
            </div>
            <div className="product-info flex flex-col w-full">
                <div class="text-stone-900 text-lg font-medium">{item.product.name}</div>
                <div class="text-stone-900 text-opacity-50 text-lg font-medium">{item.product.category}</div>
                <div class="text-stone-900 text-sm font-medium mb-2">Qty:</div>
                <div className="flex">
                    <button className="px-4 py-2 h-10 bg-[#ffcbd1] rounded-lg justify-center items-center" onClick={() => item.quantity == 1 ? removeFromCart(item.product.id) : decrementProduct(item.product.id)}>
                    -
                    </button>
                    <input className="w-[40px] mx-2 text-center outline-none text-stone-900 text-opacity-50 text-lg font-medium" value={item.quantity} disabled></input>
                    <button className="px-4 py-2 h-10 bg-[#ffcbd1] rounded-lg justify-center items-center" onClick={() => incrementProduct(item.product.id)}>
                    +
                    </button>
                </div>
                <div class="mt-2 text-stone-900 text-lg font-bold">${item.product.price*item.quantity}</div>
            </div>
            <div className="product-remove flex justify-end">
                <button className="px-4 py-2 h-10 bg-[#ffcbd1] rounded-lg justify-center items-center" onClick={() => removeFromCart(item.product.id)}>
                    x
                </button>
            </div>
        </div>
        ))
    }
        </>
    )    
}