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
  display: 'flex',
}));
const StyledTableCellLabel = styled(TableCell)`
  width: ${({ width }) => (width === 'drawer' ? '40%' : '50%')};
`;
const StyledTableCellValue = styled(TableCell)`
  width: ${({ width }) => (width === 'drawer' ? '60%' : '50%')};
`;

const Body = ({ ...props }) => (
  <>
    {props.display === 'center' ? (
      <>
        {props.data.map(obj => (
          <Box key={obj.id}>
            <CssTypography>{obj.value}</CssTypography>
          </Box>
        ))}
      </>
    ) : (
      <>
        {props.data.map(obj => (
          <TableContainer style={{ width: props.width }} key={obj.id}>
            <Table aria-label="customized table">
              <TableBody>
                <TableRow>
                  <StyledTableCellLabel width={props.display}>
                    <Typography fontSize={props.fontSize}>
                      {obj.label}
                    </Typography>
                  </StyledTableCellLabel>
                  <StyledTableCellValue width={props.display}>
                    <Typography>{obj.value}</Typography>
                  </StyledTableCellValue>
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
