import { configureStore } from '@reduxjs/toolkit';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './reducers/authReducer';
import surveysReducer from './reducers/surveysReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
  },
});
