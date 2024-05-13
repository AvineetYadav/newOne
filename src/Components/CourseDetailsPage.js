import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enrolledCourses } from "../Redux/dataSlice";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import LAPTOP_ICON from "../assets/laptop-svgrepo-com.svg";
import WIN_ICON from "../assets/award-medal-badge-svgrepo-com.svg";
import QUALITY_ICON from "../assets/quality-premium-certificate-svgrepo-com.svg";
import TROPHY_ICON from "../assets/trophy-prize-achievement-svgrepo-com.svg";

const CourseDetailsPage = () => {
  const selectedCourse = useSelector((store) => store?.data?.selectedCourse);
  const [showSyllabus, setShowSyllabus] = useState(false);
  const enrolledCoursesList = useSelector((store) => store.data.enrolledCourses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSyllabus = () => {
    setShowSyllabus(!showSyllabus);
  };

  const handleClick = () => {
    const isEnrolled = enrolledCoursesList?.some(course => course?.id === selectedCourse?.id);
    if (isEnrolled) {
      alert("You are already enrolled in this course!");
    } else {
      dispatch(enrolledCourses(selectedCourse));
      navigate(`/dashboard`);
    }
  };

  const handleGoBack = () => {
    window?.history?.back();
  };

  return (
    <div className="course-details-page">
      <div className="course-details-container  mx-auto px-4 md:px-8 lg:px-16 py-8">
        <h2 className="course-details-title text-3xl font-bold mb-8">
          Course Details
        </h2>
        <div className="course-details-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="course-video-wrapper mb-8 md:mb-0">
            <div className="aspect-w-16 aspect-h-12">
              <iframe
                className="w-full h-[300px] md:h-[480px] rounded-md"
                src={`https://www.youtube.com/embed/${selectedCourse?.key}?autoplay=1&mute=1`}
                title="Course Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </div>
          <div className="course-info-wrapper border-black border-2 p-6 rounded-lg ">
            <div className="course-info space-y-4 ">
              <p className="course-name font-bold text-xl">
                Name: {selectedCourse?.name}
              </p>
              <p className="course-instructor font-semibold">
                Instructor: {selectedCourse?.instructor}
              </p>
              <p className="course-level text-sm">
                Level: {selectedCourse?.level}
              </p>

              <p className="course-description  text-sm">
                Description: {selectedCourse?.description}
              </p>
              <p className="course-duration  text-sm">
                Duration: {selectedCourse?.duration}
              </p>
              <p className="course-location  text-sm">
                Location: {selectedCourse?.location}
              </p>
              <p className="course-schedule  text-sm">
                Schedule: {selectedCourse?.schedule}
              </p>
              <p className="course-enrollment-status  text-sm">
                Enrollment Status: {selectedCourse?.enrollmentStatus}
              </p>
              <p className="course-skills-gained  text-sm">
                Skills Gained: {selectedCourse?.skillsGained?.join(", ")}
              </p>
              <button
                onClick={toggleSyllabus}
                className="text-blue-500 hover:underline focus:outline-none mt-2"
              >
                {showSyllabus ? "Hide Syllabus" : "Show Syllabus"}
              </button>
              {showSyllabus && (
                <div>
                  <h3 className="font-semibold mt-2">Syllabus</h3>
                  <ul className="border p-3 mt-2 space-y-5">
                    {selectedCourse?.syllabus?.map((item, index) => (
                      <li key={index}>
                        <p>Week: {item?.week}</p>
                        <p>Topic: {item?.topic}</p>
                        <p>Content: {item?.content}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button
              className="mt-2 bg-[#10426e] text-white w-full p-2 rounded-md hover:bg-[#105b9d] "
              onClick={handleClick}
            >
              Enroll
            </button>
            <button
              className="mt-2 bg-gray-500 text-white w-full p-2 rounded-md hover:bg-gray-600"
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        </div>
        <div>
          <div class="h-auto md:h-20 m-4 md:m-20 flex flex-col md:flex-row items-center justify-between p-6 md:p-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
            <div class="flex items-center flex-col mb-4 md:mb-0">
              <img class="w-12" src={QUALITY_ICON} alt="Quality Icon" />
              <p class="text-white">Developer Community</p>
            </div>
            <div class="flex items-center flex-col mb-4 md:mb-0">
              <img class="w-12" src={LAPTOP_ICON} alt="Laptop Icon" />
              <p class="text-white">Topics Taught</p>
            </div>
            <div class="flex items-center flex-col mb-4 md:mb-0">
              <img class="w-12" src={WIN_ICON} alt="Win Icon" />
              <p class="text-white">Companies Hired</p>
            </div>
            <div class="flex items-center flex-col">
              <img class="w-12" src={TROPHY_ICON} alt="Trophy Icon" />
              <p class="text-white">Success Stories</p>
            </div>
          </div>
        </div>
      </div>
      <Footer className="fixed bottom-0 left-0 right-0" />
    </div>
  );
};

export default CourseDetailsPage;
