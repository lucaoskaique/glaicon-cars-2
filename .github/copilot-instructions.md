# Glaicon Cars - Workspace Instructions

## Project Overview

**Glaicon Cars** is a high-performance automotive repair shop website featuring a modern, dark-themed single-page application with industrial/gearhead aesthetics. The site showcases services, company background, and contact information for a Brazilian car repair shop specializing in performance and maintenance.

**Tech Stack:**
- React 19 (functional components + hooks)
- TypeScript (ES2022+)
- Vite (build tool + dev server)
- Tailwind CSS 4.x (with custom @theme)
- Motion (Framer Motion) for animations
- Lucide React for icons
- Express (backend, currently unused)

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (port 3000, accessible on local network)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type-check (no emit)
npm run lint

# Clean build artifacts
npm run clean
```

## Environment Setup

Required environment variables (create `.env.local`):
```
GEMINI_API_KEY="your_api_key_here"
```

See [.env.example](.env.example) for reference. Vite injects `process.env.GEMINI_API_KEY` at build time.

## Code Conventions

### Component Structure

- **All components in one file:** [src/App.tsx](src/App.tsx) contains all section components (Navbar, Hero, Marquee, Work, About, ServicesList, Contact)
- **Functional components only:** Use hooks (`useState`, `useRef`, `useEffect`)
- **Section-based architecture:** Each major page section is a separate component
- **Composition pattern:** Main `App` component composes all sections in order

### Styling Guidelines

**Tailwind CSS Patterns:**
- Use utility classes for all styling
- Responsive design via `md:` and other breakpoint prefixes
- Custom theme defined in [src/index.css](src/index.css)

**Custom CSS Classes:**
```css
.text-stroke       /* Outlined text with accent color */
.chrome-gradient   /* Metallic gradient text effect */
.industrial-border /* Subtle glowing border */
.glass             /* Glass-morphism effect */
.marquee-track     /* Infinite scrolling animation */
```

**Theme Variables:**
- `--font-display`: "Anton" (uppercase, bold headings)
- `--font-sans`: "Inter" (body text)
- `--color-accent`: #E11D48 (automotive red)
- `--color-bg`: #000000 (solid black)
- `--color-chrome`: #E5E7EB (silver/chrome)

### Animation Patterns

**Motion Library Usage:**
- `motion.div` wrappers for animated components
- `initial={{ opacity: 0 }}` + `animate={{ opacity: 1 }}` for fade-ins
- `whileInView` for scroll-triggered animations
- `useScroll` + `useTransform` for parallax effects
- Stagger delays via `transition={{ delay: i * 0.1 }}`

### Content & Language

- **Primary language:** Portuguese (Brazil)
- **Navigation sections:** Início, Serviços, Sobre, Contato
- **Brand voice:** Industrial, performance-focused, bold, uppercase typography
- **Visual style:** High contrast, dark theme, automotive/mechanical imagery

## Project Structure

```
src/
  App.tsx       # Main app + all section components
  main.tsx      # React entry point
  index.css     # Tailwind + custom styles
index.html      # HTML template
vite.config.ts  # Vite config (React + Tailwind plugins)
tsconfig.json   # TypeScript config
```

## Key Patterns to Follow

### When Adding New Sections

1. Create component function in [src/App.tsx](src/App.tsx)
2. Use Motion for animations (`motion.div`, `whileInView`)
3. Follow responsive design pattern: mobile-first, then `md:` breakpoints
4. Use uppercase headings with `font-display` class
5. Maintain dark theme with `bg-zinc-950`, `text-white`, etc.
6. Add section to main `App` return in proper order
7. If navigable, add `id` attribute and link from Navbar

### When Styling

- **Typography:** Large, bold, uppercase for headings; use `text-stroke` for outline effect
- **Spacing:** Generous padding (`py-32`, `px-6 md:px-24`)
- **Colors:** Stick to accent red (#E11D48), white, zinc grays
- **Borders:** Subtle with `border-white/5` or `border-white/10`
- **Images:** Use `grayscale` filter, hover to full color
- **Hover states:** Smooth transitions, accent color highlights

### When Working with Data

- Service/project data is **hardcoded** in component arrays
- To add services: edit the `projects` or `services` arrays in [src/App.tsx](src/App.tsx)
- Images use placeholder URLs (Picsum) or hosted logo URLs

## Important Notes

- **No test framework:** No Jest/Vitest configured (add if needed)
- **No SSR:** Client-side only (Vite SPA)
- **HMR toggle:** Can disable via `DISABLE_HMR=true` env var (for AI Studio compatibility)
- **Path alias:** `@/` maps to project root (see tsconfig + vite.config)
- **Mobile menu:** Overlay animation via Motion, triggered by hamburger icon

## Common Tasks

**Add a new service card:**
1. Edit `projects` array in `Work` component
2. Add object with `title`, `category`, `img` properties
3. Follow existing pattern

**Change brand colors:**
1. Update `--color-accent` in [src/index.css](src/index.css) @theme
2. Colors auto-apply via Tailwind utilities

**Modify navigation:**
1. Edit nav items array in `Navbar` component
2. Ensure corresponding section has matching `id` attribute

**Update contact info:**
1. Edit hard-coded values in `Contact` component
2. Update WhatsApp link, email, address, hours, social links

## Best Practices

- Keep all section components in [src/App.tsx](src/App.tsx) unless file grows too large
- Use Tailwind utilities; avoid writing custom CSS unless necessary
- Maintain consistent animation patterns (fade-in on scroll, stagger delays)
- Test responsive design at mobile, tablet, desktop breakpoints
- Keep Portuguese language consistent throughout
- Preserve industrial/performance theme in all new features
