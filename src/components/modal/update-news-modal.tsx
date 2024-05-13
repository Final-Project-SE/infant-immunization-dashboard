import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function UpdateNewsModal({ open, onOpenChange, onUpdate, news }: { open: boolean, onOpenChange: (isOpen: boolean) => void, onUpdate: (data: { title: string, description: string, imageUrl: string }) => void, news: { title: string, description: string, imageUrl: string } }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (news) {
      setTitle(news.title);
      setDescription(news.description);
      setImageUrl(news.imageUrl);
    }
  }, [news]);

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleSubmit = () => {
    onUpdate({ title, description, imageUrl });
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Update News</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] ">
        <DialogHeader>
          <DialogTitle>Update News</DialogTitle>
          <DialogDescription>
            Update a news item. Change the details and click Update to save the changes.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-left">
              Title
            </Label>
            <Input id="title" className="col-span-3" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-left">
              Description
            </Label>
            <textarea id="description" className="col-span-3 h-40" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="imageUrl" className="text-left">
              Image URL
            </Label>
            <Input id="imageUrl" className="col-span-3" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Update
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateNewsModal;