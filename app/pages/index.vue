<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'
import type { FormSubmitEvent } from '@nuxt/ui'
import { FetchError } from 'ofetch'
import * as z from 'zod'


const { data, status } = await useLazyFetch<any>('https://reqres.in/api/users?page=2')

const users = ref<any[]>([])

if (status.value === 'success') {
  data.value.data.forEach((user: any) => {
    users.value.push({
      name: `${user.first_name} ${user.last_name}`,
      description: user.email,
      avatar: {
        src: user.avatar
      }
    })
  })
}

const features = ref<PageFeatureProps[]>([
  {
    title: 'Fullstack Engineer',
    description: 'Desarrollo de Sistemas Fullstack',
    icon: 'i-lucide-smile'
  },
  {
    title: 'AI Engineer',
    description: 'Automatizacion de procesos con AI',
    icon: 'i-lucide-a-large-small'
  },
  {
    title: 'Data Engineer',
    description: 'Extraccion e Ingesta de datos mediante procesos ETL',
    icon: 'i-lucide-sun-moon'
  }
])

const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6',
  'https://picsum.photos/640/640?random=7'
]

const schema = z.object({
  nombre: z.string('El nombre es requerido'),
  email: z.email('El email es incorrecto'),
  mensaje: z.string().optional()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  nombre: undefined,
  email: undefined,
  mensaje: undefined
})

const response = ref(undefined)

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    // form está tipado automáticamente gracias al auto-import de Nitro
    response.value = await $fetch('/api/form', {
      method: 'POST',
      body: event.data
    })

    toast.add({ title: 'Correcto', description: 'Enviado con éxito', color: 'success' })
}   catch (err) {
    const error = err as FetchError<{ message?: string, statusCode?: number }>

    toast.add({
      title: 'Error',
      description: error.data?.message || 'Error al procesar el formulario',
      color: 'error'
    })
  }
}
</script>

<template>
  <div>
    <UPageHero
      id="inicio"
      class="scroll-mt-16"
      title="Prueba Técnica"
      description="Miguel Angel Morales Arteaga"
      headline="Software Engineer"
    />

    <UPageSection
      id="servicios"
      class="scroll-mt-16"
      title="Servicios"
      description="Mis áreas de expertise"
      :features="features"
    />

    <UPageSection
      id="testimonios"
      class="scroll-mt-16"
      title="Testimonios"
      description="Algunas de las marcas con las que he trabajado"
    />

    <div class="flex justify-center w-full">
      <div class="md:w-30"></div>
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        :autoplay="{ delay: 2000 }"
        wheel-gestures
        :prev="{ variant: 'solid' }"
        :next="{ variant: 'solid' }"
        :items="items"
        :ui="{
          item: 'basis-1/3 lg:basis-1/6 ps-0',
          prev: 'sm:start-0',
          next: 'sm:end-8',
          container: 'ms-0'
        }"
      >
        <img :src="item" width="320" height="320">
      </UCarousel>
      <div class="md:w-30"></div>
    </div>

    <UPageSection
      id="formulario-contacto"
      class="scroll-mt-16"
      title="Contacto"
    />

    <div class="flex justify-center w-full px-4 sm:px-6">
      <UForm :schema="schema" :state="state" class="w-full max-w-2xl space-y-6" @submit="onSubmit">
        <UFormField label="Nombre" name="nombre" class="w-full">
          <UInput v-model="state.nombre" class="w-full" size="lg" placeholder="Nombre" />
        </UFormField>

        <UFormField label="Email" name="email" class="w-full">
          <UInput v-model="state.email" class="w-full" size="lg" placeholder="tu@email.com" />
        </UFormField>
  
        <UFormField label="Mensaje" name="mensaje" class="w-full">
          <UTextarea v-model="state.mensaje" class="w-full" size="lg" placeholder="Mensaje" />
        </UFormField>
  
        <UButton type="submit" block size="lg">
          Submit
        </UButton>
      </UForm>
    </div>

    <div v-if="response" class="flex justify-center mt-5 text-emerald-400 text-lg">
      <p>Backend Response:</p>
      <span>
        {{ response }}
      </span>
    </div>

    <UPageSection
      id="request"
      class="scroll-mt-16"
      title="Http Request"
    />

    <div class="flex justify-center">
      <UPageList>
        <UPageCard
          v-for="(user, index) in users"
          :key="index"
          variant="ghost"
          :to="user.to"
          :target="user.target"
        >
          <template #body>
            <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
          </template>
        </UPageCard>
      </UPageList>
    </div>


  </div>
</template>
