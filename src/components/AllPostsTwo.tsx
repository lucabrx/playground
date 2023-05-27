"use client"

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { type FC } from 'react';

const API_URL = '/api/posts';

const fetchBlogs = async ({ pageParam = 0 }) => {
  const batchSize = 10;
    const offsetValue = pageParam;
  const response = await axios.get<SafePost[]>(API_URL, {
    
    params: {
      offset: offsetValue, 
      limit: batchSize, 
    },
  });
  return response.data;
};

const useFetchBlogs = () => {
  return useInfiniteQuery(['blogs'], fetchBlogs, {
    getNextPageParam: (lastPage, allPages) => {
      const lastPageLength = lastPage.length;
      return lastPageLength > 0 ? allPages.length * 10 : undefined;
    },
  });
};

const AllPostsTwo: FC= ({}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchBlogs();


  return (
    <div>
    {data?.pages?.map((page, pageIndex) => (
      <React.Fragment key={pageIndex}>
        {page?.map((blog) => (
          <div key={blog.id}>{blog.content}</div>
        ))}
      </React.Fragment>
    ))}

    {hasNextPage && (
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? 'Loading more...' : 'Load More'}
      </button>
    )}
  </div>
)
}

export default AllPostsTwo