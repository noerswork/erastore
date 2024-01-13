import Image from 'next/image'
import Link from 'next/link'

export default function Product({item}){
    return(
        <div className='w-[300px] h-[400px] flex-col justify-start items-start gap-3'>
            <Link href={`product/${item.id}`}>
            <Image
                src={item.imageUrl}
                width={300}
                height={300}
                alt={item.name}
                className="rounded-xl shadow object-cover"
            />
            <div className="flex-col justify-start items-start gap-[7px] flex">
                <div className="text-stone-900 text-lg font-medium">{item.name}</div>
                <div className="text-stone-900 text-opacity-50 text-lg font-medium">${item.price}</div>
            </div>
            </Link>
        </div>
    )
}
