# Express.js + TypeScript Enterprise Boilerplate 🚀

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-green)](https://nodejs.org/)
[![TypeScript Version](https://img.shields.io/badge/typescript-%3E%3D5.0-blue)](https://www.typescriptlang.org/)

A professional, production-ready foundation for building scalable, secure, and maintainable Node.js APIs. This boilerplate eliminates the tedious setup phase, providing you with industry-standard configurations out of the box.

## ✨ Why This Boilerplate?

Stop wasting hours configuring TypeScript, security headers, and folder structures. This setup is designed for developers who want to move from **Idea $\rightarrow$ Production** as quickly as possible without sacrificing code quality or security.

### 💎 Key Features
- **⚡ High Performance**: Powered by `tsx` for lightning-fast development cycles.
- **🛡️ Security First**: Integrated with `Helmet` for HTTP header security and `CORS` for controlled resource sharing.
- **🛠️ Scalable Architecture**: Clean separation of concerns (Controllers $\rightarrow$ Services $\rightarrow$ Models).
- **📜 Type Safety**: Strict TypeScript configuration to catch bugs during development, not in production.
- **📈 Observability**: Built-in `Morgan` logging and a dedicated `/health` check endpoint for monitoring.
- **⚙️ Environment Ready**: Seamless environment variable management via `dotenv`.

---

## 🛠️ Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/dhar21baban/easy-setup-expressjs.git
cd express-ts
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
APP_PORT=3000
NODE_ENV=development
```

### 3. Launch the Server
**Development (Hot-Reload):**
```bash
npm run dev:server
```

**Production Build:**
```bash
npm run build
npm start
```

---

## 🏗️ Architecture Overview

The project follows a modular pattern to ensure the codebase remains maintainable as it grows:

```text
├── src/
│   ├── config/      # ⚙️ System & Third-party configurations (JWT, DB, etc.)
│   ├── controllers/ # 🕹️ Request handling & Input validation
│   ├── database/    # 🗄️ Database connections & Migrations
│   ├── middlewares/ # 🛡️ Custom security & logic interceptors
│   ├── models/       # 📐 Data schemas & Type interfaces
│   ├── routes/      # 🛣️ API Endpoint definitions
│   ├── services/    # 🧠 Core Business Logic (The "Brain" of the app)
│   ├── types/       # 🏷️ Global TypeScript definitions
│   └── server.ts    # 🚀 Application entry point
├── _scripts/        # 🛠️ Automation & Utility scripts
└── tsconfig.json    # 📘 TypeScript compiler settings
```

---

## 🚀 Command Palette

| Command | Action | Use Case |
| :--- | :--- | :--- |
| `npm run dev:server` | **Start Dev Server** | Active development with auto-restart |
| `npm run build` | **Compile Project** | Prepare for production deployment |
| `npm start` | **Start Production** | Run the optimized JS build |
| `npm run clean` | **Clean Build** | Remove `dist/` folder to start fresh |

---

## 🚦 System Health
Monitor your API status instantly:
`GET /health` $\rightarrow$ Returns system uptime, timestamp, and status.

## 📚 Extended Documentation
Looking for deeper dives? Check our setup notes:
- [JWT Authentication Setup](_000setup_notes/jwt_setup.md)

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request to make this boilerplate even better.

**If you find this useful, please give it a ⭐ to support the project!**
