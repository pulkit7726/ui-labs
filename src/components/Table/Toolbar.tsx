import React, { useRef, useState } from 'react';
import { memo } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button, ClickAwayListener, Grow, IconButton, Menu, TextField, Tooltip, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import FilterIcon from '@mui/icons-material/FilterList';
import "./table.css";
import { CsvBuilder } from 'filefy';
import * as XLSX from "xlsx";

interface TableData {
    name:string,
    calories:number,
    fat:number,
    carbs:number,
    protein:number
}
interface TableHeader {
    id : string,
    numeric: boolean,
    disablePadding: boolean,
    label:string
}

interface ToolbarProps {
    title:string,
    search?:boolean,
    downloadCsv?:boolean,
    searchText:string,
    newData:TableData[],
    tableHeader: TableHeader[] ,
    filterHead:TableHeader[] ,
    tableDataSearch:(search:string) => void;
    setSearchText:(text:string)=> void;
    selectColumn:(key:any)=>void;
    checkedValues:string[];
    columnFilter?:boolean;
    pagination?:boolean
}

export const ToolbarComponent = (props:ToolbarProps) => {
    const {title,search,tableHeader,filterHead,newData,downloadCsv,searchText,tableDataSearch,setSearchText,selectColumn,checkedValues,columnFilter,pagination}=props;
    
    const [showSearch,setShowSearch]=useState(false);
    const [isOpen, setIsOpen] =useState(false);
    const [download,setDownload] = useState(false);
    const anchorRef = useRef(null);
    const Search="search";
    const DownloadCsv = "downloadCsv";
    const viewColumns="viewColumns";
    const filterTable = "filterTable";

    //SearchFiled
    const handleTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        tableDataSearch(e.target.value);
    }
    const onHide = () => {
        setShowSearch(false);
        setSearchText('');
    }
    const handleSearchIconClick = () => {
        setShowSearch(true);
    }

    //Download CSV File
    const defaultExportCsv = () => {
        const columns:TableHeader[] = filterHead;
        const data:any = newData.map((rowData:any) =>
          columns.map((columnDef) => rowData[columnDef.id])
        );
        const builder = new CsvBuilder(title + ".csv");
        builder
          .setColumns(columns.map((columnDef) => columnDef.id))
          .addRows(data)
          .exportFile();
    };

    const exportToExcel = () => {
        var ws = XLSX.utils.json_to_sheet(newData);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb,ws,title);
        let buf=XLSX.write(wb,{bookType:"xlsx",type:"buffer"})
        XLSX.write(wb,{bookType:"xlsx",type:"binary"})
        XLSX.writeFile(wb,`${title}.xlsx`);
    }

  return (
    <Toolbar role={'toolbar'} aria-label={'Table Toolbar'} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:0}}>
        <div>
            {showSearch ?
            <Grow appear in={true} timeout={300}>
                <div className="main">
                    <SearchIcon className="searchIcon" />
                    <TextField
                        className="searchText"
                        autoFocus={true}
                        variant={'standard'}
                        value={searchText || ''}
                        onChange={handleTextChange}
                        fullWidth={true}
                        placeholder="Search Name Here"
                    />
                    <IconButton className="clearIcon" onClick={onHide}>
                        <ClearIcon />
                    </IconButton>
                </div>
            </Grow> :
            <Typography
                variant="h6"
                >
                {title}
            </Typography>}
        </div>
        <div>
            {!pagination && search && 
                <Tooltip title={Search} disableFocusListener>
                    <IconButton
                    aria-label={Search}
                    data-testid={Search + '-iconButton'}
                    onClick={handleSearchIconClick}
                    >
                        <SearchIcon />
                    </IconButton>
                </Tooltip>
            }
            {!pagination && downloadCsv && 
                <span>
                <Tooltip title="Download">
                    <IconButton
                    onClick={()=>setDownload(true)}
                    // data-testid={DownloadCsv.replace(/\s/g, '') + '-iconButton'}
                    // aria-label={DownloadCsv}
                    // classes={{ root: classes.icon }}
                    >
                        <DownloadIcon />
                    </IconButton>
                </Tooltip>
                <Menu
                hideBackdrop={true}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                className="paper"
                open={download}
                onClose={() => setDownload(false)}
                > 
                    <div className="wrapper">
                        <ClickAwayListener onClickAway={() => setDownload(false)}>
                            <div className="popOverMenu">
                                <div className="tablePopupContainer">
                                    <Button onClick={defaultExportCsv} className="filterHeads">
                                        Download Csv
                                    </Button>
                                </div>
                                <div className="tablePopupContainer">
                                    <Button onClick={exportToExcel} className="filterHeads">
                                        Download Excel
                                    </Button>
                                </div>
                            </div>
                        </ClickAwayListener>
                    </div>
                </Menu>
                </span>
            }
            <span>
                {columnFilter &&
                    <Tooltip title={viewColumns} disableFocusListener>
                        <IconButton
                            data-testid={viewColumns + '-iconButton'}
                            aria-label={viewColumns}
                            onClick={() => setIsOpen(true)}
                        >
                            <ViewColumnIcon />
                        </IconButton>
                    </Tooltip>
                }
                <Menu
                hideBackdrop={true}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                className="paper"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                > 
                    <div className="wrapper">
                        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                            <div className="popOverMenu">
                                {tableHeader.map((el, index) => {
                                    return <div key={index} className="tablePopupContainer">
                                                <Button onClick={() => selectColumn(el.id)}
                                                className="filterHeads"style={checkedValues.includes(el.id) ? {color: "rgb(40,116,240)", border: "rgb(40,116,240)"} : {color: "rgb(128,128,128)",border: "rgb(128,128,128)"}}>
                                                    {el.label}
                                                </Button>
                                            </div>
                                        }
                                    )
                                }
                            </div>
                        </ClickAwayListener>
                    </div>
                </Menu>
            </span>
            {/* <Tooltip title={filterTable} disableFocusListener>
                <IconButton
                    data-testid={filterTable + '-iconButton'}
                    aria-label={filterTable}
                    // classes={{ root: this.getActiveIcon(classes, 'filter') }}
                    // disabled={options.filter === 'disabled'}
                    // onClick={this.setActiveIcon.bind(null, 'filter')}
                    >
                    <FilterIcon />
                </IconButton>
            </Tooltip> */}
        </div>
    </Toolbar>
  )
};

export default memo(ToolbarComponent);