import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { biddingData } from "@/pages/BiddingPage/BiddingPage";

/**
 * The Bidding Form section of the page.
 */
const BiddingForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      biddingPrice: biddingData.nextBidSuggestion,
      maxBid: biddingData.maxBidSuggestion,
    },
  });

  const onSubmit = (data) => {
    console.log("Bid placed:", data);
    // Handle bid submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card flex flex-wrap items-center justify-between gap-8 p-6 mt-8"
    >
      {/* Current Bid */}
      <div className="flex flex-col">
        <span className="text-5xl font-bold text-heading text-flogit-orange">
          {biddingData.currency}
          {biddingData.currentBid}
        </span>
        <span className="text-body mt-1">Current bid</span>
      </div>

      {/* Time Remaining */}
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-heading text-flogit-orange">
          {biddingData.timeRemaining}
        </span>
        <span className="text-body mt-1">Time Remaining</span>
      </div>

      <div className="flex-grow flex flex-wrap items-end gap-4">
        {/* Bidding Price Input */}
        <div className="flex-grow space-y-2">
          <Label htmlFor="biddingPrice" className="text-body">
            Biding Price
          </Label>
          <Controller
            name="biddingPrice"
            control={control}
            render={({ field }) => (
              <Input id="biddingPrice" type="number" step="1" {...field} />
            )}
          />
        </div>

        {/* Max Bid Input */}
        <div className="flex-grow space-y-2">
          <Label htmlFor="maxBid" className="text-body">
            How much will to pay up
          </Label>
          <Controller
            name="maxBid"
            control={control}
            render={({ field }) => (
              <Input id="maxBid" type="number" step="1" {...field} />
            )}
          />
        </div>

        {/* Place Bid Button */}
        <Button type="submit" className="flex-shrink-0 h-10">
          Place Bid
        </Button>
      </div>
    </form>
  );
};

export default BiddingForm;
