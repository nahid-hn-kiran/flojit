import React, { useState, useCallback } from "react";
import { Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Step4Pricing = ({ control, watch, setValue, onNext, onPrev }) => {
  const watchUpgrades = watch([
    "reservePrice",
    "buyItNow",
    "startingBoost",
    "featuredListing",
  ]);
  const upgradeCosts = {
    reservePrice: 2,
    buyItNow: 1,
    startingBoost: 1,
    featuredListing: 5,
  };

  const totalCost = React.useMemo(() => {
    let cost = 0;
    if (watchUpgrades[0]) cost += upgradeCosts.reservePrice;
    if (watchUpgrades[1]) cost += upgradeCosts.buyItNow;
    if (watchUpgrades[2]) cost += upgradeCosts.startingBoost;
    if (watchUpgrades[3]) cost += upgradeCosts.featuredListing;
    setValue("listingCost", cost);
    return cost.toFixed(2);
  }, [watchUpgrades, setValue]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-heading">Set Your Price</h2>
      <div className="mt-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="startingBid">Starting Bid (£)</Label>
          <Controller
            name="startingBid"
            control={control}
            render={({ field }) => (
              <Input id="startingBid" placeholder="e.g. 5.00" {...field} />
            )}
          />
          <p className="text-xs text-body">Minimum starting bid: £0.99</p>
        </div>
        <div>
          <Label>Listing Duration</Label>
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
                  <RadioGroupItem value="5" id="d5" />
                  <Label htmlFor="d5">5 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="7" id="d7" />
                  <Label htmlFor="d7">7 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="14" id="d14" />
                  <Label htmlFor="d14">14 days</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div>
          <Label>Optional Upgrades</Label>
          <div className="space-y-3 mt-2">
            <div className="flex items-center space-x-2">
              <Controller
                name="reservePrice"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="up1"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="up1">Reserve Price - £2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                name="buyItNow"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="up2"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="up2">Buy It Now - £1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                name="startingBoost"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="up3"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="up3">Starting Bid Boost - £1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                name="featuredListing"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="up4"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="up4">Featured Listing - £5</Label>
            </div>
          </div>
        </div>
        <p className="text-xs text-body">
          All listing fees are non-refundable. Featured items appear on the
          homepage and category top.
        </p>
        <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
          <p className="font-semibold text-heading">Total Listing Cost:</p>
          <p className="font-bold text-lg text-heading">£{totalCost}</p>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onPrev}>
          Previous
        </Button>
        <Button onClick={onNext}>Next: Item Details</Button>
      </div>
    </div>
  );
};

export default Step4Pricing;
