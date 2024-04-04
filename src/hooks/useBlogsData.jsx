import { useEffect, useState } from 'react'

export default function useBlogsData(url) {
    const [blogs , setBlogs] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState(null)
    
    useEffect(()=>{
        
        const fetchData = async ()=>{
            try {
                let res = await fetch (url)
                let data = await res.json()
                setBlogs(data)
                setIsLoading(false)
            } catch (error) {
                console.log('error'); 
                setError(error)  
            }
        }
        fetchData()
    },[url])

  return {blogs , error ,isLoading};
}
