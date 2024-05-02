<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">
  
<a href="https://simple-firebase-crud-api.vercel.app/">
    <img src="https://imgur.com/f3SMCPT.png" width="180" alt="Warp" />
</a>

# 🔥 Simple Firebase CRUD API
### Firebase & Next.js | Blazing-fast and serverless CRUD API

[![nextjs][nextjs-badge]][nextjs]
[![react][react-badge]][react]
[![redux][redux-badge]][redux]
[![firebase][firebase-badge]][firebase]

<a href="https://vercel.com/" target="_blank" rel="noopener">
  <img src="https://raw.githubusercontent.com/abumalick/powered-by-vercel/master/powered-by-vercel.svg" width="175" alt="Powered by Vercel" />
</a>

</div>

## Why?

I created this demo app to showcase in my Operating Systems class for reading, adding, and deleting items from Firestore with just a few clicks. It also serves as a simple Next.js starter project integrated with Firebase Firestore, making replication easy.

The reason behind this project was the need to receive data from a microcontroller using FreeRTOS and store this data in a database for further analysis and potential integration into other applications.

~~"CRUD" (without Update 🤫)~~

## Using this code

Remember to update the configuration in ``/lib/firebase.ts`` (the current one will only work for a few more days).

```tsx
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// ============================================================
// ============================================================
// ========= Put your own Firebase configuration here =========
// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

const firebaseConfig = {
    apiKey: "AIzaSyCxqCyglAG9tUQlp8hxqpQFlJLKnog0h-w",
    authDomain: "os-example-313ee.firebaseapp.com",
    projectId: "os-example-313ee",
    storageBucket: "os-example-313ee.appspot.com",
    messagingSenderId: "754955767049",
    appId: "1:754955767049:web:f03b3eadd402e31a9fd7d8",
    measurementId: "G-SRV4Y5K1XE"
  };

// ☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️
// ============================================================
// ============================================================

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
```

Sample curl to test with external data:
```
curl -X POST http://localhost:3000/api/firebase \
-H "Content-Type: application/json" \
-d '{"data": {"lat": -37.82, "lon": 144.98}}'
```

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[firebase]: https://firebase.google.com/
[firebase-badge]: https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34
[nextjs]: https://nextjs.org/
[nextjs-badge]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[react]: https://react.dev/
[react-badge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[redux]: https://redux.js.org/
[redux-badge]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
