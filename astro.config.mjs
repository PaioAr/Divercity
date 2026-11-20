import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// En GitHub Actions, GITHUB_REPOSITORY = "usuario/repo": con eso se arma solo la URL y la carpeta base.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const esSitioPersonal = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: repo && !esSitioPersonal ? `/${repo}` : '/',
  vite: { plugins: [tailwindcss()] },
});
