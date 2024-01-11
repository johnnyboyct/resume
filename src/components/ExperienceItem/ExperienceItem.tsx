import './ExperienceItem.css';

import {
  MutableRefObject,
  SyntheticEvent,
  useRef,
  useState,
} from 'react';

import Moment from 'react-moment';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Link,
  Typography,
  useTheme,
} from '@mui/material';

export interface IExperienceItemProps {
	workItemData: any
	showDateStats: boolean
}

export default function ExperienceItem({ workItemData, showDateStats = true }: IExperienceItemProps) {
	const elipseContent = useRef(null)
	const [showElipse, setShowElipse] = useState(true)
	const theme = useTheme()

	const getWorkDates = () => {
		const startdate = new Date(workItemData.startDate)
		let enddate = null
		let ds = null
		if (typeof workItemData.endDate !== 'undefined' && workItemData.endDate !== '') {
			enddate = new Date(workItemData.endDate)
			enddate = enddate.toLocaleDateString()
		} else {
			enddate = 'Present'
		}

		if (enddate === 'Present') {
			ds = (<>
				<Typography>
					<Moment format='MMM YYYY' className='s'>
						{startdate}
					</Moment>
					- Present
				</Typography>
				<Typography display='inline' variant='subtitle2' sx={{color: theme.palette.secondary.light}} >
					<Moment
						format='Y [years] M [months]'
						date={startdate}
						durationFromNow
					/>
				</Typography>
			</>
			)
		} else {
			ds = (
				<>
					<Typography>
						<Moment format='MMM YYYY'>{startdate}</Moment> - <Moment format='MMM YYYY'>{enddate}</Moment>
					</Typography>
					{showDateStats ? <Typography display='inline' variant='caption'>
						(Total:{' '}
						<Moment from={enddate} ago>
							{startdate}
						</Moment>
						, Left: <Moment fromNow>{enddate}</Moment>)
					</Typography> : null}

				</>
			)
		}
		if (workItemData.key % 2 === 0) {
			return <TimelineOppositeContent sx={{ m: 'auto 0' }}
				align='right'
				color='primary.main'>{ds}</TimelineOppositeContent>
		} else {
			return <TimelineOppositeContent  sx={{ m: 'auto 0' }}
				align='right'
				color='primary.main'>{ds}</TimelineOppositeContent>
		}
	}
	const handleChange = (
		e: SyntheticEvent<Element, Event>,
		expanded: boolean,
		elipseContent: MutableRefObject<null>
	) => {
		setShowElipse(!showElipse)
		return true
	}
	return (
		<div className='wrapper'>
			<TimelineItem sx={{  }}>

				{getWorkDates()}

				<TimelineSeparator >
					<TimelineConnector sx={{}} />
					<TimelineDot color='secondary' variant='filled' sx={{ margin: 0, backgroundColor: theme.palette.secondary.main }}>
						<MapsHomeWorkTwoToneIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '0px', px: 2, width: '33%' }}  >
					<Accordion
						disableGutters
						elevation={0}
						square
						sx={{ backgroundColor: theme.palette.primary.paperBG, color: theme.palette.primary.contrastText }}
						onChange={(e, expanded) => {
							handleChange(e, expanded, elipseContent)
						}}
					>

						<AccordionSummary
							expandIcon={<KeyboardArrowRightIcon color='primary' fontSize="large" sx={{marginRight:'0.5em'}}   />}
							aria-controls='panel1a-content'
							id='panel1a-header'
							className='summaryBar'
							sx={{ backgroundColor: theme.palette.primary.paperBG, color: theme.palette.primary.contrastText, paddingLeft:' 2em' }}
						>
							<Typography sx={{ width: '35%', flexShrink: 0, fontSize: '1em', paddingLeft:'1.5em' }} variant="h6">
								<Link href={workItemData.url} target='_blank'>{workItemData.name}</Link>
							</Typography>
							<Divider orientation='vertical' variant='inset' />
							<Typography variant="h6" sx={{ fontSize: '1em' }} >
								{workItemData.position}
							</Typography>
						</AccordionSummary>

						<AccordionDetails sx={{ padding:'1.2em' }}>
							<div >
								<Typography className='summary' sx={{ fontSize: '1em' }}>
									{workItemData.summary}
								</Typography>
							</div>
						</AccordionDetails>

					</Accordion>
					<div className='elipse' ref={elipseContent} hidden={!showElipse} style={{ backgroundColor: theme.palette.primary.paperBG, color: theme.palette.primary.contrastText, padding: '1em 1.4em ',  fontSize:'1em' }}>
						{workItemData.summary}
					</div>
				</TimelineContent>
			</TimelineItem>
		</div>
	)
}
