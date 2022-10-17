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
import { data, dataLabel, card, imageData } from 'data/ResizableGrid.json';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledImageList = styled(ImageList)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}));

export const BodyTable = () => (
  <>
    <TableContainer sx={{ height: '100%' }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">{dataLabel.name}</StyledTableCell>
            <StyledTableCell align="center">{dataLabel.email}</StyledTableCell>
            <StyledTableCell align="center">
              {dataLabel.contact}
            </StyledTableCell>
            <StyledTableCell align="center">
              {dataLabel.designation}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(obj => (
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
export const BodyCard = () => (
  <>
    <Card sx={{ width: '100%', height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={card.imageurl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.content}
        </Typography>
      </CardContent>
    </Card>
  </>
);

export const BodyImage = () => {
  return (
    <StyledImageList variant="quilted" cols={4} rowHeight={121}>
      {imageData.map((item, i) => (
        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </StyledImageList>
  );
};
