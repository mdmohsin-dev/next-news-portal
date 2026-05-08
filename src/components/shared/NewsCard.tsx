import Link from 'next/link'
import cardImg from "../../assets/ai.jpg"
import Image from 'next/image'
import { Button } from '../ui/button'
import { NewsCardProps } from '@/types/news'

const NewsCard = ({ item }: NewsCardProps) => {
    const { _id, imageUrl, title, description } = item
    return (
        <div className='border p-4 rounded-md shadow-md flex flex-col justify-between'>
            <Link href={`/news/${_id}`}>
                <Image src={imageUrl} alt='news image' width={100} height={100} className='rounded-md md:h-56 w-full' />
            </Link>
            <div>
                <h2 className='text-xl font-semibold py-5'>{title.substring(0,65)}...</h2>
                <p className="pb-5">{description.substring(0,65)}...</p>
                <Link href={`/news/${_id}`}>
                    <Button variant="default">Read More</Button>
                </Link>
            </div>
        </div>
    )
}

export default NewsCard