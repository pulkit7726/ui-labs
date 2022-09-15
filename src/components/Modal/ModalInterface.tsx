import { ReactElement } from "react";

export default interface ModalProps {
    title?: ReactElement | string;
    children?: ReactElement | string;
    footer?: ReactElement | string;
    onClose?: () => void;
    background?: string;
    width?: string;
    height?: string;
    transition?: string;
    transitionContent?: boolean;
    mainTitle?: ReactElement | string;
    keepMounted?: boolean;
    show?: boolean;
    notificationIcon?: boolean;
    settingIcon?: boolean;
    fullscreenIcon?: boolean;
    fullScreen?: boolean;
}