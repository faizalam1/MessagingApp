import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const InputPassword = ({ name, displayText, password, setPassword }) => {
  return (
    <>
      <label htmlFor={name} className="fixed left-[9999px]">
        {displayText}:
      </label>
      <input
        type="password"
        name={name}
        id={name}
        placeholder={displayText}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-blue-400 rounded-lg p-2 m-2 w-4/5"
        required
      />
    </>
  );
};

InputPassword.prototype = {
  name: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default InputPassword;
