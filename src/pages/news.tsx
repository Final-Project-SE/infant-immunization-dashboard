import { useState } from "react";
import { useGetAllNews, useCreateNews, useUpdateNews } from "@/hooks/api/news";
import PageHeader from "@/components/header/page-header";
import { News as NewsType } from "@/utils/types/component";
import { Spinner } from "@/components/ui";
import ErrorMessage from "@/components/error-display/error-message";
import Empty from "@/components/error-display/empty";

function News() {
  const { isPending, error, news } = useGetAllNews();
  const { create } = useCreateNews();
  const { update } = useUpdateNews();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");

  const [editId, setEditId] = useState<number | null>(null);
  const handlePostNews = () => {
    create({ 
      id: 1, 
      user: { 
        id: 1, 
        email: 'email@example.com', 
        phone: '123-456-7890', 
        role: 'role', 
        otp: '123456', 
        activeStatus: 'active', 
        createdDate: new Date() 
      }, 
      createdDate: new Date(), 
      title, 
      description, 
      imageUrl 
    });
    setTitle("");
    setDescription("");
    setImageUrl("");
  };
  
  const handleUpdateNews = () => {
    if (editId && news) {
      const newsToUpdate = news.find(item => item.id === editId);
      if (newsToUpdate) {
        update(newsToUpdate);
        setEditId(null);
        setEditTitle("");
        setEditDescription("");
        setEditImageUrl("");
      }
    }
  };

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
            <button onClick={() => { setEditId(item.id); setEditTitle(item.title); setEditDescription(item.description); setEditImageUrl(item.imageUrl); }}>Edit</button>
          </div>
        ))}
      </div>
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <h2>Post News</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
        <button onClick={handlePostNews}>Post</button>
      </div>
      {editId && (
        <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
          <h2>Edit News</h2>
          <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Title" />
          <input type="text" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} placeholder="Description" />
          <input type="text" value={editImageUrl} onChange={(e) => setEditImageUrl(e.target.value)} placeholder="Image URL" />
          <button onClick={handleUpdateNews}>Update</button>
        </div>
      )}
    </div>
  );
}

export default News;