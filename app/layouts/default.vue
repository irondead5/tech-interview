<script setup lang="ts">
interface NavItem {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Testimonios', to: '/testimonios' },
  { label: 'Formulario de contacto', to: '/formulario-contacto' }
]
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Menú superior centrado -->
    <header class="sticky top-0 z-50 w-full">
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
            color="neutral"
            variant="ghost"
            size="md"
            active-color="primary"
            active-variant="subtle"
          />
        </div>
      </nav>
    </header>

    <!-- Contenido principal -->
    <main class="w-full flex-1">
      <slot />
    </main>
  </div>
</template>
