'use client';
import { useCart } from "@/context/CartContext";

export default function AddToCart({product}){
    const { addToCart } = useCart();
    return(
        <button onClick={() => addToCart(product)} className="mt-[32px] w-full h-[50px] px-9 py-4 bg-[#ffcbd1] rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-base font-medium">Buy Now</div>
        </button>
    )
}