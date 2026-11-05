# 🍊 Django Fruit App

Django serves a JSON API containing five fruits, while a separate TypeScript frontend fetches and displays the data in an Ubuntu terminal-inspired interface.

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## ✨ Features

- **Django JSON API** — serves five fruits through `/fruits/`
- **Type-safe data structures** — Python `TypedDict` and TypeScript interfaces
- **Cross-origin requests** — configured using `django-cors-headers`
- **Async data fetching** — Fetch API with `async/await` and error handling
- **Terminal-inspired UI** — responsive Ubuntu-style interface using HTML and CSS

## 🛠 Tech Stack

| Backend                  | Frontend   |
| ------------------------ | ---------- |
| Python                   | TypeScript |
| Django                   | Vite       |
| django-cors-headers      | HTML & CSS |
| SQLite (Django defaults) | Fetch API  |

## 📁 Project Structure

```text
django-fruit-app/
├── backend/
│   ├── core/              # Django configuration
│   ├── fruit_app/         # Fruit API
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── main.ts
│   │   ├── types.ts
│   │   └── style.css
│   ├── index.html
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kamycoding/django-fruit-app.git
cd django-fruit-app
```

### 2. Start the backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Generate a local Django secret key:

```bash
export DJANGO_SECRET_KEY="$(python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())')"
```

Apply migrations and run Django:

```bash
python manage.py migrate
python manage.py runserver
```

The API is now available at:

**http://127.0.0.1:8000/fruits/**

### 3. Start the frontend

Open a second terminal from the repository root:

```bash
cd frontend
npm install
npm run dev
```

If your second terminal starts inside `backend/`, run `cd ../frontend` instead.

Open the URL provided by Vite, usually:

**http://localhost:5173/**

> Both Django and Vite must be running for the application to work.

## 🔌 API

### `GET /fruits/`

Returns a JSON array containing five fruits.

Example response:

```json
[
  {
    "name": "Banana",
    "weight": 24,
    "color": "Yellow"
  },
  {
    "name": "Apple",
    "weight": 46,
    "color": "Red"
  }
]
```

Each fruit contains:

| Field    | Type     | Description          |
| -------- | -------- | -------------------- |
| `name`   | `string` | Fruit name           |
| `weight` | `number` | Weight in grams      |
| `color`  | `string` | Red, Yellow or Green |

## 🔄 Data Flow

```text
Django Backend
     │
     │ GET /fruits/
     ▼
  JsonResponse
     │
     │ JSON
     ▼
TypeScript Fetch API
     │
     ▼
 DOM Rendering
     │
     ▼
 Ubuntu Terminal UI
```

The fruit data is defined in the Django view and is not stored in a database. SQLite is used for Django's built-in applications.

## ✅ Verification

Backend:

```bash
python manage.py check
```

Frontend:

```bash
npm run build
```

Run each command from its respective project directory.

---
