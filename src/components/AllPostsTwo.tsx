"use client"
import {usePosts} from '@/hooks/usePosts';
import fetcher from '@/lib/fetcher';
import axios from 'axios';
import { type FC } from 'react';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';




const AllPostsTwo: FC = ({}) => {

const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    return `/api/posts/?page=${pageIndex}&limit=10`                  
}

     const { data, size, setSize } = useSWRInfinite(getKey, fetcher)
    if(!data) return <div>loading...</div>

    let totalPosts = 0
    for (let i = 0; i < data.length; i++) {
      totalPosts += data[i].length
    }
   
    console.log(data)
  
   

return (
<div className='p-2 bg-slate-900 text-slate-100 rounded-md mx-2 mt-2'>
<p>{totalPosts} users listed</p>
    {data.map((users, index) => {
      // `data` is an array of each page's API response.
      return users.map((post: SafePost) => <div key={post.id}>{post.content}</div>)
    })}
    <button onClick={() => setSize(size + 1)}>Load More</button>
</div>
)
}

export default AllPostsTwo