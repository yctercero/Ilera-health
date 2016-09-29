import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import authenticated from './authentication-reducer.js';
import messages from './messages-reducer.js';
import contacts from './contacts-reducer.js';
<<<<<<< 58331c2d5329caa5e09c21597b3f4a9e8fc2829c
import appointments from './appointment-reducer.js';

const rootReducer = combineReducers({
    authentication: authenticated,
    allPhysicianAppointments: appointments.physAppt,
    form: formReducer,
=======
import storeForm from './form-custom-reducer.js';

const rootReducer = combineReducers({
    authentication: authenticated,
    form: formReducer,
    storeForm: storeForm,
>>>>>>> form flow working for user signup
    messages: messages,
    contacts: contacts
});

export default rootReducer;