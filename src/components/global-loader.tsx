'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import { Loader } from './ui/loader'

export const GlobalLoader = () => {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? (
		<div className='fixed inset-0 z-50 top-2'>
			<Loader />
		</div>
	) : null
}
