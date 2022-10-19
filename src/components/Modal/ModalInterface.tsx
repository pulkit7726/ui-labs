import { ReactElement } from 'react';

export default interface ModalProps
  extends FooterProps,
    HeaderProps,
    ModalBodyProps {
  show?: boolean;
  fullScreen?: boolean;
  transitionDuration?: number;
}

export interface FooterProps extends DisplaySize {
  footerContent?: ReactElement | string;
  footerBackground?: string;
}

export interface HeaderProps extends DisplaySize {
  onClose?: () => void;
  headerBackground?: string;
  headerTitle?: ReactElement | string;
  keepMounted?: boolean;
}

export interface ModalBodyProps extends DisplaySize {
  transition?: string;
  height?: string;
  title?: ReactElement | string;
  children?: ReactElement | string;
  background?: string;
}
interface DisplaySize {
  width?: string;
}
