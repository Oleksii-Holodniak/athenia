export interface ILoginFormValues {
  password: string;
  email: string;
}

export interface IRegistrationFormValues extends ILoginFormValues {
  username: string;
  confirm_password: string;
}

export interface IRegisterApi
  extends Omit<IRegistrationFormValues, "confirm_password"> {}
