import React from "react"

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white mobile:px-[5.5rem] py-16">
        {/* Upper Footer */}
        <div className="hidden font-outfit mobile:flex justify-between items-center  ">
          <p className="w-80 text-2xl">
            Join our newsletter to keep up to date with us!
          </p>
          <div className="hidden mobile:flex relative">
            <input
              className="w-96 bg-black border border-[#ffffff]/20 text-[#ffffff]/72 pl-14 py-3 rounded-xl focus:outline"
              type="text"
              placeholder="Enter your email"
            />
            <svg
              className="absolute top-4 left-6"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99967 10C12.3009 10 14.1663 8.13454 14.1663 5.83335C14.1663 3.53217 12.3009 1.66669 9.99967 1.66669C7.69849 1.66669 5.83301 3.53217 5.83301 5.83335C5.83301 8.13454 7.69849 10 9.99967 10Z"
                stroke="white"
                stroke-opacity="0.72"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                stroke="white"
                stroke-opacity="0.72"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <button className="bg-[#1872E7] text-white px-7 py-3 ml-2 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="hidden mobile:flex border border-[#ffffff]/20  w-full mx-auto mt-16 my-8" />
        {/* Middle Footer */}
        <div className="flex flex-col mobile:flex-row items-center w-full justify-between">
          <div>
            <p className="p-4 text-4xl mobile:px-10 mobile:pb-4 mobile:text-xl">
              Logo
            </p>
            <p className="p-4 mobile:px-0 mobile:w-[26rem] text-[#ffffff]/80 font-sans">
              'Company Name' refers to the global organisation, and may refer to
              one or more member firm of Company Name International Inc.
              (WASII), as the context requires.
            </p>
            <div className="p-4 mobile:p-0 flex gap-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="white"
                  stroke-opacity="0.24"
                />
                <path
                  d="M23.492 11.6665H16.5087C13.4753 11.6665 11.667 13.4748 11.667 16.5082V23.4832C11.667 26.5248 13.4753 28.3332 16.5087 28.3332H23.4837C26.517 28.3332 28.3253 26.5248 28.3253 23.4915V16.5082C28.3337 13.4748 26.5253 11.6665 23.492 11.6665ZM20.0003 23.2332C18.217 23.2332 16.767 21.7832 16.767 19.9998C16.767 18.2165 18.217 16.7665 20.0003 16.7665C21.7837 16.7665 23.2337 18.2165 23.2337 19.9998C23.2337 21.7832 21.7837 23.2332 20.0003 23.2332ZM24.9337 15.7332C24.892 15.8332 24.8337 15.9248 24.7587 16.0082C24.6753 16.0832 24.5837 16.1415 24.4837 16.1832C24.3837 16.2248 24.2753 16.2498 24.167 16.2498C23.942 16.2498 23.7337 16.1665 23.5753 16.0082C23.5003 15.9248 23.442 15.8332 23.4003 15.7332C23.3587 15.6332 23.3337 15.5248 23.3337 15.4165C23.3337 15.3082 23.3587 15.1998 23.4003 15.0998C23.442 14.9915 23.5003 14.9082 23.5753 14.8248C23.767 14.6332 24.0587 14.5415 24.3253 14.5998C24.3837 14.6082 24.4337 14.6248 24.4837 14.6498C24.5337 14.6665 24.5837 14.6915 24.6337 14.7248C24.6753 14.7498 24.717 14.7915 24.7587 14.8248C24.8337 14.9082 24.892 14.9915 24.9337 15.0998C24.9753 15.1998 25.0003 15.3082 25.0003 15.4165C25.0003 15.5248 24.9753 15.6332 24.9337 15.7332Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="white"
                  stroke-opacity="0.24"
                />
                <path
                  d="M28.3337 23.4915C28.3337 26.5248 26.5253 28.3332 23.492 28.3332H22.5003C22.042 28.3332 21.667 27.9582 21.667 27.4998V22.6915C21.667 22.4665 21.8503 22.2748 22.0753 22.2748L23.542 22.2498C23.6587 22.2415 23.7587 22.1582 23.7837 22.0415L24.0753 20.4498C24.1003 20.2998 23.9837 20.1582 23.8253 20.1582L22.0503 20.1832C21.817 20.1832 21.6337 19.9998 21.6253 19.7748L21.592 17.7332C21.592 17.5998 21.7003 17.4832 21.842 17.4832L23.842 17.4498C23.9836 17.4498 24.092 17.3415 24.092 17.1998L24.0587 15.1998C24.0587 15.0582 23.9503 14.9498 23.8087 14.9498L21.5587 14.9832C20.1753 15.0082 19.0753 16.1415 19.1003 17.5248L19.142 19.8165C19.1503 20.0498 18.967 20.2332 18.7337 20.2415L17.7337 20.2582C17.592 20.2582 17.4837 20.3665 17.4837 20.5082L17.5087 22.0915C17.5087 22.2332 17.617 22.3415 17.7587 22.3415L18.7587 22.3248C18.992 22.3248 19.1753 22.5082 19.1836 22.7332L19.2586 27.4832C19.267 27.9498 18.892 28.3332 18.4253 28.3332H16.5087C13.4753 28.3332 11.667 26.5248 11.667 23.4832V16.5082C11.667 13.4748 13.4753 11.6665 16.5087 11.6665H23.492C26.5253 11.6665 28.3337 13.4748 28.3337 16.5082V23.4915Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="white"
                  stroke-opacity="0.24"
                />
                <path
                  d="M29.1922 16.0675L26.8562 18.4035C26.3844 23.8738 21.7711 28.1254 16.25 28.1254C15.1156 28.1254 14.1804 27.9457 13.4703 27.591C12.8976 27.3043 12.6633 26.9972 12.6047 26.9097C12.5524 26.8314 12.5186 26.7422 12.5056 26.6489C12.4927 26.5557 12.5009 26.4607 12.5299 26.371C12.5588 26.2814 12.6076 26.1995 12.6726 26.1314C12.7377 26.0633 12.8173 26.0107 12.9054 25.9777C12.9258 25.9699 14.7992 25.2504 15.989 23.8808C15.3292 23.3383 14.7532 22.7012 14.2797 21.9902C13.3109 20.5519 12.2265 18.0535 12.5609 14.3199C12.5715 14.2012 12.6158 14.0881 12.6885 13.9938C12.7613 13.8995 12.8595 13.8279 12.9715 13.7875C13.0836 13.7471 13.2048 13.7396 13.321 13.7658C13.4372 13.792 13.5435 13.8509 13.6273 13.9355C13.6547 13.9629 16.2273 16.5214 19.3726 17.3511V16.8754C19.3714 16.3764 19.4701 15.8823 19.6627 15.4221C19.8554 14.9619 20.1382 14.5449 20.4945 14.1957C20.8405 13.8501 21.2522 13.5774 21.7054 13.3936C22.1585 13.2098 22.6438 13.1186 23.1328 13.1254C23.7887 13.1318 24.4318 13.3079 24.9995 13.6365C25.5672 13.965 26.0403 14.4349 26.3726 15.0004H28.75C28.8737 15.0003 28.9946 15.0369 29.0975 15.1055C29.2003 15.1742 29.2805 15.2718 29.3279 15.3861C29.3752 15.5004 29.3876 15.6261 29.3634 15.7474C29.3393 15.8687 29.2797 15.9801 29.1922 16.0675Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
          </div>

          <div className="p-4 flex flex-row flex-wrap justify-between w-full mobile:flex-row  mobile:w-1/3">
            <div className="mr-44 mobile:mr-0">
              <span className="text-sm text-[#ffffff]/80">Connect</span>
              <ul>
                <li className="my-4">Contact us</li>
                <li className="my-4">Our Offices</li>
              </ul>
            </div>
            <div className="pr-10 mobile:pr-0">
              <span className="text-sm text-[#ffffff]/80">Legal</span>
              <ul>
                <li className="my-4">Privacy</li>
                <li className="my-4">Disclaimer</li>
              </ul>
            </div>
            <div className="mt-10 mobile:mt-0">
              <span className="text-sm text-[#ffffff]/80">About</span>
              <ul>
                <li className="my-4">About us</li>
                <li className="my-4">Careers</li>
                <li className="my-4">Code of Conduct</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="flex border border-[#ffffff]/20  w-[60%] mobile:w-full mx-auto my-11" />

        {/* Lower Footer */}
        <div className="flex flex-col mobile:flex-row items-center mobile:justify-between">
          <p>© 2023 Company Name</p>
          <ul className="flex my-6">
            <li className="text-sm text-[#ffffff]/80 mr-10">
              Terms of Services
            </li>
            <li className="text-sm text-[#ffffff]/80 mr-10">Privacy Policy</li>
            <li className="text-sm text-[#ffffff]/80">Cookies</li>
          </ul>
        </div>
      </div>

      {/* */}
    </>
  )
}

export default Footer
