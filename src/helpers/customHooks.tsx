import { useQuery } from '@tanstack/react-query';
import api from '../api';
import { UserJson } from './interfaces';

export const useData = () => {
    const getData = async () => {
        const res = await api.get<UserJson>('/getProfileData');
        return res.data;
    };

    const { data, error, isLoading } = useQuery<UserJson>({
        queryKey: ['data'],
        queryFn: getData,
    });

    return { data, error, isLoading };
};
