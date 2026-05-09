export const fetchNews = async (category: string = "", search: string = "") => {
    try {
        const response = await fetch("/db.json")
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`Error fetching news data ${error}`)
        return []
    }
}