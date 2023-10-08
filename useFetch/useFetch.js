import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    
    const getFetch = async() => {
        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        if(data[0]){
            setState({
                data,
                isLoading: false,
                hasError: null,
            })
        }else{
            setState({
                ...state,
                isLoading: false,
                hasError: 'No hay datos',
            })
        }
    }
    useEffect(() => {
        getFetch();
    }, []);
    
    return {
        ...state
    };
}