import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Mumbai from "../../assets/Mumbai.png"
import Address from "../../components/Addresses"
import { BiLogoInstagramAlt } from "react-icons/bi";

const ContactUsPage = () => {
  return (
    <>
      <Navbar bread="hidden" />

      {/* Header */}
      <div className="px-4 py-12 mobile:mx-20 mobile:p-20 flex flex-col mobile:flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-sm p-2 bg-[#1872E7]/15 w-32 text-[#1872E7] text-center rounded-3xl font-bold">
            CONTACT US
          </p>
          <h1 className="font-crimson text-4xl font-bold w-80 mobile:w-[533px] my-4">
            We'd love to hear from you!
          </h1>
          <p className="text-[#999999] mobile:w-[533px] text-xl font-outfit font-medium ">
            Our expert consultants are eager to hear you out. We are here to
            take your business to next level!
          </p>
        </div>
        <div className="flex flex-col mt-5 mobile:mt-0 w-full mobile:w-2/5 h-[40rem] bg-[#F9FAFC] shadow-2xl rounded-md ">
          <form className="flex flex-col my-10 mx-8 space-y-4">
            <label className="text-sm font-medium mb-1 text-[#344054] t">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-md border border-[#D0D5DD]"
            />

            <label className="text-sm font-medium mb-1 text-[#344054]">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-md border border-[#D0D5DD]"
            />

            <label className="text-sm font-medium mb-1 text-[#344054]">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1(555) 000-0000"
              className="px-4 py-3 rounded-md border border-[#D0D5DD]"
            />

            <label className="text-sm font-medium mb-1 text-[#344054]">
              How can we help?
            </label>
            <textarea
              placeholder="Tell us a little about the project"
              className="px-4 py-3 rounded-md border border-[#D0D5DD] h-32"
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md font-outfit"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex">
        <div className="flex flex-col p-4 mobile:p-0 mobile:flex-row justify-between w-full mobile:w-full bg-[#f9fafc]">
          <div>
            <h1 className="text-xl mobile:ml-24 mobile:my-11">Our Offices</h1>
          </div>
          <div className="flex flex-col mobile:p-0 w-full mobile:w-[57rem]">
            <hr className="w-full border mr-0 border-[#000000]/10" />

            <div className="flex justify-between py-6">
              <p>Mumbai</p>
              <p className="hidden mobile:flex text-[#999999]">India</p>
              <p className="mr-4 mobile:mr-8 mobile:px-6 text-[#999999] flex">
                Address
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4"
                >
                  <path
                    d="M18.3153 17.7142L6.88672 6.28564M18.3153 6.28564L6.88672 17.7142"
                    stroke="#999999"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
            <div className="flex w-full flex-col mobile:flex-row ">
              <img src={Mumbai} className="w-[400px] mobile:w-full mx-auto"></img>
              <div className="flex flex-col mobile:ml-8 w-full">
                <hr className="w-full hidden mobile:flex border mb-6 border-[#000000]/10" />
                <h1 className="text-xl mt-2 mobile:mt-0 mb-6">Company Name</h1>
                <p className="flex text-primary items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                      fill="#2151FF"
                    />
                  </svg>
                  india@companyname.com
                </p>
                <hr className="w-full border my-6 border-[#000000]/10" />
                <ul>
                  <li>Address Line 1</li>
                  <li>Address Line 2</li>
                  <li>Address Line 3</li>
                  <li>Address Line 4</li>
                  <li>Address Line 5</li>
                </ul>
                <div className="flex items-center mt-10">
                  <span>Google maps</span>
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.69923 0.409902C6.58399 0.377221 6.46338 0.367873 6.34448 0.382407C6.22558 0.396941 6.11077 0.435065 6.0068 0.494543C5.90282 0.554021 5.81176 0.633658 5.73896 0.728784C5.66616 0.82391 5.61308 0.932611 5.58284 1.04852C5.55259 1.16442 5.54579 1.2852 5.56283 1.40377C5.57987 1.52234 5.6204 1.63631 5.68206 1.73901C5.74372 1.84171 5.82525 1.93107 5.92189 2.00185C6.01853 2.07262 6.12833 2.1234 6.24485 2.15119L14.6168 4.33976L1.2307 11.6848C1.02144 11.7996 0.866359 11.9929 0.799581 12.222C0.732802 12.4512 0.759797 12.6975 0.874621 12.9068C0.989444 13.116 1.18269 13.2711 1.41186 13.3379C1.64102 13.4047 1.88732 13.3777 2.09659 13.2628L15.4848 5.91665L12.8325 14.157C12.7934 14.2702 12.7772 14.3901 12.785 14.5096C12.7928 14.6291 12.8244 14.7459 12.8779 14.8531C12.9314 14.9603 13.0057 15.0557 13.0966 15.1338C13.1874 15.2118 13.293 15.271 13.407 15.3077C13.521 15.3445 13.6412 15.3581 13.7605 15.3478C13.8799 15.3375 13.996 15.3035 14.102 15.2477C14.208 15.192 14.3018 15.1156 14.378 15.0231C14.4541 14.9306 14.511 14.8239 14.5453 14.7091L17.7933 4.61845C17.8744 4.36802 17.8705 4.0978 17.7822 3.84982C17.7444 3.7225 17.6791 3.60508 17.5907 3.50591C17.4297 3.30211 17.2065 3.1564 16.9551 3.09089L6.69923 0.409902Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Address />
              <Address />
              <Address />
              <Address />
              <Address />
              <Address />
              <Address />
              <Address />
              <Address />
              <Address />
            </div>
          </div>
        </div>

        <div className="hidden w-0 mobile:w-24 mobile:flex  bg-primary"></div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUsPage
