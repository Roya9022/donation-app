export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 5) return 'Good night 🌙';
  if (hour < 12) return 'Good morning ☀️';
  if (hour < 17) return 'Good afternoon 🌤️';
  return 'Good evening 🌙';
}
