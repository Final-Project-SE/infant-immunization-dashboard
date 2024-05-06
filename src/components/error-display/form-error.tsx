function InputError(error: any) {
  console.log(error?.error?.message);
  return <p className="text-red-500 px-6 py-3"> {error?.error?.message}</p>;
}

export default InputError;
