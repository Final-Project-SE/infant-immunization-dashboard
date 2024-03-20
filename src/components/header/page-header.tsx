import { Link } from "react-router-dom";

const PageHeader = ({ pageName }: { pageName: string }) => {
  return (
    <div className="flex   bg-muted justify-between px-6  py-4  items-center w-full">
      <p className="uppercase font-semibold ">{pageName}</p>
      <p className="text-sm">
        <Link to="/">Home</Link>
        <span> / </span>
        <span className="text-primary capitalize "> {pageName}</span>
      </p>
    </div>
  );
};

export default PageHeader;
