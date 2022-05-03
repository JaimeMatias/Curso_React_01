import { useEffect, useState } from "react"

export const useFech = (url) => {
    const [state, setState] = useState({ data: null, loading: true, error: true });//El primer valor del state se define acá
    useEffect(() => {
        setState({data:null,loading:true,error:null}) //El valor de state mientras carga se muesta acá
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                })//Una vez cargado el componente, el state se actualizá acá
            })
    }, [url])
    return state
}