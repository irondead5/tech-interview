<script setup lang="ts">
interface NavItem {
  label: string
  to: string
  id: string
}

const navItems: NavItem[] = [
  { label: 'Inicio', to: '/#inicio', id: 'inicio' },
  { label: 'Servicios', to: '/#servicios', id: 'servicios' },
  { label: 'Testimonios', to: '/#testimonios', id: 'testimonios' },
  { label: 'Formulario de contacto', to: '/#formulario-contacto', id: 'formulario-contacto' },
  { label: 'Http Request', to: '/#request', id: 'request' },
]

const activeSection = ref('/#inicio')

function scrollToSection(to: string) {
  activeSection.value = to
  const hash = to.includes('#') ? to.slice(to.indexOf('#')) : ''
  if (!hash) return

  if (window.location.pathname === '/') {
    history.pushState(null, '', hash)
  }

  const element = document.querySelector(hash)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (window.location.hash) {
    activeSection.value = `/${window.location.hash}`
    nextTick(() => {
      const element = document.querySelector(window.location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = `/#${entry.target.id}`
        }
      }
    },
    {
      rootMargin: '-20% 0px -70% 0px'
    }
  )

  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Menú superior centrado -->
    <header class="sticky top-0 z-50 w-full bg-default/80 backdrop-blur border-b border-default">
      <nav
        aria-label="Navegación principal"
        class="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <UButton
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :label="item.label"
            :active="activeSection === item.to"
            color="neutral"
            variant="ghost"
            size="md"
            active-color="primary"
            active-variant="subtle"
            @click.prevent="scrollToSection(item.to)"
          />
        </div>
      </nav>
    </header>

    <!-- Contenido principal -->
    <main class="w-full flex-1">
      <slot />
    </main>

    <div class="h-20"></div>
  </div>
</template>
