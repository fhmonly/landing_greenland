export function useApiHelper() {
    const transformNewLineToBrTag = (value = '') => value.replace(/(?:\r\n|\r|\n)/g, '<br>')
    return { transformNewLineToBrTag }
}