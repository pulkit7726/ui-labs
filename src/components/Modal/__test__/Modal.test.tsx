import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../index';

describe('should render a Modal', () => {
	test('should render as objet', () => {
		render(<Modal />);
		expect(typeof onclose).toBe('object');
	});

	test('should render as CssDialog', () => {
		render(<Modal fullScreen show />);
		const title = screen.getByTestId('CssDialog-fullScreen');
		expect(title.getElementsByClassName('CssDialog').length).toBe(0);
	});

	test('should render as CssDialog-box', () => {
		render(<Modal headerTitle="Baic" fullScreen show />);
		const title = screen.getByTestId('test-box');
		expect(title.getElementsByClassName('CssDialog-box').length).toBe(0);
	});

	test('should render as CssDialog-appbar', () => {
		render(<Modal headerTitle="Basic" fullScreen show />);
		const title = screen.getByTestId('test-appbar');
		expect(title).toBeTruthy();
	});

	test('should render as CssDialog-toolbar', () => {
		render(<Modal headerTitle="Basic" fullScreen show />);
		const title = screen.getByTestId('test-toolbar');
		expect(title).toBeTruthy();
	});

	test('should render as CssDialog-grid', () => {
		render(<Modal headerTitle="Basic" fullScreen show />);
		const title = screen.getByTestId('test-grid');
		expect(title).toBeTruthy();
	});

	test('should render as CssDialog-tooltip-title', () => {
		render(<Modal headerTitle="Basic" fullScreen show />);
		const linkElement = screen.getByText('Basic');
		expect(linkElement).toBeTruthy();
	});

	test('should render as CssDialog-IconButton', () => {
		render(<Modal headerTitle="Basic" fullScreen show />);
		const title = screen.getByTestId('test-iconButton');
		expect(title).toBeTruthy();
	});

	test('should render as CssDialog-content', () => {
		render(<Modal fullScreen show />);
		const title = screen.getByTestId('test-content');
		expect(title).toBeTruthy();
	});

	test('should render as CssDialog-body', () => {
		render(<Modal fullScreen show />);
		const title = screen.getByTestId('test-body');
		expect(title).toBeTruthy();
	});

	test('should render as CssDialog-typography', () => {
		render(<Modal fullScreen show />);
		const title = screen.getByTestId('test-typography');
		expect(title).toBeTruthy();
	});
});
