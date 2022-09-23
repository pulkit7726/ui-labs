import React, { useEffect, useRef, useState } from 'react';
import { memo } from 'react';
import { styled } from "@mui/material/styles";
import {Box,TableCell,tableCellClasses,TableHead,TableRow,TableSortLabel,Paper,TablePagination,TableContainer,TableBody,Table, TextField, IconButton, FormControl, Select, MenuItem} from "@mui/material";
import "./table.css";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { visuallyHidden } from "@mui/utils";
import { ToolbarComponent } from './Toolbar';
import { useTheme } from '@mui/material/styles';
import ReactPaginate from 'react-paginate';
import { OfflineShareOutlined } from '@mui/icons-material';

interface TableHeader {
  id : string,
  numeric: boolean,
  disablePadding: boolean,
  label:string
}
interface Actions {
  icon : string,
  onClick: () => void
}

interface TableProps {
  title:string,
  tableSize?:'small'|'medium', 
  tableData?: any, 
  totalRecord:number,
  tableHeader: TableHeader[] , 
  emptyDataMsg?: string, 
  pagination?: boolean, 
  stripe?: boolean, 
  hover?: boolean,
  search?: boolean,
  exportData?:boolean,
  getPaginatedDataFn?: Function,
  columnFilter?:boolean,
  tableHeaderBackground?:string,
  tableHeaderColor?:string,
  actions?:Actions[];
  stickyHeader?: boolean;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    // border: 0, 
  },
}));

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';
function getComparator<Key extends keyof any>(order:Order, orderBy:Key): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator:(a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


export const TableComponent = (props : TableProps) => {
  const {title,tableSize, tableData,totalRecord, tableHeader, emptyDataMsg, pagination, stripe, hover,search,exportData, getPaginatedDataFn,columnFilter,tableHeaderColor,tableHeaderBackground, actions, stickyHeader} = props;

  const [searchText,setSearchText]=useState<string>('');
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("");
  const [checkedValues, setCheckedValues] = useState([""]);
  const [filteredTableHeading, setFilteredTableHeading] = useState<TableHeader[]>([]);

  //Pagination
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const pageCount=Math.ceil(totalRecord/rowsPerPage);
  const [page, setPage] = useState<number>(0);

  const [data,setData] = useState(tableData);
  const offSetStart = page*rowsPerPage;
  // (page-1)*rowsPerPage + 1;
  const offSetEnd = page* rowsPerPage > totalRecord ? totalRecord : (page*rowsPerPage)+rowsPerPage;
  // page* rowsPerPage;

  // if (actionsColumn) {
  //   tableHeader = {
  //     ...tableHeader,
  //     ...actions
  //   }
  // }

  const getNewData = async () => {
    if (pagination && getPaginatedDataFn) {
      const data = await getPaginatedDataFn(page, rowsPerPage);
      setData(data);
    }
  }

  useEffect(()=>{
    getNewData();
  },[page,rowsPerPage])

  const handlePageClick=(e:any)=>{
    setPage(e.selected);
  };
  
  const handleRequestSort = (event:React.MouseEvent<unknown>, property:string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  
  
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };

  const tableDataSearch =(search:string)=>{
    setSearchText(search)
  }

  function selectColumn(key:any) {
    setCheckedValues(checkedValues.includes(key) ? checkedValues.filter(c => c !== key) : [...checkedValues, key]);
  }

  useEffect(() => {
    const filterHeading = tableHeader.filter((el) => checkedValues.includes(el.id));
    setFilteredTableHeading(filterHeading);
  }, [checkedValues]);

  const filterHead = filteredTableHeading.length > 0 ? filteredTableHeading : tableHeader;
  const newData:any = data?.filter((item:any)=>item.name.toLowerCase().includes(searchText.toLowerCase()));
  
  return (
    <Box sx={{ width: "100%" }}>
      <ToolbarComponent title={title} tableHeader={tableHeader} filterHead={filterHead} newData={newData} exportData={exportData} pagination={pagination} columnFilter={columnFilter} search={search} searchText={searchText} setSearchText={setSearchText} tableDataSearch={tableDataSearch} selectColumn={selectColumn} checkedValues={checkedValues} />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer className="table-container">
          <Table stickyHeader={stickyHeader} size={tableSize} aria-labelledby="tableTitle">
            <TableHead >
              <TableRow>
                {filterHead?.map((headCell) => {
                  return stripe ? (
                    <StyledTableCell
                      key={headCell.id}
                      align={headCell.numeric ? "right" : "left"}
                      padding={headCell.disablePadding ? "none" : "normal"}
                      sortDirection={orderBy === headCell.id ? order : false}
                      style={{backgroundColor:tableHeaderBackground,color:tableHeaderColor,fontWeight:"bold"}}
                    >
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : "asc"}
                        onClick={createSortHandler(headCell.id)}
                      >
                        {headCell.label}
                        {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                        ) : null}
                      </TableSortLabel>
                    </StyledTableCell>
                  ) : (
                    <TableCell
                      key={headCell.id}
                      align={headCell.numeric ? "right" : "left"}
                      padding={headCell.disablePadding ? "none" : "normal"}
                      sortDirection={orderBy === headCell.id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : "asc"}
                        onClick={createSortHandler(headCell.id)}
                      >
                        <h4 style={{margin:0}}>{headCell.label}</h4>
                        {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {newData?.length > 0 ? (
                pagination ? (
                  stableSort(newData, getComparator(order, orderBy))
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return stripe ? (
                        <StyledTableRow hover={hover} tabIndex={-1} key={index}>
                          {filterHead.map((el, index) => (
                              <StyledTableCell key={index}  >
                                {row[el.id]}
                              </StyledTableCell>
                            ))}
                        </StyledTableRow>
                      ) : (
                        <TableRow hover={hover} key={index}>
                          {filterHead.map((el, index) => (
                            <TableCell key={index} >
                              {row[el.id]}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })
                ) : (
                  stableSort(newData, getComparator(order, orderBy)).map(
                    (row, index) => {
                      return stripe ? (
                        <StyledTableRow hover={hover} tabIndex={-1} key={index} >
                          {filterHead.map((el, index) => (
                            <StyledTableCell key={index}  >
                              {row[el.id]}
                            </StyledTableCell>
                          ))}
                        </StyledTableRow>
                      ) : (
                        <TableRow hover={hover} key={index} >
                          {filterHead.map((el, index) => (
                            <TableCell key={index}  >
                              {row[el.id]}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    }
                  )
                ))
                : (
                <TableRow>
                  <TableCell align="center" colSpan={filterHead?.length}>
                    {emptyDataMsg}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {newData?.length > 0 && pagination &&
        <div className="paginate">
          <span className='menuItem' style={{paddingLeft:".5rem"}}>Showing entries {offSetStart+1}-{offSetEnd} of {totalRecord}</span>
          <ReactPaginate 
          pageCount={pageCount}
          onPageChange={handlePageClick}
          breakLabel="..."
          pageRangeDisplayed={3}
          containerClassName="pagination"
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeClassName='active'
          />
          <div className='menuItem'>
          <span>Show</span>
          <FormControl sx={{ m: 1 }} variant="standard">
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={rowsPerPage}
                onChange={(e:any) => setRowsPerPage(e.target.value)}
                variant="outlined"
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
          </FormControl>
          <span style={{paddingRight:".5rem"}}>Entries</span>
          </div>
        </div>
        }
      </Paper>
    </Box>
  )
};

export default memo(TableComponent);

TableComponent.defaultProps = {
  totalRecord: 0
}