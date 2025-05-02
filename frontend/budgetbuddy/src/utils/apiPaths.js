// export const BASE_URL = "http://localhost:8000/api/v1";

// // // GET http://localhost:8000/api/v1/admin/users
// export const API_PATHS = {
//   DASHBOARD: {
//     GET_DATA: "/dashboard",   // ✅ fix here
//   },
//   INCOME: {
//     ADD_INCOME: "/income/add",
//     GET_ALL_INCOME: "/income/get",
//     DELETE_INCOME: (incomeId) => `/income/${incomeId}`,
//     DOWNLOAD_INCOME: `/income/downloadexcel`,
//   },
//   EXPENSE: {
//     ADD_EXPENSE: "/expense/add",
//     GET_ALL_EXPENSE: "/expense/get",
//     DELETE_EXPENSE: (expenseId) => `/expense/${expenseId}`,
//     DOWNLOAD_EXPENSE: `/expense/downloadexcel`,
//   },
//   IMAGE: {
//     UPLOAD_IMAGE: "/auth/upload-image",
//   },
//   ADMIN: {
//     LOGIN: "/admin/login",
//     GET_USERS: "/admin/users",
//     GET_INCOME: "/admin/income",
//     GET_EXPENSE: "/admin/expense",
//   },
//   AUTH: {
//     LOGIN: "/auth/login",
//     REGISTER: "/auth/register",
//     GET_USER_INFO: "/auth/getUser",
//   },
// };

// // export const BASE_URL = "http://localhost:5000/api/v1";

// // // utils/apiPaths.js
// // export const API_PATHS = {
// //   AUTH: {
// //     //     LOGIN: "/auth/login",
// //     //     REGISTER: "/auth/register",
// //     //     GET_USER_INFO: "/auth/getUser",
// //     //   },
// //   ADMIN: {
// //     LOGIN: "/admin/login",
// //     REGISTER: "/admin/register",
// //     DASHBOARD: "/admin/dashboard",
// //     USERS: "/admin/users",
// //   },
// //   DASHBOARD: {
// //     GET_DATA: "/api/v1/dashboard",
// //   },
// //   INCOME: {
// //     ADD_INCOME: "/api/v1/income/add",
// //     GET_ALL_INCOME: "/api/v1/income/get",
// //     DELETE_INCOME: (incomeId) => `api/v1/income/${incomeId}`,
// //     DOWNLOAD_INCOME: `/api/v1/income/downloadexcel`,
// //   },
// //   EXPENSE: {
// //     ADD_EXPENSE: "/api/v1/expense/add",
// //     GET_ALL_EXPENSE: "/api/v1/expense/get",
// //     DELETE_EXPENSE: (expenseId) => `api/v1/expense/${expenseId}`,
// //     DOWNLOAD_EXPENSE: `/api/v1/expense/downloadexcel`,
// //   },
// //   IMAGE: {
// //     UPLOAD_IMAGE: "/api/v1/auth/upload-image",
// //   },
// // };
export const BASE_URL = "http://localhost:5000";

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    REGISTER: "/api/v1/auth/register",
    GET_USER_INFO: "/api/v1/auth/getUser",
  },
  ADMIN: {
    LOGIN: "/api/v1/admin/login",
    REGISTER: "/api/v1/admin/register",
    GET_DASHBOARD_DATA: "/api/v1/admin/dashboard",
    GET_USERS: "/api/v1/admin/users",
    DELETE_USER: "/api/v1/admin/users", // you'll use DELETE_USER + /:id
    GET_INCOME: "/api/v1/income/get",
    GET_EXPENSE: "/api/v1/admin/expenses",  // not /expense/get

    INCOME: "/api/v1/income/admin/get",
  },
  DASHBOARD: {
    GET_DATA: "/api/v1/dashboard",
  },
  INCOME: {
    ADD_INCOME: "/api/v1/income/add",
    GET_ALL_INCOME: "/api/v1/income/get",
    DELETE_INCOME: (incomeId) => `api/v1/income/${incomeId}`,
    DOWNLOAD_INCOME: `/api/v1/income/downloadexcel`,
  },
  EXPENSE: {
    ADD_EXPENSE: "/api/v1/expense/add",
    GET_ALL_EXPENSE: "/api/v1/expense/get",
    DELETE_EXPENSE: (expenseId) => `api/v1/expense/${expenseId}`,
    DOWNLOAD_EXPENSE: `/api/v1/expense/downloadexcel`,
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/v1/auth/upload-image",
  },
};