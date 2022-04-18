import {AlertColor} from '@mui/material';
import Alert from '@mui/material/Alert';

type AlertProps = {
  message: string,
  severity?: AlertColor,
}

const BasicAlert = ({ message, severity } : AlertProps) => {
  return (
    <Alert severity={severity || 'info'}>
      {message}
    </Alert>
  )
};

export default BasicAlert;
