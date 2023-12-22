import './ExperienceItem.css';

import { SyntheticEvent } from 'react';

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
} from '@mui/material';

export interface IExperienceItemProps {
	workItemData: any
}

export default function ExperienceItem({ workItemData }: IExperienceItemProps) {
	console.log(workItemData)
	const getWorkDates = () => {
		const startdate = new Date(workItemData.startDate)
		let enddate = null
		let ds = null
		if (
			typeof workItemData.endDate !== 'undefined' &&
			workItemData.endDate !== ''
		) {
			enddate = new Date(workItemData.endDate)
			enddate = enddate.toLocaleDateString()
		} else {
			enddate = 'Present'
		}

		if (enddate === 'Present') {
			ds = (
				<TimelineContent sx={{ m: 'auto 0' }}
					align="right"
					variant="body2"
					color="text.secondary">
					<Typography>
						<Moment format='MMM YYYY' className='s'>
							{startdate}
						</Moment>{' '}
						- Present
					</Typography>
					<Typography display='inline' variant="caption">
						<Moment
							format='M [months] d [days]'
							date={startdate}
							durationFromNow
						/>
					</Typography>
				</TimelineContent>
			)
		} else {
			ds = (
				<TimelineContent sx={{ m: 'auto 0' }}
					align="right"
					variant="body2"
					color="text.secondary">
					<Typography>
						<Moment format='MMM YYYY'>{startdate}</Moment> -
						<Moment format='MMM YYYY'>{enddate}</Moment>
					</Typography>
					<Typography display='inline' variant="caption">
						(Total:{' '}
						<Moment from={enddate} ago>
							{startdate}
						</Moment>
						, Left: <Moment fromNow>{enddate}</Moment>)
					</Typography>
				</TimelineContent>
			)
		}

		return <span className='startdate'>{ds}</span>
	}
	const handleChange = (e: SyntheticEvent<Element, Event>, expanded: boolean) =>{
		console.log(e, expanded);
	}
	return (
		<div className='wrapper'>
			<TimelineItem>
				<TimelineOppositeContent>{getWorkDates()}</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color="grey" variant="filled">
						<MapsHomeWorkTwoToneIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }} className="darkBG">
					<div className="elipseBox">
						<Accordion square onChange={(e, expanded) => {
							if (expanded) {
								handleChange(e, expanded);
							}
						}}>
							<AccordionSummary
								expandIcon={<ExpandCircleDownTwoToneIcon color='primary' />}
								aria-controls='panel1a-content'
								id='panel1a-header'
								className='summaryBar'
							>
								<Typography sx={{ width: '33%', flexShrink: 0 }}>
									<Link href={workItemData.url}>{workItemData.name}</Link>
								</Typography>
								<Divider orientation='vertical' variant='inset' />
								<Typography sx={{ color: 'text.secondary' }}>
									{workItemData.position}
								</Typography>
							</AccordionSummary>

							<AccordionDetails>
								<Typography>{workItemData.position}</Typography>
								<Typography className='summary'>
									{workItemData.summary}
								</Typography>
							</AccordionDetails>
						</Accordion>
						<div className="elipse">
							{workItemData.summary}
						</div>
						<span className='more'>More...</span>
					</div>
				</TimelineContent>
			</TimelineItem>
		</div>
	)
}
