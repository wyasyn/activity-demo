function StepOne({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <label className="block mb-2">Name:</label>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="John Doe"
      />
      <button
        type="button"
        onClick={onNext}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default StepOne;
