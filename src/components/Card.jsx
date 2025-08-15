import { FaStar, FaUser } from "react-icons/fa";

const Card = () => {
  return (
    <div className="relative w-full max-w-[400px] min-w-[250px] sm:min-w-[280px] rounded-xl border-2 border-white bg-white m-2 p-6 sm:p-8 pt-12 sm:pt-16 flex flex-col gap-6 sm:gap-8 shadow-[.5px_.5px_0_.5px_#1E1E1E] hover:shadow-[4px_4px_0_3px_#1E1E1E] transition-shadow duration-300 ease-in-out">
      
      {/* Icon container */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-3 sm:p-4 rounded-full shadow-md border border-gray-200">
        <FaUser className="text-xl sm:text-2xl text-indigo-500" />
      </div>

      {/* Card Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center">
        Card Title
      </h2>

      {/* Card Text */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        This is some example content that would appear in the card. On mobile devices, the text size adjusts automatically.
      </p>
    </div>
  );
};

export default Card;
