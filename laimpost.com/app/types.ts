interface PageRouteMap {
  Article: 'slug';
}

export interface PageProps<R extends keyof PageRouteMap> {
  params: Record<PageRouteMap[R], string>;
  searchParams: { [key: string]: string | string[] | undefined };
}
