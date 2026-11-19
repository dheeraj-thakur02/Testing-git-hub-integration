export function describeLastSync(syncedAt, now = new Date()) {
  if (!syncedAt) return 'Not synced yet';
  const minutes = Math.floor((now.getTime() - syncedAt.getTime()) / 60000);
  if (minutes < 1) return 'Synced just now';
  if (minutes < 60) return `Synced ${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  return hours < 24 ? `Synced ${hours} h ago` : `Synced ${Math.floor(hours / 24)} d ago`;
}
