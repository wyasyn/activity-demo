function StepThree({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <label className="block mb-2">Password:</label>
      <input
        type="password"
        className="border p-2 w-full mb-4"
        placeholder="••••••••"
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
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default StepThree;
