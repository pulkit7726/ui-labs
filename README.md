## UILabs Code Guidelines



- Review to check if code changes meet intended functionlity

- Review to check if code is understandable/readable

- Keep it Simple Stupid (K.I.S.S)

- Don't Repeat Yourself (DRY)

- Ensure a larger team is empowered to maintain the codebase

- Dont leave the developer guessing. Be precriptive as you can be.

- Lets be courteous in our communication



## General Best Practices To Follow



- [ ] Test case document attached ( where applicable )

- [ ] Code is formatted with the agreed upon formatter and linter

- [ ] Is the same code repeating in multiple places. Refactor Please

- [ ] Use names that are meaningful and reveal the intention of variables, methods and classes. Let's talk in the domain

- [ ] Is the method or class doing too many things. Can it be broken down to do one thing only at a time?

- [ ] Resources utilized are released when they are no longer needed-

- [ ] Does the change potentially impact other components ( change in method signature )

- [ ] There are no usages of 'magic numbers'

- [ ] There is no commented out code

- [ ] There is no Inaccessible code



## Logging Guidelines

- [ ] Check for required logs and levels. Avoid unneccessary logs

- [ ] Dont expose sensitive information in logs and exceptions




## Documentation

- [ ] Code comments are in clear language.

- [ ] Comments exist and describe rationale or reasons for decisions in code

- [ ] Does the code have standard headers - author, date, synopsis, modifications history

- [ ] Comments about special cases


Storyboook React SPA code Guidelines:
•While setting up the project for first time, use yarn install to install dependencies.
•Use yarn run storybook to run the application.
•All React components and stories should be in typescript. (file extension should be .tsx)
•Every component should be added in components folder and stories should be in stories folder.
Ex: src/components/Button (Button folder should have one index.tsx file)
src/stories/Button.stories.tsx 
•Use PascalCase for type names.
•Prop names should be camelCase.
•Every component should have react unit test cases.
•Add type declaration (interfaces and types) for each component's props.
•Prop names and function names should be meaningful and camelCase.
•Each prop should have its own description (which will be reflected in story book component docs).
•Remove consoles and debugger before code is being pushed.
•Each Component name should be in PascalCase.
•Mostly avoid using type any (: any) if we know type, otherwise use any.
•It’s better to follow single pattern for all branches component name hyphen developer name. Ex: dev-kalyani-sidebar
•Format your files with eslint, prettier before pushing code to remote.
