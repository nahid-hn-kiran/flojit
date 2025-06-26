import ListingItem from "@/components/shared/ListingItem/ListingItem";
import MainLayout from "@/layouts/MainLayout";

const myListingsData = [
  {
    id: 1,
    title: "High-End Gaming PC",
    price: "5.00",
    status: "review",
    imageUrl: "https://placehold.co/100x100/fdeace/303030?text=PC+1",
  },
  {
    id: 2,
    title: "High-End Gaming PC",
    price: "5.00",
    status: "live",
    imageUrl: "https://placehold.co/100x100/e0f2f1/303030?text=PC+2",
  },
  {
    id: 3,
    title: "High-End Gaming PC",
    price: "5.00",
    status: "live",
    imageUrl: "https://placehold.co/100x100/e0f2f1/303030?text=PC+3",
  },
  {
    id: 4,
    title: "High-End Gaming PC",
    price: "5.00",
    status: "live",
    imageUrl: "https://placehold.co/100x100/e0f2f1/303030?text=PC+4",
  },
  {
    id: 5,
    title: "High-End Gaming PC",
    price: "5.00",
    status: "sold",
    imageUrl: "https://placehold.co/100x100/eeeeee/303030?text=PC+5",
  },
  {
    id: 6,
    title: "High-End Gaming PC",
    price: "5.00",
    status: "sold",
    imageUrl: "https://placehold.co/100x100/eeeeee/303030?text=PC+6",
  },
];

const MyListings = () => {
  return (
    <MainLayout>
      <div className="py-20">
        <div className="container">
          {/* Optional: Add a page title if needed */}
          {/* <h1 className="text-4xl font-bold text-heading mb-8">My Listings</h1> */}

          <div className="space-y-4">
            {myListingsData.map((item) => (
              <ListingItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MyListings;
