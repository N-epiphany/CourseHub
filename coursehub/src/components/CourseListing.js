// fileName: CourseListing.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../actions/courseActions";

const CourseListing = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h1>Course Listing</h1>
      {/* Display courses here */}
    </div>
  );
};

export default CourseListing;
