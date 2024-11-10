import { GlobalLoader } from '@/components/global-loader'

import { Profile } from './profile'

export const Navbar = () => {
	return (
		<nav className='py-1'>
			<GlobalLoader />
			<Profile />
		</nav>
	)
}
