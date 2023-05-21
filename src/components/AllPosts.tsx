"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type FC } from 'react';

interface AllPostsProps {
  
}


const AllPosts: FC<AllPostsProps> = ({}) => {
    
    const {data} = useQuery({
        queryKey: ['posts'],
        queryFn: async  () => await axios.get('/api/posts'),
    })

return (
<div className='p-2 bg-slate-900 text-slate-100 rounded-md mx-2 mt-2'>
{
data?.data.map((post : SafePost) => ( 
    <h1 key={post.id}>
{post.content}
    </h1>
))}
</div>
)
}

export default AllPosts