import Button from "@/components/shared/Button";

const Step1Start = ({ onNext }) => (
  <div className="py-10">
    <h2 className="text-3xl font-bold text-heading">List a New Item</h2>
    <p className="text-body mt-4 mx-auto">
      Start selling in just a few minutes. Follow the steps below to publish
      your listing.
    </p>
    <Button size="lg" className="mt-4" onClick={onNext}>
      Start Listing
    </Button>
  </div>
);

export default Step1Start;
