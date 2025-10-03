import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function MultiStepFormNoActivity() {
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Signup Form with no activity</h2>

      {(() => {
        switch (step) {
          case 1:
            return <StepOne onNext={() => setStep(2)} />;
          case 2:
            return (
              <StepTwo onNext={() => setStep(3)} onBack={() => setStep(1)} />
            );
          case 3:
            return <StepThree onBack={() => setStep(2)} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
