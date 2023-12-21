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

import { useEffect, useMemo, useState } from 'react';

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState('');
    const customBreakpoints = useMemo(() => [768, 1280], []);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newBreakpoint = '';

            if (width < customBreakpoints[0]) {
                newBreakpoint = customBreakpoints[0].toString();
            } else {
                for (let i = 1; i < customBreakpoints.length; i++) {
                    if (width < customBreakpoints[i]) {
                        newBreakpoint = customBreakpoints[i - 1].toString();
                        break;
                    }
                }
                if (!newBreakpoint) {
                    newBreakpoint = customBreakpoints[customBreakpoints.length - 1].toString();
                }
            }

            setBreakpoint(newBreakpoint);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [customBreakpoints]);

    return breakpoint;
};
