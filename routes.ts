/*
    * An array of public routes that do not require authentication
    * @type {string[]}
 */
export const publicRoutes = [
    "/"
]
/*
    * An array of public routes that do not require authentication
    * These routes will redirect logged users to /settings
    * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
]

/*
    * The prefix for the API auth routes
    * Routes that start with this prefix are used for api authentication purposes
    * @type {string}
 */
export const apiAuthPrefix = "/api/auth"


/*
    * The default redirect route after a successful login
    * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings"