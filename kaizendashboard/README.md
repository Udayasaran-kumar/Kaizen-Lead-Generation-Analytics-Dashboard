
# 📊 Lead Analytics Dashboard

A real-time lead analytics dashboard built with **React** and **Firebase**, featuring user authentication, filtering, and visualizations for lead tracking.

---

## 🚀 Features

- 🔐 Login / Signup with Firebase Auth
- 📅 Filter leads by date range, campaign, and score
- 📈 Charts by lead quality, source, and campaign
- 📋 Paginated table for browsing leads
- ☁️ Firebase Realtime Database backend
- 💡 Clean, responsive UI

---

## 🧪 Demo Credentials

Use the following test account to try it out:

```
Email: admin@gmail.com
Password: 123456789
```

---

## 🛠 Tech Stack

- **React** + **React Router**
- **Firebase Auth** + **Realtime Database**
- **Chart.js** via `react-chartjs-2`
- **CSS Modules / Custom Styling**

---

## 📦 Folder Structure

```
src/
├── components/
│   ├── Filters.jsx
│   ├── LeadChart.jsx
│   ├── LeadTable.jsx
│   ├── firebase.js
│   └── App.css
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── App.js
└── index.js
```

---

## ⚙️ Getting Started

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/your-username/lead-analytics-dashboard.git
cd kaizendashboard
```

### 2. 📦 Install Dependencies

```bash
npm install
```

---

## 🔐 Firebase Setup

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable **Authentication > Email/Password**
4. Enable **Realtime Database** with these rules:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

### Step 2: Add Firebase Config to `.env`

Create a `.env` file in the root and add:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_DATABASE_URL=https://your_project_id.firebaseio.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```

### Step 3: Use Config in `firebase.js`

```js
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
```

---

## 🧪 Test Data Import

Use the following JSON in the **Firebase Realtime Database** (`leads` node):

```json
{
  "leads": {
    "lead1": {
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "score": 80,
      "campaign": "Google Ads",
      "source": "Web",
      "quality": "High",
      "timestamp": "2024-04-01T12:00:00Z"
    },
    "lead2": {
      "name": "Bob Smith",
      "email": "bob@example.com",
      "score": 45,
      "campaign": "Facebook",
      "source": "Mobile",
      "quality": "Medium",
      "timestamp": "2024-04-05T15:30:00Z"
    }
  }
}
```

---

## 🧪 Run the App Locally

```bash
npm run dev
```

Access it at: `http://localhost:5173`

---

## 📤 Deployment

You can deploy this app on:

- **Firebase Hosting**
- **Vercel**
- **Netlify**

To deploy on Firebase:

```bash
npm run build
firebase init
firebase deploy
```

---

## 🤝 Contributing

Feel free to fork and improve this project. Pull requests are welcome!

---

## 📄 License

This project is open-source under the **MIT License**.
