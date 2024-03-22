import { useEffect, useState } from 'react'

export default function useBlogsData() {
    const [blogs , setBlogs] = useState(null)
    
    useEffect(()=>{
        
        const fetchData = async ()=>{
            try {
                let res = await fetch ('https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/blogs')
                let data = await res.json()
                setBlogs(data)
            } catch (error) {
                console.log(error);   
            }
        }
        fetchData()
    },[])

  return blogs;
}
