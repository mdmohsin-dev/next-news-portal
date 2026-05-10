import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { fetchNews } from "@/lib/FetchNews";
import { NewsItem } from "@/types/news";

const Home = async () => {

  
  const news:NewsItem[] = await fetchNews()

  return (
    <div>
      <Banner></Banner>

      <div className="mt-24">
        <h2 className="text-2xl">Latest news</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {
            news.slice(0,3).map((item: NewsItem) => <NewsCard key={item._id} item={item}></NewsCard>)
          }
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
}

export default Home
