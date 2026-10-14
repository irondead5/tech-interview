import { z } from 'zod'

export default defineEventHandler(async (event) => {

  const formSchema = z.object({
    nombre: z.string('El nombre es requerido'),
    email: z.email('El email es incorrecto'),
    mensaje: z.string().optional()
  })

  const form = await readValidatedBody(event, body => formSchema.safeParse(body))

  if (!form.success) {
    return createError({
      status: 400,
      message: 'Formulario invalido',
      data: form.error.issues
    })
  }

  return form.data
})
