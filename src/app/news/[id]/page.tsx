import { NewsItem } from "@/types/news";
import Image from "next/image";

export const revalidate=60

export const dynamicParams = true;

export async function generateStaticParams() {
    const posts:NewsItem[]=await fetch('')
    .then(res =>res.json())
    return posts.map((post)=>({
        id:String(post._id),
    }))
}

const page = () => {
  return (
    <div>Nes details</div>
  )
}

export default page