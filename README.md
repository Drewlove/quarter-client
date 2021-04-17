# The Quarter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary

**The Quarter** is a full stack web app. This is the client repo. A second API repo also exists.

The purpose of **The Quarter** is to empower users to easily model a quarterly profit and loss statement for a food business.

To view the app: https://quarter-client.vercel.app/

## Overview

### Profit and Loss Page

The profit and loss page provides a quarterly overview of both revenue and expenses. It follows the template of providing sales, cogs, direct labor, overrhead and net profit figures.

Additional analysis is provided in the form of gross profit (sales - cogs) and prime cost (sales - cogs - direct labor) figures.

All together, the page is ordered as follows:

1. Sales

2. COGS

3. Gross Profit: Sales - COGS

4. Direct Labor

5. Prime Costs: Sales - COGS - Direct Labor

6. Overhead

7. Net Profit: Sales - COGS - Direct Labor - Overhead

### Line Items

The profit and loss page is composed primarily of user created entries from the line items form.

The only exception is for items listed under direct labor, where each "line item" is actually the total quarterly spend on each department according to the user created schedule. See the schedule section below for details.

A line item can be created, modified, or deleted using the line item form. The line item form allows the user to select the category for the line item (sales, cogs, or overhead), the name of the line item, and whether the amount type is dollars or % of another line item.

If the user selects an amount type of percentage, the user must also select which line item to base the percentage off of.

For example, if a user wants to create a line item for "COGS - Food", and set that line item as 25% of food sales, they would choose percentage as the amount type, and then choose "Sales - Food" as the basis line item.

### Departments

There is both a departments page and a department form. The departments page allows users to view departments that they have created. The departments form allows users to add, modify, or delete departments.

### Roles

There is both a roles page and a role form. The roles page allows users to view roles that they have created. The roles form allows users to add, modify, or delete roles.

### Schedule

The schedule page displays the total cost of direct labor on a weekly or quarterly basis. The user can click the "Quarterly Payroll: $XX,XXX" button at the top of the page to toggle between quarterly or weekly costs.

The user can also view the selected weekly or quarterly cost for each department, as well as the schedule for every role.

The user can click on any of the schedules in order to view a form for that schedule, and modify any of the information or delete that particular schedule.

The user can also add new schedules.

## Client Technologies

Made with react, 16.14, react-router-dom, 5.2

Testing with enzyme and Jest.

Authorization via auth0.

## API and Back-End Technologies

A second API repo exists built using Node.js and Express. It connects to a PostgreSQL datbase hosted on Heroku.

## API Requests

The API request logic can be found in the Utilities/API_METHODS folder of this repo.

The API methods DELETE and GET have their own file.

The logic for the API methods POST and PATCH are both handled in the API_SAVE file.

The API_SAVE function handles both POST and PATCH requests. A URL parameter, called rowId and provided by react router, is passed to the API_SAVE function.

If the rowId equals the string "new", this indicates that the user is viewing a form, and will possibly enter information into that form and then save the information. If the user clicks the "Save" button on the form, and all fields have been accurately filled out, a POST request will be sent to the API.

If the rowId is a number, this indicates that the user is viewing a previously saved piece of information that has been retrieved from the database. If the user clicks the "Save" button on the form, and all fields have been accurately filled out, a PATCH request will be sent to the API.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
