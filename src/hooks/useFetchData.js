import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/dataSlice";

const useFetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3031/courses`);
      const data = await res.json();
      dispatch(addData(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export default useFetchData;
