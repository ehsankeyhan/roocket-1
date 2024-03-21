import React, { useEffect, useState } from 'react'

export default function Footer() {
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
    <div className='bg-blue-500 text-white w-full'>
        <div className='bg-blue-500 justify-between  p-20 flex'>
            <div>
                <p className='font-bold text-xl mb-5' >About Us</p>
            </div>
            <div>
                <p className='font-bold text-xl mb-5' >Contact Us</p>
                <p>Call us at <a href='tel:+9822222222'>+9822222222</a></p>
            </div>
            <div>
                <p className='font-bold text-xl mb-5'>Latest Blogs</p>
                <div className='flex-col flex gap-y-1 text-sm'>
                    {blogs&&(blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,5).map((item,index)=>(
                        <p key={index} className='text-neutral-300 hover:text-white cursor-pointer'>{item.title}</p>
                    )))}
                </div>
            </div>
        </div>
        <div className='text-center py-5 border-t-[1px] border-neutral-200'>
            <p>&copy; {new Date().getFullYear()} Blogs. All rights reserved.</p>
        </div>
    </div>
  )
}
