export const useDataSettings = () => useState('data-settings', () => null)
export function useFetchDataSettings() {
    const config = useRuntimeConfig()
    const { data, status, error, refresh } = useFetch(`${config.public.apiUrl}/settings`, {
        key: "api-settings",
        pick: ["data"],
    })
    return { dataSettings: data, statusSettings: status, errorSettings: error, refreshSettings: refresh }
}