import { NextRequest, NextResponse } from 'next/server'

import { DASHBOARD_PAGES } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(req: NextRequest, res: NextResponse) {
	const { url, cookies } = req

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isDashboardPage = url.includes('/i')
	const isAuthPage = url.includes('/auth')

	if (isAuthPage && refreshToken)
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))

	if (isAuthPage && !refreshToken) return NextResponse.next()

	if (isDashboardPage && !refreshToken)
		return NextResponse.redirect(new URL('/auth', req.url))
}

export const config = {
	matcher: ['/i/:path*', '/auth/:path']
}
