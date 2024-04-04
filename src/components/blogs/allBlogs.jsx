import React from 'react'
import BlogsItem from './blogsItem'
import BlogsItemLoading from './blogsItemLoading'
import useBlogsData from '../../hooks/useBlogsData'
import Alert from '@mui/material/Alert';



export default function AllBlogs() {

  const url = 'https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/blogs'
  const {blogs,error,isLoading} = useBlogsData(url)

  return (
    <div className=''>
        <h2 className=' text-left font-extrabold text-3xl mb-10'>Blogs</h2>
        <div className='grid grid-cols-4 gap-x-12 gap-y-20'>
            {blogs && !isLoading?(blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((item,index)=>(
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
        {error?<Alert severity="error">{error}</Alert>:''}
    </div>
  )
}
