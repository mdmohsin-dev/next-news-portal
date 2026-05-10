import newsData from "@/data/db.json"

export const fetchNews = async () => {
    try {
        return newsData
    } catch (error) {
        console.log(`Error fetching news data ${error}`)
        return []
    }
}