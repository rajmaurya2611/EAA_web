import React from 'react';
import sideImage from "../../assets/Mask group.png";
import phoneImage from "../../assets/002 1.png"; // Replace with your phone image path

const AppFeatures: React.FC = () => {
  return (
    <section className="relative bg-blue-500 text-white py-12 overflow-hidden">
      {/* Full-width image on top, at z-10 */}
      <img
        src={sideImage}
        alt="Feature graphic"
        className="absolute top-0 left-0 w-auto h-full object-cover z-10"
      />

      {/* Content above the image */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-6 md:px-12 pt-8">
        <div className="flex items-start"> {/* Changed items-center to items-start */}
          {/* Left 1/3 section with phone image */}
          <div className="w-1/3 pr-16 mr-8">
            <img
              src={phoneImage}
              alt="Phone"
              className="w-full h-auto  transform
    transition-transform
    duration-200
    hover:scale-110"
            />
          </div>

          {/* Right 2/3 section with heading and cards */}
          <div className="w-2/3 pl-4">
            <h2 className="text-4xl font-bold mb-4 text-[#FFFF00] pb-8 ">App Features</h2>

            {/* Cards section in 3x3 grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
                <p className="text-gray-600">All Semester Syllabus & Notes</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
           
                <p className="text-gray-600">Prepare Interview Questions</p>
              </div>
            
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
            
                <p className="text-gray-600">Explore Events Near You</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
             
                <p className="text-gray-600">All Semester Quantums</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
           
                <p className="text-gray-600">Find Roadmaps of Technologies</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
            
                <p className="text-gray-600">Contribute your contents</p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
           
                <p className="text-gray-600">Previous Year Qusestions Papers</p>
              </div>

              {/* Card 7 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
            
                <p className="text-gray-600">Find Internships/Jobs</p>
              </div>

              {/* Card 8 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
             
                <p className="text-gray-600">Get Placement Notes</p>
              </div>

              {/* Card 9 */}
              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
             
                <p className="text-gray-600">E-Books & Video Lectures</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
            
                <p className="text-gray-600">Ask Your Doubts from community</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md transform
    transition-transform
    duration-200
    hover:scale-110">
            
                <p className="text-gray-600">Practice Aptitude for placements</p>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
