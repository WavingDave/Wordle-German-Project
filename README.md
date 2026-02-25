# Wordle Clone (Fullstack)

A fullstack Wordle clone built with:

- React (Frontend)
- Node.js + Express (Backend)
- CSS animations (Flip, Shake)
- Server-side game logic

---

## Features

### Gameplay
- 5-letter words
- 6 attempts maximum
- Server manages:
  - Solution word
  - Attempt tracking
  - Letter status (`correct`, `present`, `absent`)
  - Game state (`playing`, `won`, `lost`)

### Backend Logic
- Word validation
- Dictionary check
- Letter status calculation
- Attempt counting
- Keyboard state aggregation
- Game state management

### Animations
- Flip animation per tile
- Shake animation for invalid words
- Dynamic keyboard coloring

---

## Project Structure
wordle/
│
├── frontend/
│ ├── components/
│ │ ├── Board.jsx
│ │ ├── Row.jsx
│ │ ├── Tile.jsx
│ │ └── Keyboard.jsx
│ └── App.jsx
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ │ ├── wordController.js
│ │ ├── data/
│ │ │ ├── words.js
│ │ ├── services/
│ │ │ ├── wordService.js
│ │ │ ├── gameService.js
│ │ │ └── checkService.js
│ │ └── routes/
│ │ │ ├── wordRoutes.js
│ └── server.js

---
## Installation

### Start Backend

```bash
cd backend
npm install
npm start
```
Server runs on:
http://localhost:3000

Endpoint:
/api/word

Frontend on:
http://localhost:5173/

---

### Possible Improvements

Persist game state with Local Storage

Highscore tracking

Multiplayer support (sessions)

Authentication system

Tile animation delay (sequential reveal)

Mobile responsive optimization

Dark/Light theme toggle

Deployment (Render / Vercel / Railway)

---

Author
Dave
Learning project – React & Node.js
Fullstack architecture practice

This is ready to paste as `README.md` in your project.  

If you want, I can also make a **shorter, GitHub portfolio-friendly version** with badges and screenshots next. Do you want me to do that?
