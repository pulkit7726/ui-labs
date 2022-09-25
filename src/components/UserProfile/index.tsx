import React from 'react';
import {
    Avatar,
    Box,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideDrawer from './SideDrawer';

const StyledTypography = styled(Typography)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end'

}));

const StyledAvtar = styled(Avatar)(({ theme }) => ({
    width: '100px',
    height: '100px',

}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    }
}));

type UserProfileProps = {
    title?: string;
    idName?: any;
    designation?: any;
    department?: any;
    email?: any;
    personalDetails?: any;
    professionalDetails?: any;

}

const UserProfile = ({
    title,
    idName,
    designation,
    department,
    email,
    personalDetails,
    professionalDetails,
}: UserProfileProps) => {
 
    const [open, setOpen] = React.useState(false)
    const matches = useMediaQuery('(min-width:600px)');

    const handleOpen = () => {
        setOpen(!open);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Paper
                elevation={5}
                style={{ margin: '10px', padding: '10px' }}
            >
                <Grid container>
                    <Box
                        sx={{
                            width: '100%',
                            backgroundImage: `url("images/background.jpg")`,
                        }}>
                        <Grid
                            item xs={12}
                            sx={{  display: 'flex', flexWrap: 'wrap', direction: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            <Stack direction="row" spacing={2} sx={{ marginTop: '20px', marginBottom: '20px' }}>
                                <StyledAvtar src="images/background.png" />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', direction: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white' }}>{idName}</Typography>
                            <Typography sx={{ color: 'white' }}>{designation}</Typography>
                            <Typography sx={{ color: 'white' }}>{department}</Typography>
                            <Typography sx={{ color: 'white' }}>{email}</Typography>
                        </Grid>
                    </Box>
                    <Grid xs={12}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly'
                        }}>
                        <Paper elevation={5}
                            style={{ margin: '20px', padding: '10px' }}>
                            <TableContainer >
                                <Table aria-label="customized table">
                                    <TableHead sx={{ backgroundColor: 'gainsboro' }}>
                                        <TableRow>
                                            <TableCell><b>{personalDetails}</b></TableCell>
                                        </TableRow>
                                    </TableHead><br /><br />
                                    <TableBody >
                                        <TableRow>
                                            <TableCell >WL12345</TableCell>
                                            <TableCell>James Williams</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell >Software Engineer</TableCell>
                                            <TableCell>james@wavelabs.ai</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell >Male</TableCell>
                                            <TableCell>+9100011125</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell >California</TableCell>
                                            <TableCell>US</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                        <Paper elevation={5}
                            style={{ margin: '20px', padding: '10px', flexBasis: '50%' }}>
                            <TableContainer >
                                <Table aria-label="customized table">
                                    <TableHead sx={{ backgroundColor: 'gainsboro' }}>
                                        <TableRow>
                                            <TableCell><b>{professionalDetails}</b></TableCell>
                                        </TableRow>
                                    </TableHead><br /><br />
                                    <TableBody>
                                        <TableRow>
                                            <TableCell ><b>Company</b></TableCell>
                                            <TableCell>Wavelabs Technologies</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell ><b>Practice</b></TableCell>
                                            <TableCell>Design & Digital</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell ><b>Business Unit</b></TableCell>
                                            <TableCell>Department</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell ><b>Department</b></TableCell>
                                            <TableCell>Department</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell ><b>Seating Location</b></TableCell>
                                            <TableCell>Hyderabad</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell ><b>Payroll Location</b></TableCell>
                                            <TableCell>Hyderabad</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell ><b>Designation</b></TableCell>
                                            <TableCell>Senior Engineer</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell ><b>Employee type</b></TableCell>
                                            <TableCell>Permanent</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            <button onClick={handleOpen}>show</button>
            <SideDrawer open={open} handleClose={handleClose}/>
        </>
    )
}

export default UserProfile;