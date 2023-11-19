export interface ILoginFormValues {
  username: string;
  password: string;
}

export interface IRegistrationFormValues extends ILoginFormValues {
  confirm_password: string;
  email: string;
}

export interface IRegisterApi
  extends Omit<IRegistrationFormValues, "confirm_password"> {}
