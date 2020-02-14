//Import Yup
import * as yup from "yup";

const Schema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Campo obligatorio.")
    .min(6, "Mínimo 6 caracteres."),
  confirmPassword: yup
    .string()
    .required("Campo obligatorio.")
    .test("matchTo", "No coinciden las contraseñas.", function(confirmPassword) {
      return confirmPassword === this.parent.newPassword;
    }),
});

export default Schema;
