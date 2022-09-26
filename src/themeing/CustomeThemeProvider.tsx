import React, { createContext, Dispatch, SetStateAction, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./Theme";

interface ThemeContextProps {
	currentTheme: any,
	setTheme: Dispatch<SetStateAction<any>> | null
}

export const CustomThemeContext = createContext<ThemeContextProps>({
	currentTheme: 'light',
	setTheme: null
});

const CustomThemeProvider = (props: { children: any; }) => {
	const { children } = props;
	const currentTheme = localStorage.getItem('appTheme') || 'light';
	const [ themeName, _setThemeName ] = useState(currentTheme);
	const theme = getTheme(themeName);
	const setThemeName = (name: any) => {
		localStorage.setItem('appTheme', name);
		_setThemeName(name);
	};
	const contextValue = {
		currentTheme: themeName,
		setTheme: setThemeName
	};
	return (
		<CustomThemeContext.Provider value={contextValue}>
			<ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
		</CustomThemeContext.Provider>
	)
}

export default CustomThemeProvider;