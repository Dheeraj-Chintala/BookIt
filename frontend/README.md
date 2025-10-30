# BookIt: Experience & Slots

A full-stack slot booking web app where users can explore travel experiences,
select available slots, and complete bookings. All with REST API integration.

<div align="center">

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)
  
</div>

---



### Demo 
<img src="frontend/public/screenshots/demo.gif" alt="Demo is loading please wait!" height="500px"/>


### Screenshots

  <img src="frontend/public/screenshots/Screenshot (299).png" height="350px"/>
<img src="frontend/public/screenshots/Screenshot (300).png" height="350px"/>

  <details>
    <summary>More Screenshots</summary>
      <img src="frontend/public/screenshots/Screenshot (301).png" height="350px"/>

  <img src="frontend/public/screenshots/Screenshot (303).png" height="350px"/>
  <img src="frontend/public/screenshots/Screenshot (304).png" height="350px"/>
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
│  │  ├─ config/
│  │  │  └─ db.js
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
  │  │  └─ use-toast.ts
  │  ├─ lib/
  │  │  ├─ api.ts
  │  │  └─ utils.ts
  │  ├─ pages/
  │  │  ├─ Checkout.tsx
  │  │  ├─ Confirmation.tsx
  │  │  ├─ ExperienceDetails.tsx
  │  │  ├─ Home.tsx
  │  │  └─ NotFound.tsx
  │  ├─ App.tsx
  │  └─ vite-env.d.ts
  ├─ index.html
  ├─ package.json
  ├─ README.md
  ├─ tsconfig.json
  └─ vite.config.ts



```



---

## 🧩 Features

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
git clone https://github.com/Dheeraj-Chintala/Mock-Ecom-Cart.git
cd Mock-Ecom-Cart
```
### 2 Backend Setup
```bash
cd backend
node createEnv.js
npm install
npm start
```

<details>
  <summary>Optional Backend Tests</summary>

```bash
# in new terminal
node test.js
```
</details>



### 3 Frontend Setup

```bash
# in new terminal
cd  Mock-Ecom-Cart/frontend
npm install
npm run dev
```

##  Credits
Built by [Dheeraj Chintala](https://github.com/Dheeraj-Chintala)  
for the **Nexora**  assignment.