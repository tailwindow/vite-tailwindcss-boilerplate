<template>
  <div class="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
    <div class="relative py-3 sm:mx-auto sm:max-w-xl">
      <div
        class="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-400 to-sky-500 sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"
      />
      <div class="absolute inset-0 -skew-y-6 transform" />
      <div class="relative bg-white px-4 py-10 sm:rounded-3xl sm:p-20">
        <div class="mx-auto max-w-md">
          <div class="flex">
            <img src="@/assets/logo.png" class="h-7 sm:h-8" />
            <h1 class="ml-2 text-xl font-extrabold">Vuewind</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
              <p class="as">Vuewind is a boilerplate that uses :</p>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="flex h-6 items-center sm:h-7">
                    <svg class="h-5 w-5 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Build tool using
                    <a
                      href="https://vitejs.dev/guide/features.html"
                      target="_blank"
                      class="text-sm font-bold text-gray-900"
                    >
                      vite
                    </a>
                    +
                    <a
                      href="https://github.com/frandiox/vite-ssr"
                      target="_blank"
                      class="text-sm font-bold text-gray-900"
                    >
                      vite-ssr
                    </a>
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="flex h-6 items-center sm:h-7">
                    <svg class="h-5 w-5 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="ml-2">
                    CSS framework using
                    <a href="https://tailwindcss.com" target="_blank" class="text-sm font-bold text-gray-900">
                      tailwindcss
                    </a>
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="flex h-6 items-center sm:h-7">
                    <svg class="h-5 w-5 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Frontend framework using
                    <a href="https://v3.vuejs.org/" target="_blank" class="text-sm font-bold text-gray-900"> vue3 </a>
                  </p>
                </li>
              </ul>
              <p>Perfect for you if you want to maintain maximum flexibility and control.</p>
              <p>
                Recommended IDE setup:
                <a href="https://code.visualstudio.com/" target="_blank" class="text-sm font-bold text-gray-900">
                  vscode
                </a>
                +
                <a
                  href="https://github.com/johnsoncodehk/volar"
                  target="_blank"
                  class="text-sm font-bold text-gray-900"
                >
                  volar
                </a>
              </p>
            </div>
            <div class="pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7">
              <p>Want to dig deeper into Guideline?</p>
              <p>
                <a href="https://tailwindcss.com/docs" class="text-blue-600 hover:text-blue-700">
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
