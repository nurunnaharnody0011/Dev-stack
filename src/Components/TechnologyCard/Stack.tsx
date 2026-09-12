

const Stack = () => {
    return (
        <div>
            <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-bold text-[#0F172A]">
    Your Stack
  </h2>

  <p className="mt-1 text-sm text-gray-500">
    No technologies selected yet.
  </p>

  <div className="mt-6 flex min-h-[250px] items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50">
    <p className="text-sm text-gray-400">
      Your stack is empty
    </p>
  </div>
</div>
        </div>
    );
};

export default Stack;