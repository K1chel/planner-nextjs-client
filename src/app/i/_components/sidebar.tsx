'use client'

import {
	CalendarRange,
	GanttChartSquare,
	KanbanSquare,
	LayoutDashboard,
	Settings,
	Timer
} from 'lucide-react'
import Link from 'next/link'

import { LogoutButton } from '@/components/logout-button'
import { ModeToggle } from '@/components/mode-toggle'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { IMenuItem, MenuItem } from './menu-item'

export const MENU: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		link: DASHBOARD_PAGES.HOME,
		name: 'Dashboard'
	},
	{
		icon: KanbanSquare,
		link: DASHBOARD_PAGES.TASKS,
		name: 'Tasks'
	},
	{
		icon: Timer,
		link: DASHBOARD_PAGES.TIMER,
		name: 'Pomodoro'
	},
	{
		icon: CalendarRange,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Time blocking'
	},
	{
		icon: Settings,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Settings'
	}
]

export const Sidebar = () => {
	return (
		<aside className='border-r border-r-border h-full bg-secondary/10 flex flex-col justify-between py-3 px-2'>
			<div>
				<Link
					href='/'
					className='flex items-center justify-center gap-2.5 p-layout border-b border-b-border'
				>
					<GanttChartSquare size={38} />
					<span className='text-2xl font-bold relative hidden md:block'>
						Planner
					</span>
				</Link>
				<div className='p-3 relative'>
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-y-3 w-full'>
				<ModeToggle />
				<LogoutButton />
			</div>
		</aside>
	)
}
