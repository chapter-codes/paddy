"use server";
import { z } from "zod";

const User = z.object({
  email: z.string().email({ message: "invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters long" }),
});

interface State {
  errors?: {
    email?: string | null;
    password?: string | null;
  };
  message?: string | null;
}
export function login(state: State, formData: FormData) {
  // const validate = User.safeParse({
  //     email: formData.get('email'),
  //     password:formData.get('password'),
  // })

  // if (!validate.success) {
  //     return {
  //         errors: validate.error.flatten().file
  //     }
  // }
  //sanitize data
  //await verification with database
  //naviage to
  return state;
}
