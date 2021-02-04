import {NEW_PHONE_NUMBER,NEW_STARTDATE,NEW_END_DATE} from './actionTypes'

export const newPhonenumber = data => {
	return {
		type: NEW_PHONE_NUMBER,
		data,
	};
};

export const newStartDate = data => {
	return {
		type: NEW_STARTDATE,
		data,
	};
};

export const newEnDate = data => {
	return {
		type: NEW_END_DATE,
		data,
	};
};