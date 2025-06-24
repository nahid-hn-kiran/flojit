import Button from "@/components/shared/Button";
import MainLayout from "@/layouts/MainLayout";

// --- MOCK DATA ---
// In a real application, this data would likely come from props or state.
const outbidData = {
  newBid: "853.00",
  currency: "£",
};

/**
 * A page component to notify the user they have been outbid on an item.
 * It provides clear actions for the user to either increase their bid
 * or browse other available auctions.
 */
const PaymentProcess02 = () => {
  return (
    <MainLayout>
      <div className="min-h-[60vh] w-full flex items-center justify-center py-20">
        <div className="container flex justify-center">
          {/* The main card holding the notification content. */}
          <div className="card w-full text-center px-8 py-14 space-y-6 shadow-card-shadow">
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-heading">
              Your bid of{" "}
              <span className="font-bold text-flogit-orange">
                {outbidData.currency}
                {outbidData.newBid}
              </span>{" "}
              has been placed
            </h1>

            {/* Subtitle with the new bid amount. */}
            <p className="text-xl md:text-2xl text-heading text-center">
              You will be notified if you are outbid
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row sm:flex-col items-center justify-center gap-4 pt-4">
              <Button size="lg">View My Bids</Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-flogit-dark"
              >
                Go Back to Auction
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentProcess02;
