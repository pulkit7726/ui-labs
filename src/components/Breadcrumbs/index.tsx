import React, { ReactElement } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Icon } from "@mui/material";

type BreadcrumbsProps = {
    list: ReactElement[] | any[];
    separator?: string;
    maxItems?: number;
}
const Breadcrumb = ({ list, separator, maxItems, ...props }: BreadcrumbsProps) => {
    console.log(list)
    return (
        <Breadcrumbs maxItems={maxItems} separator={separator} aria-label="breadcrumb">
            {list.map((item, index) => {
                return <Link key={index} color={item.color} aria-current={item.activePage} underline={item.underline} sx={{ display: 'flex', alignItems: 'center' }} href={item.BreadcrumbRef}>
                    {item.icon}
                    {item.BreadcrumbTitle}
                </Link>
            })}
        </Breadcrumbs>
    )
}

export default Breadcrumb
