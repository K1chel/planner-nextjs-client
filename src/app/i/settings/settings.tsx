'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from './use-initial-data'
import { useUpdateSettings } from './use-update-settings'

export const Settings = () => {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData({ reset })

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: data.password || undefined
		})
	}

	return (
		<div>
			<form
				className='w-full space-y-5'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3'>
					<div className='space-y-3'>
						<Input
							id='email'
							label='Email'
							type='email'
							placeholder='example@email.com'
							{...register('email', {
								required: 'Email is required'
							})}
						/>
						<Input
							id='name'
							label='Name'
							placeholder='John Doe'
							{...register('name')}
						/>
						<Input
							id='password'
							label='Password'
							type='password'
							placeholder='********'
							{...register('password')}
						/>
					</div>
					<span className='block md:hidden md:h-0 h-px bg-secondary/50' />
					<div className='space-y-3'>
						<Input
							id='workInterval'
							label='Work Interval (min.)'
							placeholder='Enter work interval (min.)'
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
						/>
						<Input
							id='breakInterval'
							label='Break Interval (min.)'
							placeholder='Enter break interval (min.)'
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
						/>
						<Input
							id='intervalsCount'
							label='Intervals count (max 10)'
							placeholder='Enter intervals count (max 10)'
							isNumber
							{...register('intervalsCount', {
								valueAsNumber: true
							})}
						/>
					</div>
				</div>
				<Button
					type='submit'
					disabled={isPending}
					className='w-full md:w-auto'
				>
					Save
				</Button>
			</form>
		</div>
	)
}
