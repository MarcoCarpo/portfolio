import { useQuery } from '@tanstack/react-query';
import { getData } from '../api';
import { UserJson } from './interfaces';

export const useData = () => {
    const { data, error, isLoading } = useQuery<UserJson>({
        queryKey: ['data'],
        queryFn: getData,
    });

    return { data, error, isLoading };
};
