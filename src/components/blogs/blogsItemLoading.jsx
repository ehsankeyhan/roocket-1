import React from 'react'
import Skeleton from '@mui/material/Skeleton';


export default function BlogsItemLoading() {
  return (
    <div className='relative bg-neutral-100 rounded-xl cursor-pointer'>
        
        <div className='p-5'>
            <div className='block h-1'></div>
            <div className='aspect-square rounded-xl overflow-hidden'>
                <Skeleton width='100%' height='100%' variant="rounded" />
            </div>
            <Skeleton sx={{ fontSize: '2rem' }} />
            <div className='pt-2 flex text-sm text-neutral-500 justify-between'>
                <Skeleton width={30}  />
                <Skeleton width={30}  />
            </div>
        </div>
        
    </div>
  )
}
