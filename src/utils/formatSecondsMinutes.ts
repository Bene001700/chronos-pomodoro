export function formatSecondsMinutes(seconds: number) {
  const minutes = String(Math.floor(seconds / 60));
  const secondsMod = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secondsMod}`;
}
