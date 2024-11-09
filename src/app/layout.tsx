import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { QueryClientProvider } from '@/providers/query-client-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { ToasterProvider } from '@/providers/toaster-provider'

import { SITE_NAME } from '@/constants/seo'

import './globals.css'

const zen = Noto_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Plan your day as a developer.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={zen.className}>
				<QueryClientProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<ToasterProvider />
					</ThemeProvider>
				</QueryClientProvider>
			</body>
		</html>
	)
}
