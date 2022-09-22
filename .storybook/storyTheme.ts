import { create } from '@storybook/theming';
import logo from '../public/logo.png';

export default create({
  base: 'light',
  brandTitle: 'Wavelabs',
  brandUrl: '/',
  brandImage: logo,
  brandTarget: '_self',
});