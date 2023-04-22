import { combineReducers } from 'redux';
import FileUploadReducer from './FileUploadReducer';
import ProcessVideoReducer from './ProcessVideoReducer';

const RootReducer = combineReducers({
  fileUpload: FileUploadReducer,
  processVideo: ProcessVideoReducer,
});

export default RootReducer;
