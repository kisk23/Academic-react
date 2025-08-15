import Image from '../assets/Image.png';

const GallaryCard = ({ title, activeButton }) => {
  const isVisible = activeButton === "all" || activeButton === title;

  return (
    <section className={`${isVisible ? "flex" : "hidden"} relative flex-col md:flex-row w-full max-w-[1596px] md:h-[400px] mt-[50px] md:mt-[230px] mx-auto rounded-[12px] border-2 border-[#262626] px-6 md:px-[120px] py-[50px] md:py-[150px] gap-[20px] md:gap-[50px] bg-white shadow-[4px_4px_0_3px_#1E1E1E]`}>
      
      {/* Top border images */}
      <div className="absolute -top-[118px] left-0 w-full flex justify-around">
        <img src={Image} alt="Gallery" className="w-[290px] h-[260px] object-cover rounded-xl" />
        <img src={Image} alt="Gallery" className="w-[290px] h-[260px] object-cover rounded-xl" />
        <img src={Image} alt="Gallery" className="w-[290px] h-[260px] object-cover rounded-xl" />
        <img src={Image} alt="Gallery" className="w-[290px] h-[260px] object-cover rounded-xl" />
      </div>

      {/* Card content */}
      <div className="my-10 w-full">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-gray-600 text-2xl m-6">
          Our kindergarten school provides a nurturing and stimulating environment, 
          fostering a love for learning that lasts a lifetime. Join us as we embark.
        </p>
      </div>
    </section>
  );
};

export default GallaryCard;
