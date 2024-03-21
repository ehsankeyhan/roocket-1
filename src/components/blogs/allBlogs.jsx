import React, { useEffect, useState } from 'react'
import BlogsItem from './blogsItem'
import BlogsItemLoading from './blogsItemLoading'

export default function AllBlogs() {

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

  return (
    <div className=''>
        <p className=' text-left font-extrabold text-3xl mb-10'>Blogs</p>
        <div className='grid grid-cols-4 gap-x-12 gap-y-20'>
            {blogs?(blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((item,index)=>(
                <BlogsItem blog={item} index={index} key={index}/>
            )))
            :<>
            {[...Array(4)].map((_, index) => (
                <div key={index} className=''>
                    <BlogsItemLoading />
                </div>
            ))}
            </>}
        </div>
    </div>
  )
}
