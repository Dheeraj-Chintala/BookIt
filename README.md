# BookIt: Experience & Slots

A full-stack slot booking web app where users can explore travel experiences,
select available slots, and complete bookings. All with REST API integration.


<div align="center">


[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Frontend%20Hosting-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Backend%20Hosting-Render-5F43E9?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

</div>

---



### Demo 
<img src="frontend/public/screenshots/demo.gif" alt="Demo is loading please wait!" height="500px"/>


### Screenshots

  <img src="frontend/public/screenshots/Screenshot (305).png" height="350px"/>
<img src="frontend/public/screenshots/Screenshot (306).png" height="350px"/>

  <details>
    <summary>More Screenshots</summary>
      <img src="frontend/public/screenshots/Screenshot (307).png" height="350px"/>

  <img src="frontend/public/screenshots/Screenshot (308).png" height="350px"/>
  <img src="frontend/public/screenshots/Screenshot (309).png" height="350px"/>
  </details>


##  Tech Stack

| **Component**       | **Technology**       |
|----------------------|----------------------|
|  **Frontend**      | React (Vite)         |
|  **Backend**       | Node.js + Express    |
|  **Database**      | MongoDB              |
|  **API Architecture** | REST              |

---

## 📂 Project Structure
```
BookIt/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  ├─ bookingController.js
│  │  │  ├─ experienceController.js
│  │  │  └─ promoController.js
│  │  ├─ models/
│  │  │  ├─ Booking.js
│  │  │  └─ Experience.js
│  │  ├─ routes/
│  │  │  ├─ bookingRoutes.js
│  │  │  ├─ experienceRoutes.js
│  │  │  └─ promoRoutes.js
│  │  └─ server.js
│  └─ package.json
└─ frontend/
  ├─ src/
  │  ├─ components/
  │  │  ├─ ExperienceCard.tsx
  │  │  ├─ Header.tsx
  │  │  └─ SearchBar.tsx
  │  ├─ hooks/
  │  │  ├─ use-mobile.tsx
  │  ├─ lib/
  │  │  ├─ api.ts
  │  ├─ pages/
  │  │  ├─ Checkout.tsx
  │  │  ├─ Confirmation.tsx
  │  │  ├─ ExperienceDetails.tsx
  │  │  ├─ Home.tsx
  │  ├─ App.tsx
  ├─ index.html
  ├─ package.json
  ├─ README.md
  ├─ tsconfig.json
  └─ vite.config.ts



```



---

### **Backend APIs**

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/experiences` |  Return list of experiences. |
| `GET` | `/api/experiences/:id` | - Return details and slot availability |
| `POST` | `/api/bookings` | Remove item from cart. |
| `POST` | `/api/promo/validate` | Validates promo codes. |

---

## 🛠️ Setup Instructions

### 1 Clone Repository
```bash
git clone https://github.com/Dheeraj-Chintala/BookIt.git
cd BookIt
```
### 2 Backend Setup
```bash
cd backend
#create .env file with MONGO_URI="Your_mongo_string" and PORT=number  
npm install
npm start
```




### 3 Frontend Setup

```bash

# in new terminal
cd  BookIt/frontend
#create a .env file with VITE_API_BASE=http://localhost:5000/api 
npm install
npm run dev
```

##  Credits
Built by [Dheeraj Chintala](https://github.com/Dheeraj-Chintala)  
for the **Highway Delite**  assignment.
