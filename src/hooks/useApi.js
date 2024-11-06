import { useState } from "react";

const useApi = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const callApi = async ({ method = 'GET', url, body = null, headers = {} }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: method !== 'GET' && body ? JSON.stringify(body) : null
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);
            return result;
        } catch (error) {
            setError(err.message);
            console.error("API call error:", err);
        } finally {
            setLoading(false);
        }
    }
    return { data, error, loading, callApi };
}
export default useApi;