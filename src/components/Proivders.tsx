"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type FC } from 'react';

interface ProivdersProps {
  children : React.ReactNode
}

const Proivders: FC<ProivdersProps> = ({children}) => {
    const queryClient = new QueryClient()
  return (
<QueryClientProvider client={queryClient}> 
{children}
</QueryClientProvider>
)
}

export default Proivders