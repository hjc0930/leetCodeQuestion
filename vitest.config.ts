import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: "node",
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
  },
})