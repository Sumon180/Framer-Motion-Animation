/* eslint-disable react/prop-types */

const Button = ({ show, onClick }) => {
    return (
        <button className="advanced-button" onClick={onClick}>
            {show ? "Remove Box" : "Add Box"}
        </button>
    );
};

export default Button;
