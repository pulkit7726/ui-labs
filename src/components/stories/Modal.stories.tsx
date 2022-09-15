import React, { ReactElement } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@mui/material';
import Modal from "components/Modal";
import "../Modal/Modal.css";
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PaymentIcon from '@mui/icons-material/Payment';

const CssButton = styled(Button)`
    
`
  ;


type ModalProps = {
  mainTitle?: ReactElement | string;
  title?: ReactElement | string;
  footer?: ReactElement | string;
  children?: ReactElement | string;
  keepMounted?: boolean;
  disableBackdropClick?: boolean;
  hideBackdrop?: boolean;
  background?: string;
  width?: string;
  height?: string;
  fullScreen?: boolean;
  notificationIcon?: boolean;
  settingIcon?: boolean;
  fullscreenIcon?: boolean;
  transition?: string;
  transitionContent?: boolean;
}


const ModalStoriesComponent = (props: ModalProps) => {
  const [show, setShow] = React.useState(false);

  return (<>
  {!show ? (
    <CssButton
      variant="contained"
      color="primary"
      onClick={() => {
        setShow(!show)
      }}>Show Modal</CssButton>) : null}
    <Modal onClose={() => setShow(false)} show={show} {...props} />
  </>)
}


export default {
  mainTitle: '',
  title: 'Modal',
  show: true,
  argTypes: {
    transition: {
      control: {
        type: 'radio',
        options: [ 'collapse', 'fade', 'grow', 'slide', 'zoom'],
      },
    },
    background: { control: 'color' },
    width: {
      control: { type: 'range', min: 200, max: 1200, step: 50 },
    },
    height: {
      control: { type: 'range', min: 200, max: 1500, step: 50 },
    },
    title: {
      control: { type: 'text' }
    },
   
  },
  onClose: () => { }
} as ComponentMeta<typeof ModalStoriesComponent>;


const Template: ComponentStory<typeof ModalStoriesComponent> = (args) => <ModalStoriesComponent {...args} />;



export const Basic = Template.bind({});
Basic.args = {
  mainTitle: 'Basic',
  title: 'Dialog/Popup Heading',
  children: <span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>,
  fullScreen: false,
  notificationIcon: false,
  settingIcon: false,
  fullscreenIcon: false,

}

export const keepMounted = Template.bind({});
keepMounted.args = {
  mainTitle: 'Keep Mounted',
  title: 'Dialog/Popup Heading',
  children: <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </span>,
  keepMounted: true,
  fullScreen: false,
  notificationIcon: false,
  settingIcon: false,
  fullscreenIcon: false,
}

export const ScrollableBody = Template.bind({});
ScrollableBody.args = {
  mainTitle: 'Scrollable Body',
  title: 'Dialog/Popup Heading',
  notificationIcon: false,
  settingIcon: false,
  fullscreenIcon: false,
  fullScreen: false,
  children: <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>,
  footer: <><br /><Button>Agree</Button><Button variant="contained">Disagree</Button></>
}

export const basicWithInput = Template.bind({});
basicWithInput.args = {
  mainTitle: 'Basic With Input',
  title: 'Dialog/Popup Heading',
  fullScreen: false,
  notificationIcon: false,
  settingIcon: false,
  fullscreenIcon: false,
  children: <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>,
  footer: <div><br /><input type="checkbox" /><span >I accept Terms and conditions </span></div>,
}

export const completeForm = Template.bind({});
completeForm.args = {
  mainTitle: 'Complete Form',
  title: <><div><InfoIcon /> Contact Information<h6><FormatListBulletedIcon /> Form description</h6></div></>,
  fullScreen: false,
  notificationIcon: false,
  settingIcon: false,
  fullscreenIcon: false,
  children:
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="outlined-required" label="First Name" defaultValue="" />
        <TextField required id="outlined-required" label="Last Name" defaultValue="" />
        <br />
        <TextField required id="outlined-required" label="Email" defaultValue="" />
        <br />
        <TextField required id="outlined-required" label="Mobile No." defaultValue="" />
      </div>
    </Box>,
  footer: <><br /><Button onClick={() => { }}>cancel</Button><Button variant="contained">Submit</Button></>
}

export const paymentBox = Template.bind({});
paymentBox.args = {
  mainTitle: 'Payment Box',
  title: <div><PaymentIcon /> Payment Details</div>,
  fullScreen: false,
  notificationIcon: false,
  settingIcon: false,
  fullscreenIcon: false,
  children: <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField required id="outlined-required" label="Name on the card" defaultValue="" />
      <TextField required id="outlined-required" label="Card Number" defaultValue="" />
      <br />
      <TextField required id="outlined-required" label="Expiry" defaultValue="" />
      <TextField required id="outlined-required" label="CVV" defaultValue="" />
    </div>
  </Box>,
  footer: <><br /><Button onClick={() => { }}>cancel</Button><Button variant="contained">Pay Now</Button></>
}

export const transitionModal = Template.bind({});
transitionModal.args = {
  transitionContent: true,
  title: 'Modal Transition',
  children: <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </span> 
}              