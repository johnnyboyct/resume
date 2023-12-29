import * as React from 'react';

import { Typography } from '@mui/material';

export interface IFooterProps {}

export default function Footer({ }: IFooterProps) {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return <div className="wrapper">
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <a href="https://johnm.org/">
        Johnm.org
      </a>
      {new Date().getFullYear()}
      {"."}
    </Typography>
    {/* <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Archive" icon={<ExpandCircleDownTwoToneIcon />} />
      </BottomNavigation>
    </Paper> */}
  </div>;
}
