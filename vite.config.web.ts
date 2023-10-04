import { defineConfig } from 'vite'
import path from 'path'
// import dts from 'vite-plugin-dts'

const config = defineConfig({
  build: {
    minify: false,
    lib: {
      entry: ["./index.html"],
      name: "voby-progress-bar",
      formats: ['cjs', 'es', 'umd'],
      fileName: (format: string, entryName: string) => `${entryName}.${format}.js`
    },
    outDir: './build',
    sourcemap: false,
    rollupOptions: {
      external: ['voby', 'oby', 'voby/jsx-runtime', 'react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          'voby': 'voby',
          'voby/jsx-runtime': 'voby/jsx-runtime',
        }
      }
    }
  },
  esbuild: {
    jsx: 'automatic',
  },
  plugins: [
    // dts({ entryRoot: './src', outputDir: './dist/types' })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})



export default config
