import PropsTypes from "prop-types";
function TextInput({
  type = "text",
  name,
  placeholder,
  className,
  register,
  message,
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        {...register}
      />
      {message && <p>{message}</p>}
    </div>
  );
}

TextInput.propTypes = {
  type: PropsTypes.string,
  name: PropsTypes.string,
  className: PropsTypes.string,
  placeholder: PropsTypes.string,
  register: PropsTypes.string,
  message: PropsTypes.object,
};
export default TextInput;
