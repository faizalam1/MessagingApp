import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const InputText = ({ name, displayText, value, setValue }) => {
  return (
    <>
      <label htmlFor={name} className="fixed left-[9999px]">
        {displayText}:
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={displayText}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 border-blue-400 rounded-lg p-2 m-2 w-4/5"
        required
      />
    </>
  );
};

InputText.prototype = {
  name: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default InputText;
