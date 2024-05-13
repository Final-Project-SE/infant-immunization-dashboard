import { useState } from "react";
import { useGetAllNews, useCreateNews, useDeleteNews } from "@/hooks/api/news";
import PageHeader from "@/components/header/page-header";
import { Spinner } from "@/components/ui";
import ErrorMessage from "@/components/error-display/error-message";
import Empty from "@/components/error-display/empty";
import { MdDelete } from "react-icons/md";
import CreateNewsModal from '@/components/modal/create-news-modal';

function News() {
  const { isPending, error, news } = useGetAllNews();
  const { create } = useCreateNews();
  
  const { remove: deleteNews } = useDeleteNews();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostNews = async ({ title, description, attachments }: { title: string, description: string, attachments: File | null }) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      if (attachments instanceof File) {
        formData.append("file", attachments, attachments.name); // changed "attachments" to "file"
      }
  
      // Log each entry in the FormData
      for (let pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }
  
      await create(formData);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteNews = async (id: number) => {
    await deleteNews(id);
  };

  if (isPending) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  if (!news || !news.length) return <Empty resourceName="news" />;

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="News" />
        
        <CreateNewsModal open={isModalOpen} onOpenChange={setIsModalOpen} onCreate={handlePostNews} />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {news.map((item: any) => (
  <div key={item.id} className="bg-white shadow rounded p-4">
    <img
      src={item.images[0]?.imageUrl}
      alt={item.titleAm}
      className="w-full h-64 object-cover rounded"
    />
    <h1 className="mt-4 text-lg font-bold">{item.titleAm}</h1>
    <p className="mt-2 text-gray-600">{item.descriptionAm.substring(0,20)}</p>
    <p className="mt-2 text-sm text-gray-500">
      Posted by: {item.writer ? item.writer.email : 'Unknown'}
    </p>
    <p className="mt-2 text-sm text-gray-500">
      Date: {new Date(item.createdAt).toLocaleDateString()}
    </p>
    <div className="flex items-center justify-center">
      <button onClick={() => handleDeleteNews(item.id)} title="Delete"><MdDelete/></button>
    </div>
  </div>
))}
      </div>
    </div>
  );
}

export default News;