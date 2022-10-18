import React from 'react';
import { DecoratorFn } from '@storybook/react';
import CustomThemeProvider from '../src/themeing/CustomeThemeProvider';
import { CssBaseline } from '@mui/material';

export const wrapTheme: DecoratorFn = Story => (
	<CustomThemeProvider>
		<CssBaseline enableColorScheme />
		<div style={{ border: '1px solid black', width: '100%' }}>
			<Story />
		</div>
	</CustomThemeProvider>
);
