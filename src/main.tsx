/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppProvider } from './context/AppContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'normalize.css';
import './scss/index.scss';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppProvider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </AppProvider>
    </React.StrictMode>,
);
