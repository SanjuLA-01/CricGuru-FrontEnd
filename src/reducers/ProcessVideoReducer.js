const initialState = {
  processing: false,
  processedData: null,
  error: null,
};

const ProcessVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PROCESS_VIDEO_REQUEST':
      return { ...state, ...initialState, processing: true };
    case 'PROCESS_VIDEO_SUCCESS':
      return { ...state, processing: false, processedData: action.payload };
    case 'PROCESS_VIDEO_FAIL':
      return { ...state, processing: false, error: action.payload };
    default:
      return state;
  }
};

export default ProcessVideoReducer;
