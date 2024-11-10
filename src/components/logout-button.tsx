'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { Button } from './ui/button'
import { authService } from '@/services/auth.service'

export const LogoutButton = () => {
	const router = useRouter()

	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			toast.success('Logout successful')
			router.push('/auth')
		}
	})

	return (
		<Button
			disabled={isPending}
			onClick={() => mutate()}
			className='flex items-center md:justify-start justify-center gap-2'
		>
			<LogOutIcon />
			<span className='hidden md:block'>Logout</span>
		</Button>
	)
}
