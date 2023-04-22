export const uploadFile = (file) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'UPLOAD_FILE_PROCESS' });
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      // Dispatch success action with data
      dispatch(uploadFileSuccess(data));
    } catch (error) {
      // Dispatch error action
      dispatch(uploadFileError(error));
    }
  };
};

export const uploadFileSuccess = (data) => {
  return {
    type: 'UPLOAD_FILE_SUCCESS',
    payload: data,
  };
};

export const uploadFileError = (error) => {
  return {
    type: 'UPLOAD_FILE_ERROR',
    payload: error,
  };
};

export const processVideo = (hand, area) => async (dispatch) => {
  try {
    dispatch({ type: 'PROCESS_VIDEO_REQUEST' });
    const formData = new FormData();
    formData.append('hand', hand);
    formData.append('area', area);
    const response = await fetch('http://localhost:5000/process', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    dispatch({ type: 'PROCESS_VIDEO_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'PROCESS_VIDEO_FAIL', payload: error.message });
  }
};
