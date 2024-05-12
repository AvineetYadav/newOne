import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; 
import Cards from "./Cards";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useFetchData from "../hooks/useFetchData";
import { selectCourse } from "../Redux/dataSlice";
import Footer from "../Components/Footer";

const CourseListingPage = () => {
  useFetchData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((store) => store?.data?.fetchData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data?.filter((course) =>
    course?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  const handleClick = (course) => {
    dispatch(selectCourse(course));
  };

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleGoBack = () => {
   navigate(`/`)
  };

  return (
    <div className="m-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex justify-center items-center w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search courses by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border-2 w-full md:w-64 border-black rounded"
          />
          {searchQuery && (
            <button onClick={handleClear} className="ml-2">
              <FaTimes />
            </button>
          )}
        </div>
        <button
          className="bg-gray-500 w-full md:w-auto text-white p-2 rounded-md hover:bg-gray-600"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
      
      <div className="flex justify-center pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredData?.map((details) => (
            <Link to={`/coursedetailspage/${details?.id}`} key={details.id}>
              <div onClick={() => handleClick(details)} className="m-2">
                <Cards info={details} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseListingPage;
