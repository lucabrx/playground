"use client"
import { useCallback, type FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewPostSchema, NewPostType } from '@/schema/post.schema';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PostFormProps {
  session : SafeUser | null;
}





const PostForm: FC<PostFormProps> = ({}) => {
    const queryClient = useQueryClient()
    // react hook form
    const {handleSubmit,register,reset} = useForm<NewPostType>({
        resolver: zodResolver(NewPostSchema),
    })

    const {mutate} = useMutation({
      mutationFn: async (data: NewPostType) => (await axios.post('/api/posts/new',data)),
      onSuccess: () => {
        queryClient.invalidateQueries(['posts'])
        reset()
        console.log("success")
      }
    })
  
    // submit handler
    const onSubmit = (data: NewPostType) => {
        mutate(data)
        reset()
    }
  return (
<form 
onSubmit={handleSubmit(onSubmit)}
className='w-full flex flex-col justify-center items-center space-y-2'> 
<textarea 
{...register('content')}
className='p-2 bg-slate-300/40 px-4 rounded-md resize-none h-14 ' />
<button type="submit" className='bg-emerald-600 rounded-md px-4 py-2 text-white'>
submit
</button>
</form>
)
}

export default PostForm