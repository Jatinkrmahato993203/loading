# Crime Intelligence Platform — Design Quick Reference

**One-page guide** for developers during implementation. Print or bookmark this.

---

## COLOR TOKENS

### Brand
```
brand-900: #0a1f3f    (Headers, strong emphasis)
brand-700: #1e40af    (Primary CTA, interactive)
brand-500: #3b82f6    (Secondary, lighter)
brand-100: #dbeafe    (Hover backgrounds)
```

### Crime Types (Semantic)
```
Homicide:      #ef4444 (Red, critical)
Assault:       #f97316 (Orange, warning)
Property/Theft: #3b82f6 (Blue, info)
Resolved:      #10b981 (Green, success)
```

### Neutrals
```
text (slate-900):      #0f172a
secondary (slate-600): #475569
tertiary (slate-400):  #94a3b8
bg-surface (slate-100): #f1f5f9
bg-default (slate-50): #f8fafc
white:                  #ffffff
```

---

## TYPOGRAPHY

### Scale (16px baseline)
```
H1:   32px / 700 / -0.6px spacing
H2:   24px / 600 / -0.4px spacing
H3:   20px / 600 / -0.2px spacing
Body: 14px / 400 / 0px (default)
Small: 12px / 400 / 0px
Mono: 13px / 400 / 0px (IDs, case numbers)
Caption: 11px / 500 uppercase / 0.4px
```

### Font Families
```
UI/Body:       "Inter", system-ui, sans-serif
Monospace:     "IBM Plex Mono", "Courier New", monospace
(Use Inter everywhere unless displaying suspect ID or code)
```

---

## SPACING SCALE

```
xs: 4px      (smallest gaps)
sm: 8px
md: 12px
lg: 16px     (default gap between elements)
xl: 20px
2xl: 24px    (card padding)
3xl: 32px    (container padding, section gap)
4xl: 40px
5xl: 48px
6xl: 56px
7xl: 64px
8xl: 80px
```

**Common Patterns:**
- Page/Container padding (desktop): 32px
- Page/Container padding (mobile): 16px
- Card padding: 16-20px
- Card gap: 20px
- Section separator: 32px vertical gap

---

## BORDER RADIUS

```
sharp:   0px   (maps, tables, data)
subtle:  4px   (small inputs, badges)
medium:  8px   (cards, buttons)
large:   12px  (modals, containers)
full:    9999px (avatars, pills)
```

---

## SHADOWS (Elevation)

```
Shallow (E1): 0 1px 2px rgba(0,0,0,0.05)
              (card hovers, subtle lifts)

Medium (E2): 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)
             (cards at rest, dropdowns)

Deep (E3): 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)
           (modals, major overlays)

Focus Ring: 0 0 0 3px rgba(30,64,175,0.1)
            (keyboard focus indicator)
```

---

## COMPONENT SPECS (Quick Lookup)

### Button
```
Primary:      bg-brand-700, text-white, border-radius 8px
Secondary:    border 1.5px brand-700, text-brand-700, bg-transparent
Tertiary:     text-brand-700, bg-transparent (ghost)
Danger:       bg-red-600, text-white

Sizes:
- Small:   24px height, 8px padding, 12px font
- Medium:  32px height, 12px padding, 14px font (DEFAULT)
- Large:   40px height, 16px padding, 16px font

States:
- Hover:    shadow lift (E1)
- Active:   scale 0.98
- Disabled: opacity 0.5, cursor not-allowed
- Loading:  spinner visible, text hidden
```

### Card
```
Background:  white (light) / slate-800 (dark)
Border:      1px slate-200 (light) / slate-700 (dark)
Padding:     16-20px
Radius:      8px
Shadow:      E2 (default), E1 (hover)
```

### Input
```
Background:  white (light) / slate-800 (dark)
Border:      1.5px slate-200 (light) / slate-700 (dark)
Padding:     12px (vertical), 12px (horizontal)
Radius:      6px
Focus:       border-brand-700, shadow focus-ring
Error:       border-red-600
Label:       12px / 600 weight, uppercase, 6px below input
```

### Badge/Pill
```
Default:  bg-slate-200, text-slate-900
Success:  bg-green-100, text-green-900
Warning:  bg-orange-100, text-orange-900
Danger:   bg-red-100, text-red-900
Info:     bg-blue-100, text-blue-900

Padding: 6px × 12px (small) to 8px × 16px (medium)
Radius:  full (9999px)
Font:    11px / 600 weight, uppercase
```

### Modal
```
Background:   white (light) / slate-800 (dark)
Max-width:    600px (responsive: 90vw on mobile)
Border-radius: 12px
Padding:      32px (desktop), 24px (tablet), 20px (mobile)
Shadow:       E3 (deep)
Scrim:        rgba(0,0,0,0.5) (semi-transparent overlay)

Enter animation:   scale 0.95→1, opacity 0→1, duration 150ms
Exit animation:    scale 1→0.95, opacity 1→0, duration 100ms
```

### Data Table
```
Header:       bg-slate-100 (light) / slate-700 (dark)
              12px / 600 weight, uppercase, slate-600 text
              Sortable: arrow icon on hover

Row height:   44px (touch-friendly)
Cell padding: 12px
Striping:     alternate slate-50 / white
Hover:        bg-slate-100, shadow lift
Border:       1px slate-200 (light) / slate-700 (dark)

Column align:
- Text:       left
- Numbers:    center
- Status:     center
- Actions:    right
```

---

## RESPONSIVE BREAKPOINTS

```
Mobile:  < 640px    (1-column, no sidebar, full-width maps)
Tablet:  640-1024px (2-column, narrow sidebar 200px)
Desktop: > 1024px   (multi-column, sidebar 240px, split views)

Tailwind prefix:
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## ANIMATION TIMING

```
Micro-interactions:  100-150ms
Component transitions: 150-300ms
Page/route transitions: 300-500ms
Easing:
  - ease-out (for entrance, "snappy")
  - ease-in-out (for loops, "smooth")

ALWAYS respect: @media (prefers-reduced-motion: reduce) { animation: none; }
```

---

## SPECIFIC ANIMATIONS

### Hotspot Pulse
```
Duration: 1.2s
Keyframes: r 20→40px, opacity 1→0
Only on zones with >50% spike
Disable on prefers-reduced-motion
```

### Card Hover Lift
```
Transform: translateY(-2px)
Timing: 150ms ease-out
Shadow: Shallow (E1)
```

### Modal Enter/Exit
```
Enter:  opacity 0→1, scale 0.95→1, 150ms ease-out
Exit:   opacity 1→0, scale 1→0.95, 100ms ease-in
```

### Map Drill-Down
```
Zoom: 300ms, easing cubic (ease in-out cubic)
Pan: 200ms ease-out
```

---

## ACCESSIBILITY CHECKLIST

### Before Committing Code
- [ ] Color contrast: 4.5:1 (text), 3:1 (UI elements)
- [ ] Focus indicator: Visible, 3px, brand color outline
- [ ] Keyboard navigation: Tab order logical, no traps
- [ ] ARIA labels: Interactive elements labeled (aria-label, aria-labelledby)
- [ ] Semantic HTML: Use <button>, <form>, <nav>, not <div> with click handlers
- [ ] Form labels: Associated with inputs (htmlFor + id)
- [ ] Error messages: Linked to inputs (aria-invalid, aria-describedby)
- [ ] Images: Have alt text (except decorative, alt="")
- [ ] Motion: prefers-reduced-motion respected (no animation, static state)
- [ ] Text sizing: No fixed sizes <14px (except captions)
- [ ] Zoom: Page remains usable at 200% zoom

---

## PERFORMANCE TARGETS

```
Largest Contentful Paint (LCP):      < 2.5s
First Contentful Paint (FCP):        < 1.2s
Cumulative Layout Shift (CLS):       < 0.1
Interaction to Next Paint (INP):     < 200ms
Time to Interactive (TTI):           < 3.5s

Bundle size:
- JS:   < 200kB (gzipped)
- CSS:  < 50kB (gzipped)
- Total (without deps): < 250kB

Optimization strategies:
- Code split routes (automatic with App Router)
- Lazy-load heavy components (Map, Charts, Graph)
- Image optimization (next/image)
- Debounce: Search 300ms, Pan 100ms, Filter 200ms
- Virtualize: Tables >1000 rows, lists >500 items
```

---

## API ENDPOINTS (Mock for Development)

```
GET /auth/me                                  → User profile
POST /auth/login                              → Login

GET /dashboard/kpis?period=7d                 → KPI metrics
GET /dashboard/hotspots                       → Hotspots for map
GET /dashboard/alerts?limit=5                 → Crime alerts
GET /dashboard/trends?period=30d              → Crime trends

GET /search/suspects?q=NAME&limit=10          → Search results
GET /suspects/:id/profile                     → Profile detail
GET /suspects/:id/incidents                   → Incidents list
GET /suspects/:id/relationships               → Network graph
GET /suspects/:id/modus-operandi              → Patterns + charts
GET /suspects/:id/locations                   → Recurring locations

GET /hotspots?district=5&date_range=7d       → Geospatial data
GET /hotspots/:zone_id/detail                → Zone detail
GET /incidents?zone=5&crime_type=theft       → Incidents list

GET /predictions/risk-zones?period=14d       → Risk scores
GET /predictions/risk-zones/:zone/reasoning  → AI reasoning

GET /network/graph?filters={...}              → Graph nodes + edges
GET /network/graph/:node_id/subgraph          → Subgraph (2-hop)

GET /districts                                → District list
GET /crime-types                              → Crime categories
```

---

## TAILWIND UTILITY QUICK REFERENCE

### Common Patterns
```
Flex center:        flex items-center justify-center
Flex between:       flex items-center justify-between
Grid 3-col:         grid grid-cols-3 gap-4
Stack vertical:     flex flex-col gap-4

Text overflow:      truncate (ellipsis), line-clamp-2 (2 lines max)
Hover shadow:       hover:shadow-md
Focus ring:         focus:outline-none focus:ring-2 focus:ring-blue-500
Disabled state:     disabled:opacity-50 disabled:cursor-not-allowed

Responsive:
- Mobile first:     p-4 md:p-8 lg:p-12
- Hide on mobile:   hidden md:block
- Full on mobile:   w-full md:w-1/2 lg:w-1/3

Dark mode:
- bg-white dark:bg-slate-800
- text-slate-900 dark:text-slate-100
- border-slate-200 dark:border-slate-700
```

---

## COMMON GOTCHAS

### Don't Do This
```
❌ Use px values for everything (use Tailwind scale)
❌ Nest animations without respecting prefers-reduced-motion
❌ Use semantic color alone (pair with text or icons)
❌ Hard-code colors (use CSS variables or Tailwind tokens)
❌ Skip focus indicators for accessibility
❌ Use div + onClick for buttons (use <button>)
❌ Forget alt text on images
❌ Make maps non-interactive on mobile
```

### Do This Instead
```
✓ Use Tailwind spacing scale (p-4, gap-6, etc.)
✓ Check prefers-reduced-motion and disable animations
✓ Pair color with icons, text, or patterns
✓ Use Tailwind tokens or CSS variables (theme colors)
✓ Show visible focus rings (3px, brand color)
✓ Use semantic HTML (<button>, <form>, <nav>)
✓ Always include meaningful alt text
✓ Test maps on mobile (responsive, touch-friendly)
```

---

## DESIGN SYSTEM FILES

```
Tailwind Config:          tailwind.config.ts
Design Tokens (CSS):      styles/design-system.css
Typography:              styles/typography.css
Global Styles:           styles/globals.css
Color Utilities:         lib/colors.ts
Layout Utilities:        lib/layout.ts
Component Library:       components/common/
Page Components:         components/[feature]/
API Client:              lib/api.ts
Custom Hooks:            hooks/
Zustand Stores:          stores/
```

---

## GETTING HELP

### During Development
1. Check this quick reference first
2. Read the full DESIGN PROMPTS document (CRIME_INTEL_DESIGN_PROMPTS.md)
3. Check Tailwind docs (tailwindcss.com)
4. Reference shadcn/ui component docs
5. Test accessibility with axe DevTools

### Common Resources
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion
- Recharts: https://recharts.org
- Mapbox GL: https://docs.mapbox.com/mapbox-gl-js
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref

---

**Print this page and reference while coding!**

Last updated: January 2025
