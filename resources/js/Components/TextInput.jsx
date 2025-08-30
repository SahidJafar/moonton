import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";

const TextInput = forwardRef(function TextInput(
    {
        type = "text",
        name = "",
        className = "",
        variant = "primary",
        isError = false,
        isFocused = false,
        ...props
    },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    // Map variant to appropriate CSS classes
    const variantClasses = {
        primary: "input-primary",
        error: "input-error",
        "primary-outline": "input-primary-outline"
    };

    return (
        <input
            {...props}
            type={type}
            name={name}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError ? "input-error" : ""} ${variantClasses[variant]} ${className}`
            }
            ref={localRef}
        />
    );
});

// ✅ propTypes untuk validasi props
TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    isFocused: PropTypes.bool,
    isError: PropTypes.bool,
};

// ✅ defaultProps untuk nilai default
TextInput.defaultProps = {
    type: "text",
    name: "",
    className: "",
    variant: "primary",
    isFocused: false,
    isError: false,
};

export default TextInput;
