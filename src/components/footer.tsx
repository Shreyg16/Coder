
import React from 'react';

function Footer() {
  // w-[90%] max-w-7xl mx-auto bg-[#1d1d1d] mt-10 rounded-3xl
  return (
    <main className="w-full h-auto  border-t border-gray-700">
      <div className="">
        <div className="flex flex-wrap justify-between p-6">
          {/* First Column */}
          <div className="w-full sm:w-1/3 md:w-1/4">
            <ul className="mt-5 text-3xl space-y-5">
              <li className="cursor-pointer  hover:underline">Platform</li>
              <li className="cursor-pointer  hover:underline">Use Cases</li>
              <li className="cursor-pointer  hover:underline">Resources</li>
              <li className="cursor-pointer  hover:underline">For Candidates</li>
              <li className="cursor-pointer  hover:underline">Pricing</li>
            </ul>
            <ul className="flex mt-8 gap-4">
              <li>
              <a href="" className="social-link social-link--twitter">
	         <svg className="icon icon-twitter w-[20px] h-[20px] text-gray-700 hover:text-white" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106
             8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 
             7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 
             46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
			 </a>
              </li>
              <li>
              <a href="" className="social-link social-link--youtube">
			<svg className="icon icon-youtube w-[20px] h-[20px] text-gray-700 hover:text-white" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 
            24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 
            213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
			</a>
              </li>
              <li>
              <a href="" className="social-link social-link--linkedin">
             <svg className="icon icon-linkedin w-[20px] h-[20px] text-gray-700 hover:text-white" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 
             416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
              </li>
            </ul>
            <div className="mt-10 text-sm text-gray-400">
            <svg className="logo logo-coderpad-logomark w-[30px] h-[30px] bg-gray-700 rounded-md " role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 103 103"><title>CoderPad</title><rect width="103" height="103" fill="" rx="18.935"></rect><path fill="#fff" className="inner-mark" d="m41.918 68.776 11.296-34.552h7.88l-11.38 34.552h-7.796ZM21.94 51.411l15.942 
              8.705v8.364L13.758 55.678v-8.356L37.882 34.52v8.896l-15.941 7.995ZM81.52 51.411l-16.223-7.995V34.52l24.265 12.802v8.356L65.297 68.48v-8.364l16.224-8.705Z">
            </path></svg>
              <p className='mt-5'>© 2024 CoderPad, Inc</p>
              <p>CoderPad is a service mark of CoderPad, Inc.</p>
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full  sm:w-1/3 md:w-1/4 mt-8 sm:mt-0">
            <h2 className="text-2xl cursor-pointer">Products</h2>
            <ul className="text-sm text-gray-400 space-y-3 mt-5 cursor-pointer">
              <li className=" hover:underline">Live Collaborative Online IDE</li>
              <li className="hover:underline">Take-Home Projects</li>
              <li className="hover:underline">Digital Whiteboard</li>
              <li className="hover:underline">Focus Time</li>
              <li className="hover:underline">Integrations</li>
              <li className="hover:underline">Single Sign-On (SSO)</li>
            </ul>

            <h2 className="text-2xl mt-10 cursor-pointer">FAQs</h2>
            <ul className="text-sm text-gray-400 space-y-3 mt-5 cursor-pointer">
              <li className="hover:underline">User Guides</li>
              <li className="hover:underline">Docs</li>
              <li className="hover:underline">Customer Stories</li>
              <li className="hover:underline">Learning Center</li>
              <li className="hover:underline">University Recruiting</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="w-full sm:w-1/3 md:w-1/4 mt-8 sm:mt-0">
            <h2 className="text-2xl cursor-pointer">Company</h2>
            <ul className="text-sm text-gray-400 space-y-3 mt-5 cursor-pointer">
              <li className="hover:underline">About Us</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Blog</li>
              <li className="hover:underline">Press</li>
              <li className="hover:underline">Security</li>
              <li className="hover:underline">Contact Sales</li>
            </ul>

            <h2 className="text-2xl mt-10 cursor-pointer">Support</h2>
            <ul className="text-sm text-gray-400 space-y-3 mt-5 cursor-pointer">
              <li className="hover:underline">Contact Support</li>
              <li className="hover:underline">Status</li>
              <li className="hover:underline">Terms of Service</li>
              <li className="hhover:underline">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;









