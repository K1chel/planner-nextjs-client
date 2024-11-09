'use client'

import { useTheme } from 'next-themes'
import { Toaster } from 'sonner'

export const ToasterProvider = () => {
	const { theme } = useTheme()

	return (
		<Toaster
			theme={theme === 'dark' ? 'dark' : 'light'}
			position='bottom-right'
			duration={1500}
			richColors
		/>
	)
}
