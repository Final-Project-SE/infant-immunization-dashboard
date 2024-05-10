import { useState } from "react";
import { useGetAllNews, useCreateNews, useUpdateNews, useDeleteNews } from "@/hooks/api/news";
import PageHeader from "@/components/header/page-header";
import { News as NewsType } from "@/utils/types/component";
import { Spinner } from "@/components/ui";
import ErrorMessage from "@/components/error-display/error-message";
import Empty from "@/components/error-display/empty";
import { MdEdit, MdDelete } from "react-icons/md";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core';

function News() {
  const { isPending, error, news } = useGetAllNews();
  const { create } = useCreateNews();
  const { update } = useUpdateNews();
  const { remove: deleteNews } = useDeleteNews();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handlePostNews = async () => {
    try {
      await create({
        id: 1,
        user: {
          id: 1,
          email: "email@example.com",
          phone: "123-456-7890",
          role: "role",
          otp: "123456",
          activeStatus: "active",
          createdDate: new Date(),
        },
        createdDate: new Date(),
        title,
        description,
        imageUrl,
      });
      setTitle("");
      setDescription("");
      setImageUrl("");
    } catch (error) {
      console.error(error);
    }
  };
  
  
  

  const handleDeleteNews = async (id: number) => {
    await deleteNews(id);
  };

  const handleEditNews = (newsItem: NewsType) => {
    setEditId(newsItem.id);
  };

  if (isPending) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  if (!news || !news.length) return <Empty resourceName="news" />;

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="News" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {news.map((item: any) => (
          <Card key={item.id} className="bg-white shadow rounded p-4">
            <CardActionArea>
              <CardMedia
                component="img"
                alt={item.titleAm}
                height="140"
                image={item.images[0]?.imageUrl}
                title={item.titleAm}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.titleAm}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.descriptionAm}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Posted by: {item.writer ? item.writer.email : 'Unknown'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Date: {new Date(item.createdAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton onClick={() => handleEditNews(item)} title="Edit">
                <MdEdit/>
              </IconButton>
              <IconButton onClick={() => handleDeleteNews(item.id)} title="Delete">
                <MdDelete/>
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <h2>Post News</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
        />
        <button onClick={handlePostNews}>Post</button>
      </div>
      
    </div>
  );
}

export default News;




