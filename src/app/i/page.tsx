import { Metadata } from 'next'

import { Heading } from '@/components/ui/heading'

import { NO_INDEX_PAGE } from '@/constants/seo'

import { Statistics } from './statistics'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

const Page = () => {
	return (
		<div>
			<Heading title='Statistics' />
			<Statistics />
		</div>
	)
}

export default Page
