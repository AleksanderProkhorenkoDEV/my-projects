import { z } from "zod";

export const validationSchema = z.object({
    email:      z.string().email({message:'Write a valid email address'}),
    password:   z.string().min(6 ,{message:'the password needs at least 4 characters'})
})