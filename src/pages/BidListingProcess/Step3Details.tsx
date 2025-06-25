import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Step3Details = ({ control, onNext, onPrev }) => (
  <div>
    <h2 className="text-3xl font-bold text-heading">Item Details</h2>
    <form className="mt-6 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="itemTitle">Item Title</Label>
        <Controller
          name="itemTitle"
          control={control}
          render={({ field }) => (
            <Input
              id="itemTitle"
              placeholder="e.g. Vintage Leather Jacket"
              {...field}
            />
          )}
        />
        <p className="text-xs text-body">Max 100 characters</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              id="description"
              rows={5}
              placeholder="Describe your item in detail. Include condition, features, and any flaws."
              {...field}
            />
          )}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jacket">Vintage Leather Jacket</SelectItem>
                <SelectItem value="jersey">Gaming Jersey</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </form>
    <div className="flex justify-between mt-8">
      <Button variant="outline" onClick={onPrev}>
        Previous
      </Button>
      <Button onClick={onNext}>Next: Item Details</Button>
    </div>
  </div>
);

export default Step3Details;
