import actionTypes from "../action-types";

const initialState = {
	platformName: "",
	mobileNumber: "",
	otpToken: "",
	otp: "",
};

export default function metaReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_PLATFORM:
			return {
				...state,
				platformName: action.payload.platformName,
			};
		case actionTypes.SET_MOBILE_NUMBER:
			return {
				...state,
				mobileNumber: action.mobileNumber,
			};
		case actionTypes.SET_OTP_TOKEN:
			return {
				...state,
				otpToken: action.token,
			};
		case actionTypes.SET_OTP:
			return {
				...state,
				otp: action.otp,
			};
		default:
			return state;
	}
}
