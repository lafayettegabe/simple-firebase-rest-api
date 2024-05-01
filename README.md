# 🔥 Simple Firebase CRUD API
### Firebase & Next.js | Blazing-fast and serverless CRUD API

I created this demo app to showcase in class—a straightforward CRUD (without Update 🤫) for reading, adding, and deleting items from Firestore with just a few clicks. It also serves as a simple Next.js starter project integrated with Firebase Firestore, making replication easy.

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

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
