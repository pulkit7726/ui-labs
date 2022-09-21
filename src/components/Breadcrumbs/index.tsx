import React, { ReactElement } from "react";
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

type BreadcrumbsProps = {
    list: ReactElement[] | string[];
}
const Breadcrumbs = ({ list, ...props }: BreadcrumbsProps) => {
    return (
        <MuiBreadcrumbs data-testid="breadcrumb" aria-label="breadcrumb" {...props}>
            {list}
        </MuiBreadcrumbs>
    )
}

export default Breadcrumbs
