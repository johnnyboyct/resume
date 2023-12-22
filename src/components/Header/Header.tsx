import './Header.css';

import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  Slide,
  useScrollTrigger,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import HideOnScroll from './HideOnScroll';

export interface IHeaderProps {
}
const pages = ['Charts', 'Pricing', 'Blog']
const settings = ['Charts','Profile', 'Account', 'Dashboard', 'Logout']

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window
	children: React.ReactElement
}

function HideOnScroll(props: Props) {
	const { children, window } = props
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined
	})

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

export default function Header(props: IHeaderProps) {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<HideOnScroll {...props}>
			<AppBar>
				<Container maxWidth='xl'>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleOpenNavMenu}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							MUI
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{pages.map(item => (
								<Button key={item} color='primary' onClick={handleCloseNavMenu} href={'#'+item}>
									{item}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	)
}
