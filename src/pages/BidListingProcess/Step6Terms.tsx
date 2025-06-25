import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Step6Terms = ({ control, onNext, onPrev }) => (
  <div>
    <h2 className="text-3xl font-bold text-heading">Seller Agreement</h2>
    <div className="mt-6 space-y-4">
      <div className="flex items-center space-x-2">
        <Controller
          name="agreeTerms"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="t1"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <Label htmlFor="t1">
          I agree to the Terms & Conditions and Listing Policy.
        </Label>
      </div>
      <p className="text-body">Listing fees will not be refunded.</p>
    </div>
    <div className="flex justify-between mt-8">
      <Button variant="outline" onClick={onPrev}>
        Previous
      </Button>
      <Button onClick={onNext}>Next: Item Details</Button>
    </div>
  </div>
);

export default Step6Terms;
