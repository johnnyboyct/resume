import './Terminal.css';

import React, { useEffect } from 'react';

import { TypedTerminal } from 'react-component-typed-terminal';
import { useCookies } from 'react-cookie';

import ArrowDropDownCircleOutlinedIcon
  from '@mui/icons-material/ArrowDropDownCircleOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import {
  Button,
  DialogActions,
  Slide,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';

export interface ITerminalProps {
	theme?: any,
	basics: object,
	terminalOpts: any
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return (<Slide direction="up" ref={ref} {...props} />);
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialog-container': {
		// marginTop: '2em',
	},
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export default function Terminal({ theme, basics, terminalOpts }: ITerminalProps) {

	// console.log(terminalOpts)
	const [open, setOpen] = React.useState(false);
	const [cookies, setCookie] = useCookies(["terminal"]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (!cookies.terminal) {
			setOpen(true);
			// setCookie("terminal", true, { path: '/' });
		} else {

		}
		console.log(cookies)
	}, [])
	const typedJsProps = {
		loop: false,
		typeSpeed: 50,
		backSpeed: 50, showCursor: true,
		smartBackspace: true,
		onComplete: (self: any) => {
			console.log(self);
		}


	}

	const terminalData = [
		{
			command: "ls -a ./folder-1",
			results: ["file 1", "file 2", "file 3", "file 4"],
		},
		{
			command: "ls -a ./folder-2",
			results: ["file 1", "file 2", "file 3", "file 4"],
		},
	]
	return (
		// <div className="wrapper">
		<BootstrapDialog
			fullScreen
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}
			sx={{ backgroundColor: 'unset'}}
		>



			<DialogTitle sx={{ m: 0, p: '3px', backgroundColor: theme.palette.primary.linuxBG, color: theme.palette.primary.paperBG, }} id="customized-dialog-title">
				<HelpOutlineOutlinedIcon sx={{ color: theme.palette.primary.paperBG, float: 'left', display: 'inline', fontSize: '1.5em', margin: '0, 10px' }} />
				<Typography sx={{ color: theme.palette.primary.paperBG, display: 'block', textAlign: 'center', fontSize: '1em' }}>John Marczak, Full Stack Software Developer</Typography>
			</DialogTitle>

			<IconButton
				size="large"
				aria-label="close"
				onClick={handleClose}
				sx={{
					position: 'absolute',
					right: 8,
					top: 4,
					padding: 0,
					color: (theme) => theme.palette.primary.paperBG,
				}}
			>
				<ArrowDropDownCircleOutlinedIcon sx={{ color: theme.palette.primary.paperBG, fontSize: '1em', margin: '0, 10px'}} />
				<HighlightOffOutlinedIcon sx={{ color: theme.palette.primary.paperBG, fontSize: '1em', margin: '0, 10px' }}  />

			</IconButton>

			<DialogContent dividers style={{ padding: 0 }} className='' sx={{ backgroundColor: theme.palette.primary.linuxTermBG, color: theme.palette.primary.paperBG, opacity: '85%' }}>
				{/* <div className="plain outer">
					<div className="inner"></div>
				</div> */}
				{/* <Container fixed className="term"> */}

				{/* <TerminalLine
						promptText={terminalOpts.promptText }
						typedJsProps={{
							loop: false,
							showCursor: false,
							strings: terminalOpts.introCommands,
							typeSpeed: 40
						}}
					/> */}


				{/* {terminalOpts.introCommands.map((command: { command: string; results: string[]; }[]) => {
						return (
							<TypedTerminal promptText={terminalOpts.promptText} title="Welcome To JohnM.org" typedJsProps={typedJsProps} terminalData={terminalData} />
						);
					})} */}
				<TypedTerminal  promptText={terminalOpts.promptText} title="Welcome To JohnM.org" typedJsProps={typedJsProps} terminalData={terminalOpts.terminalData} />

				{/* <div className="flicker"></div>
				<div className="scanlines"></div>
				<div className="noise"></div> */}

				{/* <TypedTerminal
					promptText={"John@johnm.org:~$"}
					terminalData={[
						{
							command: '^200cd welcome',
							results: [
								''
							]
						},
						{
							command: '^200cat John_Marczak_Welcome.txt',
							results: [
								'',
								'file 2'
							]
						},
						{
							command: '^200ls -a ./folder-3',
							results: [
								'file 1',
								'file 2'
							]
						},
						{
							command: '^200ls -a ./folder-4',
							results: [
								'file 1',
								'file 2'
							]
						}
					]}
					typedJsProps={{}}
					title={'John Marczak'}
					/> */}
				{/* </Container> */}
			</DialogContent>
			<DialogActions>
				<Button variant="contained" color="success" aria-label="close"
					onClick={handleClose} startIcon={<CheckCircleRoundedIcon />}>
					Close & Enter Site
				</Button>
			</DialogActions>
		</BootstrapDialog>
		// </div >
	);
}
