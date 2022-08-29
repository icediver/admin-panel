import '@/assets/styles/globals.scss';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import type {AppProps} from 'next/app';

import AuthProvider from '../app/providers/auth-provider/AuthProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function MyApp({Component, pageProps}: AppProps) {
	return (
		
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</QueryClientProvider>
	
	);
}

export default MyApp;
