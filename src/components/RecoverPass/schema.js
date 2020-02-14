//Import Yup
import * as yup from "yup";

const Schema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obligatorio.")
    .email("Ingrese un email válido."),
});

export default Schema;
