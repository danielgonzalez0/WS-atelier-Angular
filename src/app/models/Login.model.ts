export interface Login {
  email: string;
  password: string;
}

const FormInputTypes = ['firstName', 'lastName', 'email'] as const
export type InputType = typeof FormInputTypes[number];

