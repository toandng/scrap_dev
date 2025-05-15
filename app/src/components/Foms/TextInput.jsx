import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropsTypes from "prop-types";
import styles from "../Foms/TextInput.module.scss";
function TextInput({
  type = "text",
  name,
  icon,
  placeholder,
  className,
  register,
  message,
}) {
  return (
    <div>
      {icon && <FontAwesomeIcon icon={icon} className={styles.inputIcon} />}
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
  register: PropsTypes.object,
  message: PropsTypes.string,
  icon: PropsTypes.object,
  value: PropsTypes.string,
  onChange: PropsTypes.func,
};
export default TextInput;
