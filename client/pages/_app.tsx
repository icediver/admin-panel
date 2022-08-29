import type { AppProps } from 'next/app';

import '@/assets/styles/globals.scss';

import AuthProvider from '../app/providers/auth-provider/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
