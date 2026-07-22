# Crime Intelligence Platform
## Tactical Implementation Prompts (Ready to Use)

These are **ready-to-copy-paste prompts** for Claude or your team to implement specific features. Each prompt is self-contained and production-ready.

---

## PROMPT SET 1: SETUP & PROJECT INITIALIZATION

### Prompt 1.1: Initialize Next.js Project with Design System

```
I'm building a Crime Intelligence Platform for law enforcement. Set up a Next.js 14 project 
with the following stack:

REQUIREMENTS:
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS v4 + CSS Modules for isolated components
- UI Components: shadcn/ui (starting with Button, Card, Input, Badge, Dialog, Tabs)
- Animation: Framer Motion (motion/react v11+)
- Icons: @phosphor-icons/react
- Data Fetching: TanStack Query (@tanstack/react-query v5)
- State: Zustand for global state
- TypeScript: Strict mode enabled
- Linting: ESLint + Prettier (Airbnb config)

PROJECT STRUCTURE:
```
src/
  app/                          # Next.js App Router
    (dashboard)/
      page.tsx                 # Dashboard page
      layout.tsx
    investigation/
      page.tsx                 # Investigation search
      [suspectId]/page.tsx     # Suspect profile
    hotspots/page.tsx
    network/page.tsx
    predictions/page.tsx
    layout.tsx                 # Root layout
    globals.css                # Tailwind directives
  
  components/
    common/                     # Reusable UI (Button, Card, Modal, etc.)
    dashboard/                  # Dashboard-specific components
    investigation/              # Investigation page components
    hotspots/                   # Hotspot page components
    network/                    # Network graph components
    predictions/                # Predictive analytics components
  
  lib/
    api.ts                      # API client (React Query hooks)
    colors.ts                   # Color tokens + semantic map
    types.ts                    # TypeScript interfaces
    utils.ts                    # Helper functions
  
  hooks/
    useHotspots.ts             # Custom hook for hotspot data
    useSuspect.ts              # Custom hook for suspect data
    useAuth.ts                 # Auth context hook
  
  context/
    AuthContext.tsx            # Auth state
  
  styles/
    globals.css                # Global Tailwind styles
    design-system.css          # Design tokens (CSS variables)
  
  public/
    logo.svg
    favicon.ico
```

CONFIGURATION:
- tailwind.config.ts: Extend with custom colors (crime intelligence semantic palette)
- next.config.js: Image optimization, SVG imports
- tsconfig.json: Strict mode, path aliases (@/components, @/lib, etc.)
- .prettierrc: 2-space indent, single quotes, trailing commas

DELIVERABLES:
1. Fully initialized Next.js project
2. Tailwind v4 configured with design system tokens
3. shadcn/ui initialized (Button, Card, Input, Badge, Dialog, Tabs, Table)
4. Git repo initialized (.gitignore configured)
5. README with setup + development instructions
```

---

## PROMPT SET 2: DESIGN SYSTEM IMPLEMENTATION

### Prompt 2.1: Build Color System & CSS Variables

```
Create a comprehensive color system for the Crime Intelligence Platform in Tailwind + CSS variables.

DESIGN TOKENS:

Primary Brand Colors:
- brand-900: #0a1f3f
- brand-700: #1e40af
- brand-500: #3b82f6
- brand-100: #dbeafe

Semantic Colors (Crime Types):
- critical (Homicide): #ef4444
- warning (Assault): #f97316
- caution (Property): #fbbf24
- success (Resolved): #10b981
- info (General): #06b6d4

Neutral Palette:
- slate-900: #0f172a
- slate-700: #334155
- slate-600: #475569
- slate-400: #94a3b8
- slate-100: #f1f5f9
- slate-50: #f8fafc
- white: #ffffff

DELIVERABLES:
1. tailwind.config.ts: Extend default theme with above colors
2. styles/design-system.css: CSS custom properties for runtime theme switching
3. lib/colors.ts: TypeScript map of color tokens + semantic meanings
   Example:
   ```typescript
   export const crimeTypeColors = {
     homicide: 'text-red-600 bg-red-50',
     assault: 'text-orange-600 bg-orange-50',
     theft: 'text-blue-600 bg-blue-50',
   };
   ```
4. Dark mode variants in Tailwind config
5. Example component showing both light/dark theme usage
```

### Prompt 2.2: Build Typography System

```
Create a typography scale for the Crime Intelligence Platform.

FONT SETUP:
- Primary: Inter (self-hosted via @next/font)
- Monospace: IBM Plex Mono (for suspect IDs, case numbers)

SCALE (16px baseline):
- Heading 1: 32px / 700 weight / -0.6px letter-spacing
- Heading 2: 24px / 600 weight / -0.4px
- Heading 3: 20px / 600 weight / -0.2px
- Body Large: 16px / 500 weight / 0px
- Body: 14px / 400 weight / 0px
- Body Small: 12px / 400 weight / 0px
- Caption: 11px / 500 weight uppercase / 0.4px
- Mono: 13px / 400 weight / 0px

DELIVERABLES:
1. styles/typography.css: Font-face declarations + utility classes
2. tailwind.config.ts: Extended theme with font scale
3. lib/fonts.ts: next/font configurations
4. Example component showing all typographic scales
5. Design guidelines document (line-height, color combos)
```

### Prompt 2.3: Build Spacing & Layout System

```
Create a consistent spacing scale and layout system using Tailwind.

SPACING SCALE (4px base):
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px
- 2xl: 24px
- 3xl: 32px
- 4xl: 40px
- 5xl: 48px
- 6xl: 56px
- 7xl: 64px
- 8xl: 80px

COMMON PATTERNS:
- Page/Container padding (desktop): 32px
- Page/Container padding (mobile): 16px
- Card padding: 16-20px
- Gap between cards: 20px
- Section separator: 32px vertical gap

GRID SYSTEM:
- 12-column responsive grid (Tailwind default)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

DELIVERABLES:
1. tailwind.config.ts: Spacing scale (already built-in to Tailwind)
2. styles/layout.css: Container queries, grid utility classes
3. lib/layout.ts: React component for consistent page layout
   Example: `<PageLayout sidebar={<Sidebar />}><Main /></PageLayout>`
4. Example pages showing responsive layout
```

---

## PROMPT SET 3: CORE COMPONENTS

### Prompt 3.1: Build Button Component Library (Comprehensive)

```
Build a reusable Button component with all variants, sizes, and states.

VARIANTS:
1. Primary (brand color, solid fill)
2. Secondary (outline, brand border)
3. Tertiary (ghost, no border)
4. Danger (red background)

SIZES:
- Small: 24px height, 8px padding, 12px font
- Medium: 32px height, 12px padding, 14px font (default)
- Large: 40px height, 16px padding, 16px font

STATES:
- Default: As specified above
- Hover: Shadow lift + opacity change (if ghost)
- Active/Pressed: Scale 0.98
- Disabled: Opacity 0.5, cursor not-allowed
- Loading: Spinner icon, text hidden

REQUIRED FEATURES:
- TypeScript props interface (variant, size, disabled, loading, icon placement)
- Icon support (left/right of text)
- Full accessibility (aria-disabled, focus ring visible)
- Smooth transitions (150ms ease-out)
- Works in forms (type="button", type="submit", etc.)
- Dark mode support

DELIVERABLES:
1. components/common/Button.tsx (fully typed, all variants)
2. Button.test.tsx (vitest unit tests)
3. Storybook story (if using Storybook) or example page
4. Documentation (props, usage examples)
```

### Prompt 3.2: Build Card Component

```
Build a reusable Card component for displaying data.

CARD VARIANTS:
1. Default: Solid background, subtle border, shadow
2. Interactive: Hover lift effect, cursor pointer
3. Alert: Colored left border (red, orange, yellow, green based on severity)
4. Stat: Optimized for KPI display (large number, small label)

CARD FEATURES:
- Image support (top, can be full-width or with gap to content)
- Header (with optional subheader)
- Body content (scrollable if tall)
- Footer with actions (buttons)
- Flexible layout (2-column: image + text, or stacked)

PROPS:
- variant: 'default' | 'interactive' | 'alert' | 'stat'
- severity?: 'critical' | 'warning' | 'caution' | 'success' | 'info' (for alert variant)
- image?: { src: string; alt: string }
- header: string | ReactNode
- body: ReactNode
- footer?: ReactNode
- onClick?: () => void (for interactive)
- className?: string (for custom styling)

DELIVERABLES:
1. components/common/Card.tsx
2. components/common/Card.test.tsx
3. Example: KPI card, alert card, interactive card
4. Dark mode support
```

### Prompt 3.3: Build Input Component

```
Build a reusable Input component for forms.

INPUT VARIANTS:
1. Text (default)
2. Email
3. Number
4. Password
5. Textarea (multi-line)
6. Select (dropdown)
7. Checkbox
8. Radio
9. Date picker

FEATURES:
- Label (above, with optional required indicator)
- Placeholder
- Helper text (below, for hints)
- Error state (border color change + error message)
- Disabled state
- Focus ring (visible, accessible)
- Icon support (left/right)
- Clear button (for text inputs)
- Max length indicator (for textarea)

PROPS:
- type: 'text' | 'email' | 'number' | 'password' | 'textarea' | 'select' | 'date'
- label: string
- placeholder?: string
- value: string
- onChange: (e: React.ChangeEvent) => void
- error?: string
- disabled?: boolean
- required?: boolean
- icon?: { left?: ReactNode; right?: ReactNode }
- helperText?: string
- maxLength?: number
- options?: Array<{ label: string; value: string }> (for select)

DELIVERABLES:
1. components/common/Input.tsx (main input)
2. components/common/Textarea.tsx (textarea variant)
3. components/common/Select.tsx (dropdown variant)
4. components/common/Checkbox.tsx (checkbox)
5. components/common/RadioGroup.tsx (radio)
6. All with full accessibility + TypeScript
7. Example form showing all input types
```

### Prompt 3.4: Build Data Table Component

```
Build a reusable Data Table component using TanStack Table (React Table).

TABLE FEATURES:
- Sortable columns (click header to toggle sort direction)
- Pagination (previous/next buttons, or infinite scroll)
- Row selection (checkbox for multi-select operations)
- Column visibility toggle (dropdown to hide/show columns)
- Responsive (horizontal scroll on mobile)
- Hover states (row highlight)
- Striped rows (alternate background)
- Sticky header (stays visible on scroll)
- Action menu (dots icon per row, opens popover)
- Custom cell rendering (dates, badges, custom components)

PROPS:
- columns: Array<{
    key: string;
    label: string;
    sortable?: boolean;
    render?: (value: any, row: any) => ReactNode;
    width?: string; // e.g., "100px", "1fr"
    align?: 'left' | 'center' | 'right';
  }>
- data: Array<any> (row data)
- onRowClick?: (row: any) => void
- isLoading?: boolean
- pageSize?: number (default 10)
- onPageChange?: (page: number) => void

DELIVERABLES:
1. components/common/DataTable.tsx (main component)
2. components/common/DataTable.pagination.tsx (pagination UI)
3. Example: Suspect list table, incident table, risk ranking table
4. Test file covering sorting, pagination, selection
5. Dark mode support + accessibility
```

---

## PROMPT SET 4: DASHBOARD COMPONENTS

### Prompt 4.1: Build KPI Card Component

```
Build a specialized KPI (Key Performance Indicator) card for dashboard metrics.

KPI CARD STRUCTURE:
- Icon (top-left, 32px)
- Label (12px / 600 weight, uppercase)
- Value (36px / 700 weight, tabular-nums font-variant)
- Change indicator (14px, arrow + percentage, color-coded)
  - Green if positive (↑)
  - Red if negative (↓)
- Optional sparkline (small chart, right side)
- Optional tooltip (on hover, shows breakdown)

PROPS:
- icon: ReactNode
- label: string
- value: string | number
- change: {
    value: number; // percentage
    direction: 'up' | 'down';
    period: string; // "vs. yesterday", "vs. last week"
  }
- sparkline?: Array<{ date: string; value: number }>
- background?: 'default' | 'gradient' (e.g., brand gradient for featured KPI)
- size?: 'small' | 'medium' (default) | 'large'

DELIVERABLES:
1. components/dashboard/KPICard.tsx
2. Example: Total Incidents KPI, Arrests KPI, Suspects Tracked KPI
3. Responsive grid layout (4 cards on desktop, 2 on tablet, 1 on mobile)
4. Animation on value change (number animates over 500ms)
```

### Prompt 4.2: Build Alert Carousel Component

```
Build an alert carousel for displaying real-time crime alerts.

CAROUSEL FEATURES:
- Horizontal scroll (swipe on mobile, arrow buttons on desktop)
- 5-7 visible alerts at a time
- Each alert card:
  - Left border (4px, color-coded: red = critical, orange = warning, yellow = info)
  - Icon (16px)
  - Title (18px / 600 weight)
  - Subtitle (14px / 400 weight)
  - Timestamp ("2 minutes ago")
  - Dismiss button (X icon)
  - CTA button ("Drill to Map" or "Create Brief")
- Pagination dots (show current position in carousel)
- Auto-scroll (optional, advance every 5 seconds if no interaction)

PROPS:
- alerts: Array<{
    id: string;
    type: 'critical' | 'warning' | 'info';
    icon: ReactNode;
    title: string;
    subtitle: string;
    timestamp: Date;
    actions?: Array<{
      label: string;
      onClick: () => void;
    }>;
  }>
- onDismiss: (alertId: string) => void
- autoScroll?: boolean

DELIVERABLES:
1. components/dashboard/AlertCarousel.tsx
2. Example alerts (mock data)
3. Keyboard navigation support (arrow keys to scroll)
4. Swipe gesture support (mobile)
5. Animation on card removal (slide out + fade, 150ms)
```

### Prompt 4.3: Build Geospatial Map Component (Mapbox GL)

```
Build a reusable Mapbox GL map component for geospatial visualization.

MAP COMPONENT FEATURES:
- Mapbox GL v2+ integration
- Heatmap layer (customizable color scale, intensity)
- Crime type overlay layers (toggleable)
- Marker clustering (for high-density areas)
- Interactive controls:
  - Drag to pan
  - Scroll to zoom
  - Double-click to center
  - Click marker → popup with details
- Callbacks for events (on click marker, on zoom change, etc.)
- Loading state (spinner while tiles load)
- Error handling (fallback message if map fails)
- Dark mode support (via Mapbox style)

PROPS:
- center: { lat: number; lng: number }
- zoom: number
- heatmapData?: Array<{ lat: number; lng: number; intensity: number }>
- markers?: Array<{
    id: string;
    lat: number;
    lng: number;
    type: 'suspect' | 'incident' | 'hotspot';
    title: string;
    onClick: () => void;
  }>
- layers?: Array<{ id: string; name: string; visible: boolean; color: string }>
- onMarkerClick: (markerId: string) => void
- onZoomChange: (zoom: number) => void
- onCenterChange: (center: {lat, lng}) => void
- style?: 'light' | 'dark' | 'satellite'
- height?: string (default: '400px')

DELIVERABLES:
1. components/common/Map.tsx (wrapper around Mapbox GL)
2. Heatmap layer helper (customizable intensity mapping)
3. Marker popup component
4. Example: District map, hotspot map, drill-down map
5. Performance: Lazy-load tiles, debounce pan/zoom events
6. Accessibility: Keyboard navigation for map, screen reader labels
```

---

## PROMPT SET 5: DATA VISUALIZATION

### Prompt 5.1: Build Crime Trend Chart

```
Build a crime trend chart (30-day line chart with category toggles).

CHART REQUIREMENTS:
- Framework: Recharts (React, performant)
- X-axis: Date (abbreviated format, e.g., "Mon 21")
- Y-axis: Incident count (auto-scale)
- Lines: One per crime category (different colors)
- Categories: Toggleable (checkbox per category)
- Legend: Interactive (click to toggle visibility)
- Hover tooltip: Show exact counts + % change from yesterday
- Responsive: Full width of container, auto height
- Animation: Smooth line animation on mount + category toggle (300ms)
- Dark mode: Adapt text color to background

PROPS:
- data: Array<{
    date: string;
    theft: number;
    assault: number;
    homicide: number;
    property: number;
  }>
- period: '7d' | '30d' | '90d' (default: '30d')
- onCategoryToggle?: (category: string) => void
- loading?: boolean

DELIVERABLES:
1. components/charts/CrimeTrendChart.tsx
2. Recharts configuration (colors, fonts, spacing)
3. Example with mock data (30 days of crime stats)
4. Loading state (skeleton chart)
5. Responsive container wrapper
```

### Prompt 5.2: Build Risk Forecast Chart

```
Build a risk forecast chart (area chart with confidence band).

CHART FEATURES:
- X-axis: Date (next 14 days)
- Y-axis: Risk score (0-100)
- Main area: Predicted risk (filled)
- Confidence band: Shaded area around prediction (uncertainty interval)
- Color coding:
  - Green: Risk declining
  - Orange: Risk stable
  - Red: Risk increasing
- Hover: Show exact risk %, factors contributing to prediction
- Responsive + dark mode

PROPS:
- data: Array<{
    date: string;
    riskScore: number;
    confidenceMin: number;
    confidenceMax: number;
    factors?: Array<{ name: string; impact: number }>; // For tooltip
  }>
- period: '7d' | '14d' (default: '14d')
- loading?: boolean

DELIVERABLES:
1. components/charts/RiskForecastChart.tsx
2. Mock data (14-day forecast)
3. Color gradient setup (green → orange → red based on score)
4. Tooltip with factor breakdown
```

### Prompt 5.3: Build Risk Ranking Heatmap

```
Build a 14-day risk forecast heatmap (zones × days).

HEATMAP STRUCTURE:
- Rows: Top 10-15 risk zones (sorted by current risk)
- Columns: Next 14 days (D0, D1, ... D13)
- Cell color: Risk level (green → yellow → orange → red)
- Cell size: Min 30px × 30px
- Hover: Show exact risk %, zone name, predicted incident count
- X-axis: Abbreviated dates ("Mon 21", "Tue 22")
- Y-axis: Zone names (truncate >20 chars, tooltip on hover)
- Interactive: Click cell → drill to that zone's detail view
- Responsive: Scrollable on mobile

PROPS:
- data: Array<{
    zone: string;
    predictions: Array<{ day: string; riskScore: number; incidentCount: number }>
  }>
- onCellClick?: (zone: string, day: string) => void
- loading?: boolean

DELIVERABLES:
1. components/charts/RiskHeatmap.tsx
2. Color scale mapping (0-100 risk → color)
3. Mock data (15 zones × 14 days)
4. Tooltip component (detailed info on hover)
5. Mobile-friendly scrolling
```

---

## PROMPT SET 6: INVESTIGATION PAGE COMPONENTS

### Prompt 6.1: Build Suspect Search Component

```
Build a suspect search component with autocomplete.

SEARCH FEATURES:
- Search input with debounce (300ms)
- Autocomplete dropdown (max 10 results, scrollable)
- Result item format:
  - Avatar (40px, left-aligned)
  - Name (16px / 600 weight)
  - ID (12px monospace, secondary text)
  - Incident count (14px, color-coded: green <3, red >10)
- Keyboard navigation (Arrow keys, Enter, Escape)
- Match highlighting (bold search term in results)
- Empty state ("No results" message)
- Recent searches (optional, show last 5 searches)
- Loading state (spinner, "Searching..." message)

PROPS:
- onSelect: (suspect: Suspect) => void
- recentSearches?: Array<Suspect>
- isLoading?: boolean
- placeholder?: string

DELIVERABLES:
1. components/investigation/SuspectSearch.tsx
2. useDebounce hook (reusable)
3. API call: GET /search/suspects?q=NAME
4. Example with mock data
5. Keyboard accessibility + focus management
```

### Prompt 6.2: Build Suspect Profile Tabs

```
Build a tabbed interface for suspect profile with 4 tabs:
1. Incidents (timeline/list)
2. Relationships (network graph)
3. Modus Operandi (patterns + charts)
4. Locations (map + list)

TAB COMPONENT:
- Tab navigation (fixed at top, sticky on scroll)
- Active tab indicator (3px bottom border)
- Smooth content transition (fade + scale, 150ms)
- Lazy-load content (data fetches only when tab is active)
- Back button + breadcrumb (above tabs)
- Export/Flag/Alert buttons (top-right)

PROPS:
- suspectId: string
- activeTab?: 'incidents' | 'relationships' | 'mo' | 'locations'
- onTabChange?: (tab: string) => void

DELIVERABLES:
1. components/investigation/SuspectProfileTabs.tsx
2. Incident tab component (timeline view)
3. Relationship tab component (force-graph wrapper)
4. MO tab component (charts)
5. Location tab component (map + list)
6. Lazy-load data fetching (TanStack Query)
```

### Prompt 6.3: Build Incident Timeline Component

```
Build an incident timeline/list for displaying suspect's incidents.

TIMELINE FEATURES:
- Vertical timeline (date on left, content on right)
- Each incident:
  - Date (14px / 600 weight, left side)
  - Crime type (16px / 500 weight, uppercase, color-coded)
  - Description (14px / 400 weight, 2-line max, truncated)
  - Location (12px / 400 weight, secondary text)
  - Status badge (Resolved, Active, Archived)
- Click incident → modal or side panel with full details
- Sortable (newest first, oldest first)
- Filterable by crime type
- Responsive (no timeline design on mobile, use card list)

PROPS:
- incidents: Array<Incident>
- onIncidentClick: (incident: Incident) => void
- isLoading?: boolean
- sortBy?: 'date_asc' | 'date_desc'
- filter?: { crimeType?: string }

DELIVERABLES:
1. components/investigation/IncidentTimeline.tsx
2. Incident detail modal component
3. Mock data (sample incidents)
4. Mobile-responsive layout (card list on small screens)
```

---

## PROMPT SET 7: NETWORK VISUALIZATION

### Prompt 7.1: Build Force-Directed Graph Component

```
Build a reusable force-directed graph for relationship mapping.

GRAPH FEATURES:
- Framework: React-force-graph or similar
- Node types: Suspect (circle), Location (square)
- Node size: Proportional to incident count (suspects)
- Edge types: Co-offender (solid), Location-shared (dotted), Temporal-linked (dashed)
- Edge width: Proportional to relationship strength
- Interactions:
  - Drag node to reposition (pin position)
  - Scroll to zoom
  - Drag empty space to pan
  - Click node → select + highlight connected edges
  - Double-click → expand subgraph (2-hop neighborhood)
  - Hover node → show tooltip (name, incident count)
  - Hover edge → show relationship detail
- Physics:
  - Charge: -200 (repulsion)
  - Link distance: 60-100px
  - Link strength: 0.5
  - Friction: 0.7
- Loading state (skeleton)
- Export: Download graph as JSON or SVG

PROPS:
- nodes: Array<{ id: string; label: string; type: 'suspect' | 'location'; size: number }>
- edges: Array<{ source: string; target: string; type: string; strength: number }>
- onNodeClick: (node: any) => void
- onNodeDoubleClick: (node: any) => void
- height?: string (default: '500px')
- isLoading?: boolean

DELIVERABLES:
1. components/network/ForceGraph.tsx
2. Node rendering component (custom styling)
3. Edge rendering component
4. Tooltip component (on hover)
5. Example with mock data
6. Performance: Debounce physics simulation, virtualize if >200 nodes
```

---

## PROMPT SET 8: BACKEND API INTEGRATION

### Prompt 8.1: Set Up React Query (TanStack Query) Hooks

```
Create custom React Query hooks for all API endpoints.

HOOKS TO CREATE:
1. useAuth() - Get current user + login/logout
2. useSuspectSearch(query: string) - Search suspects with autocomplete
3. useSuspect(suspectId: string) - Fetch single suspect profile
4. useSuspectIncidents(suspectId: string) - Fetch incidents for suspect
5. useSuspectRelationships(suspectId: string) - Fetch suspect's network
6. useDashboardKPIs(period: string) - Fetch KPI metrics
7. useDashboardHotspots(filters: object) - Fetch hotspots for map
8. useDashboardAlerts(limit: number) - Fetch crime alerts
9. useCrimeTrends(period: string) - Fetch 30-day trend data
10. useHotspotDetail(zoneId: string) - Fetch single hotspot detail
11. usePredictedRisks(period: string) - Fetch AI risk predictions
12. useNetworkGraph(filters: object) - Fetch graph data

EACH HOOK SHOULD:
- Use TanStack Query for caching + background refetching
- Handle loading, error, and success states
- Implement retry logic (exponential backoff)
- Support pagination (if applicable)
- Type-safe return values
- Implement cancellation (abort on unmount)

DELIVERABLES:
1. hooks/queries/useAuth.ts
2. hooks/queries/useSuspect.ts
3. hooks/queries/useDashboard.ts
4. hooks/queries/useHotspots.ts
5. hooks/queries/useNetwork.ts
6. hooks/queries/usePredictions.ts
7. queryClient.ts configuration (default options, retry logic)
8. QueryClientProvider wrapper for app
```

### Prompt 8.2: Set Up Zustand Global State

```
Create Zustand stores for global application state.

STORES TO CREATE:
1. useAuthStore() - User auth state (user, permissions, isAuthenticated)
2. useFilterStore() - Global filters (dateRange, district, crimeType)
3. useUIStore() - UI state (activeTab, sidebarOpen, selectedNode, etc.)

EACH STORE SHOULD:
- Minimal state (avoid Redux trap)
- Clear actions
- TypeScript types
- Devtools integration (for debugging)
- Persistence (localStorage for certain values)

DELIVERABLES:
1. stores/authStore.ts
2. stores/filterStore.ts
3. stores/uiStore.ts
4. hooks/useAuthStore, useFilterStore, useUIStore (convenience hooks)
5. Example of state usage in components
```

---

## PROMPT SET 9: PERFORMANCE OPTIMIZATION

### Prompt 9.1: Image Optimization & Lazy Loading

```
Implement image optimization for suspect photos and crime scene images.

REQUIREMENTS:
- Use next/image for automatic optimization
- WebP format with fallback (JPEG)
- Responsive image sizing (1x, 2x resolution)
- Lazy loading (default for offscreen images)
- Placeholder while loading (blur, base64, or skeleton)
- Error handling (fallback image)
- Aspect ratio maintenance (no layout shift)

USAGE PATTERNS:
1. Suspect avatar: 40px, 80px (2x)
2. Suspect profile photo: 200px × 240px, various DPI
3. Incident scene photo: 400px wide (various heights)
4. Map markers: 32px × 32px (SVG, not raster)

DELIVERABLES:
1. components/common/OptimizedImage.tsx (wrapper around next/image)
2. Example: Suspect profile photo, incident list images
3. Configuration: next.config.js (image optimization options)
4. Performance report: Before/after LCP, CLS, bundle size
```

### Prompt 9.2: Code Splitting & Dynamic Imports

```
Implement code splitting to reduce initial bundle size.

STRATEGY:
- Route-based splitting (Next.js automatic via App Router)
- Component-level splitting (dynamic imports for heavy components)
  - Map component (Mapbox GL is large)
  - Chart components (Recharts)
  - Force-graph (React-force-graph)
  - Modal dialogs (lazy-load content)
- Lazy-load data (paginate tables, infinite scroll)

IMPLEMENTATION:
1. Use dynamic() from next/dynamic for component imports
   Example: `const Map = dynamic(() => import('@/components/Map'))`
2. Add loading fallback (skeleton or spinner)
3. Add error boundary (fallback UI if component fails to load)
4. Monitor bundle size (next/bundle-analyzer)

DELIVERABLES:
1. lib/dynamicImports.ts (centralized dynamic imports)
2. Example: Dashboard with lazy-loaded map
3. Performance report: Bundle size breakdown
4. LCP, TTI measurements before/after
```

---

## PROMPT SET 10: TESTING & QUALITY ASSURANCE

### Prompt 10.1: Unit Tests for Components

```
Write comprehensive unit tests for core components.

COMPONENTS TO TEST:
1. Button - All variants, sizes, states, disabled, loading
2. Card - With/without image, interactive, alert variant
3. Input - Text, number, error, disabled, focus
4. KPICard - Value rendering, change indicator, animation
5. DataTable - Sorting, pagination, selection, responsiveness

TESTING FRAMEWORK:
- Vitest (fast, native ES modules)
- React Testing Library (query by role/text, not implementation)
- Happy DOM (faster than JSDOM for this use case)

TEST COVERAGE:
- Rendering (does component render correctly?)
- Props (does it accept and use props?)
- User interactions (click, hover, keyboard)
- Accessibility (ARIA labels, focus, keyboard nav)
- States (loading, error, disabled)
- Visual regression (snapshot tests, optional)

DELIVERABLES:
1. components/common/Button.test.tsx
2. components/common/Card.test.tsx
3. components/common/Input.test.tsx
4. components/dashboard/KPICard.test.tsx
5. components/common/DataTable.test.tsx
6. vitest.config.ts configuration
7. 80%+ code coverage target
```

### Prompt 10.2: Accessibility Audit (A11y)

```
Conduct a comprehensive accessibility audit (WCAG 2.1 AA).

AUDIT CHECKLIST:
1. Color contrast (minimum 4.5:1 for text, 3:1 for UI)
2. Keyboard navigation (Tab order, Enter/Space for buttons, Arrow keys for lists)
3. Focus indicators (visible, 3px, brand color outline)
4. Screen reader testing (ARIA labels, semantic HTML)
5. Form labels + errors (accessible to screen readers)
6. Image alt text (all images have descriptive alt)
7. Motion (prefers-reduced-motion respected)
8. Text sizing (no fixed sizes <14px except captions)
9. Responsive zoom (page remains usable at 200% zoom)
10. No keyboard traps (all interactive elements are accessible)

TOOLS:
- axe DevTools (browser extension, automated scanning)
- WAVE (WebAIM, visual feedback)
- Keyboard-only testing (disable mouse, navigate with Tab/Arrow/Enter)
- Screen reader testing (NVDA on Windows, VoiceOver on Mac)

DELIVERABLES:
1. ACCESSIBILITY.md (audit report)
   - List of issues found
   - Severity (critical, high, medium, low)
   - Remediation steps
   - WCAG reference links
2. Fixed components (100% AA compliance)
3. Keyboard navigation guide
4. Screen reader testing checklist
```

---

## PROMPT SET 11: DEPLOYMENT & MONITORING

### Prompt 11.1: Set Up CI/CD Pipeline (GitHub Actions)

```
Set up a CI/CD pipeline for automated testing and deployment.

PIPELINE STAGES:
1. Test: Run unit tests (Vitest) + linting (ESLint + Prettier)
2. Build: Next.js build (fail if build errors)
3. Performance: Run Web Vitals measurement (fail if LCP >2.5s, CLS >0.1)
4. Deploy: Push to staging (Vercel, Netlify) or production

CONFIGURATION:
- Trigger on: Push to main, PR to main
- Node version: 18+ (LTS)
- Cache dependencies (npm/pnpm)
- Report test coverage
- Comment PR with performance metrics

DELIVERABLES:
1. .github/workflows/test.yml (run tests on every PR)
2. .github/workflows/deploy.yml (deploy on merge to main)
3. GitHub branch protection rules (require tests pass before merge)
4. Performance budget configuration (Web Vitals thresholds)
```

### Prompt 11.2: Set Up Monitoring & Error Tracking

```
Set up application monitoring for errors and performance.

MONITORING SETUP:
1. Error tracking (Sentry):
   - Catch unhandled errors + Promise rejections
   - Source map upload (for stack traces)
   - Release tracking
   - Session replay (optional)

2. Performance monitoring:
   - Core Web Vitals (LCP, CLS, INP)
   - Custom metrics (API latency, graph render time)
   - Page load waterfall
   - JS execution time

3. User analytics:
   - Page view tracking
   - User session tracking
   - Event tracking (e.g., "suspect profile opened", "map drilled down")
   - Heatmaps (optional)

DELIVERABLES:
1. lib/sentry.ts (Sentry initialization)
2. lib/analytics.ts (event tracking helpers)
3. Error boundary component (catch React errors)
4. Performance monitoring hook (usePerformance)
5. Sentry dashboard configuration
6. Analytics event list (documented)
```

---

## USING THESE PROMPTS

### How to Use:
1. Copy the entire prompt into a new Claude conversation
2. Replace placeholder values with your actual API endpoints
3. Adjust requirements based on your specific needs
4. Add your own styling preferences or branding
5. Reference existing code/components as needed

### Example Usage Flow:
```
1. Start with Prompt 1.1 (Initialize project)
2. Run Prompts 2.1-2.3 (Build design system)
3. Run Prompts 3.1-3.4 (Build core components)
4. Run Prompts 4.1-4.3 (Build dashboard)
5. Parallel: Prompts 5.1-5.3 (Charts) + 6.1-6.3 (Investigation)
6. Run Prompt 7.1 (Network graph)
7. Run Prompts 8.1-8.2 (API integration)
8. Run Prompts 9.1-9.2 (Performance optimization)
9. Run Prompts 10.1-10.2 (Testing & A11y)
10. Run Prompts 11.1-11.2 (Deployment & monitoring)
```

### Customization Tips:
- Replace mock data with real API calls
- Adjust colors to match your brand
- Add/remove features based on MVP vs. full feature set
- Extend components with additional variants
- Add dark mode if needed (Tailwind dark: variant already enabled)

---

**Total Implementation Time:** 8-10 weeks with 2-3 developers  
**Framework:** Next.js 14, Tailwind v4, shadcn/ui, Framer Motion, Recharts, Mapbox GL  
**Quality Target:** WCAG 2.1 AA, LCP <2.5s, CLS <0.1, 80%+ test coverage
