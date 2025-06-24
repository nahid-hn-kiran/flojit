import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import MainLayout from "@/layouts/MainLayout";

// --- MOCK DATA & CALCULATIONS ---
// In a real application, this would come from an API.
const auctionResult = {
  finalPrice: 853.0,
  siteFeePercent: 0.06,
  stripeFeePercent: 0.02,
  charityFeePercent: 0.02,
  currency: "£",
};

/**
 * A component to render a single line item in the price breakdown.
 * @param {{label: string, value: number, currency: string, bold?: boolean}} props
 */
const PriceRow = ({ label, value, currency, bold = false }) => (
  <div
    className={`flex justify-between items-center py-2 ${
      bold ? "font-bold" : ""
    }`}
  >
    <p className="text-body">{label}</p>
    <p className="text-heading">
      {currency}
      {value.toFixed(2)}
    </p>
  </div>
);

/**
 * A page component to congratulate the user on winning an auction
 * and display a detailed breakdown of the final payment.
 */
const PaymentProcess03 = () => {
  const [includeCharity, setIncludeCharity] = useState(true);

  // Memoize calculations to avoid re-computing on every render
  const costs = useMemo(() => {
    const siteFee = auctionResult.finalPrice * auctionResult.siteFeePercent;
    const stripeFee = auctionResult.finalPrice * auctionResult.stripeFeePercent;
    const charityFee =
      auctionResult.finalPrice * auctionResult.charityFeePercent;

    let total = auctionResult.finalPrice + siteFee + stripeFee;
    if (includeCharity) {
      total += charityFee;
    }

    return { siteFee, stripeFee, charityFee, total };
  }, [includeCharity]);

  return (
    <MainLayout>
      <div className="min-h-[80vh] w-full flex items-center justify-center py-16">
        <style>{`.checkbox-accent[data-state="checked"] { background-color: var(--color-brand-orange); border-color: var(--color-brand-orange); color: white; }`}</style>
        <div className="container max-w-2xl">
          {/* Main Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-heading">
              Congratulations
            </h1>
            <p className="text-lg text-body mt-2">You won the auction!</p>
          </div>

          {/* Price Breakdown Section */}
          <div className="space-y-2">
            <PriceRow
              label="Final price"
              value={auctionResult.finalPrice}
              currency={auctionResult.currency}
            />
            <PriceRow
              label="6% to the site owner"
              value={costs.siteFee}
              currency={auctionResult.currency}
            />
            <PriceRow
              label="2% to cover stripe costs"
              value={costs.stripeFee}
              currency={auctionResult.currency}
            />
            <PriceRow
              label="2% charity (optional)"
              value={costs.charityFee}
              currency={auctionResult.currency}
            />

            <hr className="my-4 border-border-subtle" />

            <PriceRow
              label="Total paid"
              value={costs.total}
              currency={auctionResult.currency}
              bold={true}
            />
          </div>

          {/* Charity Opt-out Checkbox */}
          <div className="flex items-center space-x-2 mt-4">
            <Checkbox
              id="charity-opt-out"
              className="checkbox-accent"
              checked={!includeCharity}
              onCheckedChange={(checked) => setIncludeCharity(!checked)}
            />
            <Label
              htmlFor="charity-opt-out"
              className="text-sm text-body font-normal"
            >
              If you do not wish to contribute to this charity, please uncheck
              this option.
            </Label>
          </div>

          {/* Payment Due Notice Card */}
          <div className="card mt-12 space-y-4 p-8 shadow-card-shadow">
            <h2 className="text-xl font-semibold text-heading">
              Payment due notice
            </h2>
            <p className="text-4xl font-bold text-heading">
              {auctionResult.currency}
              {costs.total.toFixed(2)}
            </p>
            <p className="text-body leading-relaxed">
              Yourthel conmfarciee you gralotes andarystions, you your cacation
              of the detder you Congationtactise yon, 1 you the a paciation, you
              parsitis, the your toulineir for cangrent ther or conformation!
            </p>
            <div className="pt-2 text-center">
              <Button size="lg">Pay Now</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentProcess03;
