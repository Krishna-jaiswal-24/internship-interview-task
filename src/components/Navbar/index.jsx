import React from "react"
import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
    <>
      {/* Upper Navbar */}
      <div className="hidden mobile:flex justify-between px-[88px] py-7 font-crimson ">
        <div className="flex items-center space-x-7 text-lg">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3337 18.0001C15.0156 18.0001 18.0003 15.0153 18.0003 11.3334C18.0003 7.65152 15.0156 4.66675 11.3337 4.66675C7.65176 4.66675 4.66699 7.65152 4.66699 11.3334C4.66699 15.0153 7.65176 18.0001 11.3337 18.0001Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.428 23.3333L16 16"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>News</p>
        </div>
        <div className="flex">
          <ul className="flex space-x-14 text-lg items-center">
            <li>Locations</li>
            <Link to="/contact">
              <li className="border-2 border-solid px-6 py-3 border-black hover:bg-black hover:text-white hover:cursor-pointer">
                Contact us
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <hr className="border border-[#2121212B]" />
      {/* Middle Navbar */}

      <div className="flex justify-between ml-4 mobile:ml-32 py-7 text-lg font-crimson ">
        <div className="text-3xl font-outfit w-1/3">Logo</div>
        <div className="hidden mobile:flex w-2/3 content-center items-center space-x-7 ">
          <p>About</p>
          <p>Services</p>
          <p>Blogs</p>
          <p>Careers</p>
          <p>Industries</p>
        </div>
        <div className="mr-4 mobile:hidden ">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5.3335H28V8.00016H4V5.3335ZM12 14.6668H28V17.3335H12V14.6668ZM4 24.0002H28V26.6668H4V24.0002Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <hr className="border border-[#2121212B]" />

      {/* Lower  Navbar */}
      <div className={`${props.bread} mobile:flex items-center`}>
        <ul className="flex text-sm ml-2 my-4 mobile:ml-20 mobile:my-2 items-center font-outfit">
          <li className="px-2 text-[#999999]">Home</li>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66627 14.2053L0.460938 8.00001L6.66627 1.79468L7.37494 2.50401L1.8796 8.00001L7.3756 13.496L6.66627 14.2053Z"
              fill="#999999"
            />
          </svg>

          <li className="px-2 text-[#999999]">Bread 1</li>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66627 14.2053L0.460938 8.00001L6.66627 1.79468L7.37494 2.50401L1.8796 8.00001L7.3756 13.496L6.66627 14.2053Z"
              fill="#999999"
            />
          </svg>

          <li className="px-2 text-[#999999]">Bread 2</li>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66627 14.2053L0.460938 8.00001L6.66627 1.79468L7.37494 2.50401L1.8796 8.00001L7.3756 13.496L6.66627 14.2053Z"
              fill="#999999"
            />
          </svg>

          <li className="text-[#555555] font-medium"> Details</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
