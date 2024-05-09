import { useGetAllNews } from "@/hooks/api/news";
import PageHeader from "@/components/header/page-header";
import { News as NewsType } from "@/utils/types/component";
import { Spinner } from "@/components/ui";
import ErrorMessage from "@/components/error-display/error-message";
import Empty from "@/components/error-display/empty";

function News() {
  const { isPending, error, news } = useGetAllNews();

  if (isPending) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  if (!news || !news.length) return <Empty resourceName="news" />;

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="News" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {news.map((item:NewsType) => (
          <div key={item.id} className="bg-white shadow rounded p-4">
            <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover rounded" />
            <h1 className="mt-4 text-lg font-bold">{item.title}</h1>
            <p className="mt-2 text-gray-600">{item.description}</p>
            <p className="mt-2 text-sm text-gray-500">Posted by: {item.user.email}</p>
            <p className="mt-2 text-sm text-gray-500">Date: {item.createdDate.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;