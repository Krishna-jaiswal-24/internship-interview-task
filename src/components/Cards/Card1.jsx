import React from "react"

const Card1 = () => {
  return (
    <>
      <div className="border border-[#000000]/20 w-full mobile:w-[26rem] h-[19rem] my-3 mobile:mx-3  relative hover:scale-105 transition-transform">
        <h1 className="text-xl font-outfit font-semibold px-4 py-7">
          Preparation of Business Plans & Feasibility Study
        </h1>
        <p className="text-sm font-outfit font-semibold px-4">
          Helping clients capture the aftermarket potential—the largest source
          of untapped value in aerospace and defense—by assessing the installed
          base opportunity, improving pricing, and optimizing operations.
        </p>
        <div className="w-12 h-12 absolute right-0 bottom-0 bg-primary" />
      </div>
    </>
  )
}

export default Card1
