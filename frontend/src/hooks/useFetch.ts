import { useEffect, useState } from 'react'
export default function useFetch(url: string) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    url,
                    {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                const res = await response.json();
                setData(res);
                setLoading(false);
            } catch (err: any) {

            }
        }
        getData();
    }, []);

    return { data, loading };
}