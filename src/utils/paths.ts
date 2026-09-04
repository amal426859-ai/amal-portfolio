// Base-path helper. `import.meta.env.BASE_URL` is Astro's own base URL
// (always "/" unless overridden by `base` in astro.config.mjs, always
// ends in "/"). Wrapping every internal absolute href/src with this
// keeps the Hostinger production build (base "/") byte-identical to
// before, while making a subpath deployment (e.g. GitHub Pages'
// /amal-portfolio/) work without touching any design or content.

export const base = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}

// Inverse of withBase: given Astro.url.pathname (which includes the base
// prefix), returns the app-relative path as if base were "/".
export function stripBase(pathname: string): string {
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  if (trimmedBase && pathname.startsWith(trimmedBase)) {
    const rest = pathname.slice(trimmedBase.length);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return pathname;
}
