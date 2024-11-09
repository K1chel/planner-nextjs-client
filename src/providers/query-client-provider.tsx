'use client'

import {
	QueryClientProvider as Provider,
	QueryClient
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export const QueryClientProvider = ({ children }: React.PropsWithChildren) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<Provider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</Provider>
	)
}
