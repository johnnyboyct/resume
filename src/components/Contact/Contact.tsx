import { useState } from 'react';

import ConnectWithoutContactTwoToneIcon
  from '@mui/icons-material/ConnectWithoutContactTwoTone';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField,
} from '@mui/material';

export interface IContactProps {
  basics: any;
}

export default function Contact({ basics }: IContactProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (<div className="wrapper">

    <Fab variant="extended" size="medium" color="secondary" onClick={handleClickOpen} sx={{borderRadius: 0, width: '100%'}}>
      <ConnectWithoutContactTwoToneIcon sx={{ mr: 1 }} />
      Contact Me!
    </Fab>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>

  </div>);
}
