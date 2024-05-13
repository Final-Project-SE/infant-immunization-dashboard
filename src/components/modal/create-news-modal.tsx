import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CreateNewsModal({ open, onOpenChange, onCreate }: { open: boolean, onOpenChange: (isOpen: boolean) => void, onCreate: (data: { title: string, description: string, attachments: File | null}) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState<File | null>(null);

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setAttachments(file);
  };

  const handleSubmit = () => {
    if (title && description && attachments) {
      onCreate({ title, description, attachments });
      handleClose();
    } else {
      console.error("All fields are required.");
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Post News</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] ">
        <DialogHeader>
          <DialogTitle>Post News</DialogTitle>
          <DialogDescription>
            Post a new news item. Enter the required details and click Post to create the news.
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
            <Label htmlFor="imageFile" className="text-left">
              Image File
            </Label>
            <Input type="file" onChange={handleImageChange} />
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Post
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateNewsModal;