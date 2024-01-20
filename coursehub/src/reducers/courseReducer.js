// reducers/courseReducer.js
const initialState = {
  courses: [],
  error: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES_SUCCESS":
      return { ...state, courses: action.payload, error: null };
    case "FETCH_COURSES_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
