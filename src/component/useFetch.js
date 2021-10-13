import {useState, useEffect} from 'react'
import axios from 'axios'
const useFetch = (url) => {
    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)

    useEffect( () => {
        let cancelToken = axios.CancelToken
        let source = cancelToken.source()
        const fetchData = async () => {
            try{
                setLoading(true)
                var res = await axios.get(url,{cancelToken: source.token})    
                setData(res.data)
                setLoading(false)
            }
            catch(err){
                if (axios.isCancel(err)) {
                    console.log(err.message)
                }
                else{
                    console.log(err)
                    setError(true)   
                }  
            }
        }
        fetchData()
        return ()=>{
            source.cancel('Request cancelled');
        }
    },[url])
    return {data, error, loading}
}
export default useFetch
