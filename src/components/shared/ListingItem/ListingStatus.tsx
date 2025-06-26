const ListingStatus = ({ status }) => {
  const statusStyles = {
    review: "text-flogit-orange",
    live: "text-green-600",
    sold: "text-body",
  };
  const statusText = {
    review: "Review for admin",
    live: "Live",
    sold: "Sold",
  };

  return (
    <span className={`font-semibold ${statusStyles[status] || "text-body"}`}>
      {statusText[status] || "Unknown"}
    </span>
  );
};

export default ListingStatus;
