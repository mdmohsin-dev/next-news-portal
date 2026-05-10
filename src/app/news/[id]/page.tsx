import { fetchNews } from "@/lib/FetchNews";
import { NewsItem } from "@/types/news";
import Image from "next/image";

type NewsDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

const Page = async ({ params }: NewsDetailsProps) => {

  const { id } = await params;


  const news: NewsItem[] = await fetchNews()

  const singleNews = news.find(
    item => item._id === id
  );

  if (!singleNews) {
    return <h1>News not found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-[#F1F5F9] p-4 rounded-md mt-10 dark:text-black">
      <div>
        <Image src={singleNews.imageUrl} width={500} height={500} alt="newImage" className="w-full rounded-md" />
        <div className="mt-7">
          <h3 className="text-2xl font-bold pt-5">{singleNews.title}</h3>
          <div className="pt-5 flex justify-between">
            <p>{new Date(singleNews.published_at).toLocaleString()}</p>
            <p>Source:{singleNews.source}</p>
          </div>
          <p className="pt-5">{singleNews.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;