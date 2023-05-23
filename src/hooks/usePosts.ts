import fetcher from '@/lib/fetcher';
import useSwr from 'swr';

export  function usePosts() {

    const {data:posts,mutate, error,isLoading} =  useSwr("/api/posts", fetcher, {
    })

    return {
        posts,
        error,
        isLoading,
        mutate
    }
}