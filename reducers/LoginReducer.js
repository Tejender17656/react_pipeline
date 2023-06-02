const LoginInitialState = {
    email: "",
    password: "",
    remember: false,
    error: "",
    success: "",
};

const LoginReducer = (state, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case "HANDLE_CHECKBOX":
            return {
                ...state,
                [action.payload.name]: action.payload.checked,
            };
        case "HANDLE_ERROR":
            return {
                ...state,
                error: "Please fill in all fields",
                success: "",
            };
        case "HANDLE_SUCCESS":
            return {
                ...state,
                error: "",
                success: "Login successful",
            };
        default:
            return state;
    }
};

export { LoginReducer, LoginInitialState };

