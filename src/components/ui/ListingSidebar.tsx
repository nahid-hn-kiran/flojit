import React from "react";
import { Search, ChevronDown } from "lucide-react";

// Import all the necessary Shadcn UI components
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

/**
 * A sidebar component for filtering listings.
 * It uses shadcn/ui components and is styled with Tailwind CSS,
 * automatically adopting the theme from your global CSS.
 */
const ListingsSidebar = () => {
  // State for the slider value
  const [priceRange, setPriceRange] = React.useState([120]);

  // An array for the "Sort by" options for easy rendering
  const sortOptions = [
    { id: "ending-soon", label: "Ending Soon", checked: true },
    { id: "newest", label: "Newest", checked: false },
    { id: "low-price", label: "Lowel Price", checked: false }, // Typo "Lowel" matches the image
    { id: "high-price", label: "Highst Price", checked: false }, // Typo "Highst" matches the image
  ];

  return (
    // The main container for the sidebar
    <aside className="w-full max-w-xs p-6 space-y-8 rounded-lg">
      <div className="space-y-4">
        {/* Main Title */}
        <h2 className="text-4xl font-bold text-heading">All Listings</h2>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute w-5 h-5 text-body left-3 top-1/2 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-10" // Add padding for the icon
          />
        </div>
      </div>

      <hr className="border-border-subtle/60" />

      {/* Category Section */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-heading">Category</h3>
        <Select defaultValue="toys-games">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="toys-games">Toys & Games</SelectItem>
            <SelectItem value="apparel">Apparel</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="collectibles">Collectibles</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Size Range Section */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-heading">Size Range</h3>
        <ToggleGroup
          type="single"
          defaultValue="x"
          variant="outline"
          className="justify-start gap-2"
        >
          {/* Note: The orange color for the selected item comes from the `accent` color in your theme */}
          <ToggleGroupItem value="x" aria-label="Toggle X">
            X
          </ToggleGroupItem>
          <ToggleGroupItem value="l" aria-label="Toggle L">
            L
          </ToggleGroupItem>
          <ToggleGroupItem value="xl" aria-label="Toggle XL">
            XL
          </ToggleGroupItem>
          <ToggleGroupItem value="xxl" aria-label="Toggle XXL">
            XXL
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Price Range Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-heading">Price Range</h3>
        {/* The slider track color is your theme's `accent` color */}
        <Slider
          defaultValue={[120]}
          max={200}
          step={1}
          onValueChange={(value) => setPriceRange(value)}
        />
        <div className="flex items-center justify-between text-sm text-body">
          <span>$20</span>
          <span>${priceRange[0]}</span>
        </div>
      </div>

      {/* Sort By Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-heading">Sort by</h3>
        <div className="space-y-3">
          {sortOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-3">
              <Checkbox
                id={option.id}
                defaultChecked={option.checked}
                aria-label={option.label}
              />
              <Label
                htmlFor={option.id}
                className="text-base font-medium text-body"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ListingsSidebar;
