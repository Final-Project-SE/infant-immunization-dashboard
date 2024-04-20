import { useToast } from "@/components/ui/use-toast";

function displayToastMesage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { toast } = useToast();

  return toast({
    title: title,
    description: description,
  });
}

export default displayToastMesage;
