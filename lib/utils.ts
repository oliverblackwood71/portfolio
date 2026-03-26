export function absoluteUrl(path: string) {
  const base = "https://example.vercel.app";
  return new URL(path, base).toString();
}
