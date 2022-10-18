import React from 'react';
import { render, screen } from '@testing-library/react';
import SwitchModeButton from '../SwitchModeButton';

test('Component Should render properly ', () => {
	render(
		<SwitchModeButton
			bgImg={
				'https://designshack.net/wp-content/uploads/gradient-background.jpg'
			}
		/>
	);
});
