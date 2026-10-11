// Tailwind CSS runs only where it is imported: the administration's own
// components (src/app/(payload)/admin-ui.css). The public site keeps its CSS modules.
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
