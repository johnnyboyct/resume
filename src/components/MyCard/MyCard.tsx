import { useTheme } from '@mui/material';

export interface IMyCardProps {
  profileData:any
}

export default function MyCard({ profileData }: IMyCardProps) {
  const theme = useTheme();

  return <div className="wrapper">

  </div>;
}
