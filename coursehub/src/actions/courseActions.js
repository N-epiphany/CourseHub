// actions/courseActions.js
import axios from "axios";

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await axios.get("dummy-api/courses"); // Replace with your API endpoint
    dispatch({ type: "FETCH_COURSES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_COURSES_FAILURE", payload: error.message });
  }
};
