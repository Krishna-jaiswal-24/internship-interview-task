import React from "react"
import Navbar from "../../components/Navbar"
import Hero from "../../assets/hero1.png"
import Card1 from "../../components/Cards/Card1"
import Footer from "../../components/Footer"
import Card2 from "../../components/Cards/Card2"
const DetailsPage = () => {
  return (
    <>
      <Navbar />
      {/* Main Hero Section */}
      <div className="relative">
        <div className="h-[534px] w-full  bg-gradient-to-r from-[#2151FF] to-[#002CCC] ">
          <div className=" flex flex-col py-28  mobile:my-11 ml-4 mobile:ml-[88px] ">
            <h1 className="text-[64px] text-white font-semibold font-crimson mb-3">
              Details page
            </h1>
            <span className="text-[20px] font-outfit text-white max-w-[537px]">
              Subheader for details page could be of multiple lines spanning
              across max 3 lines
            </span>
          </div>

          <div className="absolute top-[20rem] p-4 mobile:p-0  mobile:top-[4rem]  mobile:right-0">
            <img src={Hero} className="w-auto h-auto"></img>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[10rem] p-4 text-[#555555] text-sm mobile:mt-[100px] mobile:max-w-[882px] mobile:mx-auto mobile:text-black mobile:text-[20px] font-outfit">
          <p>
            Company Name's dedicated and highly experienced advisory services
            teams across the world have the depth of industry and technical
            resources to respond rapidly to our clients’ needs. Our
            professionals work with senior leadership across functional areas,
            applying our expertise and deep industry knowledge to develop
            innovative, technology-driven solutions to solve our clients’
            business challenges and help them grow and achieve financial
            results.
          </p>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="w-[89%] mx-auto my-10 mobile:my-20">
        <h1 className="text-3xl font-crimson font-semibold mt-[80px]">
          Our solution includes
        </h1>
        <hr className=" mt-6 m-auto border-black border border-solid" />
        <div className="mobile:py-8 w-full flex flex-wrap justify-evenly items-center  ">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>

      {/* Contact us  */}
      <div className=" w-full mobile:w-[89%] flex flex-wrap mobile:items-center mobile:justify-between mx-auto bg-black ">
        <div className="flex text-white flex-col py-12 px-4 mobile:px-20 mobile:py-12">
          <h1 className="font-crimson text-4xl mb-4">Contact us</h1>
          <p className="w-[18rem] mobile:w-full font-outfit text-white/80 mb-4">
            Our expert consultants are eager to hear you out.
          </p>
          <button className="bg-primary text-white px-8 py-4 w-[12rem] mobile:hidden">
            <div className="flex items-center justify-between">
              <span>Get in touch</span>
              <svg
                width="31"
                height="16"
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM30.7071 8.7071C31.0976 8.31658 31.0976 7.68341 30.7071 7.29289L24.3431 0.92893C23.9526 0.538406 23.3195 0.538406 22.9289 0.92893C22.5384 1.31945 22.5384 1.95262 22.9289 2.34314L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.7071ZM1 9L30 9L30 7L1 7L1 9Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
          <div className=" hidden mobile:flex gap-6">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="#2151FF" />
              <path
                d="M23.9408 20.392L31.5353 11.5H29.7353L23.1428 19.2205L17.8748 11.5H11.7998L19.7648 23.176L11.7998 32.5H13.5998L20.5628 24.346L26.1263 32.5H32.2013L23.9408 20.392ZM21.4763 23.278L20.6693 22.1155L14.2478 12.865H17.0123L22.1933 20.3305L23.0003 21.493L29.7368 31.198H26.9723L21.4763 23.278Z"
                fill="white"
              />
            </svg>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="#2151FF" />
              <path
                d="M29 13C29.5304 13 30.0391 13.2107 30.4142 13.5858C30.7893 13.9609 31 14.4696 31 15V29C31 29.5304 30.7893 30.0391 30.4142 30.4142C30.0391 30.7893 29.5304 31 29 31H15C14.4696 31 13.9609 30.7893 13.5858 30.4142C13.2107 30.0391 13 29.5304 13 29V15C13 14.4696 13.2107 13.9609 13.5858 13.5858C13.9609 13.2107 14.4696 13 15 13H29ZM28.5 28.5V23.2C28.5 22.3354 28.1565 21.5062 27.5452 20.8948C26.9338 20.2835 26.1046 19.94 25.24 19.94C24.39 19.94 23.4 20.46 22.92 21.24V20.13H20.13V28.5H22.92V23.57C22.92 22.8 23.54 22.17 24.31 22.17C24.6813 22.17 25.0374 22.3175 25.2999 22.5801C25.5625 22.8426 25.71 23.1987 25.71 23.57V28.5H28.5ZM16.88 18.56C17.3256 18.56 17.7529 18.383 18.0679 18.0679C18.383 17.7529 18.56 17.3256 18.56 16.88C18.56 15.95 17.81 15.19 16.88 15.19C16.4318 15.19 16.0019 15.3681 15.685 15.685C15.3681 16.0019 15.19 16.4318 15.19 16.88C15.19 17.81 15.95 18.56 16.88 18.56ZM18.27 28.5V20.13H15.5V28.5H18.27Z"
                fill="white"
              />
            </svg>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="#2151FF" />
              <path
                d="M32 22C32 16.48 27.52 12 22 12C16.48 12 12 16.48 12 22C12 26.84 15.44 30.87 20 31.8V25H18V22H20V19.5C20 17.57 21.57 16 23.5 16H26V19H24C23.45 19 23 19.45 23 20V22H26V25H23V31.95C28.05 31.45 32 27.19 32 22Z"
                fill="white"
              />
            </svg>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="#2151FF" />
              <path
                d="M22.8947 27.4712C23.0352 27.6119 23.1142 27.8026 23.1142 28.0014C23.1142 28.2002 23.0352 28.3909 22.8947 28.5316L21.9628 29.4691C20.9773 30.4539 19.6409 31.007 18.2477 31.0065C16.8544 31.0061 15.5184 30.4522 14.5336 29.4667C13.5487 28.4812 12.9957 27.1449 12.9961 25.7516C12.9965 24.3584 13.5504 23.0224 14.5359 22.0375L16.7972 19.7762C17.7437 18.8289 19.0166 18.2791 20.3552 18.2394C21.6938 18.1997 22.997 18.673 23.9981 19.5625C24.072 19.628 24.1322 19.7074 24.1754 19.7962C24.2186 19.885 24.2438 19.9814 24.2498 20.0799C24.2557 20.1785 24.2421 20.2772 24.2099 20.3705C24.1776 20.4638 24.1273 20.5499 24.0618 20.6237C23.9963 20.6976 23.9169 20.7579 23.8282 20.801C23.7394 20.8442 23.643 20.8695 23.5444 20.8754C23.4459 20.8813 23.3471 20.8678 23.2538 20.8355C23.1605 20.8033 23.0745 20.753 23.0006 20.6875C22.2856 20.0525 21.355 19.7147 20.3992 19.7431C19.4433 19.7715 18.5345 20.164 17.8584 20.8403L15.5972 23.0987C14.8938 23.8021 14.4986 24.7562 14.4986 25.7509C14.4986 26.7457 14.8938 27.6997 15.5972 28.4031C16.3006 29.1065 17.2546 29.5017 18.2493 29.5017C19.2441 29.5017 20.1981 29.1065 20.9015 28.4031L21.8334 27.4712C21.9031 27.4015 21.9858 27.3462 22.0768 27.3085C22.1679 27.2707 22.2655 27.2513 22.364 27.2513C22.4626 27.2513 22.5602 27.2707 22.6512 27.3085C22.7423 27.3462 22.825 27.4015 22.8947 27.4712ZM29.4647 14.5337C28.479 13.5503 27.1435 12.998 25.7512 12.998C24.3589 12.998 23.0234 13.5503 22.0378 14.5337L21.1059 15.4666C20.9653 15.6073 20.8864 15.7981 20.8864 15.997C20.8865 16.196 20.9656 16.3867 21.1064 16.5273C21.2471 16.6679 21.4379 16.7469 21.6369 16.7468C21.8358 16.7467 22.0266 16.6676 22.1672 16.5269L23.099 15.595C23.8024 14.8916 24.7565 14.4964 25.7512 14.4964C26.746 14.4964 27.7 14.8916 28.4034 15.595C29.1068 16.2984 29.502 17.2524 29.502 18.2472C29.502 19.2419 29.1068 20.196 28.4034 20.8994L26.1422 23.1625C25.4657 23.8384 24.5567 24.2304 23.6008 24.2583C22.645 24.2861 21.7146 23.9478 21 23.3125C20.8508 23.1802 20.6552 23.1126 20.4561 23.1246C20.2571 23.1365 20.071 23.2271 19.9387 23.3762C19.8064 23.5254 19.7388 23.7211 19.7508 23.9201C19.7628 24.1191 19.8533 24.3052 20.0025 24.4375C21.0033 25.3273 22.3064 25.8009 23.645 25.7615C24.9836 25.7221 26.2566 25.1727 27.2034 24.2256L29.4647 21.9644C30.4487 20.9787 31.0013 19.6428 31.0013 18.25C31.0013 16.8572 30.4487 15.5213 29.4647 14.5356V14.5337Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="hidden mobile:flex text-5xl text-white mr-48">Logo</h1>
        </div>
      </div>

      {/* Related Articles */}
      <div className="w-[89%] mx-auto mobile:my-20">
        <h1 className="hidden mobile:flex text-3xl font-crimson font-semibold mt-[80px]">
          Related Articles
        </h1>
        <hr className="hidden mobile:flex mt-6 mx-auto border-black border border-solid" />
        <div className="hidden mobile:flex flex-wrap py-8 w-full  items-center mx-auto">
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
        <div className="hidden mobile:flex  justify-center">
          <button className="border-2 border-solid px-16 py-5 border-black hover:bg-black hover:text-white hover:cursor-pointer text-center  my-5">
            View More
          </button>
        </div>
      </div>

      {/* icons for mobile view */}
      <div>
        <div className="flex items-center justify-center bg-black mobile:hidden gap-6">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="#2151FF" />
            <path
              d="M23.9408 20.392L31.5353 11.5H29.7353L23.1428 19.2205L17.8748 11.5H11.7998L19.7648 23.176L11.7998 32.5H13.5998L20.5628 24.346L26.1263 32.5H32.2013L23.9408 20.392ZM21.4763 23.278L20.6693 22.1155L14.2478 12.865H17.0123L22.1933 20.3305L23.0003 21.493L29.7368 31.198H26.9723L21.4763 23.278Z"
              fill="white"
            />
          </svg>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="#2151FF" />
            <path
              d="M29 13C29.5304 13 30.0391 13.2107 30.4142 13.5858C30.7893 13.9609 31 14.4696 31 15V29C31 29.5304 30.7893 30.0391 30.4142 30.4142C30.0391 30.7893 29.5304 31 29 31H15C14.4696 31 13.9609 30.7893 13.5858 30.4142C13.2107 30.0391 13 29.5304 13 29V15C13 14.4696 13.2107 13.9609 13.5858 13.5858C13.9609 13.2107 14.4696 13 15 13H29ZM28.5 28.5V23.2C28.5 22.3354 28.1565 21.5062 27.5452 20.8948C26.9338 20.2835 26.1046 19.94 25.24 19.94C24.39 19.94 23.4 20.46 22.92 21.24V20.13H20.13V28.5H22.92V23.57C22.92 22.8 23.54 22.17 24.31 22.17C24.6813 22.17 25.0374 22.3175 25.2999 22.5801C25.5625 22.8426 25.71 23.1987 25.71 23.57V28.5H28.5ZM16.88 18.56C17.3256 18.56 17.7529 18.383 18.0679 18.0679C18.383 17.7529 18.56 17.3256 18.56 16.88C18.56 15.95 17.81 15.19 16.88 15.19C16.4318 15.19 16.0019 15.3681 15.685 15.685C15.3681 16.0019 15.19 16.4318 15.19 16.88C15.19 17.81 15.95 18.56 16.88 18.56ZM18.27 28.5V20.13H15.5V28.5H18.27Z"
              fill="white"
            />
          </svg>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="#2151FF" />
            <path
              d="M32 22C32 16.48 27.52 12 22 12C16.48 12 12 16.48 12 22C12 26.84 15.44 30.87 20 31.8V25H18V22H20V19.5C20 17.57 21.57 16 23.5 16H26V19H24C23.45 19 23 19.45 23 20V22H26V25H23V31.95C28.05 31.45 32 27.19 32 22Z"
              fill="white"
            />
          </svg>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="#2151FF" />
            <path
              d="M22.8947 27.4712C23.0352 27.6119 23.1142 27.8026 23.1142 28.0014C23.1142 28.2002 23.0352 28.3909 22.8947 28.5316L21.9628 29.4691C20.9773 30.4539 19.6409 31.007 18.2477 31.0065C16.8544 31.0061 15.5184 30.4522 14.5336 29.4667C13.5487 28.4812 12.9957 27.1449 12.9961 25.7516C12.9965 24.3584 13.5504 23.0224 14.5359 22.0375L16.7972 19.7762C17.7437 18.8289 19.0166 18.2791 20.3552 18.2394C21.6938 18.1997 22.997 18.673 23.9981 19.5625C24.072 19.628 24.1322 19.7074 24.1754 19.7962C24.2186 19.885 24.2438 19.9814 24.2498 20.0799C24.2557 20.1785 24.2421 20.2772 24.2099 20.3705C24.1776 20.4638 24.1273 20.5499 24.0618 20.6237C23.9963 20.6976 23.9169 20.7579 23.8282 20.801C23.7394 20.8442 23.643 20.8695 23.5444 20.8754C23.4459 20.8813 23.3471 20.8678 23.2538 20.8355C23.1605 20.8033 23.0745 20.753 23.0006 20.6875C22.2856 20.0525 21.355 19.7147 20.3992 19.7431C19.4433 19.7715 18.5345 20.164 17.8584 20.8403L15.5972 23.0987C14.8938 23.8021 14.4986 24.7562 14.4986 25.7509C14.4986 26.7457 14.8938 27.6997 15.5972 28.4031C16.3006 29.1065 17.2546 29.5017 18.2493 29.5017C19.2441 29.5017 20.1981 29.1065 20.9015 28.4031L21.8334 27.4712C21.9031 27.4015 21.9858 27.3462 22.0768 27.3085C22.1679 27.2707 22.2655 27.2513 22.364 27.2513C22.4626 27.2513 22.5602 27.2707 22.6512 27.3085C22.7423 27.3462 22.825 27.4015 22.8947 27.4712ZM29.4647 14.5337C28.479 13.5503 27.1435 12.998 25.7512 12.998C24.3589 12.998 23.0234 13.5503 22.0378 14.5337L21.1059 15.4666C20.9653 15.6073 20.8864 15.7981 20.8864 15.997C20.8865 16.196 20.9656 16.3867 21.1064 16.5273C21.2471 16.6679 21.4379 16.7469 21.6369 16.7468C21.8358 16.7467 22.0266 16.6676 22.1672 16.5269L23.099 15.595C23.8024 14.8916 24.7565 14.4964 25.7512 14.4964C26.746 14.4964 27.7 14.8916 28.4034 15.595C29.1068 16.2984 29.502 17.2524 29.502 18.2472C29.502 19.2419 29.1068 20.196 28.4034 20.8994L26.1422 23.1625C25.4657 23.8384 24.5567 24.2304 23.6008 24.2583C22.645 24.2861 21.7146 23.9478 21 23.3125C20.8508 23.1802 20.6552 23.1126 20.4561 23.1246C20.2571 23.1365 20.071 23.2271 19.9387 23.3762C19.8064 23.5254 19.7388 23.7211 19.7508 23.9201C19.7628 24.1191 19.8533 24.3052 20.0025 24.4375C21.0033 25.3273 22.3064 25.8009 23.645 25.7615C24.9836 25.7221 26.2566 25.1727 27.2034 24.2256L29.4647 21.9644C30.4487 20.9787 31.0013 19.6428 31.0013 18.25C31.0013 16.8572 30.4487 15.5213 29.4647 14.5356V14.5337Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailsPage
