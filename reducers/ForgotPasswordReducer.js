const ForgotPasswordInitialState = {
    email: "",
    error: "",
    success: "",
};

const ForgotPasswordReducer = (state, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case "HANDLE_ERROR":
            return {
                ...state,
                error: "Email field is required",
                success: "",
            };
        case "HANDLE_SUCCESS":
            return {
                ...state,
                error: "",
                success: "Reset submission successful",
            };
        default:
            return state;
    }
};

export { ForgotPasswordReducer, ForgotPasswordInitialState };

