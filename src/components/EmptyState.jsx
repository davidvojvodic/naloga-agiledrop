import { FaCircleXmark } from "react-icons/fa6";

const EmptyState = () => {
  return (
    <div className="relative col-span-full h-80 bg-gray-50 w-full p-12 flex flex-col items-center justify-center">
      <FaCircleXmark size={30} className="mb-4" />
      <h3 className="font-semibold text-xl">No movies found</h3>
      <p className="text-zinc-500 text-sm">
        There are no search results for these filters.
      </p>
    </div>
  );
};

export default EmptyState;
