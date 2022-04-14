import React  from 'react';
import { Stack, Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { alertState, alertMessegeState } from '../RecoilAtom';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function AlertMessage() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const [open, setOpen] = useRecoilState(alertState);
  const message = useRecoilValue(alertMessegeState)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">-</Alert>
      <Alert severity="warning">-</Alert>
      <Alert severity="info">-</Alert>
      <Alert severity="success">-</Alert> */}
    </Stack>
  );
}
