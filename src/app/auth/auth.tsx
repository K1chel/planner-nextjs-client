'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'

export const Auth = () => {
	const [isLoginForm, setIsLoginForm] = useState<boolean>(false)

	const router = useRouter()

	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess: () => {
			toast.success('Success')
			reset()
			router.push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex h-dvh w-full px-6'>
			<div className='w-full max-w-lg mx-auto flex items-center justify-center'>
				<form
					className='w-full shadow border rounded-xl p-8 space-y-4'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Heading title='Auth' />
					<Input
						{...register('email')}
						id='email'
						label='Email'
						placeholder='example@email.com'
						type='email'
					/>
					<Input
						{...register('password')}
						id='password'
						label='Password'
						placeholder='********'
						type='password'
					/>
					<div className='flex items-center gap-5 justify-center'>
						<Button
							onClick={() => setIsLoginForm(true)}
							className='w-full'
						>
							Login
						</Button>
						<Button
							onClick={() => setIsLoginForm(false)}
							className='w-full'
						>
							Register
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
