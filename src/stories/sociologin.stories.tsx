import React from 'react';
import Socio from 'components/socio-login/socio-login';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';


export default {
    title:'Socio-login',
    component: Socio,
  
}as ComponentMeta<typeof Socio>;






const TableStory:ComponentStory<typeof Socio> = args => <MemoryRouter><Socio{...args}/></MemoryRouter>

export const socio = TableStory.bind({})
socio.args={
    
}
