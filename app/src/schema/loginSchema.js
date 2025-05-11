import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
});

export default loginSchema;
