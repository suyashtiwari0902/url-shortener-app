## Full stack MERN project - Easy Link App, url shortener
```
urlshortner
├─ .DS_Store
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  ├─ objects
│  │  ├─ 32
│  │  │  └─ 4cf144cb9e9c39b5425de08c165192222d2aa8
│  │  ├─ fb
│  │  │  └─ 57ccd13afbd082ad82051c2ffebef4840661ec
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-944b7cd3fd74573253f619eb4e8ac0fcd9add66c.idx
│  │     ├─ pack-944b7cd3fd74573253f619eb4e8ac0fcd9add66c.pack
│  │     └─ pack-944b7cd3fd74573253f619eb4e8ac0fcd9add66c.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     └─ tags
├─ .vscode
│  └─ launch.json
├─ client
│  ├─ package.json
│  ├─ public
│  │  ├─ assets
│  │  │  └─ images
│  │  │     ├─ Capture1.png
│  │  │     ├─ Capture2.PNG
│  │  │     └─ logo.png
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.tsx
│  │  ├─ components
│  │  │  ├─ Appbar
│  │  │  │  ├─ Appbar.css
│  │  │  │  └─ Appbar.tsx
│  │  │  ├─ Button
│  │  │  │  ├─ Button.css
│  │  │  │  └─ Button.tsx
│  │  │  ├─ common
│  │  │  │  └─ Snackbar
│  │  │  │     ├─ SnackBar.css
│  │  │  │     ├─ SnackBar.tsx
│  │  │  │     └─ store
│  │  │  │        └─ snackBarStore.ts
│  │  │  ├─ RouteRestriction
│  │  │  │  ├─ PrivateRoutes.tsx
│  │  │  │  └─ PublicRoutes.tsx
│  │  │  ├─ TextInput
│  │  │  │  ├─ TextInput.css
│  │  │  │  └─ TextInput.tsx
│  │  │  └─ UrlTable
│  │  │     ├─ urlTable.css
│  │  │     └─ UrlTable.tsx
│  │  ├─ index.tsx
│  │  ├─ pages
│  │  │  ├─ Auth
│  │  │  │  ├─ auth.css
│  │  │  │  ├─ ForgotPassword.tsx
│  │  │  │  ├─ Login.tsx
│  │  │  │  ├─ PasswordReset.tsx
│  │  │  │  └─ Signup.tsx
│  │  │  ├─ Dashboard
│  │  │  │  ├─ Dashboard.css
│  │  │  │  └─ Dashboard.tsx
│  │  │  └─ Profile
│  │  │     ├─ Profile.css
│  │  │     └─ Profile.tsx
│  │  ├─ Routes.tsx
│  │  ├─ Services
│  │  │  ├─ authServices.ts
│  │  │  ├─ httpClient.ts
│  │  │  ├─ urlServices.ts
│  │  │  └─ userServices.ts
│  │  ├─ store
│  │  │  ├─ urlStore.ts
│  │  │  └─ userStore.ts
│  │  ├─ types
│  │  │  ├─ index.ts
│  │  │  ├─ urlTypes.ts
│  │  │  └─ userTypes.ts
│  │  └─ util
│  │     └─ useAuth.ts
│  ├─ tsconfig.json
│  └─ yarn.lock
├─ README.md
├─ server
│  ├─ .DS_Store
│  ├─ nodemon.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ .DS_Store
│  │  ├─ app.ts
│  │  ├─ config
│  │  │  └─ db.ts
│  │  ├─ middlewares
│  │  │  └─ authToken.ts
│  │  ├─ models
│  │  │  ├─ UrlModel.ts
│  │  │  └─ UserModel.ts
│  │  ├─ routes
│  │  │  ├─ authRouter.ts
│  │  │  ├─ index.ts
│  │  │  ├─ urlRouter.ts
│  │  │  └─ userRouter.ts
│  │  ├─ services
│  │  │  ├─ urlServices.ts
│  │  │  └─ userServices.ts
│  │  ├─ types
│  │  │  ├─ express
│  │  │  │  └─ index.d.ts
│  │  │  ├─ index.ts
│  │  │  ├─ urlTypes.ts
│  │  │  └─ userTypes.ts
│  │  └─ util
│  │     ├─ hash.ts
│  │     ├─ index.ts
│  │     └─ secret.ts
│  ├─ tsconfig.json
│  └─ yarn.lock
└─ yarn.lock

```