import { z } from 'zod'

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'Username inválido').toLowerCase(),
  fullName: z
    .string()
    .min(5, 'Nome precisa ter no mínimo 5 caracteres')
    .max(50, 'Nome muito longo')
    .transform((value) => {
      return value
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ')
    }),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
