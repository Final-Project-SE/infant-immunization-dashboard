import  { useState, useEffect } from 'react';
import { News as NewsType } from '@/utils/types/component';
import { createNews, deleteNews, getAllNews, getSingleNews, updateNews } from '@/api/news/useNews';

function NewsPage() {
  const [news, setNews] = useState<NewsType[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsType | null>(null);
  const [newNews, setNewNews] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchNews = async () => {
      const allNews = await getAllNews();
      setNews(allNews);
    };

    fetchNews();
  }, []);

  const handleNewsSelect = async (id: string | number) => {
    const news = await getSingleNews(id);
    setSelectedNews(news);
  };

  const handleNewsCreate = async () => {
    const createdNews = await createNews(newNews);
    setNews([...news, createdNews]);
    setNewNews({ title: '', description: '' }); // reset form
  };

  const handleNewsUpdate = async (updatedNews: NewsType) => {
    await updateNews(updatedNews.id, updatedNews);
    setNews(news.map(n => n.id === updatedNews.id ? updatedNews : n));
  };

  const handleNewsDelete = async (id: string | number) => {
    await deleteNews(id);
    setNews(news.filter(n => n.id !== id));
  };

  return (
    <div>
      <h1>News</h1>
      {news.map((newsItem) => (
        <div key={newsItem.id}>
          <h2>{newsItem.title}</h2>
          <p>{newsItem.description}</p>
          <button onClick={() => handleNewsSelect(newsItem.id)}>Select</button>
          <button onClick={() => handleNewsUpdate(newsItem)}>Update</button>
          <button onClick={() => handleNewsDelete(newsItem.id)}>Delete</button>
        </div>
      ))}
      <div>
        <h2>Create News</h2>
        <input
          type="text"
          value={newNews.title}
          onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          value={newNews.description}
          onChange={(e) => setNewNews({ ...newNews, description: e.target.value })}
          placeholder="Description"
        />
        <button onClick={handleNewsCreate}>Create</button>
      </div>
      {selectedNews && (
        <div>
          <h2>Selected News</h2>
          <h3>{selectedNews.title}</h3>
          <p>{selectedNews.description}</p>
        </div>
      )}
    </div>
  );
}

export default NewsPage;