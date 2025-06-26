import { Link } from "react-router-dom";
import Button from "../Button";
import ListingStatus from "./ListingStatus";

const ListingItem = ({ item }) => (
  <div className="card flex items-center bg-flogit-blurOrange gap-4 p-4 transition-shadow duration-200 hover:shadow-md border border-flogit-orange rounded-md">
    <img
      src={item.imageUrl}
      alt={item.title}
      className="w-20 h-20 rounded-md object-cover flex-shrink-0"
      onError={(e) => {
        e.currentTarget.src = "https://placehold.co/100/eee/303030?text=Error";
      }}
    />
    <div className="flex-grow">
      <h3 className="text-lg font-bold text-heading">{item.title}</h3>
      <p className="text-body text-sm mt-1">
        Given Price:{" "}
        <span className="font-semibold text-flogit-orange">£{item.price}</span>
      </p>
      <p className="text-body text-sm">
        Status:{" "}
        <span className="text-flogit-orange">
          <ListingStatus status={item.status} />
        </span>
      </p>
    </div>
    <div className="flex-shrink-0">
      <Button variant="default">
        <Link to="/product-details">Preview</Link>
      </Button>
    </div>
  </div>
);

export default ListingItem;
