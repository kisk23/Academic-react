import Card from "./Card";
const Feature = () => {
  return (
    <section className="relative flex flex-col items-center border border-indigo-600 w-full max-w-[1592px] h-auto md:h-[1082px] mt-[50px] md:mt-[230px] mx-auto rounded-[12px] px-6 md:px-[120px] pt-0 pb-[50px] md:pt-0 md:pb-[150px] gap-[20px] md:gap-[5px]bg-[#FFF5F0]">
      <div className="w-[146px] md:h-[47px] rounded-[8px] border-2 border-[#262626] shadow-[.5px_.5px_0_1px_#1E1E1E] mx-auto text-center text-lg pt-2">
        Our Features
      </div>

      <div className="w-full max-w-[765px]">
        <h3 className="mt-1  md:text-6xl font-bold Raleway text-[#262626] text-center">
          Our Spacial Features
        </h3>
        <p className="mt-4   Raleway text-[#262626] text-center">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational{" "}
        </p>
      </div>

      <div className="flex flex-wrap content-between gap-10 justify-center w-full max-w-[1592px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Feature;

// py-[50px] md:py-[150px] with pt-0 pb-[50px] md:pt-0 md:pb-[150px]
