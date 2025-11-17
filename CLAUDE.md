# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Landy**, an open-source React landing page template built with TypeScript. It's designed as a professional, performant single-page application optimized for developers and startups who need a quick landing page solution.

## Technology Stack

- **React 18.2** with TypeScript
- **React Router v5** for client-side routing
- **Ant Design (antd)** for UI components
- **styled-components** for CSS-in-JS styling
- **i18next** for internationalization (English and Spanish supported)
- **react-awesome-reveal** for scroll-based animations
- **react-scripts** (Create React App) for build tooling

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

## Architecture

### Content Management System

The application uses a **JSON-based content management** approach:
- All page content is stored in `src/content/*.json` files (IntroContent.json, AboutContent.json, MissionContent.json, ProductContent.json, ContactContent.json, MiddleBlockContent.json)
- This allows non-technical users to modify content without touching React code
- Content files contain title, text, button configurations, and section data

### Internationalization (i18n)

- Translation files are located in `src/locales/{lang}/translation.json`
- Currently supports English (en) and Spanish (es)
- i18next is configured in `src/translation.ts` with automatic language detection
- Components use `withTranslation()` HOC or `useTranslation()` hook
- All translatable strings are stored in translation.json files, NOT in the content JSON files

### Routing System

The routing is **configuration-based**:
- Routes are defined in `src/router/config.ts` as an array of route objects
- `src/router/index.tsx` dynamically imports page components using React lazy loading
- Pages are loaded from `src/pages/{component}` based on the config
- Currently only has a Home page, but easily extensible

### Component Structure

**Layout Components:**
- `Header` - Top navigation bar (always visible)
- `Footer` - Bottom footer (always visible)
- `Container` - Main content wrapper

**Content Components:**
- `ContentBlock` - Versatile block that can display content with left/right image orientation, supports buttons or service sections
- `MiddleBlock` - Centered content block variant
- `ContactForm` - Form with validation and API submission capability
- `Block` - Generic content display component

**Common/Reusable Components:**
- `Button` - Styled button component
- `Input` - Form input with styling
- `TextArea` - Form textarea with styling
- `SvgIcon` - SVG image loader (loads from `public/img/svg/`)
- `ScrollToTop` - Scroll-to-top button functionality

### Styling Architecture

- Uses **styled-components** for all styling
- Each component has a corresponding `styles.ts` or `styles.tsx` file
- Global styles defined in `src/styles/styles.ts`
- Custom fonts loaded from `public/fonts/` (Motiva Sans)
- Responsive design using Ant Design's grid system (Row/Col)

### Form Handling

The contact form uses a custom hook pattern:
- `src/common/utils/useForm.tsx` - Custom hook for form state management
- `src/common/utils/validationRules.ts` - Validation logic
- Form submission sends data to an API endpoint (currently empty string in line 31 of useForm.tsx - needs to be configured)
- Uses Ant Design notifications for success/error feedback

### Assets

- SVG images: `public/img/svg/`
- Icons: `public/img/icons/`
- Fonts: `public/fonts/`

## Key Implementation Details

### Adding New Routes

1. Create a new page component in `src/pages/{PageName}/index.tsx`
2. Add route configuration to `src/router/config.ts`
3. The router will automatically lazy-load the component

### Modifying Content

Edit the JSON files in `src/content/` to change page content without modifying React components.

### Adding New Languages

1. Create new translation file in `src/locales/{lang}/translation.json`
2. Import and add to resources in `src/translation.ts`
3. Add language flag SVG to `public/img/svg/`

### Contact Form API Integration

Update the `url` variable in `src/common/utils/useForm.tsx:31` with your API endpoint for form submissions.

## TypeScript Configuration

- Strict mode enabled
- Target: ES5
- JSX: react-jsx (new JSX transform)
- JSON imports enabled via `resolveJsonModule`
