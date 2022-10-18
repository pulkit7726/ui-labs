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

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  overflow: 'auto',
}));

const StyledImageList = styled(ImageList)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'auto',
}));

export const BodyTable = ({ ...props }) => {
  return (
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
};
export const BodyCard = ({ ...props }) => (
  <>
    <StyledCard>
      <CardMedia
        component="img"
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
    </StyledCard>
  </>
);

export const BodyImage = ({ ...props }) => {
  return (
    <StyledImageList variant="quilted" cols={4} rowHeight={121}>
      {props.imageData.map((item, i) => (
        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1}>
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </StyledImageList>
  );
};
