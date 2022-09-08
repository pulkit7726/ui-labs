import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';



// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//     props,
//     ref,
// ) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
type NotiFicationProps = {

    color?: 'error'
    | 'info'
    | 'success'
    | 'warning',
    variaent?: 'filled'
    | 'outlined'
    | 'standard',
    message?: string,
    title?: string,
    iconShow?: boolean,
    autoHideDuration?: number



}

export default function Notification({ color, variaent, message, title, iconShow, autoHideDuration }: NotiFicationProps) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '50px' }}>
            <Button variant="outlined" onClick={handleClick}>
                click
            </Button>
            <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}  >
                <Alert onClose={handleClose} color={color} severity={color} variant={variaent} sx={{ width: '100%' }}>
                    <AlertTitle> {title}</AlertTitle>
                    {message}
                </Alert>
            </Snackbar>

        </Stack>
    );
}