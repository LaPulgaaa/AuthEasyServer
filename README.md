# AuthEasyServer
A simple authentication server. Allow for scope based authorization.
## Steps to run application locally
- Setup auth provider and update your `.env` file with `client_id` and `client_secret`
- Install dependencies
```bash
// from the root directory
npm install
```
- Start your sample web application
```base
cd web/test_auth
npm run dev
```
- Start your auth server
```bash
cd server/auth_server
tsc -b
node dist/index.js
```
- Start the application locally by visiting `localhost:3000` on your browser
- Enter the scope you want the app to have.
```text
// to allow your app to send follow request on your behalf
read:user user:email user:follow
// to allow simple read access
read:user user:email
```
- Click on Login. You will redirect to github's authorization page.
- On approval the browser would be redirect to your application `/home` page with your public profile info.
- The page has text box. Enter the `username` you want follow and click `Follow` button
