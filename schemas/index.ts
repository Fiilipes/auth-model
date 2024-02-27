import * as z from  "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required and must be a valid email address"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
    code: z.optional(z.string())
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required and must be a valid email address"
    })
})
export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum of 6 characters required"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required and must be a valid email address"
    }),
    password: z.string().min(6, {
        message: "Minimum of 6 characters required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })
})