export const formatDate = (inputDate: Date) => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).format(inputDate);

  return formattedDate.replace(/(\d) /, " $1 "); // Add leading zero for single-digit days
};

export const formatTime = (inputDate: Date) => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "numeric",
    month: "short",
    day: "numeric",
  }).format(inputDate);

  return formattedDate.replace(/(\d) /, " $1 "); // Add leading zero for single-digit days
};
