
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient= new QueryClient();

import './index.css'
createRoot(document.getElementById('root')!).render(
  <>
   <QueryClientProvider client={queryClient}>
    <App />
    <Toaster richColors position='bottom-right'/>
</QueryClientProvider>
  </>
   

 
)
