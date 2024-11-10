type HeadingProps = {
	title: string
}

export const Heading = ({ title }: HeadingProps) => {
	return (
		<div>
			<h1 className='text-3xl font-medium'>{title}</h1>
			<div className='my-3 h-px bg-border w-full' />
		</div>
	)
}
