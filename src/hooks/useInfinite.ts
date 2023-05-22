import fetcher from '@/lib/fetcher'
import useSWRInfinite from 'swr/infinite'
import { SWRInfiniteKeyLoader } from 'swr/infinite'


export const useInfinite = (getKey: SWRInfiniteKeyLoader) => {
const { data, error, mutate, size, setSize } =
 useSWRInfinite(getKey, fetcher)


}