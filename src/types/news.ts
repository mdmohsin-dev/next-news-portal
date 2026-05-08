export interface NewsItem {
    categories: string[];
    description: string;
    imageUrl: string;
    language: string;
    published_at: string;
    relevance_score: number | null;
    snippet: string;
    source: string;
    title: string;
    url: string;
    _id: string;
}


export interface NewsCardProps {
    item: NewsItem
}