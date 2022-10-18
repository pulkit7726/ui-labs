import React from 'react';
import { SwitchModeButton } from 'components/Theme/SwitchModeButton';
import GlobalTheme from 'components/Theme/GlobalTheme';
import PageOne from 'components/Theme/PageOne';

export default {
	title: 'UI/Theme',
	component: SwitchModeButton,
};

export const Basic = () => (
	<GlobalTheme>
		<SwitchModeButton
			bgImg={
				'https://designshack.net/wp-content/uploads/gradient-background.jpg'
			}
			fontSize={15}
		/>
		<PageOne />
	</GlobalTheme>
);
