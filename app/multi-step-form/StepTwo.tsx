function StepTwo({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <label className="block mb-2">Email:</label>
      <input
        type="email"
        className="border p-2 w-full mb-4"
        placeholder="john@example.com"
      />
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
