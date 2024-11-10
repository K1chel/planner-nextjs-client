import { Navbar } from './_components/navbar'
import { Sidebar } from './_components/sidebar'

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className='grid min-h-dvh 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]'>
			<Sidebar />
			<main className='sm:px-7 px-4 overflow-x-hidden max-h-dvh relative'>
				<Navbar />
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout
