import { FaStar ,FaUser} from "react-icons/fa";
const Card = () => {
  return (
    <div class="relative w-full max-w-[400px] min-w-[280px] h-auto rounded-xl border-2 border-white bg-white m-2 p-[50px] pt-[60px] md:pt-[60px] flex flex-col gap-10 sm:gap-5 shadow-[.5px_.5px_0_.5px_#1E1E1E]   hover:shadow-[4px_4px_0_3px_#1E1E1E] transition-shadow duration-300 ease-in-out">
      <div className="absolute -top-6  -translate-x-1/2 bg-white p-3 rounded-full shadow-md border border-gray-200  ">
        <FaUser className="text-2xl text-indigo-500" />
      </div>
  <h2 class="text-2xl sm:text-3xl font-bold text-gray-800">Card Title</h2>
  <p class="text-base sm:text-lg text-gray-600">This is some example content that would appear in the card. On mobile devices, the text size adjusts automatically.</p>
  
</div>
  );
};

export default Card;
