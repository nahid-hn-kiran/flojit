// --- Stepper Component ---
const STEPS = [
  { number: 1, title: "Start" },
  { number: 2, title: "Photos" },
  { number: 3, title: "Details" },
  { number: 4, title: "Pricing" },
  { number: 5, title: "Verify" },
  { number: 6, title: "Terms" },
  { number: 7, title: "Publish" },
];

const Stepper = ({ currentStep }) => (
  <div className="flex justify-between items-center mb-10">
    {STEPS.map(({ number, title }) => {
      const isActive = currentStep === number;
      const isCompleted = currentStep > number;
      return (
        <div key={number} className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300
              ${isActive ? "bg-flogit-orange text-white" : ""}
              ${isCompleted ? "bg-gray-200 text-body" : ""}
              ${
                !isActive && !isCompleted
                  ? "border-2 border-gray-300 text-body"
                  : ""
              }
            `}
          >
            {number}
          </div>
          <p
            className={`mt-2 text-sm font-semibold ${
              isActive ? "text-flogit-dark" : "text-body"
            }`}
          >
            {title}
          </p>
        </div>
      );
    })}
  </div>
);

export default Stepper;
