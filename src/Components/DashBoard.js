import { useSelector, useDispatch } from "react-redux";
import SignIn from "../Components/SignIn";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.User);
  const enrolledCourses = useSelector((state) => state?.data?.enrolledCourses);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  const handleGoBack = () => {
    navigate(`/courselistingpage`);
  };

  return (
    <div className="dashboard-container container mx-auto px-4 md:px-12 py-8">
      <div className="flex justify-between items-center mb-4">
        {user && (
          <button
            className="bg-gray-500 w-20  md:w-32 text-white p-2 rounded-md hover:bg-gray-600"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        )}
      </div>
      <div>
        {user ? (
          <div>
            <div className="flex items-center justify-between">
              <h2 className="md:text-lg font-bold"> User : {user.email}</h2>
              <h2 className="md:text-lg font-bold cursor-pointer" onClick={handleClick}>
                Sign Out
              </h2>
            </div>
            {enrolledCourses && enrolledCourses.length === 0 ? (
              <p>No courses enrolled.</p>
            ) : (
              <div className="enrolled-courses-wrapper bg-white p-4 rounded-md shadow-md mb-8">
                <h3>Enrolled Courses</h3>
                <ul className="course-list grid grid-cols-1 md:grid-cols-2 gap-4">
                  {enrolledCourses?.map((course) => (
                    <li
                      key={course.id}
                      className="course-item bg-white p-4 rounded-md shadow-md hover:shadow-lg"
                    >
                      <div className="course-info flex flex-col md:flex-row gap-4">
                        <img
                          src={course.thumbnail}
                          alt={course.name}
                          className="course-thumbnail w-full md:w-1/3 object-cover rounded-md"
                        />
                        <div className="course-details">
                          <p className="course-name text-xl font-bold">
                            Course Name: {course.name}
                          </p>
                          <p className="course-instructor text-gray-600">
                            Instructor: {course.instructor}
                          </p>
                          <p className="course-due-date text-gray-600">
                            Due Date: {course.duration}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
