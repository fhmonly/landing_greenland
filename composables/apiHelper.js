export function useApiHelper() {
  const transformNewLineToBrTag = (value = "") =>
    value.replace(/(?:\r\n|\r|\n)/g, ' <br class="hidden md:block">');
  return { transformNewLineToBrTag };
}
