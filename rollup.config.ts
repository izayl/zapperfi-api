
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

const libraryName = 'zapperfi-api'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: libraryName,
      sourcemap: true,
      globals: {
        axios: 'axios',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  watch: {
    include: 'src/**',
  },
  external: ['axios'],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: '.',
    }),
  ],
}
