export interface PageProps<P = Record<string, string>, S = Record<string, string>> {
  params: P;
  searchParams: S;
}
