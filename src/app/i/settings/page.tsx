import { Metadata } from 'next'

import { Heading } from '@/components/ui/heading'

import { NO_INDEX_PAGE } from '@/constants/seo'

import { Settings } from './settings'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}

const SettingsPage = () => {
	return (
		<div>
			<Heading title='Settings' />
			<Settings />
		</div>
	)
}

export default SettingsPage
