import React from "react"
import nasa from "../../assets/nasa.png"
const Card2 = () => {
  return (
    <>
      <div className="w-[26rem] h-[37rem] border border-[#000000]/20 mx-auto overflow-clip hover:scale-105 transition-transform">
        <img
          className="mx-auto my-3  "
          src={nasa}
        ></img>

        <div className="w-[23rem] mx-auto">
          <p className="font-outfit text-xl font-semibold my-1 mb-5">
            The “Missing Billion”: creating health equity through data for
            people with disabilities
          </p>
          <p className="font-outfit mb-5">
            McKinsey Health Institute is part of a global coalition committed to
            transforming health systems to be inclusive of people with
            disabilities—one piece of data at a time.
          </p>
          <hr className="border border-[#000000]/20 my-6" />
          <div className="flex justify-between items-center m-auto my-1 font-outfit ">
            <p>December 5,2023</p>
            <button className="border-2 border-solid px-6 py-3 text-sm border-[#2151FF] text-[#2151FF] hover:bg-[#2151FF] hover:text-white hover:cursor-pointer">
              Read Full Blog
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2
