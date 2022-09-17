Storyboook React SPA code Guidelines: 
 

Use only yarn not npm. 

Use yarn run stotybook to start application and yarn install to install dependencies. 

All React components and stories should be in typescript. (file extension should be .tsx) 

Every component should be added in components folder and stories should be in stories folder. 
Ex:  
src/components/Button (Button folder should have one index.tsx file) 
src/stories/Button.stories.tsx  

Use PascalCase for type names. 

Prop names should be camelCase. 

Every component should have react unit test cases. 

Add type declaration for each component's props. 

Prop names and function names should be meaningful. 

Each prop should have its own description (which will be reflected in story book component docs). Check the image below for reference. 


Remove consoles and debugger before code is being pushed. 

Each Component name should be in PascalCase. 

Avoid using type any (: any) and declare specific variable types. 

It’s better to follow single pattern for all branches component name hyphen developer name. Ex: sidebar-kalyani 



Check the document for image reference:
https://wavelabstechnologies-my.sharepoint.com/:w:/g/personal/kalyania_wavelabs_ai/ESA-6BTu7Z1JtBlvygIpbvABeB7aMr6qRSoZJrmzgNBqCA?e=DqjrgU