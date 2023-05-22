"use client"
import axios from 'axios';
import React, { type FC } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query'

export interface IInfinitePage {
  nextCursor: number | undefined;
  page: {
    post: SafePost;
    hasMore: boolean;
  };
}

async function fetchPaginatedData(pageParam = 0) {
  const pageSize = 10; // Replace with your desired page size
  const offset = pageSize * pageParam;
  const apiUrl = `/api/posts?page=${offset}&limit=${pageSize}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching paginated data');
  }
}

const AllPostsTwo: FC = ({}) => {

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['paginatedData'],
    ({ pageParam }) => fetchPaginatedData(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.length === 10 ? lastPage.length : null; // Assuming 10 items per page
        return nextPage;
      },
    }
  );
 
  console.log(data)

  return (
    <div>
    {data?.pages.map((page, pageIndex) => (
      <div key={pageIndex}>
        {page.map((item: SafePost) => (
          <div key={item.id}>{item.content}</div>
        ))}
      </div>
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