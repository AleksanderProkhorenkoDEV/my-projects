import { displayInfoMessage } from '@/lib/Static/Static';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const useDebouncedSearchParams = (queryName, debounceDelay = 300) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleChange = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams); 
        
        if (term) {
            params.set(queryName, term);
            if(!params.has('query')) displayInfoMessage('You must be include the name of the movie')
        } else {
            params.delete(queryName);
        }
        replace(`${pathName}?${params.toString()}`, {scroll:false});
    }, debounceDelay);

    return handleChange;
};

export default useDebouncedSearchParams;
