import React, { useContext } from 'react';
import { memo } from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomThemeContext } from './../../themeing/CustomeThemeProvider';

interface ModeProps {
	bgImg?: string;
	fontSize?: number;
}
export const SwitchModeButton = ({ bgImg, fontSize }: ModeProps) => {
	const { currentTheme, setTheme } = useContext(CustomThemeContext);
	localStorage.setItem('themeImg', JSON.stringify({ bgImg, fontSize }));
	const handleChange = (event: { target: { value: any } }) => {
		setTheme?.(event.target.value);
	};
	return (
		<Box>
			<FormControl>
				<InputLabel id="demo-simple-select-label">Theme</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					value={currentTheme}
					label="theme"
					color="primary"
					onChange={handleChange}
				>
					<MenuItem value={'light'}>Light</MenuItem>
					<MenuItem value={'grey'}>Grey</MenuItem>
					<MenuItem value={'richBlue'}>Rich Blue</MenuItem>
					<MenuItem value={'dark'}>Dark</MenuItem>
					<MenuItem value={'violet'}>Violet</MenuItem>
					<MenuItem value={'redBrown'}>RedBrown</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};
export default memo(SwitchModeButton);
