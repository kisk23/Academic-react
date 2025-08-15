import React from 'react'
import sampleImage from '../assets/image.png' // adjust path based on file location

const StudentCard = () => {
  return (
    <div className="relative w-full max-w-[405px] min-w-[100px] min-h-[350px] rounded-xl border-2 border-white bg-white m-2 p-[50px] pt-[0px] flex flex-col shadow-[.5px_.5px_0_.5px_#1E1E1E] hover:shadow-[4px_4px_0_3px_#1E1E1E] transition-shadow duration-300 ease-in-out">
      
      {/* Decorative strip */}
      <div className="mx-auto w-[80px] h-[220px] bg-[#FFEFE5] border-2 border-black rounded-b-xl"></div>
      
      {/* Image */}
      <img src={sampleImage} alt="Card" className="max-w-[230px] min-w-[220px] min-h-[20px] absolute   top-7 left-[88px]"  />
      
      {/* Title & Text */}
      <h2 className="text-xl font-bold text-gray-800 text-center">
        Card Title
      </h2>
      <p className="text-base sm:text-lg text-gray-600 text-center">
        This is some example content that would appear in the card.
      </p>
    </div>
  )
}

export default StudentCard

