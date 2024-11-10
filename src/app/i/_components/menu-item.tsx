import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export interface IMenuItem {
	link: string
	name: string
	icon: LucideIcon
}

export const MenuItem = ({ item }: { item: IMenuItem }) => {
	return (
		<Link
			href={item.link}
			className={buttonVariants({
				variant: 'ghost',
				className:
					'flex gap-2.5 items-center justify-center md:justify-start my-0.5 transition-colors hover:bg-border rounded-lg w-full'
			})}
		>
			<item.icon />
			<span className='hidden md:block'>{item.name}</span>
		</Link>
	)
}
