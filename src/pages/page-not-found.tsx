import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="h-screen dark:bg-[#111827] bg-[#f9fafb] flex items-center justify-center p-12">
      <div className="dark:bg-[#18212f] border dark:border-[#1f2937] rounded-md p-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold leading-tight mb-8">
          The page you are looking for could not be found
        </h1>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn-large"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
