export default function isClientStore() {
  return typeof window === "undefined";
}
