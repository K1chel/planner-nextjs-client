import { LoaderIcon } from 'lucide-react'
import React from 'react'

export const Loader = () => {
	return (
		<div className='flex items-center justify-center'>
			<LoaderIcon className='animate-spin size-5 text-muted-foreground' />
		</div>
	)
}
