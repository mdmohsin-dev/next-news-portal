'use client'

import { fetchNews } from "@/lib/FetchNews"
import { NewsItem } from "@/types/news"
import { useEffect, useState } from "react"
import NewsCard from "../shared/NewsCard"
import { Input } from "../ui/input"

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([])
    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<string>("")

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchNews()
            setNews(data)
        }
        getNews()
    }, [])
    return (
        <div>
            <Input/>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {news.map(item => <NewsCard key={item._id} item={item}></NewsCard>)}
            </div>
        </div>
    )
}

export default NewsList