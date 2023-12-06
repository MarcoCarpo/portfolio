/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'normalize.css';
import './index.scss';
import { AppProvider } from './context/AppContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppProvider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </AppProvider>
    </React.StrictMode>,
);
