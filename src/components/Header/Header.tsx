import './Header.css';

import * as React from 'react';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { extendTheme as chakraExtendTheme, Divider, Drawer, List, ListItem } from '@chakra-ui/react';
import MenuIcon from '@mui/icons-material/Menu';
import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { createTheme as muiCreateTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
  themeDark,
  themeLight,
} from '../../theme';

const chakraTheme = chakraExtendTheme();
const materialTheme = muiCreateTheme();
// import HideOnScroll from './HideOnScroll';

export interface IHeaderProps {
	jsonResume: any
	children: React.ReactElement
	window?: () => Window
}
interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window
	children: React.ReactElement
}
const routes = ['home', 'intro',

	'skills',
	'experience',
	'about',
	'contact',
	'charts',
	'education',
	'references']



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
	const { jsonResume, children } = props;
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
	return (
		<React.Fragment>
			<HideOnScroll {...props}>
				<>
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
								color={'primary'}
								sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
							>
								{jsonResume.basics.name}
							</Typography>
							<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
								<nav>
									{routes.map(item => (
										<Button key={item} color='primary' onClick={handleCloseNavMenu} >
											<NavLink to={'/' + (item !== 'home' ? item : '')}>{item}</NavLink>
										</Button>
									))}

									{children}
								</nav>

							</Box>
						</Toolbar>
					</Container>
					</AppBar>
					        <Drawer
						variant="permanent"
						isOpen
						onClose={function (): void {
							throw new Error('Function not implemented.');
						} }        >https://mui.com/material-ui/react-stepper/
          {drawer}
        </Drawer>
					</>

			</HideOnScroll>
		</React.Fragment>
	)
}
