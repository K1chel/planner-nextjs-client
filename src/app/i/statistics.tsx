'use client'

import { Loader } from '@/components/ui/loader'

import { useProfile } from '@/hooks/use-profile'

export const Statistics = () => {
	const { data, isLoading } = useProfile()

	if (isLoading) return <Loader />

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-7'>
			{data?.statistics.length ? (
				data.statistics.map(stat => (
					<div
						key={stat.label}
						className='bg-secondary rounded p-6 text-center hover:-translate-y-3 transition-transform duration-500'
					>
						<div className='text-xl'>{stat.label}</div>
						<div className='text-3xl font-semibold'>{stat.value}</div>
					</div>
				))
			) : (
				<div>No statistics</div>
			)}
		</div>
	)
}
