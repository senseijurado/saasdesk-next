export function dateFormatted(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
