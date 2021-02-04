const { NEW_PHONE_NUMBER,NEW_STARTDATE, NEW_END_DATE } = require("../actionTypes");

const initialState = {
    "phoneNumber":"98882048",
    "startDate":"une date de demarrage",
    "endDate":"une date de la fin"
};

const reducerParameter = (state = initialState, action) => {
	switch (action.type) {
		case NEW_PHONE_NUMBER: {
			//return [...state, action.data];
		}
		case NEW_STARTDATE:{

		}
		case NEW_END_DATE: {

		}

		default: {
			return state;
		}
	}
};

export default reducerParameter