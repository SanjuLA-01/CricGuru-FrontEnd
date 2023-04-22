const initialState = {
  uploadProcessing: null,
  data: null,
  error: null,
};

const FileUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_FILE_PROCESS':
      return {
        ...state,
        uploadProcessing: true,
        data: null,
        error: null,
      };
    case 'UPLOAD_FILE_SUCCESS':
      return {
        ...state,
        uploadProcessing: false,
        data: action.payload,
        error: null,
      };
    case 'UPLOAD_FILE_ERROR':
      return {
        ...state,
        uploadProcessing: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default FileUploadReducer;
