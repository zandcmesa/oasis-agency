export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/oasis-agency";
  return `${basePath}${path}`;
}
