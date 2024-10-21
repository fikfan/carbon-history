<template>
  <div class="min-h-screen bg-[#F5F5F5] dark:bg-black text-black dark:text-white transition-all duration-1000 ease-in-out">
    <div>
      <header class="p-4 max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold transition-colors duration-300">carbon history</h1>
        <a href="https://github.com/fikfan" class="text-2xl font-bold transition-colors duration-300 hover:underline">@fikfan</a>
      </header>
    </div>
  
    

    <!-- Slot for page content -->
    <main class="p-4 max-w-screen-xl mx-auto">
      <slot />
    </main>
    
  </div>
</template>