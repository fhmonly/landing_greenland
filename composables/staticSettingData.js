export const useDataSettings = () => useState('data-settings', () => null)
export async function useFetchDataSettings() {
    const config = useRuntimeConfig()
    const { data, status, error, refresh } = await useFetch(`${config.public.apiUrl}/settings`, {
        key: "api-settings",
        pick: ["data"],
    })
    return { dataSettings: data, statusSettings: status, errorSettings: error, refreshSettings: refresh }
}