# Little Lemon Restaurant Table Booking System

This project is the Capstone Project for the **Meta Front-End Developer Professional Certificate**. It implements a responsive, highly accessible, and visually stunning table reservation React web application for the fictional "Little Lemon" restaurant.

---

## Features

- **Multi-Section Homepage**: Includes a Hero banner with call-to-action (CTA) buttons, Weekly Specials menu cards, Client Testimonials, and an About page detailing the founders Adrian and Mario.
- **Dynamic Booking Form**: Implements state management using `useReducer` to dynamically fetch and display available reservation times based on the date selected.
- **Form Validation**: Real-time inline field validation checking constraints (e.g., minimum guest limits, valid email formats, and ensuring names are at least 2 characters) with instant error feedback.
- **Confirmed Booking View**: Redirects successfully submitted reservation forms to a dedicated confirmation page showing an SVG checkmark success animation and a summary card detailing their booking details.
- **Premium Custom CSS**: Custom Vanilla CSS styled from scratch utilizing brand-compliant colors (`#495E57` dark green and `#F4CE14` lemon yellow), responsive layout grids, responsive media queries, glassmorphism card designs, and micro-interaction animations.
- **WAI-ARIA Accessibility**: Adheres to modern web accessibility criteria, including correct HTML5 semantic elements, explicit `aria-required`, `aria-invalid`, `aria-describedby` links, focus control, and validation alert roles.
- **Jest Unit Test Suite**: Comprehensive tests validating the time-slot reducer logic, component input presence, inline error triggers, and form submission payloads.

---

## Project Structure

```text
Capstone Project/
├── public/
│   ├── index.html        # HTML layout template
│   ├── favicon.ico       # Logo shortcut icon
│   └── manifest.json     # App metadata configuration
├── src/
│   ├── __tests__/
│   │   └── BookingForm.test.js # Reducer and Form Component Unit Tests
│   ├── components/
│   │   ├── About.js      # Details founders Adrian and Mario
│   │   ├── BookingForm.js # Table reservation form component
│   │   ├── ConfirmedBooking.js # Booking confirmation page
│   │   ├── Footer.js     # Small logo and copyright info
│   │   ├── Header.js     # SVG logo and navigation links
│   │   ├── Hero.js       # Main promotional banner and CTA
│   │   ├── Specials.js   # Highlights weekly menu cards
│   │   └── Testimonials.js # Displays customer review ratings
│   ├── pages/
│   │   ├── BookingPage.js # Page container managing reducer state and submission
│   │   └── Homepage.js    # Aggregates landing page elements
│   ├── App.css           # Boilerplate styling sheet
│   ├── App.js            # Defines pages routing paths
│   ├── App.test.js       # Global App component tests
│   ├── api.js            # Simulated backend API endpoints (fetchAPI, submitAPI)
│   ├── index.css         # Core CSS custom design variables, animations, and styles
│   └── index.js          # React DOM mounting and Router wrapping
├── package.json          # Node dependency configurations
└── README.md             # Project documentation (this file)
```

---

## Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation

Clone this repository and run the following command in the project root to install the necessary packages (including `react-router-dom`):

```bash
npm install
```

### 3. Running the Application

To launch the local development server, run:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload automatically if you edit any files.

### 4. Running the Tests

To execute the unit tests in CI mode (runs once and prints results), execute:

```bash
npm test
```

This runs the React Testing Library and Jest suites, verifying the time reducer state transformations and form validations.

---

## Accessibility and Design System

### Design Variables
Styling tokens are configured at the `:root` level of `src/index.css`:
- **Primary Green**: `#495E57`
- **Primary Yellow**: `#F4CE14`
- **Secondary Orange**: `#EE9972`
- **Typography**: `Markazi Text` (serif heading) and `Karla` (sans-serif text).

### Accessibility Implementations
1. **Semantic HTML**: Standardized layout divisions using tags like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
2. **Form Accessibility**: 
   - Associated `<label>` elements with their respective `<input>` elements using matching `htmlFor` and `id` tags.
   - Screen-readers are notified of errors using `aria-invalid` and `aria-describedby` pointing to error descriptions.
   - Required fields are explicitly denoted with `aria-required="true"`.
   - Real-time invalid messages are announced using `role="alert"`.
3. **Keyboard Navigable**: The navigation drawer, CTA buttons, input inputs, and selectors support native tab-focus outlines.
