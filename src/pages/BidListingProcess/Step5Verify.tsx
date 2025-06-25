import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil } from "lucide-react";

const Step5Verify = ({ control, onNext, onPrev }) => (
  <div>
    <h2 className="text-3xl font-bold text-heading">Verify Contact Details</h2>
    <p className="text-body mt-1">
      You must confirm your email and phone number before listing an item.
    </p>
    <div className="mt-6 space-y-4">
      <div className="relative">
        <Label>Phone Number:</Label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input className="pr-10" disabled {...field} />
          )}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-6 h-8 w-8"
        >
          <Pencil size={16} />
        </Button>
      </div>
      <div className="relative">
        <Label>Email:</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input className="pr-10" disabled {...field} />
          )}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-6 h-8 w-8"
        >
          <Pencil size={16} />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Controller
          name="contactCorrect"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="c1"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <Label htmlFor="c1">I agree the contact information is correct.</Label>
      </div>
    </div>
    <p className="text-xs text-body mt-4">
      All listing fees are non-refundable. Featured items appear on the homepage
      and category top.
    </p>
    <div className="flex justify-between mt-8">
      <Button variant="outline" onClick={onPrev}>
        Previous
      </Button>
      <Button onClick={onNext}>Next: Item Details</Button>
    </div>
  </div>
);

export default Step5Verify;
