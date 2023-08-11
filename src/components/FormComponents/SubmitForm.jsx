import PropTypes from "prop-types";
const SubmitForm = ({ value }) => {
  return (
    <button
      type="submit"
      className="border-2 border-blue-400 bg-blue-400 rounded-lg p-2 m-2 w-4/5"
    >
      {value}
    </button>
  );
};

export default SubmitForm;

SubmitForm.propTypes = {
  value: PropTypes.string.isRequired,
};
