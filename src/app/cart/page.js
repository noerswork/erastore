import ProductCart from "@/components/ProductCart"

export default function Cart() {
    return(
        <div className="product-cart-page">
            <div class="text-stone-900 text-[32px] font-bold">My Shopping Cart</div>
            <ProductCart />
        </div>
    )
}