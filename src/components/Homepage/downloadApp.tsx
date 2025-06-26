import  { useState } from 'react';
import { Row, Col } from 'antd';
import LeftImage from '../../assets/Group.png';  // Replace with your actual image path
import RightTopImage from '../../assets/image 4 qr.png';  // Replace with your actual image path
import defaultBadge from "../../assets/google-play-black.svg";
import hoverBadge from "../../assets/google-play-white.svg";

const playstoreLink = "https://play.google.com/store/apps/details?id=com.bestofluck.engineersataktu";

const DownlaodApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-5 pb-12">
      <h2 className="text-center text-4xl font-medium font-montserrat mb-4">
        <span className="font-semibold text-[#EBA76A]">Download App</span>
      </h2>

      <h2 className="text-center text-2xl font-medium font-montserrat mb-20">
        <span className="font-semibold text-[#435268]">Get the Ultimate AKTU Companion App</span>
      </h2>

      <Row gutter={16} className="mt-4 px-32">
        <Col xs={24} sm={12}>
          <img src={LeftImage} alt="Left Image" className="w-full transform
    transition-transform
    duration-200
    hover:scale-110" />
        </Col>
        <Col xs={24} sm={12}>
          <div className="flex flex-col h-full">
            <div className="flex-grow flex items-center justify-center">
              <img src={RightTopImage} alt="Top Right Image" />
            </div>
            <div className='flex items-center justify-center font-semibold text-[#435268] pb-4'>
                or
            </div>
            <div className="flex items-center justify-center">
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
                  className="w-32 md:w-36 lg:w-40 mb-6 transition duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DownlaodApp;
