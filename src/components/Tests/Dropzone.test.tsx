import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from '@storybook/testing-react';
import * as  Dropzone  from "stories/Dropzone.stories";

const { DropzoneList } = composeStories(Dropzone);

test('should render dropzone component', ()=>{
    const  screenshot = render(<DropzoneList {...DropzoneList.args}/>);
    expect(screenshot).toMatchSnapshot();
})

test('File types not to be empty',()=>{
    render(<DropzoneList {...DropzoneList.args}/>);
    expect(DropzoneList?.args?.fileTypes?.length).toBeTruthy();
    const text = screen.getByText(/Drag and Drop files here.../)
    expect(text).not.toBeNull();
    const fn = screen.getByTestId('UploadFileIcon');
    expect(fn).toBeInTheDocument();
})