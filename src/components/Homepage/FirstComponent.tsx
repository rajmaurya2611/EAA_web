import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import landingImage from "../../assets/Group 30.png"; // Replace with your actual image path
import defaultBadge from "../../assets/google-play-black.svg";
import hoverBadge from "../../assets/google-play-white.svg";

const playstoreLink = "https://play.google.com/store/apps/details?id=com.bestofluck.engineersataktu";

/**
 * FirstComponent
 * Responsive landing section with layered animated images,
 * optimized for extra-large screens.
 */
const FirstComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
    window.scrollTo({ top: 0, left: 0 });
  };

  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-[#ECF7FB] font-montserrat pt-32 pb-16">
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-6 lg:flex-row items-center justify-between md:px-16 xl:px-0 ">
        {/* Left: Text Section */}
        <div className="md:w-1/2 pl-6 space-y-6">
          <h1 className="font text-[#006AFF] text-5xl pb-0 mt-0 ">
            Your One-Stop Solution for<br></br>
             <span className="font-semibold">All AKTU Resources</span>
          </h1>
           <h1 className="font-semibold text-[#ACB25C] text-3xl pb-0 mt-0 ">
            Your Ultimate Engineering Companion!
          </h1>

           <a
                href={playstoreLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={isHovered ? hoverBadge : defaultBadge}
                  alt="Get it on Google Play"
                  loading="lazy"
                  className="w-32 md:w-36 mt-6 lg:w-40 mb-6 transition duration-300 ease-in-out"
                />
              </a>
        </div>

        {/* Right: Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center items-center">
          {/* Main illustration */}
          <img
            src={landingImage}
            alt="Landing Illustration"
            loading="lazy"
            className="w-full max-w-xl relative z-0  transform
    transition-transform
    duration-200
    hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstComponent;
