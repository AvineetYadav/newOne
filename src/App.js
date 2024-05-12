import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import CourseListingPage from "./Components/CourseListingPage";
import CourseDetailsPage from "./Components/CourseDetailsPage";
import DashBoard from "./Components/DashBoard";
import { Provider } from "react-redux";
import SignIn from "./Components/SignIn";
import appStore from "./Redux/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/signIn", element: <SignIn/> },
      { path: "/courselistingpage", element: <CourseListingPage /> },
      { path: "/coursedetailspage/:useId", element: <CourseDetailsPage /> },
      { path: "/dashboard", element: <DashBoard /> },
    ],
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}
