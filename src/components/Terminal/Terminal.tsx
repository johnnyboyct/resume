import './Terminal.css';

import React, { useEffect } from 'react';

import { TypedTerminal } from 'react-component-typed-terminal';
import { useCookies } from 'react-cookie';

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  DialogActions,
  Slide,
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
		>
			<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
				John Marczak, Full Stack Software Developer
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={handleClose}
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent dividers style={{ padding: 0 }} className=''>
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
