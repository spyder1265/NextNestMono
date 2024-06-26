import { z } from 'zod'

export const signUpSchema = z.object({
  fname: z.string().min(1, 'firstname is required'),
  lname: z.string().min(1, 'lastname is required'),
  country: z.string().min(1, 'country is required'),
  phone: z.string().min(1, 'phone is required'),
  username: z.string().min(1, 'username is required'),
  email: z.string().min(1, 'email is required').email('Invalid email address'),
  password: z.string().min(8, 'password must be 8 chars and above')
})

export const loginSchema = z.object({
  email: z.string().min(1, 'email is required').email(),
  password: z.string().min(1, 'password is required')
})

export const api_keySchema = z.object({
  api_url: z.string().min(1, 'API URL is required'),
  api_key: z.string().min(1, 'API Key is required'),
  password: z.string().min(1, 'password is required')
})
