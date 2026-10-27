import en, { type Dict } from './en';
import lt from './lt';
import ru from './ru';

export type Locale = 'en' | 'lt' | 'ru';
export const locales: Locale[] = ['en', 'lt', 'ru'];
export const dicts: Record<Locale, Dict> = { en, lt, ru };

export type PageKey = 'home' | 'liveIn' | 'reset' | 'endOfLife' | 'hypno' | 'about' | 'contact' | 'consent';

// File names are the live URLs since 2026-06; keep them so links and rankings survive.
export const files: Record<PageKey, string> = {
  home: '',
  liveIn: 'live-in-care.html',
  reset: 'short-term-live-in-care.html',
  endOfLife: 'end-of-life.html',
  hypno: 'hypnotherapy.html',
  about: 'about.html',
  contact: 'contact.html',
  consent: 'consent.html',
};

export const site = {
  url: 'https://www.albawellbeing.co.uk',
  tel: '+447300403632',
  email: 'albalinasima25@icloud.com',
};

/** Root-relative URL of a page in a locale: `/about.html`, `/lt/about.html`, `/lt/`. */
export const href = (locale: Locale, page: PageKey) =>
  `${locale === 'en' ? '/' : `/${locale}/`}${files[page]}`;

export const absolute = (path: string) => new URL(path, site.url).href;

/** getStaticPaths for `[...lang]` routes: English at the root, LT and RU in folders. */
export const localePaths = () =>
  locales.map((locale) => ({ params: { lang: locale === 'en' ? undefined : locale }, props: { locale } }));

export const navPages: PageKey[] = ['liveIn', 'endOfLife', 'hypno', 'about', 'contact'];
