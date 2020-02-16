import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Por favor ingrese un nombre")
    .min(3, "Mínimo 3 caracteres."),
  email: yup
    .string()
    .email("Ingrese un email válido.")
    .required("Campo obligatorio."),
  newPassword: yup
    .string()
    .min(6, "Mínimo 6 caracteres.")
    .required("Campo obligatorio."),
});

export default RegisterSchema;
