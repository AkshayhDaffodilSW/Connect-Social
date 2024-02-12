import {useEffect, useState} from 'react'

export  function useRequiredError(input) {
    
    const [isError, setError] = useState(false)
    useEffect(() =>{
        if(input ===  "")
            setError(true);
        else   
            setError(false);
    },[input])
    return isError;
}
