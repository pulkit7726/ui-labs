import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';

const Body = ({ ...props }) => (
    <>
        {props.display === 'center' ? (
            <>
                {props.data.map((obj) => (
                    <Box key={obj.id}>
                        <Typography sx={{ justifyContent: 'center', display: 'flex' }}>
                            {obj.value}
                        </Typography>
                    </Box>
                ))}
            </>
        ) : (
            <>
                {props.data.map((obj) => (
                    <TableContainer style={{ width: '100%' }} key={obj.id}>
                        <Table aria-label="customized table">
                            <TableBody>
                                <TableRow>
                                    <TableCell width={props.display === 'drawer' ? '40%' : '50%'}>
                                        <Typography fontSize={12}>
                                            <b>{obj.label}</b>
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
