export function useApiHelper() {
  const transformNewLineToBrTag = ({ text = "", className = "" }) =>
    text.replace(/(?:\r\n|\r|\n)/g, ` <br class="${className}">`);
  function createSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
  return { transformNewLineToBrTag, createSlug };
}
