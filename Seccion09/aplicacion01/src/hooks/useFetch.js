import { useEffect, useState } from "react"

export const useFech = (url) => {
    const [state, setState] = useState({ data: null, loading: true, error: true });
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            })
    }, [url])
    return state
}