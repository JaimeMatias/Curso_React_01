import { useEffect, useRef, useState } from "react"

export const useFech = (url) => {
    const isMounted = useRef(true);//Mantiene la referencia del componente mientras el mismo se encuentre montado
    const [state, setState] = useState({ data: null, loading: true, error: true });//El primer valor del state se define acá
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    useEffect(() => {
        setState({ data: null, loading: true, error: null }) //El valor de state mientras carga se muesta acá
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if(isMounted.current){ //Controla que el componente siga existiendo para así llamar al setState
                        setState({
                            loading: false,
                            error: null,
                            data
                        })//Una vez cargado el componente, el state se actualizá acá
                    }
                }, 4000)

            })
    }, [url])
    return state
}