import * as Yup from "yup";
export const SignUpFormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("password is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10,15}$/, "Phonenumber must be 10-15 numbers")
    .required("Phonenumber is required"),
  confirmPassword: Yup.string().required("Confirm password is required"),
});
