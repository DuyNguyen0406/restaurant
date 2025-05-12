// postcss.config.mjs
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindcssPlugin from '@tailwindcss/postcss'; // Import plugin mới

const config = {
  plugins: [
    tailwindcssPlugin(), // Sử dụng plugin mới
    autoprefixer(),
  ],
}

export default config