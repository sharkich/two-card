export default function defined<T>(value: T | null | undefined): T {
  if (!value) {
    throw new Error("Value isn't defined");
  }
  return value;
}
