import { useState } from "react";
import { useForm } from "react-hook-form";
import Step1Start from "./Step1Start";
import Step2Photos from "./Step2Photos";
import Step3Details from "./Step3Details";
import Step4Pricing from "./Step4Pricing";
import Step5Verify from "./Step5Verify";
import Step6Terms from "./Step6Terms";
import Step7Review from "./Step7Review";
import Stepper from "./Stepper";
import MainLayout from "@/layouts/MainLayout";

const BidListingProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { control, handleSubmit, getValues, watch, setValue } = useForm({
    defaultValues: {
      photos: [],
      itemTitle: "",
      description: "",
      category: "jersey",
      startingBid: "5.00",
      duration: "7",
      reservePrice: false,
      buyItNow: false,
      startingBoost: false,
      featuredListing: true,
      listingCost: 0,
      phone: "+1 (555) 123-4567",
      email: "info@gmail.com",
      contactCorrect: true,
      agreeTerms: true,
    },
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const processSubmit = (data) => {
    console.log("Final Listing Data:", data);
    // API call to publish listing would go here
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Start onNext={nextStep} />;
      case 2:
        return (
          <Step2Photos control={control} onNext={nextStep} onPrev={prevStep} />
        );
      case 3:
        return (
          <Step3Details control={control} onNext={nextStep} onPrev={prevStep} />
        );
      case 4:
        return (
          <Step4Pricing
            control={control}
            watch={watch}
            setValue={setValue}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <Step5Verify control={control} onNext={nextStep} onPrev={prevStep} />
        );
      case 6:
        return (
          <Step6Terms control={control} onNext={nextStep} onPrev={prevStep} />
        );
      case 7:
        return (
          <Step7Review
            control={control}
            getValues={getValues}
            onPrev={prevStep}
            onSubmit={handleSubmit(processSubmit)}
          />
        );
      default:
        return <Step1Start onNext={nextStep} />;
    }
  };

  return (
    <MainLayout>
      <div className="bg-surface py-12">
        <div className="container">
          <Stepper currentStep={currentStep} />
          <div className="card shadow-card-shadow p-8 md:p-10 bg-flogit-blurOrange rounded-sm">
            {renderStep()}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BidListingProcess;
