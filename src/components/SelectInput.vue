<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="relative w-[30rem]">
    <!-- trigger button -->
    <button
      @click="$emit('toggle-select')"
      type="button"
      class="flex w-full items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300"
      :class="isShow && 'ring-blue-600'"
    >
      <span x-text="(language == '') ? 'Choose language' : language"></span>
      {{ value }}
      <svg
        class="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- list items -->
    <ul
      v-show="isShow"
      class="z-2 absolute mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300"
      x-show="open"
    >
      <li
        @click="$emit('select-option', option)"
        class="cursor-pointer select-none p-2 hover:bg-gray-200"
        v-for="(option, index) in options"
        :key="index"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
