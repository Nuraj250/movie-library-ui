# 🎬 Movie Library UI

This project is a fully responsive movie showcase website built using **Next.js** and **Tailwind CSS**, inspired by the UI test requirements from eBEYONDS.

It features:
- A modern glass/dark-themed UI
- Live movie search (via TVMaze API)
- Collect your favorites into a custom grid
- Full contact form with validation
- Embedded Google Map
- Mobile hamburger menu with slide animation

---

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **API**: [TVMaze API](https://www.tvmaze.com/api)
- **Maps**: Google Maps Embed API

---

## 📂 Folder Structure

```

movie-library-ui/
├── public/
│   ├── assets/
│   │   ├── Logos/
│   │   ├── Videos/
│   │   └── Images/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HamburgerMenu.tsx
│   │   ├── MainVisual.tsx
│   │   ├── Introduction.tsx
│   │   ├── SearchSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   ├── pages/
│   │   └── index.tsx
│   ├── styles/
│   │   └── globals.css

````

---

## 🧰 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/Nuraj250/movie-library-ui.git
cd movie-library-ui
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🔥 Features Implemented

### ✅ Hero Section

* Fullscreen background **video**
* Title + overlay text
* Responsive scaling

### ✅ Header

* Logo (SVG)
* Responsive nav links
* Hamburger menu with **slide-in animation** and scroll lock

### ✅ Introduction Section

* Large centered heading
* Matches PDF layout with padding + spacing

### ✅ Movie Search Section

* Live search using **TVMaze API**
* Styled **search bar with icon**
* Random movies shown by default
* **Add/remove from grid**
* LocalStorage persistence
* Dark card layout + shadows
* ❌ buttons on every card

### ✅ Contact Us Section

* Two-column layout (form + map)
* Required field validation
* Styled checkbox for agreement
* **Submit button** styled as per PDF (`#d99900`)
* **Google Map** embed (Amadeus HQ)

### ✅ Footer

* Company address left-aligned
* Social icons right-aligned
* Bottom copyright
* Credits with underline links

---

## 📦 Dependencies

```bash
npm install react-icons
```

---

## 🌍 Deployment

You can deploy to Vercel instantly:

```bash
npx vercel
```

Or export static files:

```bash
npm run build
```

---

## 📸 Screenshots

<p align="center">
  <img src="public/assets/Images/preview-desktop.jpg" width="80%" />
</p>

---

## 📝 License

This project is built as a frontend test UI. No commercial license is attached. You may reuse the layout for learning or personal projects.