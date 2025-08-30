import PropTypes from "prop-types";

export default function Button({
    type = "submit",
    variant = "primary",
    className = "",
    processing,
    children,
    ...props
}) {
    // Map variant to appropriate CSS classes
    const variantClasses = {
        primary: "btn-primary",
        warning: "btn-warning",
        danger: "btn-danger",
        "light-outline": "btn-light-outline",
        "white-outline": "btn-white-outline"
    };

    return (
        <button
            {...props}
            type={type}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} ${variantClasses[variant]} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
     type: PropTypes.oneOf(["button","submit", "reset"]),
     variant: PropTypes.oneOf(["primary", "warning", "danger", "light-outline", "white-outline"]),
     className: PropTypes.string,
     processing: PropTypes.bool,
     children: PropTypes.node
};
