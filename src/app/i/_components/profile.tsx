'use client'

import { Loader } from '@/components/ui/loader'

import { useProfile } from '@/hooks/use-profile'

export const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<div className='absolute top-2 md:right-10 right-6'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
						<p className='font-bold'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>
					<div className='size-10 flex justify-center items-center text-2xl text-current dark:bg-white/20 bg-black/20 rounded uppercase'>
						{data?.user.name?.charAt(0) || 'U'}
					</div>
				</div>
			)}
		</div>
	)
}
