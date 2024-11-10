import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

const Page = () => {
	return <div>Page</div>
}

export default Page
