import Image from 'next/image'
import Link from 'next/link'

export default function Product({item}){
    return(
        <div className='hover:border-solid hover:border-2 hover:border-[#ffcbd1] w-[300px] h-[400px] rounded-xl p-4 bg-white flex flex-col gap-3 mt-4 justify-between' key={item.id}>
            <Link href={`product/${item.id}`}>
                <Image
                    src={item.imageUrl}
                    width={300}
                    height={300}
                    alt={item.name}
                    className="rounded-xl object-cover"
                />
            </Link>
            <div className="flex flex-col">
                <Link href={`product/${item.id}`}>
                <div className="text-stone-900 text-lg font-medium">{item.name}</div>
                </Link>
                <div className="mt-4 text-stone-900 text-opacity-50 text-lg font-medium">${item.price}</div>
            </div>
        </div>
    )
}
