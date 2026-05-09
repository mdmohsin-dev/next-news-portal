'use client'

import { fetchNews } from "@/lib/FetchNews"
import { NewsItem } from "@/types/news"
import { useEffect, useState } from "react"
import NewsCard from "../shared/NewsCard"
import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"

const NewsList = () => {
    const [allNews, setAllNews] = useState<NewsItem[]>([])
    const [news, setNews] = useState<NewsItem[]>([])
    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<string>("")

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchNews()
            setNews(data)
            setAllNews(data)
        }
        getNews()
    }, [])


    useEffect(() => {
        let filtered = allNews;

        if (search) {
            filtered = filtered.filter((item) => {
                return item.title.toLowerCase().includes(search.toLocaleLowerCase())
            })
        }

        if (category && category !== 'all') {
            filtered = filtered.filter(item =>
                item.categories.includes(category)
            )
        }

        setNews(filtered)
    }, [search, category, allNews])
    return (
        <div>
            <div className="w-full flex justify-between mt-4">
                <SearchBar onSearch={setSearch} />
                <CategoryFilter onCategoryFilter={setCategory} />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-6">
                {news.map(item => <NewsCard key={item._id} item={item}></NewsCard>)}
            </div>
        </div>
    )
}

export default NewsList