"use client"
import {usePosts} from '@/hooks/usePosts';
import axios from 'axios';
import { type FC } from 'react';

interface AllPostsProps {
  
}


const AllPosts: FC<AllPostsProps> = ({}) => {
   
    const { posts } = usePosts()
   

return (
<div className='p-2 bg-slate-900 text-slate-100 rounded-md mx-2 mt-2'>
{
    posts?.map((post: SafePost) => (
        <h2 key={post.id} className='text-center'>{post.content}</h2>
    ))
}
</div>
)
}

export default AllPosts