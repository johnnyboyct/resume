import './Intro.css';

import {
  Grid,
  Typography,
  useTheme,
} from '@mui/material';

export interface IIntroProps {
  profileData: any
}

export default function Intro({ profileData }: IIntroProps) {
  const theme = useTheme()

  console.log(profileData);

  return (
    <div className="wrapperIntro">
      <div className='sectionIntro'>
        <Grid container >
          <Grid item>
            {/* <Avatar
              alt={profileData.name}
              src={profileData.picture}
              // sx={{ width: 56, height: 56 }}
            /> */}
          </Grid>
          <Grid item xs={12} sm container>
            <section >
              <div className='introText'>
                <h6 className='introBright' style={{ color: theme.palette.success.light}}>Hi, my name is</h6>
                <h1 className='i1'>{profileData.name}</h1>
                <h2 className='i2'>{profileData.label}</h2>
                <Typography variant="caption" className='i3'>{profileData.summary}</Typography>
              </div>

            </section>
          </Grid>
        </Grid>
      </div>

    </div>
  )
}
