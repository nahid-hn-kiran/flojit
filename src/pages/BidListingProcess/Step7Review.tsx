import Button from "@/components/shared/Button";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Step7Review = ({ control, getValues, onPrev, onSubmit }) => {
  const values = getValues();
  return (
    <div>
      <h2 className="text-3xl font-bold text-heading">Review Your Listing</h2>
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="font-bold text-lg text-heading">Item Details</h3>
          <p className="text-body mt-2">
            <span className="font-semibold text-heading">Category: </span>
            {values.category}
          </p>
        </div>
        <div>
          <Label className="font-bold text-lg text-heading">
            Listing Duration
          </Label>
          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5" id="r5" />
                  <Label htmlFor="r5">5 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="7" id="r7" />
                  <Label htmlFor="r7">7 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="14" id="r14" />
                  <Label htmlFor="r14">14 days</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div>
          <h3 className="font-bold text-lg text-heading">Auction Settings</h3>
          <p className="text-body mt-2">
            <span className="font-semibold text-heading">Starting Bid:</span> £
            {values.startingBid}
          </p>
          <p className="text-body">
            <span className="font-semibold text-heading">
              Listing Duration:
            </span>{" "}
            {values.duration} days
          </p>
          <p className="text-body">
            <span className="font-semibold text-heading">Upgrades:</span> None
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
          <p className="font-semibold text-heading">Total Listing Cost:</p>
          <p className="font-bold text-lg text-heading">
            £{values.listingCost?.toFixed(2) || "0.00"}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onPrev}>
          Previous
        </Button>
        <Button className="bg-accent hover:bg-accent/90" onClick={onSubmit}>
          Publish Listing
        </Button>
      </div>
    </div>
  );
};

export default Step7Review;
