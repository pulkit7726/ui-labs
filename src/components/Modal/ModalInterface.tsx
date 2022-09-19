import { ReactElement } from "react";

export default interface ModalProps extends FooterProps, HeaderProps, ModalBodyProps {
    show?: boolean;
    fullScreen?: boolean;
    transitionDuration?: number;
}

export interface FooterProps {
    footerContent?: ReactElement | string;
    footerBackground?: string;
}

export interface HeaderProps {
    onClose?: () => void;
    headerBackground?: string;
    notificationIcon?: boolean;
    settingIcon?: boolean;
    fullscreenIcon?: boolean;
    headerTitle?: ReactElement | string;
    keepMounted?: boolean;
}

export interface ModalBodyProps {
    width?: string;
    height?: string;
    transition?: string;
    title?: ReactElement | string;
    children?: ReactElement | string;
    background?: string;
}
