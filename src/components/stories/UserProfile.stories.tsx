import React from 'react';
import UserProfile from 'components/UserProfile';
import { ComponentMeta, ComponentStory } from '@storybook/react';

type UserProfileProps = {
    title?: string;
    idName?: any;
    email?: any;
    sex?: string;
    contact?: string;
    country?: string;
    state?: string;
    personalDetails?: string;
    professionalDetails?: string;
    companyName?: string;
    companyTitle?: string;
    practiceName?: string;
    practiceTitle?: string;
    businessUnitName?: string;
    businessUnitTitle?: string;
    departmentName?: string;
    departmentTitle?: string;
    seatingLocationName?: string;
    seatingLocationTitle?: string;
    payrollLocationName?: string;
    payrollLocationTitle?: string;
    designationName?: string;
    designationTitle?: string;
    employeeTypeName?: string;
    employeeTypeTitle?: string;
}

const UserProfileStories = (props: UserProfileProps) => {
  return (
    <div>
        <UserProfile {...props}/>
    </div>
  ) 
}
 
export default {
    title: 'User Profile',
} as ComponentMeta<typeof UserProfileStories>;

const Template: ComponentStory<typeof UserProfileStories> = (args) => <UserProfileStories {...args}/>

export const Profile = Template.bind({});
Profile.args = {
  personalDetails: 'About Me',
  professionalDetails: 'Professional Details',
  idName: 'WL12345-James Williams',
  email: 'james@wavelabs.ai',
  sex: 'Male',
  contact: '+9100011125',
  country: 'US',
  state: 'California',
  companyName: 'Company',
  companyTitle: 'Wavelabs Technologies',
  practiceName: ' Practice',
  practiceTitle: 'Design & Digital',
  businessUnitName: 'Business Unit',
  businessUnitTitle: 'Digital',
  departmentName: 'Department',
  departmentTitle: 'Digital',
  seatingLocationName: 'Seating Location',
  seatingLocationTitle: 'Hyderabad',
  payrollLocationName: 'Payroll Location',
  payrollLocationTitle: 'Hyderabad',
  designationName: 'Designation',
  designationTitle: 'Software Engineer',
  employeeTypeName: 'Employee type',
  employeeTypeTitle: 'Permanent',
}              