import StudentCard from "./StudentCard";

const Student = () => {
  return (
    <section className="flex flex-col items-center border border-indigo-600 w-full max-w-[1592px] h-auto md:h-[1082px] mt-[50px] md:mt-[230px] mx-auto rounded-[12px] px-6 md:px-[120px] pt-[50px] md:pt-0 pb-[50px] md:pb-[150px] gap-[20px] md:gap-[50px] bg-[#FFF5F0]">
      
      {/* Section Label */}
      <div className="w-[146px] md:h-[47px] rounded-[8px] border-2 border-[#262626] shadow-[.5px_.5px_0_1px_#1E1E1E] mx-auto text-center text-lg pt-2">
        Our Features
      </div>

      {/* Title */}
      <div className="w-full max-w-[765px] text-center">
        <h3 className="mt-1 text-2xl md:text-6xl font-bold Raleway text-[#262626]">
          What Students Learn
        </h3>
        <p className="mt-4 text-sm md:text-base Raleway text-[#262626]">
          Our kindergarten school provides a nurturing and stimulating environment, 
          fostering a love for learning that lasts a lifetime. Join us as we embark 
          on an exciting educational journey.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </section>
  );
};

export default Student;
