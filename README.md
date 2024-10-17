# EmployWise Assignment
This is a React application that integrates with the Reqres API to perform basic user management functions.The Website is now live! Check out now.\
https://employ-wise-tau.vercel.app/

## Project Structure
The project is divided into three levels of complexity:
1. **Authentication Screen**
2. **Users List (with Pagination)**
3. **Edit and Delete Users**

### Features
- User Authentication with the Reqres API.
- Display a paginated list of users with their first name, last name, and avatar.
- Edit and delete user details.
- API error handling and form validation.
- Responsive design using Tailwind CSS.
- Persistence of login tokens via local storage.

## Tech Stack
- **Frontend Framework:** React + Typescript
- **CSS Framework:** Tailwind CSS
- **Routing:** React Router (for navigation between Login, User List, and Edit User pages)
- **Validation:** Zod
- **Form-Validation:** react-hook-form
- **HTTP Client:** Axios
- **State Management:** React's useState and useEffect hooks

## API Endpoints
1. **Login:**
   - POST `/api/login`
   - **Credentials:**
     - Email: `eve.holt@reqres.in`
     - Password: `cityslicka`

2. **Fetch Users:**
   - GET `/api/users?page=1`

3. **Update User:**
   - PUT `/api/users/{id}`

4. **Delete User:**
   - DELETE `/api/users/{id}`

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Installation
You can clone the current version of the project from the [GitHub repository](https://github.com/divyanshChamoli/employ-wise/tree/main) and install the necessary dependencies by running the following commands:

```
git clone https://github.com/divyanshChamoli/employ-wise
cd employ-wise
npm install
```

Once you have installed the dependencies, you have to create an .env file with the following environment variables:

Backend base url:

```
VITE_BASE_URL = "https://reqres.in"
```
Run the application by:
```
npm run dev
```

Open the application in your browser at http://localhost:5173

## Authentication Credentials:
- Email: eve.holt@reqres.in
- Password: cityslicka
# Additional Information
## Error Handling:
- Displays appropriate messages for authentication, fetching, editing, and deleting users.
- Includes form validation on the login and edit user screens.
## Persistence:
- The authentication token is stored in LocalStorage.
- Redirects users to the login page if the token is missing or has expired.
## Assumptions:
- The API does not actually update or delete users, so mock responses are handled where applicable and UI is updated through state variables if the API returns success.
- Update and Delete admin functionality is provided globablly ie anyone logged in through the correct Authentication Credentials can edit or delete all users in the user list.  
- If the API returns an error it is handled through error messages and if a api returns the correct response then the task is done and user is redirected to "/"
- If the token is not present in local storage, the user is redirected to "/login" and needs to login again with correct Authentication Credentials
## Deployment:
The app is deployed on [Vercel] and can be accessed 
[here](https://employ-wise-tau.vercel.app/)
## Future Improvements:
- Enhancing user experience by adding more sorting and filtering features.
- More detailed error handling for edge cases.