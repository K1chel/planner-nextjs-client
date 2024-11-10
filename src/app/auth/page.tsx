import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo'

import { Auth } from './auth'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
}

const AuthPage = () => {
	return <Auth />
}

export default AuthPage
