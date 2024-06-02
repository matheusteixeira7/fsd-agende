import { z } from 'zod'

const nodeEnv = z.enum(['development', 'production'])

function requiredOnEnv(env: z.infer<typeof nodeEnv>) {
  return (value: unknown): boolean => {
    const isEnvMatching = env === process.env.NODE_ENV
    return !(isEnvMatching && !value)
  }
}

const envSchema = z.object({
  VITE_NODE_ENV: nodeEnv.default('development'),
  VITE_BACKEND_URL: z
    .string()
    .min(1)
    .refine(
      requiredOnEnv('production'),
      'Você precisa informar a env BACKEND_URL',
    ),
})

export const env = envSchema.parse(import.meta.env)
