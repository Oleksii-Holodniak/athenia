import { TErrorForm } from "../types/general";
interface IErrorForm {
  type: string;
  message: string;
}
export const renderInputError = (hasError: TErrorForm | IErrorForm) => {
  switch (hasError?.type) {
    case "required":
      return "This field is required.";
    case "less-date":
      return "The date must be greater than or equal to the current date.";
    case "minLength":
      return hasError?.message;
    case "maxLength":
      return hasError?.message;
    case "max":
      return `Maximum value: ${hasError?.message}`;
    case "min":
      return `Minimum value: ${hasError?.message}`;
    case "validate":
      return hasError?.message || "The field contains invalid data.";
    case "pattern":
      return hasError?.message;
    default:
      return hasError?.message;
  }
};
