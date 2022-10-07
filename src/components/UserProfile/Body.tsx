import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    styled,
} from '@mui/material';


const CssTypography = styled(Typography)(({ theme }) => ({
    justifyContent: 'center',
    display: 'flex'
}));

const Body = ({ ...props }) => (
    <>
        {props.display === 'center' ? (
            <>
                {props.data.map((obj) => (
                    <Box key={obj.id}>
                        <CssTypography>
                            {obj.value}
                        </CssTypography>
                    </Box>
                ))}
            </>
        ) : (
            <>
                {props.data.map((obj) => (
                    <TableContainer style={{ width: props.width }} key={obj.id}>
                        <Table aria-label="customized table">
                            <TableBody>
                                <TableRow>
                                    <TableCell width={props.display === 'drawer' ? '40%' : '50%'}>
                                        <Typography fontSize={props.fontSize}>
                                            {obj.label}
                                        </Typography>
                                    </TableCell>
                                    <TableCell width={props.display === 'drawer' ? '60%' : '50%'}>
                                        <Typography>{obj.value}</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                ))}
            </>
        )}

    </>
);

export default Body;
