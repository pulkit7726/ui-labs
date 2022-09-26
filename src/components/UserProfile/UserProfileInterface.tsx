import { ReactElement } from "react";

export default interface UserProfileProps extends FooterProps, HeaderProps, UserProfileBodyProps {
    show?: boolean;
    fullScreen?: boolean;
    transitionDuration?: number;
}

export interface FooterProps {
    footerContent?: ReactElement | string;
    footerBackground?: string;
}

export interface HeaderProps {
    title?: string;
    idName?: string;
    email?: string;
    departmentTitle?: string;
    designationTitle?: string;
}

export interface UserProfileBodyProps {
    title?: string;
    idName?: string;
    email?: string;
    sex?: string;
    contact?: string;
    country?: string;
    state?: string;
    personalDetails?: string;
    professionalDetails?: string;
    companyName?: string;
    companyTitle?: string;
    practiceName?: string;
    practiceTitle?: string;
    businessUnitName?: string;
    businessUnitTitle?: string;
    departmentName?: string;
    departmentTitle?: string;
    seatingLocationName?: string;
    seatingLocationTitle?: string;
    payrollLocationName?: string;
    payrollLocationTitle?: string;
    designationName?: string;
    designationTitle?: string;
    employeeTypeName?: string;
    employeeTypeTitle?: string;
}
