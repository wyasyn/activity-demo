import { Activity, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function MultiStepFormActivity() {
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Signup Form with Activity</h2>

      {/* Step 1 */}
      <Activity mode={step === 1 ? "visible" : "hidden"}>
        <StepOne onNext={() => setStep(2)} />
      </Activity>

      {/* Step 2 */}
      <Activity mode={step === 2 ? "visible" : "hidden"}>
        <StepTwo onNext={() => setStep(3)} onBack={() => setStep(1)} />
      </Activity>

      {/* Step 3 */}
      <Activity mode={step === 3 ? "visible" : "hidden"}>
        <StepThree onBack={() => setStep(2)} />
      </Activity>
    </div>
  );
}
