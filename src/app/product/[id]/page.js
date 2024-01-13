import { data } from '@/utils/data'
import Image from 'next/image'
import AddToCart from '@/components/AddToCart';

export default function ProductDetailPage({ params: { id } }) {
    // find matched item data
    const { items } = data;
    const product = items.find((item) => item.id == id);

    // handle if theres no matched item id
    if(!product) return <h1>Sorry, the product is no longer exist</h1>

    return(
        <div className='w-full flex flex-wrap lg:flex-nowrap gap-3'>
            <div className='product-image w-[100%] lg:w-[50%]'>
                <Image
                    src={product.imageUrl}
                    width={400}
                    height={400}
                    alt={product.name}
                    className='rounded-xl'
                />
            </div>
            <div className='product-info w-[100%] lg:w-[50%] flex flex-col'>
                <div className="text-black text-5xl font-bold">{product.name}</div>
                <div className="text-zinc-800 text-sm font-medium my-4">{product.category}
                {product.stock > 0 ? <span class="ml-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"> In Stock </span> : 
                <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Out Of Stock</span>
                }
                </div>
                <div className="text-black text-2xl font-semibold">${product.price}</div>
                <div className="w-full lg:w-[528px] mt-[32px]"><span className="text-gray-600 text-sm font-medium leading-normal">
                    {product.description}
                </span></div>
                <AddToCart product={product} />
            </div>
        </div>
    )
}