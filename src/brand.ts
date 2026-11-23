// Identidade da marca em um só lugar.
// Para trocar o logo: mude BRAND_OPTION para 2 ("HIRSAN STUDIO") e rode o build.
import opt1Logo from './assets/brand/opt1-wordmark.svg?raw';
import opt2Logo from './assets/brand/opt2-lockup.svg?raw';

export const BRAND_OPTION: 1 | 2 = 1;

const options = {
  1: { logo: opt1Logo, favicon: '/favicon.svg' },
  2: { logo: opt2Logo, favicon: '/favicon-opt2.svg' },
} as const;

export const brand = {
  name: 'Hirsan',
  ...options[BRAND_OPTION],
};
