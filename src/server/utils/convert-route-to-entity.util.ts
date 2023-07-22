const mapping: Record<string, string> = {
  advertisements: 'advertisement',
  games: 'game',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
