// ─────────────────────────────────────────────────────────────────
// 🔥 FIREBASE CONFIGURATION
// ─────────────────────────────────────────────────────────────────
//
// STEP 1: Go to https://console.firebase.google.com
//         → Create project → Add Web App → Copy the config below
//
// STEP 2: In Firebase Console → Authentication → Sign-in method
//         → Enable:  Google ✅   GitHub ✅
//
// STEP 3: For GitHub:
//         → Go to https://github.com/settings/developers
//         → New OAuth App → callback URL:
//           https://<your-project-id>.firebaseapp.com/__/auth/handler
//         → Copy Client ID & Secret into Firebase GitHub settings
//
// STEP 4: Replace the placeholder values below with your real config
//
// ─────────────────────────────────────────────────────────────────

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
