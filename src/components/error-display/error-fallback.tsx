import { Button } from "../ui/button";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <>
      <div className="h-screen bg-gray-50 flex items-center justify-center p-12">
        <div className="bg-white border border-gray-100 rounded-md p-12 w-96 text-center">
          <h1>Something went wrong 🧐</h1>
          <p className="text-gray-500 mb-20">{error.message}</p>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </div>
      </div>
    </>
  );
}

export default ErrorFallback;
