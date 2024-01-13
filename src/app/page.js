import Product from '@/components/Product';
import { data } from '@/utils/data'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const { items } = data;
  return (
      <div className='flex flex-col lg:flex-row'>
        <div className='w-[100%] lg:w-[30%] seemore-section flex flex-col justify-start items-start gap-3 inline-flex'>
          <div className='w-64 text-stone-900 text-[32px] font-bold'>Best Selling Products</div>
          <div className="w-[196px] text-stone-900 text-opacity-50 text-lg font-medium">Easiest way to keep tech savvy by buying your favorite products </div>
          <Link href={`search`}>
          <button className="w-[168px] h-[51px] px-6 py-3 bg-[#ffcbd1] rounded-lg justify-start items-center gap-2.5 inline-flex">
            <div className="text-stone-900 text-lg font-medium">See more &#8594;</div>
          </button>
          </Link>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap w-[100%] lg:w-[70%] mt-[20px] lg:mt-[0px] gap-3 '>
          {
            items.slice(0, 3).map((item) => (
              <Product item={item} key={item.id} />
            ))
          }
        </div>
      </div>
  )
}
