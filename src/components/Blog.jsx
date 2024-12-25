import React from 'react'

function Blog() {
  return (
    <div class="bg-white font-sans p-4">
    <div class="max-w-5xl max-lg:max-w-3xl max-md:max-w-sm mx-auto">
      <div>
        <h2 class="text-3xl font-extrabold text-gray-800 inline-block">LATEST BLOGS</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
          <div class="h-64 lg:w-full">
            <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800">A Guide to Igniting Your Imagination</h3>
            <span class="text-sm block text-gray-400 mt-2">10 FEB 2023 | BY JOHN DOE</span>
            <p class="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
            <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Read More</a>
          </div>
        </div>
        <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
          <div class="h-64 lg:w-full">
            <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800">Hacks to Supercharge Your Day</h3>
            <span class="text-sm block text-gray-400 mt-2">7 JUN 2023 | BY MARK ADAIR</span>
            <p class="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
            <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Read More</a>
          </div>
        </div>
        <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
          <div class="h-64 lg:w-full">
            <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 2" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800">Trends and Predictions</h3>
            <span class="text-sm block text-gray-400 mt-2">5 OCT 2023 | BY SIMON KONECKI</span>
            <p class="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
            <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Read More</a>
          </div>
        </div>
        <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
          <div class="h-64 lg:w-full">
            <img src="https://readymadeui.com/team-image.webp" alt="Blog Post 2" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800">Innovators Changing the Game</h3>
            <span class="text-sm block text-gray-400 mt-2">10 DEC 2023 | BY SIMON KONECKI</span>
            <p class="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
            <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog