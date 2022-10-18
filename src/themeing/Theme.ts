import { createTheme } from '@mui/material';

const currentTheme = localStorage.getItem('themeImg');
const data = JSON.parse(currentTheme || '{}');

const light = createTheme({
	palette: {
		mode: 'light',
	},
	typography: {
		fontSize: data.fontSize,
		fontFamily: ['Roboto', 'SF Pro Display', 'sans-serif'].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${data.bgImg})`,
				},
			},
		},
	},
});

const grey = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#B7B2B2',
		},
	},
	typography: {
		fontSize: data.fontSize,
		fontFamily: ['SF Pro Display', 'sans-serif'].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${data.bgImg})`,
				},
			},
		},
	},
});

const richBlue = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#b3daf7',
			paper: '#d2c2c2',
		},
		text: {
			primary: 'rgba(22,8,8,0.87)',
		},
	},
	typography: {
		fontSize: data.fontSize,
		fontFamily: ['SF Pro Display', 'sans-serif'].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${data.bgImg})`,
				},
			},
		},
	},
});

const dark = createTheme({
	palette: {
		mode: 'dark',
		background: {
			paper: '#222A45',
			default: '#1a2038',
		},
	},
	typography: {
		fontSize: data.fontSize,
		fontFamily: ['SF Pro Display', 'sans-serif'].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${data.bgImg})`,
				},
			},
		},
	},
});

const violet = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#3a1f60',
			paper: '#4e4545',
		},
	},
	typography: {
		fontSize: data.fontSize,
		fontFamily: ['SF Pro Display', 'sans-serif'].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${data.bgImg})`,
				},
			},
		},
	},
});

const redBrown = createTheme({
	palette: {
		mode: 'dark',
		background: {
			paper: '#2f1b64',
			default: '#a42e27',
		},
	},
	typography: {
		fontSize: data.fontSize,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${data.bgImg})`,
				},
			},
		},
	},
});

const Themes = {
	light,
	grey,
	richBlue,
	dark,
	violet,
	redBrown,
};

export const getTheme = (theme: any) => {
	return Themes[theme as keyof typeof Themes];
};
