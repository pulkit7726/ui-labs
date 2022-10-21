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
  Box,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'white',
  border: '1px outset',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: '80px',
  marginLeft: '25px',
  marginRight: '25px',
}));

export const BodyTable = ({ data, dataLabel, tableAlign }) => {
  return (
    <>
      <TableContainer sx={{ height: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell align={tableAlign || 'center'}>
                {dataLabel.name}
              </StyledTableCell>
              <StyledTableCell align={tableAlign || 'center'}>
                {dataLabel.email}
              </StyledTableCell>
              <StyledTableCell align={tableAlign || 'center'}>
                {dataLabel.contact}
              </StyledTableCell>
              <StyledTableCell align={tableAlign || 'center'}>
                {dataLabel.designation}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(obj => (
              <TableRow key={obj.id}>
                <StyledTableCell align={tableAlign || 'center'}>
                  <Typography>{obj.value}</Typography>
                </StyledTableCell>
                <StyledTableCell align={tableAlign || 'center'}>
                  <Typography>{obj.email}</Typography>
                </StyledTableCell>
                <StyledTableCell align={tableAlign || 'center'}>
                  <Typography>{obj.contact}</Typography>
                </StyledTableCell>
                <StyledTableCell align={tableAlign || 'center'}>
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
export const BodyCard = ({ card }) => (
  <>
    <StyledCard>
      <CardMedia component="img" image={card.imageurl} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.content}
        </Typography>
      </CardContent>
    </StyledCard>
  </>
);

export const BodyImage = ({ imageData }) => {
  return (
    <StyledImageList variant="quilted" cols={4} rowHeight={121}>
      {imageData.map((item, i) => (
        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1}>
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </StyledImageList>
  );
};

export const BodyAppBar = ({ appBar }) => {
  return (
    <StyledBox component="main">
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {appBar.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledTypography>{appBar.content}</StyledTypography>
    </StyledBox>
  );
};
