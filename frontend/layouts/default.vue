<template>
  <div class="min-h-screen bg-[#FAF9F6] dark:bg-black text-black dark:text-white transition-all duration-1000 ease-in-out">
    <div>
      <header class="p-4 max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="https://github.com/fikfan/carbon-history" target="_blank" class="text-2xl font-bold transition-colors duration-300 hover:underline hover:text-gray-400">carbon history</a>
        <div class="flex items-center space-x-4 md:space-x-8">
          <!-- Social links -->
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/wol-cut.png" alt="Your Name" class="w-8 h-8 rounded-full social-icon-link">
          </a>
          <a href="https://github.com/fikfan" target="_blank" rel="noopener noreferrer" class="social-icon-link">
            <Github class="h-6 w-6" />
          </a>
          <a href="https://x.com/tkiddev" target="_blank" rel="noopener noreferrer" class="social-icon-link">
            <Twitter class="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/fikfans/" target="_blank" rel="noopener noreferrer" class="social-icon-link">
            <Linkedin class="h-6 w-6" />
          </a>
        </div>
      </header>
    </div>
  
    <main class="p-4 max-w-screen-xl mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { Github, Twitter, Linkedin } from 'lucide-vue-next';
</script>

<style scoped>
.social-icon-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.social-icon-link:hover {
  transform: scale(1.1) translateY(-2px);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.social-icon-link:hover {
  animation: bounce 0.5s ease infinite;
}
</style>