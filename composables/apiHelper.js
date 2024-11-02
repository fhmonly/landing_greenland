export function useApiHelper() {
  const transformNewLineToBrTag = ({ text = "", className = "" }) =>
    text.replace(/(?:\r\n|\r|\n)/g, ` <br class="${className}">`);
  return { transformNewLineToBrTag };
}
