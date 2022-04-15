import { useEffect, useState } from "react"
import { getGifs } from "../../helpers/getGifs"

export const useFetchGifs = (category) => {
    console.log('Valor en UseFetchGifs',category)
    const [state, setState] = useState({
        data: [],
        loading: true
    })


    useEffect(() => {
        console.log('El valor a enviar a GetGif',category)
        getGifs(category).then(imgs => {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })

            }, 3000)


        }
        )
    }, [category]
    )

    return state
}