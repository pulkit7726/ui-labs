import React from 'react';
import { memo } from 'react';
import CustomThemeProvider from 'themeing/CustomeThemeProvider';
import { CssBaseline } from '@mui/material';

export const GlobalTheme = ({ children }) => {
	return (
		<CustomThemeProvider>
			<CssBaseline enableColorScheme />
			{children}
		</CustomThemeProvider>
	);
};
export default memo(GlobalTheme);
