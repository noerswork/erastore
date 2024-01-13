import { data } from '@/utils/data'
import Image from 'next/image'

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
                    alt={0}
                />
            </div>
            <div className='product-info w-[100%] lg:w-[50%] flex flex-col'>
                <div className="text-black text-5xl font-bold">{product.name}</div>
                <div className="text-zinc-800 text-sm font-medium">{product.category}</div>
                <div className="text-black text-2xl font-semibold">${product.price}</div>
                <div className="w-full lg:w-[528px] mt-[32px]"><span className="text-gray-600 text-sm font-medium leading-normal">
                    {product.description}
                </span></div>
                <button className="mt-[32px] w-full h-[50px] px-9 py-4 bg-[#ffcbd1] rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <div className="text-base font-medium">Buy Now</div>
                </button>
            </div>
        </div>
    )
}