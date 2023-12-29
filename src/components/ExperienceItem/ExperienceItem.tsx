import './ExperienceItem.css';

import {
  MutableRefObject,
  SyntheticEvent,
  useRef,
  useState,
} from 'react';

import Moment from 'react-moment';

import ExpandCircleDownTwoToneIcon
  from '@mui/icons-material/ExpandCircleDownTwoTone';
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
			ds = (
				<TimelineContent
					sx={{ m: 'auto 0' }}
					align='right'
					variant='body2'
					color='primary.contrastText'
				>
					<Typography>
						<Moment format='MMM YYYY' className='s'>
							{startdate}
						</Moment>{' '}
						- Present
					</Typography>
					<Typography display='inline' variant='caption'>
						<Moment
							format='Y [years] M [months]'
							date={startdate}
							durationFromNow
						/>
					</Typography>
				</TimelineContent>
			)
		} else {
			ds = (
				<TimelineContent
					sx={{ m: 'auto 0' }}
					align='right'
					variant='body2'
					color='primary.contrastText'
				>
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

				</TimelineContent>
			)
		}

		return <div className='startdate'>{ds}</div>
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
			<TimelineItem >
				<TimelineOppositeContent>
					{getWorkDates()}
				</TimelineOppositeContent>
				<TimelineSeparator >
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					<TimelineDot color='secondary' variant='filled' sx={{ margin: 0, backgroundColor: theme.palette.secondary.main }}>
						<MapsHomeWorkTwoToneIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '0px', px: 2, width: '33%', backgroundColor: theme.palette.primary.paperBG, color: theme.palette.primary.contrastText }}  >
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
								expandIcon={<ExpandCircleDownTwoToneIcon color='primary' fontSize="large" />}
								aria-controls='panel1a-content'
								id='panel1a-header'
								className='summaryBar'
								sx={{ backgroundColor: theme.palette.primary.paperBG, color: theme.palette.primary.contrastText }}
							>
								<Typography sx={{ width: '28%', flexShrink: 0 }}>
									<Link href={workItemData.url} target='_blank'>{workItemData.name}</Link>
								</Typography>
								<Divider orientation='vertical' variant='inset' />
								<Typography >
									{workItemData.position}
								</Typography>
							</AccordionSummary>

							<AccordionDetails>
								<Typography className='summary'>
									{workItemData.summary}
								</Typography>
							</AccordionDetails>
						</Accordion>
						<div className='elipse' ref={elipseContent} hidden={!showElipse} style={{ backgroundColor: theme.palette.primary.paperBG, color: theme.palette.primary.contrastText }}>
							{workItemData.summary}
						</div>
				</TimelineContent>
			</TimelineItem>
		</div>
	)
}
