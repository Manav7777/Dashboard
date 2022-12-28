import React from 'react'

// import AdminDashboard from './DashBoard/AdminDashboard';
import AdminUserContent from "./pages/AdminUserContent"
// const UsersExist =import('./pages/UsersExist')
import UsersExist from "./pages/UsersExist"
import UserProfile from './pages/Profile/UserProfile';

const route = [
  { path: "/index", name: "Dashboard", element: AdminUserContent },
  { path: "/users", name: "Theme", element: UsersExist, exact: true },
  { path: "/users/user-profile", name: "Profile", element: UserProfile, exact: true },
];

export default route;
