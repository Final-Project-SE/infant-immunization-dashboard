import PageHeader from "@/components/header/page-header";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import useNews from "@/api/useNews";
import type {News}  from "@/utils/types/component";

function News() {
  const { isFetching, error, data: news } = useNews();

  if (isFetching) return <Spinner />;

  if (error) return <Empty resourceName="news" />;

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="News" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        {news.map((newsItem: News) => (
          <div key={newsItem.id}>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
            <img src={newsItem.imageUrl} alt={newsItem.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;