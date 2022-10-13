import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  styled,
  TableHead,
  Card,
  CardMedia,
  CardContent,
  ImageList,
  ImageListItem,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const BodyTable = ({ ...props }) => (
  <>
    <TableContainer sx={{ height: '100%' }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              {props.dataLabel.name}
            </StyledTableCell>
            <StyledTableCell align="center">
              {props.dataLabel.email}
            </StyledTableCell>
            <StyledTableCell align="center">
              {props.dataLabel.contact}
            </StyledTableCell>
            <StyledTableCell align="center">
              {props.dataLabel.designation}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(obj => (
            <TableRow key={obj.id}>
              <StyledTableCell align="center">
                <Typography>{obj.value}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>{obj.email}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>{obj.contact}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography>{obj.designation}</Typography>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);
export const BodyCard = ({ ...props }) => (
  <>
    <Card sx={{ width: '100%', height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={props.card.imageurl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.card.content}
        </Typography>
      </CardContent>
    </Card>
  </>
);

export const BodyImage = ({ ...props }) => {
  return (
    <ImageList
      sx={{ width: '100%', height: '100%' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {props.imageData.map((item, i) => (
        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
