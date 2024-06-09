import { z } from "zod";

export const validationSchema = z.object({
    display_name:           z.optional(z.string().min(4, { message: 'The display name field must be 4 or more characters' })),
    name:                   z.string().min(4, { message: 'The name field must be 4 or more characteres' }),
    email:                  z.string().email({ message: 'Write a valid email address' }).toLowerCase(),
    password:               z.string().min(8, { message: 'The password field must be 8 or more characters' }),
    password_confirmation:  z.string().min(8, { message: 'The password field must be 8 or more characters' })
}).refine( data => data.password === data.password_confirmation, {
    message: 'Passwords dont match',
    path: ['password_confirmation']
})