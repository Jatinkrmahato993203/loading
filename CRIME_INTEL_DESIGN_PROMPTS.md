# Crime Intelligence & Analytical Platform
## Comprehensive Frontend Design & UX Prompts

---

## EXECUTIVE BRIEF

**Project:** Karnataka State Police (KSP) Crime Intelligence & Analytical Platform  
**Audience:** Law Enforcement Officers, Investigators, SCRB Analysts, Command Staff  
**Domain Complexity:** High (Criminal networks, geospatial data, temporal analysis, behavioral patterns)  
**Design Imperative:** Transform fragmented Excel-based silos into a unified, proactive intelligence ecosystem with the polish and intentionality of premium design (haoqi.design, Aardvark, SharpLink)

**Core Design Philosophy:**
- **Authority without Coldness:** Enterprise rigor meets human-centered investigation workflows
- **Clarity Through Hierarchy:** Dense criminal intelligence data must be queryable at a glance
- **Spatial-First Thinking:** Maps are not decorative—they are primary data channels
- **Relational Narrative:** Connection patterns tell stories that isolated records cannot
- **Proactive by Default:** Alerts, anomalies, and trends surface predictively, not reactively

---

## SECTION 1: DESIGN READ & FOUNDATIONAL POSITIONING

### 1.1 Design Read Statement
**Reading this as:** B2B government intelligence platform for law enforcement analysts and command staff, with a data-authority language rooted in criminal intelligence, leaning toward industrial-minimalist design with restrained, purposeful motion and deep geospatial visualization.

### 1.2 Core Design Dials
```
DESIGN_VARIANCE: 5     (Structured, purposeful; not chaotic or experimental)
MOTION_INTENSITY: 4    (Restrained, deliberate; supports navigation and alerts, not decoration)
VISUAL_DENSITY: 7      (Compact dashboard; investigators need 6-8 data dimensions visible simultaneously)
```

### 1.3 Design Aesthetic Family
- **Primary:** Industrial-Minimalist (Swiss grid, monospace typography for criminal identifiers)
- **Secondary:** Geospatial Authority (cartographic precision, heatmap sophistication)
- **Tertiary:** Alert-Driven (pulsing anomalies, color-coded risk zones)
- **Inspiration Reference:** 
  - haoqi.design (design discipline, craft, minimal ornament)
  - Aardvark (grid geometry, intentional spacing, premium polish)
  - SharpLink (data visualization clarity, relational thinking)
  - GOV.UK Frontend (accessibility-first, trust-building layout)

### 1.4 Target Personas & Their Workflows

#### Persona A: Field Investigator
- **Goal:** Link suspects across incidents, find patterns in criminal behavior
- **Workflow:** Opens app mid-investigation, searches a suspect, needs instant suspect profile + incident connections
- **Design Need:** Fast search + relationship map + incident timeline
- **Pain Point:** Today uses 3-4 Excel sheets + manually correlates data

#### Persona B: SCRB Analyst
- **Goal:** State-level crime trend analysis, resource planning, emerging threats
- **Workflow:** Reviews geospatial hotspots, compares districts, identifies spikes
- **Design Need:** Interactive maps, temporal filtering, comparative analytics
- **Pain Point:** Today lacks integrated view of state-wide patterns; relies on monthly reports

#### Persona C: Command Staff / Police Commissioner
- **Goal:** Strategic oversight, budget allocation, public safety ROI
- **Workflow:** Dashboard review (2-3 min), executive summary, drill-down into anomalies
- **Design Need:** Executive summary cards, KPI trends, predictive risk ranking
- **Pain Point:** Cannot quickly explain why resources should deploy to *this* district vs. that one

---

## SECTION 2: INFORMATION ARCHITECTURE & PRIMARY UX FLOWS

### 2.1 Core Navigation Structure
```
APP SHELL
├── Left Sidebar (Persistent, collapsible)
│   ├── Logo + App Title
│   ├── Primary Nav (5-7 items)
│   │   ├── Dashboard (Executive overview + hotspot map)
│   │   ├── Investigation (Suspect search + network graph)
│   │   ├── Hotspot Intelligence (Geospatial + temporal)
│   │   ├── Predictive Analytics (AI risk forecasting)
│   │   ├── Network Analysis (Relationship mapping)
│   │   └── Reports (Export + archived intelligence)
│   └── User + Settings
├── Top Header (Breadcrumbs + quick filters)
│   ├── Global Date/Time Range Picker
│   ├── Geographic Filter (District / Police Station)
│   └── Alert Badge (Unread anomalies count)
└── Main Content Canvas (Full-width, responsive)
```

### 2.2 Primary User Flows (Happy Paths)

#### Flow 1: Suspect Search → Relationship Discovery
```
[Search Bar: Enter Suspect Name/ID]
    ↓
[Instant Results: Suspect Card + Metadata]
    ↓
[Click Suspect Card: Open Profile]
    ↓
[Profile Layout:]
    - Header: Photo, Name, ID, Arrest Count, Last Known Location
    - Tab 1: Incidents (Timeline + associated cases)
    - Tab 2: Relationships (Network node-link diagram)
    - Tab 3: Modus Operandi (Pattern analysis + crime type breakdown)
    - Tab 4: Locations (Recurring places, heatmaps)
    ↓
[Investigator Action: Create Case Link / Export Profile / Flag for Investigation]
```

#### Flow 2: Geographic Hotspot Analysis
```
[Dashboard: Map View (Default state)]
    ↓
[Map displays: Colored districts (Red = high crime, Yellow = emerging, Green = controlled)]
    ↓
[Click District: Drill-down to Police Station level]
    ↓
[Station View: Specific hotspots pinned, temporal filter applied]
    ↓
[Timeline Scrubber: Adjust date/time range → heatmap updates in real time]
    ↓
[Action: View incidents in this zone, deploy resources, set alerts]
```

#### Flow 3: Network Relationship Discovery
```
[Navigation: Go to Network Analysis]
    ↓
[Canvas: Force-directed graph (nodes = suspects/locations, edges = relationships)]
    ↓
[Search/Filter: Select crime type + date range]
    ↓
[Graph updates: Only relevant nodes + connections visualized]
    ↓
[Interaction: Hover node → see brief details, click → open full profile]
    ↓
[Insight: Visual clustering reveals organized crime groups]
    ↓
[Action: Export subgraph, create investigation group, alert supervisor]
```

#### Flow 4: Predictive Risk Review
```
[Dashboard: Predictive Risk Cards]
    ↓
[Card shows: "High Risk Hotspot: Area X (78% likelihood spike next 7 days)"]
    ↓
[Click card: Drill to detail view]
    ↓
[Detail: AI reasoning (correlation heatmap), historical precedent, confidence scores]
    ↓
[Action: Acknowledge alert, schedule patrol, export briefing]
```

---

## SECTION 3: PAGE-BY-PAGE DESIGN SPECIFICATIONS

### PAGE 1: Dashboard (Executive Overview)

#### Layout
```
┌─────────────────────────────────────────────┐
│  Dashboard                     [Date Filter] │  ← Breadcrumb + Global Controls
├─────────────────────────────────────────────┤
│                                             │
│  ┌─ KPI Row (4 cards, equal width) ─────┐  │
│  │ Total Incidents │ Arrests │ Suspects │  │  ← Slight color coding: 
│  │   (↑ 12%)       │(↑ 8%)   │ Tracked │  │     Green = improving, Red = alert
│  └─────────────────────────────────────────┘  │
│                                             │
│  ┌─ Primary Map (Full Width, 60vh height) ┐  │
│  │                                         │  │
│  │  [Interactive Geospatial Heatmap]      │  │  ← Districts colored by risk
│  │  - Click to drill, drag to pan         │  │     Pulsing indicator on hotspots
│  │  - Legend: Crime type colors           │  │     Time slider below
│  │                                         │  │
│  └─────────────────────────────────────────┘  │
│                                             │
│  ┌─ Analytics Row (2 cols) ───────────────┐  │
│  │ Crime Trend (Line chart)│Risk Forecast│  │  ← Left: 30-day trend by category
│  │                         │(Predicted)  │  │     Right: AI risk score trend
│  └─────────────────────────────────────────┘  │
│                                             │
│  ┌─ Alerts Carousel ──────────────────────┐  │
│  │ [Alert 1] [Alert 2] [Alert 3] [→]      │  │  ← Red-zone pulsing on new alerts
│  │ "Spike in theft @ District 5"          │  │     Swipeable, dismissible
│  └─────────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

#### Key Design Elements

**1. KPI Cards**
- Size: 4 equal cards in a responsive row (1 col mobile, 2 cols tablet, 4 cols desktop)
- Background: Subtle gradient or solid (slate-50 or slate-800 in dark mode)
- Border: 1px slate-200 (light) or slate-700 (dark)
- Typography: 
  - Label: `16px / 500 weight / letter-spacing: -0.4px` (authority)
  - Value: `36px / 700 weight / font-variant-numeric: tabular-nums` (for alignment)
  - Change indicator: `14px / 400 weight / color: (#10b981 if ↑, #ef4444 if ↓)`
- Spacing: 24px gap between cards, 16px internal padding

**2. Geospatial Map (Primary Intelligence Layer)**
- Framework: Mapbox GL or Deck.gl (not Google Maps; need vector tiles + custom layer capability)
- Height: 60vh minimum (full height on tablet/mobile if map-primary view)
- Interaction:
  - Click district → zoom + drill to police station level
  - Drag to pan, scroll to zoom
  - Click location marker → incident popup + quick profile
  - Time scrubber below map → real-time heatmap refresh
- Visual Encoding:
  - District fill: Color by risk score (red = 80-100, orange = 60-79, yellow = 40-59, green = 0-39)
  - Opacity: Increase with certainty (darker = more confident)
  - Hotspot pulses: 1.2s animation cycle, only on active anomalies (draws attention without overwhelming)
  - Crime type layer: Toggle-able overlays (theft, assault, homicide, etc.)

**3. Trend & Forecast Charts**
- Library: Recharts (React-native, performant)
- Crime Trend (Left chart):
  - Line chart: 30-day history by crime category
  - Y-axis: Incident count (auto-scale)
  - X-axis: Date (abbreviated, `"Mon 21"` format)
  - Legend: Toggleable crime categories
  - Hover: Tooltip with exact counts + % change from yesterday
  
- Risk Forecast (Right chart):
  - Area chart: AI-predicted risk score (confidence band)
  - Y-axis: Risk score (0-100)
  - Shaded area: Prediction confidence interval
  - Color: Red if trend is accelerating, orange if stable, green if declining
  - Hover: Show contributing factors

**4. Alerts Carousel**
- Container: Dark background (slate-900), 100% width, padding 20px
- Cards: Horizontal scroll (5-7 visible alerts, swipe on mobile)
- Each Alert Card:
  - Left border: 4px red (critical), orange (warning), yellow (info)
  - Icon: Crisis symbol, trending-up, or bulb
  - Title: 18px / 600 weight (e.g., "Spike Detected: Theft @ District 5")
  - Subtitle: 14px / 400 (e.g., "78% increase in 3 days vs. historical avg")
  - Action: "Drill to map" or "Create patrol brief" CTA
  - Dismiss: X icon, right edge (state persists per session)

---

### PAGE 2: Investigation (Suspect Search & Profile)

#### Layout
```
┌──────────────────────────────────────────────┐
│  Investigation              [Filter Menu]    │  ← Breadcrumb + Advanced Filters
├──────────────────────────────────────────────┤
│                                              │
│  ┌── Search Bar (Hero, center-aligned) ───┐ │
│  │  🔍 Search suspects, incidents, places  │ │
│  │     [ _________________ ]  [Advanced ↓] │ │  ← Instant results dropdown
│  └──────────────────────────────────────────┘ │
│                                              │
│  ┌── Recent Searches + Filters ───────────┐ │
│  │ [Cleared Today] [Favorite Suspects] ▼  │ │
│  └──────────────────────────────────────────┘ │
│                                              │
│  ┌── Results Grid (Masonry or List) ─────┐ │
│  │                                        │ │
│  │  ┌─ Suspect Card ──────────┐           │ │
│  │  │ [Photo] Name: X          │           │ │
│  │  │ ID: XXXXX                │           │ │
│  │  │ Incidents: 7             │           │ │
│  │  │ Last: 2024-01-15         │           │ │
│  │  │ [View Profile →]         │           │ │
│  │  └──────────────────────────┘           │ │
│  │                                        │ │
│  └──────────────────────────────────────────┘ │
│                                              │
└──────────────────────────────────────────────┘

FULL SUSPECT PROFILE (Detail View)
┌──────────────────────────────────────────────┐
│  Suspect Profile: NAME [ID: XXXXX]           │
│  [← Back]                   [Flag] [Export]  │
├──────────────────────────────────────────────┤
│                                              │
│  ┌─ Header (Hero Photo + Bio) ──────────┐   │
│  │ [Photo]│ Name: X                      │   │  ← 2-col: Photo (200px) + Bio
│  │        │ Age: 35 | Gender: M          │   │
│  │        │ Arrest Count: 7              │   │
│  │        │ Status: Active               │   │
│  │        │ Last Known Location: [Map]   │   │
│  └──────────────────────────────────────────┘ │
│                                              │
│  ┌─ Tabs Navigation ────────────────────┐   │
│  │ [Incidents] [Relationships] [MO] [L] │   │  ← MO = Modus Operandi, L = Locations
│  └──────────────────────────────────────────┘ │
│                                              │
│  ┌─ Tab Content (Dynamic) ──────────────┐   │
│  │                                      │   │
│  │  ← Content changes based on tab      │   │
│  │                                      │   │
│  └──────────────────────────────────────────┘ │
│                                              │
└──────────────────────────────────────────────┘
```

#### Search Bar (Hero Section)
- Width: 100% on mobile, 600px centered on desktop
- Background: Subtle gradient (slate-50 → slate-100, light mode) or slate-800 (dark)
- Border: 1.5px slate-300 (light) or slate-600 (dark)
- Border Radius: 12px
- Font: 16px / 400 weight (placeholder text: slate-400)
- Icons:
  - Left: Magnifying glass (Phosphor `MagnifyingGlass` weight=400)
  - Right: Chevron down (collapsible Advanced Filters panel)
- Hover State: Lift shadow (0 4px 12px rgba(0,0,0,0.08))
- Focus State: Border color → brand accent (e.g., #1e40af), shadow glow
- Autocomplete Results: Dropdown, max-height 400px, scrollable
  - Result item: 44px height (touch-friendly), left-aligned avatar + name + metadata
  - Hover: Subtle background (slate-100 light / slate-700 dark)

#### Suspect Search Results Grid
- Layout: Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- Gap: 20px
- Masonry optional for aesthetic variance (use CSS Columns or CSS Grid `auto-rows: min-content`)

**Suspect Card (Result Item)**
- Width: 100% (grid cell sizing)
- Height: Auto (content-driven)
- Background: White (light) / slate-800 (dark)
- Border: 1px slate-200 (light) / slate-700 (dark)
- Border Radius: 8px
- Padding: 16px
- Image: 160px × 160px, object-fit: cover, top-left position
- Metadata:
  - Name: 18px / 600 weight (truncate if >30 chars)
  - ID: 12px / 500 weight, monospace, slate-500
  - Incident Count: 14px / 500 weight, color-coded (green if <3, red if >10)
  - Last Location: 12px / 400 weight, slate-600
- Actions:
  - Primary CTA: "View Profile →" (full-width button, slate background, 8px padding, 6px radius)
  - Secondary: Long-press or hover → quick-action menu (Flag, Export, Message Supervisor)
- Hover State: Lift box-shadow (0 8px 16px rgba(0,0,0,0.12)), subtle scale (1.02)

#### Suspect Profile (Full Detail View)

**Header Section (Hero + Bio)**
- Layout: 2-column (photo on left, bio on right)
  - Photo: 200px × 240px, object-fit: cover, border-radius: 4px
  - Bio Column: 1fr (flex-grow)
- Background: Gradient (slate-50 to white, light mode)
- Padding: 32px (desktop), 24px (tablet), 16px (mobile)
- Border-bottom: 2px solid slate-200

**Bio Grid (Right Column)**
- Layout: 2 columns (Name/Age, ID/Arrest Count, etc.)
- Each item:
  - Label: 12px / 600 weight, uppercase, letter-spacing: 0.8px, slate-500
  - Value: 16px / 500 weight, slate-900
  - Gap: 8px (vertical), 24px (horizontal)
- Status Badge: Inline with status label
  - Active: Green (#10b981), pill-shaped (8px radius, 8px × 16px padding)
  - Inactive: Gray (#6b7280)
  - Wanted: Red (#ef4444)

**Tab Navigation (Below Hero)**
- Background: White / slate-800
- Height: 48px (touch-friendly)
- Tabs: [Incidents] [Relationships] [Modus Operandi] [Locations]
- Active Tab Indicator: 3px bottom border (brand color, e.g., #1e40af)
- Hover: Tab label color → brand color
- Mobile: Horizontally scrollable if tabs don't fit

**Tab Content: Incidents**
- Container: Padding 24px, full width
- Layout: Vertical timeline or list
- Each Incident Card:
  - Date: 14px / 600 weight (e.g., "Jan 15, 2024")
  - Crime Type: 16px / 500 weight, uppercase, color-coded (Theft: blue, Assault: red, etc.)
  - Description: 14px / 400 weight, 2-line max (truncate)
  - Location: 12px / 400 weight, slate-600
  - Status: Badge (Resolved, Under Investigation, etc.)
  - Click → Opens incident detail modal or side panel

**Tab Content: Relationships (Network Graph)**
- Container: Full width, 400px height minimum
- Graph Engine: React-force-graph or similar
- Nodes:
  - Suspect node (center): Larger (40px radius), distinctive color (brand)
  - Connected suspects: Medium (28px), slate color
  - Locations: Small (20px), map-pin icon instead of circle
- Edges:
  - Edge width: Proportional to relationship strength (# shared incidents)
  - Edge color: Faded slate (opacity 0.3)
  - Edge label (hover): "5 shared incidents" (tooltip)
- Interaction:
  - Drag node → manual reposition
  - Click node → expand inline card (name, ID, incident count)
  - Double-click → open full profile in new panel
  - Zoom via scroll, pan via drag empty space
- Legend: Below graph (Nodes = suspects, Edges = relationships)

**Tab Content: Modus Operandi**
- Container: Grid layout, 2 columns (desktop), 1 column (mobile)
- Left Column: Crime Type Breakdown (Bar chart)
  - Horizontal bar chart (crime type vs. count)
  - Colors: Distinct per crime type
  - Hover: Show % of total
- Right Column: Pattern Analysis
  - Recurring locations: List of top 5 with frequency
  - Time of day: Distribution histogram (24-hour clock)
  - Associate frequency: List of co-offenders
  - Weapons/Tools: Common implements used

**Tab Content: Locations**
- Container: Mini map (Mapbox GL embed) + list below
- Map:
  - Markers: Red pins for each incident location tied to this suspect
  - Heatmap layer: Opacity indicates frequency
  - Click pin → incident popup + brief details
- List Below:
  - Top recurring locations (address, incident count, last seen date)
  - Risk zone annotation: "High-frequency area, 15 incidents in 2 years"

---

### PAGE 3: Hotspot Intelligence (Geospatial Analysis)

#### Layout
```
┌─────────────────────────────────────────────────────┐
│  Hotspot Intelligence       [Filters ▼] [Time ▼]   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─ Filter Sidebar (Collapsible, 20% width) ────┐ │
│  │ Crime Type:                                   │ │
│  │   [☑] All  [☐] Theft  [☐] Assault  [☐] ...   │ │
│  │                                               │ │
│  │ District:                                     │ │
│  │   [Dropdown: All Districts ▼]                 │ │
│  │                                               │ │
│  │ Confidence:                                   │ │
│  │   [Slider: ▓▓▓▓░░░░░░] 65% +                 │ │
│  │                                               │ │
│  │ [Apply] [Reset]                               │ │
│  └─────────────────────────────────────────────────┘ │
│                                                     │
│  ┌─ Main Map (80% width, full height) ──────────┐ │
│  │                                               │ │
│  │  [Interactive Heatmap + Crime Overlay]       │ │
│  │  - Heatmap: Incident density by pixel        │ │
│  │  - Overlays: Crime type colors               │ │
│  │  - Hotspot markers: Pulsing red zones        │ │
│  │  - Click zone → panel on right opens        │ │
│  │                                               │ │
│  └─────────────────────────────────────────────────┘ │
│                                                     │
│  ┌─ Time Scrubber (Full Width, Below Map) ─────┐ │
│  │ 2024-01-01 ◄─────●─────► 2024-12-31         │ │
│  │                                               │ │
│  │ [Play ▶] [×0.5] [×1] [×2]  [Show Heatmap▼] │ │
│  │                                               │ │
│  └─────────────────────────────────────────────────┘ │
│                                                     │
│  ┌─ Right Sidebar (Detail Panel, appears on click) ┐ │
│  │ Zone: District 5, Sector A                     │ │
│  │ Total Incidents: 47                            │ │
│  │ Risk Score: 84/100 (High)                      │ │
│  │ Trend: ↑ +12% (last 7 days)                    │ │
│  │                                                │ │
│  │ [Drill to Police Station ▼]                    │ │
│  │ [View Incidents in Zone] [Deploy Resources]   │ │
│  │                                                │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### Key Design Elements

**Filter Sidebar**
- Width: 240px (collapsible on tablet/mobile, hamburger menu)
- Background: slate-50 (light) / slate-800 (dark)
- Border-right: 1px slate-200
- Padding: 16px
- Filter Groups:
  - Crime Type: Multi-checkbox
  - District: Dropdown (searchable)
  - Confidence Threshold: Slider (0-100)
  - Date Range: Dual date pickers (calendar popover)
- Buttons:
  - Apply: Full-width, brand color, 8px radius, 12px padding
  - Reset: Full-width, secondary style (outline)
- Sticky on scroll: `position: sticky; top: 0`

**Main Map (Heatmap Layer)**
- Framework: Mapbox GL or Deck.gl (vector tiles, custom layer API)
- Heatmap Visualization:
  - Color scale: Blue (cold, low density) → Yellow → Red (hot, high density)
  - Intensity: Logarithmic scale to avoid single outliers dominating
  - Opacity: 0.85 (semi-transparent to see basemap)
- Crime Type Overlays (toggleable):
  - Theft: Blue markers
  - Assault: Red markers
  - Homicide: Dark red (larger)
  - Property Crime: Green markers
  - Each overlay can be enabled/disabled via sidebar
- Hotspot Pulses:
  - Only visible for top 5-7 anomalous zones
  - Animation: `keyframes pulse-hotspot { 0% { r: 20px; opacity: 1 } 100% { r: 40px; opacity: 0 } }`
  - Duration: 1.2s, infinite
  - Only animate zones with >50% spike vs. historical average
- Hover: Crime type layer tooltip (exact count, % change, nearest address)
- Click: Open right sidebar detail panel

**Time Scrubber (Timeline Control)**
- Layout: Full width, below map
- Height: 80px (includes controls + visualization)
- Components:
  - Date range display (left + right endpoints): `"2024-01-01 — 2024-12-31"`
  - Slider track: 100% width, height 3px, slate-300
  - Slider thumb: 16px diameter, brand color
  - Mini timeline chart (below slider): Sparkline showing incident count over time (grayscale)
  - Playback controls (left-aligned):
    - Play/Pause button (Phosphor PlayCircle / PauseCircle, 24px)
    - Speed selector: ×0.5, ×1, ×2 (small buttons, radio group style)
  - Display options (right-aligned):
    - "Show Heatmap" toggle
    - "Animate Incidents" toggle (shows dots appearing over time)
- Interaction:
  - Drag slider → instant heatmap update
  - Click Play → scrubber auto-advances, incidents appear/disappear on map
  - Pressing a speed button changes animation rate
- Mobile: Stack vertically (date inputs on top, slider below, controls in separate row)

**Right Sidebar (Detail Panel)**
- Width: 300px (fixed, or 100% on mobile as bottom sheet)
- Appears on: Click hotspot marker on map
- Background: White / slate-800
- Padding: 20px
- Close button: X icon (top-right, 24px, slate-400)
- Content:
  - Zone Name: 20px / 600 weight
  - Key Metrics (4 items):
    - Total Incidents: 14px label, 24px value
    - Risk Score: Badge (color-coded)
    - Trend: Arrow + % (green ↓ or red ↑)
    - Last Incident: Timestamp
  - Drill-down CTA: "Drill to Police Station Level" (full-width button)
  - Action Buttons:
    - "View Incidents in Zone" (secondary style, opens modal)
    - "Deploy Resources" (brand color, opens resource allocation interface)
  - Small map preview: Mini Mapbox embed (150px × 150px) showing just this zone
- Sticky: Stay visible while scrolling on desktop

---

### PAGE 4: Predictive Analytics (AI-Driven Intelligence)

#### Layout
```
┌──────────────────────────────────────────────────┐
│  Predictive Analytics          [Model ▼] [Conf ▼] │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌─ Summary Cards (3-wide grid) ──────────────┐ │
│  │                                            │ │
│  │  [High Risk Zone  [Emerging Trend  [Repeat │ │
│  │   Count: 3       Count: 7        Offender │ │
│  │   Confidence: 82%│ Confidence: 64%│ Risk: │ │
│  │                                            │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  ┌─ Risk Ranking Table (Full Width) ────────┐ │
│  │ Rank │ Zone           │ Risk │ Trend │ Act │ │
│  │ ──────────────────────────────────────────  │
│  │  1   │ District 5,Sec │ 87%  │ ↑ 12%│ ... │ │
│  │  2   │ District 2,Sec │ 76%  │ ↑ 5% │ ... │ │
│  │  3   │ District 7,Sec │ 65%  │ → 0% │ ... │ │
│  │                                            │ │
│  │ [Load More]                                │ │
│  │                                            │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  ┌─ AI Reasoning Panel (Expandable) ────────┐ │
│  │ Why is District 5 flagged?                │ │
│  │                                            │ │
│  │ ✓ Theft incidents: +78% vs. 7-day avg    │ │
│  │ ✓ Repeat offenders: 5 known actors,      │ │
│  │   12 recent co-incidents                 │ │
│  │ ✓ Socioeconomic: High unemployment,      │ │
│  │   low foot-traffic police response       │ │
│  │ ✓ Temporal: Peak incidents 8 PM - 2 AM  │ │
│  │                                            │ │
│  │ Confidence: 82% (based on 450+ incidents) │ │
│  │                                            │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  ┌─ Forecast Heatmap (Time Series) ────────┐ │
│  │                                            │ │
│  │  Next 14 Days Predicted Risk by Zone      │ │
│  │  (Rows = zones, Columns = days)          │ │
│  │  Colors: Red = high risk, Green = low    │ │
│  │                                            │ │
│  │  District 5  ┌─────────────────────────┐ │ │
│  │  District 2  │ [Color heatmap grid]    │ │ │
│  │  District 7  │                         │ │ │
│  │  ...         └─────────────────────────┘ │ │
│  │                                            │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
└──────────────────────────────────────────────────┘
```

#### Summary Cards
- Layout: 3-column grid (responsive: 1 col mobile, 2 col tablet)
- Card Background: Gradient (e.g., red-50 for high-risk card)
- Border: 2px solid matching color (red for high-risk, orange for emerging, etc.)
- Padding: 20px
- Icon (top-left): 32px, solid (AlertTriangle for high-risk, TrendingUp for emerging, Repeat for offenders)
- Metric:
  - Label: 12px / 600 weight, uppercase
  - Value: 32px / 700 weight
  - Subtext: 12px / 400 weight, metadata (e.g., "Confidence: 82%")
- Hover: Lift shadow, slight scale

#### Risk Ranking Table
- Framework: React Table (TanStack Table v8) or similar
- Columns:
  - Rank: Left-aligned, 40px width, monospace, slate-500
  - Zone: Left-aligned, flex-grow, truncate with tooltip
  - Risk Score: Center-aligned, 60px width, color-coded (red if >70, orange if 40-70, green if <40)
  - Trend: Center-aligned, arrow + percentage (green ↓, red ↑)
  - Actions: Right-aligned, 40px width, icon menu (dots, opens: Export, Alert, Resource Deploy)
- Row Height: 44px (touch-friendly)
- Striping: Alternate row backgrounds (slate-50 / white)
- Hover: Subtle background lift, cursor pointer, show action menu
- Pagination: "Load More" button or infinite scroll (lazy load next 10 rows)

#### AI Reasoning Panel (Transparency)
- Title: "Why is [Zone] flagged?" (16px / 600)
- Reason List:
  - Each reason: Checkbox icon (✓) + text + metric
  - Format: "Theft incidents: +78% vs. 7-day avg"
  - Color: Icons in category color (theft = blue, assault = red)
  - Spacing: 12px between items
- Confidence Score (bottom):
  - Label: "Confidence: 82%"
  - Bar: Filled rectangle, color gradient (red → green)
  - Detail: "(based on 450+ incidents)" in small gray text
- Expandability: Click title → collapse/expand reasoning (smooth height animation)

#### Forecast Heatmap (Temporal)
- Container: 100% width, 300px height
- Grid Layout:
  - Rows: Top 10-15 risk zones (sorted by current risk)
  - Columns: Next 14 days (D0, D1, D2, ... D13)
  - Cell Size: Min 30px × 30px
- Color Scale:
  - Green (#10b981): Low risk (0-25)
  - Yellow (#fbbf24): Moderate (25-50)
  - Orange (#f97316): High (50-75)
  - Red (#ef4444): Critical (75-100)
- Hover: Show exact risk %, zone name, predicted incident count
- X-axis: Date labels (abbreviated, e.g., "Mon 21")
- Y-axis: Zone names (truncated if >20 chars, tooltip on hover)

---

### PAGE 5: Network Analysis (Relationship Mapping)

#### Layout
```
┌────────────────────────────────────────────────┐
│  Network Analysis          [Graph Type ▼] [L..] │
├────────────────────────────────────────────────┤
│                                                │
│  ┌─ Filter Panel (Left, collapsible) ────────┐ │
│  │ Crime Type: [Dropdown ▼]                  │ │
│  │ Date Range: [From] [To]                   │ │
│  │ Min Connections: [Slider] 2               │ │
│  │ Relationship Type:                        │ │
│  │   [☑] Co-offenders  [☑] Location-shared  │ │
│  │   [☑] Temporal-linked                    │ │
│  │                                            │ │
│  │ [Apply] [Reset] [Export Graph]            │ │
│  │                                            │ │
│  └────────────────────────────────────────────┘ │
│                                                │
│  ┌─ Force-Directed Graph Canvas ────────────┐ │
│  │                                            │ │
│  │       ●─────●                             │ │
│  │      /         \                          │ │
│  │     ●───────────●                         │ │
│  │      \        /│\                         │ │
│  │       ●──────● ● ●                        │ │
│  │                                            │ │
│  │  [Node-link diagram, interactive]         │ │
│  │  - Drag nodes to reposition               │ │
│  │  - Hover → show relationship details      │ │
│  │  - Click → open suspect profile           │ │
│  │  - Double-click → expand subgraph         │ │
│  │                                            │ │
│  └────────────────────────────────────────────┘ │
│                                                │
│  ┌─ Legend (Below Graph) ────────────────────┐ │
│  │ ● Suspect (circle size = incident count) │ │
│  │ ▪ Location (square)                      │ │
│  │ ⎯ Co-offender (solid line)               │ │
│  │ ⎯ Location-shared (dotted line)          │ │
│  │ ⎯ Temporal-linked (dashed line)          │ │
│  │                                            │ │
│  └────────────────────────────────────────────┘ │
│                                                │
│  ┌─ Detail Panel (Right, on node select) ──┐ │
│  │ [Node Details]                           │ │
│  │ Name: Suspect X                          │ │
│  │ ID: XXXXX                                │ │
│  │ Connections: 12                          │ │
│  │ Incident Role: Primary (8), Associate (4)│ │
│  │                                            │ │
│  │ Connected To:                            │ │
│  │ • Suspect Y (5 shared incidents)        │ │
│  │ • Location Z (7 incidents)              │ │
│  │                                            │ │
│  │ [Open Full Profile] [Export Subgraph]   │ │
│  │                                            │ │
│  └────────────────────────────────────────────┘ │
│                                                │
└────────────────────────────────────────────────┘
```

#### Filter Panel
- Width: 240px (collapsible on mobile)
- Background: slate-50 / slate-800
- Filter Groups:
  - Crime Type: Dropdown (searchable, multi-select)
  - Date Range: Dual date pickers
  - Min Connections: Slider (1-20), filters out low-degree nodes
  - Relationship Type: Multi-checkbox (Co-offenders, Location-shared, Temporal-linked)
- Buttons:
  - Apply: Brand color, full-width
  - Reset: Secondary outline style
  - Export Graph: Tertiary style, exports as SVG + JSON adjacency list
- Sticky scrolling on desktop

#### Force-Directed Graph (Primary Canvas)
- Framework: React-force-graph (3D-graph-react alternative on mobile for performance)
- Canvas: Full available width/height, min 500px height
- Node Rendering:
  - **Suspect Nodes:**
    - Shape: Circle
    - Size: Proportional to incident count (min 20px, max 60px radius)
    - Color: Brand color (#1e40af, blue)
    - On hover: Lift shadow, highlight connected edges
    - Click: Open detail panel (right sidebar)
    - Double-click: Expand subgraph (focus on this node + 1-hop neighbors)
  - **Location Nodes:**
    - Shape: Square (12px side, border-radius: 2px)
    - Color: slate-400
    - Size: Fixed (represents equal importance)
    - On hover: Show address + incident count tooltip
- Edge Rendering:
  - **Co-offender edges:** Solid line, 2px width, color: #1e40af (blue), opacity: 0.6
    - Edge label (hover): "5 shared incidents"
  - **Location-shared edges:** Dotted line, 1.5px, color: #f97316 (orange), opacity: 0.4
  - **Temporal-linked edges:** Dashed line, 1.5px, color: #6b7280 (gray), opacity: 0.3
  - Width proportional to relationship strength
- Interaction:
  - Drag node → temporarily pin position (resets on filter change or refresh)
  - Scroll → zoom in/out
  - Drag empty space → pan canvas
  - Double-tap node → center + expand
  - Tap edge → show edge details (tooltip or side panel)
- Physics Simulation:
  - Charge: -200 (repulsion to prevent overlap)
  - Link distance: 60-100px (depends on relationship type)
  - Link strength: 0.5 (flexible)
  - Friction: 0.7 (dampens jitter)

#### Detail Panel (Right Sidebar, On Node Click)
- Width: 280px (fixed on desktop, bottom sheet on mobile)
- Trigger: Click any node on graph
- Content:
  - Close button: X (top-right)
  - Node type badge: "Suspect" or "Location" (12px, pill-shaped)
  - Name: 18px / 600 weight
  - Metadata:
    - ID (if suspect): monospace, slate-500
    - Connections: Bold number + "connected nodes"
    - Incident role (if suspect): "Primary (8), Associate (4)" with breakdown
    - Address (if location): Full address, clickable → open map
  - Connected To section:
    - List of directly connected nodes (max 10, scrollable)
    - Each item: Name + relationship type + strength (e.g., "5 shared incidents")
    - Click item → open full profile or center on that node
  - Actions:
    - "Open Full Profile" (brand CTA button)
    - "Export Subgraph" (secondary, downloads JSON)
    - "Create Alert" (secondary)

#### Legend (Below Graph)
- Layout: Horizontal scrollable on mobile, static grid on desktop
- Items:
  - Suspect node: Circle (20px) + "Suspect"
  - Location node: Square (12px) + "Location"
  - Co-offender edge: Line (solid) + "Co-offenders"
  - Location-shared edge: Line (dotted) + "Location-shared"
  - Temporal edge: Line (dashed) + "Temporal-linked"
- Styling:
  - Item text: 12px / 400 weight
  - Icons: Match graph rendering (same colors + styles)
  - Interactive: Click item → toggle visibility on graph

---

## SECTION 4: DESIGN SYSTEM & ATOMIC COMPONENTS

### 4.1 Color Palette (Light Mode)

```
PRIMARY BRAND
- Brand-900: #0a1f3f (Darkest, headers)
- Brand-700: #1e40af (Primary CTA, active states)
- Brand-500: #3b82f6 (Secondary elements)
- Brand-100: #dbeafe (Hover states)

SEMANTIC (Crime Intelligence)
- Critical/Alert: #ef4444 (Homicide, high-risk)
- Warning: #f97316 (Assault, emerging threats)
- Caution: #fbbf24 (Property crime, moderate)
- Success: #10b981 (Resolved, controlled)
- Info: #06b6d4 (General info, neutral)

NEUTRALS
- Slate-900: #0f172a (Text, highest contrast)
- Slate-600: #475569 (Secondary text)
- Slate-400: #94a3b8 (Tertiary text, placeholders)
- Slate-100: #f1f5f9 (Subtle backgrounds)
- Slate-50: #f8fafc (Card backgrounds)
- White: #ffffff (Primary background)

BACKGROUNDS
- Canvas: #ffffff
- Surface: #f8fafc
- Overlay: rgba(0, 0, 0, 0.5) (modals, scrim)
```

### 4.2 Dark Mode Palette

```
Invert neutrals (slate-900 ↔ white, etc.)
Primary backgrounds: #0f172a (slate-900)
Card backgrounds: #1e293b (slate-800)
Borders: #334155 (slate-700)
Text: #f1f5f9 (slate-100)
Brand colors: Keep consistent (no darkening)
```

### 4.3 Typography System

```
FONT FAMILIES
- Primary (UI, Nav): "Inter", system-ui, sans-serif
- Monospace (IDs, Code): "IBM Plex Mono", "Courier New", monospace
- (Optional) Serif (Headlines, Editorial): "Merriweather", serif (use sparingly)

SCALE (Baseline 16px)
- Heading 1 (H1): 32px / 700 / -0.6px letter-spacing (Page titles)
- Heading 2 (H2): 24px / 600 / -0.4px (Section headers)
- Heading 3 (H3): 20px / 600 / -0.2px (Subsection)
- Body Large: 16px / 500 / 0px (Primary content)
- Body: 14px / 400 / 0px (Secondary content)
- Body Small: 12px / 400 / 0px (Metadata, labels)
- Caption: 11px / 500 / 0.4px (Uppercase labels, badges)
- Mono: 13px / 400 / 0px (Suspect IDs, case numbers)

LINE HEIGHT
- H1-H3: 1.2 (tighter for authority)
- Body: 1.5-1.6 (reading comfort)
- Caption/Small: 1.4

FONT WEIGHTS (Used Across Scale)
- 400: Regular body text, secondary info
- 500: Slightly emphasized (labels, metadata)
- 600: Strong emphasis (subheadings, badges)
- 700: Maximum emphasis (titles, stats, CTAs)
```

### 4.4 Spacing System

```
Base Unit: 4px
Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128

COMMON PATTERNS
- Container padding (Desktop): 32px
- Container padding (Mobile): 16px
- Card padding: 16-20px
- Component gap: 12-16px
- Section gap: 24-32px
- Page top spacing: 16px (mobile), 24px (tablet), 32px (desktop)
```

### 4.5 Border Radius & Shadows

```
BORDER RADIUS
- Sharp: 0px (maps, heatmaps, data tables)
- Subtle: 4px (data inputs, small components)
- Medium: 8px (cards, buttons)
- Large: 12px (modals, large containers)
- Full: 9999px (avatar, pill badges)

SHADOW SYSTEM (Elevation)
- None: No shadow (flat, background elements)
- Shallow (Elevation 1): 0 1px 2px rgba(0,0,0,0.05)
  Used for: Card hovers, subtle lifts
- Medium (Elevation 2): 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)
  Used for: Cards at rest, dropdowns
- Deep (Elevation 3): 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)
  Used for: Modals, major overlays, hero elements
- Focus Ring: 0 0 0 3px rgba(30,64,175,0.1) (brand color with low opacity)
```

### 4.6 Core Component Specs

#### Button Component
```
VARIANTS
- Primary (Brand): Background: brand-700, Text: white, Hover: brand-800, Focus: focus ring
- Secondary (Outline): Border: 1.5px brand-700, Text: brand-700, Background: transparent
- Tertiary (Ghost): Text: brand-700, Background: transparent, Hover: slate-100 bg
- Danger: Background: #ef4444 (red), Text: white

SIZES
- Small (24px height): 8px padding, 12px font
- Medium (32px height, default): 12px padding, 14px font
- Large (40px height): 16px padding, 16px font

STATES
- Default: As above
- Hover: Shadow lift (Elevation 1), opacity slight reduction if ghost
- Active/Pressed: Scale 0.98 (subtle press feedback)
- Disabled: Opacity 0.5, cursor not-allowed
- Loading: Spinner icon, text hidden or faded
```

#### Input / Text Field Component
```
VARIANTS
- Default: Border 1.5px slate-200, padding 12px, border-radius 6px
- Focus: Border-color → brand-700, box-shadow: focus ring
- Error: Border-color → #ef4444, error message below (12px, red text)
- Disabled: Background slate-100, opacity 0.6, cursor not-allowed

LABEL
- Font: 12px / 600 weight, uppercase, letter-spacing: 0.8px
- Spacing: 6px below input

HELPER TEXT
- Font: 12px / 400 weight, slate-600
- Spacing: 4px below input

PLACEHOLDER
- Color: slate-400 (lighter than label)
```

#### Card Component
```
STRUCTURE
- Background: White / slate-800 (dark)
- Border: 1px slate-200 (light) / slate-700 (dark)
- Padding: 16-20px
- Border-radius: 8px
- Shadow: Elevation 2 (default), Elevation 1 (hover)

COMMON PATTERNS
- Card with Image (Top): Image 100% width, 160px height, object-fit: cover, no gap to text
- Card with Header: 12px / 600 label + gap 8px + content
- Card Interactive: Hover shadow lift + cursor pointer
```

#### Badge / Pill Component
```
VARIANTS
- Default: Background slate-200, text slate-900
- Success: Background green-100, text green-900
- Warning: Background orange-100, text orange-900
- Danger: Background red-100, text red-900
- Info: Background blue-100, text blue-900

SIZING
- Small: 6px × 12px padding, 11px font, border-radius full
- Medium: 8px × 16px padding, 12px font, border-radius full (default)

STRUCTURE
- Optional left icon (16px)
- Text, centered
- Optional close button (16px, right)
```

#### Modal / Dialog Component
```
TRIGGER
- Click button or card action

APPEARANCE
- Overlay: rgba(0,0,0,0.5) scrim, full viewport
- Modal: Background white / slate-800, max-width 600px (responsive: 90vw on mobile), centered
- Border-radius: 12px
- Box-shadow: Elevation 3
- Padding: 32px (desktop), 24px (tablet), 20px (mobile)

STRUCTURE
- Header: 20px / 600 weight title, close X button (top-right)
- Body: Content, scrollable if >60vh
- Footer: Action buttons (Primary CTA right-aligned, secondary left)

ANIMATION
- Enter: Scale 0.95 → 1, opacity 0 → 1, duration 150ms, easing: ease-out-cubic
- Exit: Reverse, duration 100ms
```

#### Tooltip Component
```
TRIGGER
- Hover on icon or text

APPEARANCE
- Background: slate-900 (light mode), slate-100 (dark mode, inverted text)
- Text: slate-50 (light mode), slate-900 (dark mode)
- Padding: 8px 12px
- Border-radius: 4px
- Box-shadow: Elevation 2
- Font: 12px / 400 weight

POSITIONING
- Auto-position: Try top, else bottom, else right, else left (to fit viewport)
- Arrow (optional): Small triangle pointing to trigger

ANIMATION
- Enter: Fade + slight scale, duration 100ms
- Exit: Fade, duration 50ms
- Delay: 200ms (prevent flashing on hover)
```

#### Data Table Component
```
HEADER
- Background: slate-100 (light) / slate-700 (dark)
- Text: slate-600 (light) / slate-300 (dark), 12px / 600 weight, uppercase
- Padding: 12px
- Sortable columns: Arrow icon on hover, active sort → filled arrow
- Sticky header (scroll)

ROWS
- Height: 44px minimum (touch-friendly)
- Padding: 12px (vertical cell padding)
- Striping: Alternate slate-50 / white (light mode)
- Hover: Background shift (slate-100), shadow lift
- Border-bottom: 1px slate-200 (light) / slate-700 (dark)

CELLS
- Horizontal alignment: Left (text), Center (numbers/status), Right (actions)
- Text overflow: Truncate with ellipsis, tooltip on hover
- Actions (rightmost column): Icon menu (dots), hover reveals options
```

---

## SECTION 5: UX FLOWS & INTERACTION PATTERNS

### 5.1 Search Autocomplete Flow
```
USER TYPES SUSPECT NAME
    ↓
[Debounce 300ms]
    ↓
[Query backend API: /search/suspects?q=NAME]
    ↓
[Results received: 5-10 suggestions]
    ↓
[Dropdown renders below input, max-height 400px]
    ↓
[User hovers item → highlight background shift]
    ↓
[User clicks or presses Enter on highlighted item]
    ↓
[Navigate to Suspect Profile Page]
```

**UX Principles:**
- Instant visual feedback (highlight on hover)
- Keyboard navigation support (Arrow keys, Enter, Escape)
- Show match highlights in results (bold search term)
- Display metadata (ID, incident count) to aid selection
- Fallback: "No results" state with suggestion to refine query

### 5.2 Map Hotspot Drill-Down Flow
```
[User clicks hotspot marker on dashboard map]
    ↓
[Right sidebar slides in, showing zone summary]
    ↓
[User clicks "Drill to Police Station Level"]
    ↓
[Map zooms to police station bounds, heatmap recalculates]
    ↓
[Sidebar updates: Station-level data, specific hotspots highlighted]
    ↓
[User can now click specific incident markers within station]
    ↓
[Click incident → modal with full case details]
```

**UX Principles:**
- Smooth zoom animation (300ms) provides context
- Sidebar content updates in sync with map
- Breadcrumb (District > Station) shows navigation depth
- "Back" button or click parent region to zoom out
- Loading state: Skeleton placeholders while data fetches

### 5.3 Network Graph Node Selection Flow
```
[User clicks node on force-directed graph]
    ↓
[Node highlights (scale + glow effect)]
    ↓
[Connected edges brighten, disconnected fade]
    ↓
[Right sidebar opens with node details]
    ↓
[Sidebar shows connected nodes as clickable list]
    ↓
[User clicks connected node]
    ↓
[New node selected, sidebar updates, graph refocuses on new center]
    ↓
[Or: User double-clicks node]
    ↓
[Graph expands to show 2-hop neighborhood of selected node]
```

**UX Principles:**
- Visual hierarchy: Selected node is dominant, connected nodes secondary, unrelated fade
- Fast interaction feedback (<100ms) makes exploration feel smooth
- Breadcrumb trail for navigation history
- "Collapse/Expand" controls for large networks

### 5.4 Temporal Filtering Flow (Time Scrubber)
```
[User drags slider on time scrubber]
    ↓
[Map heatmap updates in real-time (no delay)]
    ↓
[Incident count in KPI cards recalculates]
    ↓
[User releases slider]
    ↓
[Data locked at selected date range]
    ↓
[Or: User clicks Play button]
    ↓
[Scrubber auto-advances (1 day per second × speed multiplier)]
    ↓
[Incidents appear/disappear on map as animation progresses]
    ↓
[User clicks Pause or scrubber reaches end]
    ↓
[Animation stops, user can scrub manually or press Play again]
```

**UX Principles:**
- Real-time heatmap refresh (debounced to 100ms)
- Playback speed options (×0.5, ×1, ×2) for different exploration modes
- Mini sparkline chart on slider shows crime volume over time
- Mobile: Expand scrubber to full width for better touch precision

---

## SECTION 6: MOTION & ANIMATION GUIDE

### 6.1 Animation Principles
- **Purpose:** Support navigation, reveal hierarchy, draw attention to anomalies
- **Timing:** 150ms-300ms for transitions, 100ms-200ms for micro-interactions
- **Easing:** ease-out for entrances (snappy), ease-in-out for loops (smooth)
- **Accessibility:** Respect `prefers-reduced-motion`; disable loops for users who prefer static

### 6.2 Specific Animation Specs

#### Hotspot Pulse (Attention-Grabbing)
```css
@keyframes hotspot-pulse {
  0% {
    r: 20px;
    opacity: 1;
    fill: rgba(239, 68, 68, 1);
  }
  100% {
    r: 40px;
    opacity: 0;
    fill: rgba(239, 68, 68, 0);
  }
}
animation: hotspot-pulse 1.2s ease-out infinite;
@media (prefers-reduced-motion: reduce) {
  animation: none;
  opacity: 0.5; /* Show static indicator instead */
}
```

#### Card Hover Lift
```css
transition: all 150ms ease-out;
&:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}
```

#### Modal Enter/Exit
```javascript
// Using Framer Motion
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.15, type: 'spring', stiffness: 300 }}
/>
```

#### Map Drill-Down Zoom
```javascript
// Mapbox GL
map.flyTo({
  center: [long, lat],
  zoom: 13,
  duration: 300,
  easing: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
});
```

#### Network Graph Force Stabilization (No Loop Animation)
- Graph physics simulates naturally (no infinite loops)
- Once stabilized, nodes are static unless user drags
- Hover: Brief highlight glow (non-looping)

### 6.3 Accessibility Compliance
- All animations must have `prefers-reduced-motion` escape hatch
- No flashing (avoid >3 Hz for photosensitivity safety)
- Informational animations (pulse, highlight) should not be sole indicator (pair with text/color)

---

## SECTION 7: PERFORMANCE & TECHNICAL REQUIREMENTS

### 7.1 Frontend Stack (Recommended)

```
Framework: Next.js 14+ (App Router, Server Components where possible)
Styling: Tailwind CSS v4 + CSS Modules for component isolation
Animation: Framer Motion (motion/react v11+)
UI Components: shadcn/ui (customized, not default state)
Icons: @phosphor-icons/react
Data Fetching: TanStack Query (React Query) for caching + server state
State: Zustand (lightweight global state for auth, filters)
Maps: Mapbox GL v2+ or Deck.gl
Charts: Recharts (performant React charts)
Testing: Vitest + React Testing Library
```

### 7.2 Performance Targets

```
Largest Contentful Paint (LCP): < 2.5s (FCP < 1.2s)
Cumulative Layout Shift (CLS): < 0.1
Interaction to Next Paint (INP): < 200ms
Time to Interactive (TTI): < 3.5s

Optimization Strategies:
- Code splitting: Route-based chunks (Next.js automatic)
- Image optimization: next/image, WebP format, lazy loading
- Map tiles: Vector tiles (Mapbox) vs. raster; lazy-load overlays
- Data virtualization: React Window for large lists (1000+ rows)
- Debounce expensive operations: Search 300ms, map pan 100ms
```

### 7.3 Accessibility (WCAG 2.1 AA)

```
Color Contrast: Minimum 4.5:1 for body text, 3:1 for UI elements
Keyboard Navigation: Tab order, Enter/Space for buttons, Arrow keys for lists/menus
Screen Reader: ARIA labels on interactive elements, semantic HTML
Focus Indicators: Visible focus ring (3px brand color outline)
Responsive Text: No fixed sizes <14px (except captions)
Reduced Motion: Disable animations, show static indicators
```

---

## SECTION 8: DATA INTEGRATION & API EXPECTATIONS

### 8.1 API Endpoints (Backend Contract)

```
Authentication
GET  /auth/me                  → User profile + permissions
POST /auth/login               → {email, password}
POST /auth/logout              → Clear session

Dashboard
GET  /dashboard/kpis?period=7d → {total_incidents, arrests, suspects_tracked, clearance_rate}
GET  /dashboard/hotspots       → [{zone, risk_score, trend, incidents_count}, ...]
GET  /dashboard/alerts?limit=5 → [{type, zone, severity, message, timestamp}, ...]
GET  /dashboard/trends?period=30d → [{date, crime_type, count}, ...]

Investigation
GET  /search/suspects?q=NAME&limit=10  → [{id, name, photo_url, incidents, last_location}, ...]
GET  /suspects/:id/profile             → Detailed suspect record
GET  /suspects/:id/incidents?limit=20  → List of incidents
GET  /suspects/:id/relationships       → Network graph data (nodes + edges)
GET  /suspects/:id/modus-operandi      → Crime patterns, locations, weapons
GET  /suspects/:id/locations           → {recurring_locations: [{address, frequency}, ...]}

Hotspot Intelligence
GET  /hotspots?district=5&date_range=7d  → Geospatial data for map rendering
GET  /hotspots/:zone_id/detail            → Zone detail, incidents list
GET  /incidents?zone=5&crime_type=theft   → Filterable incident list

Predictive Analytics
GET  /predictions/risk-zones?period=14d   → Risk scores for all zones
GET  /predictions/risk-zones/:zone/reasoning → AI explanation (feature contributions)

Network Analysis
GET  /network/graph?filters={...}         → Force-graph nodes + edges JSON
GET  /network/graph/:node_id/subgraph     → Expanded 2-hop neighborhood

General
GET  /districts                           → List of districts + metadata
GET  /crime-types                         → List of crime categories for filters
```

### 8.2 Data Structures

**Suspect Record**
```json
{
  "id": "SUSP-00123",
  "name": "John Doe",
  "age": 35,
  "gender": "M",
  "photo_url": "https://...",
  "status": "active|inactive|wanted",
  "incident_count": 7,
  "arrest_count": 3,
  "last_location": {"lat": 12.96, "lng": 77.59, "address": "..."},
  "last_incident_date": "2024-01-15"
}
```

**Incident Record**
```json
{
  "id": "INC-00456",
  "date": "2024-01-15T22:30:00Z",
  "crime_type": "theft|assault|homicide|...",
  "description": "...",
  "location": {"lat": 12.96, "lng": 77.59, "address": "..."},
  "involved_suspects": ["SUSP-00123", "SUSP-00124"],
  "status": "resolved|active|archived",
  "risk_score": 75
}
```

**Hotspot Record**
```json
{
  "zone_id": "ZONE-5-A",
  "district": "District 5",
  "police_station": "Station A",
  "location": {"lat": 12.96, "lng": 77.59},
  "risk_score": 84,
  "trend": 12,
  "incident_count": 47,
  "prediction_7d": {"risk_score": 87, "confidence": 0.82},
  "top_crime_types": [{"type": "theft", "count": 23}, {"type": "assault", "count": 12}]
}
```

---

## SECTION 9: RESPONSIVE DESIGN BREAKPOINTS

```
Mobile (< 640px)
- Single-column layout
- Sidebar → Hamburger menu
- Maps: Full-width, reduced height (50vh)
- Cards: Stack vertically
- Tables: Horizontal scroll or card view

Tablet (640px - 1024px)
- 2-column layouts where needed
- Sidebar visible but narrower (200px)
- Maps: 70% width, detail panel below (swipeabl on touch)
- Data density: Reduced, prioritize readability

Desktop (> 1024px)
- Full multi-column layouts
- Sidebar: 240px fixed, collapsible
- Maps: Full width or split view (70/30)
- Data density: High, show 6-8 dimensions simultaneously
- Modals: Centered, max-width 600px
```

---

## SECTION 10: COMPREHENSIVE PROMPT TEMPLATES

### PROMPT 1: Dashboard Frontend (Complete)

```
Design and implement the Crime Intelligence Dashboard frontend (primary page).

REQUIREMENTS:
- Stack: Next.js 14 App Router (RSC + Client Components), Tailwind v4, shadcn/ui, Framer Motion
- Layout:
  ✓ Sticky top header: Breadcrumb + Global date filter + Alert badge
  ✓ Left sidebar (collapsible): Logo, nav (5 items), user menu
  ✓ Main canvas (full-width): Hero KPI cards (4 equal width), geospatial heatmap, trend charts, alerts carousel
- Map Integration:
  ✓ Mapbox GL v2+, 60vh height
  ✓ Color-coded district fills (risk gradient: green → yellow → red)
  ✓ Hotspot pulse animation (1.2s cycle, only on anomalies >50% spike)
  ✓ Click district → drill to police station, right sidebar opens
  ✓ Time scrubber below (responsive, drag-to-seek, play button, speed controls)
- Charts:
  ✓ Recharts library (performant)
  ✓ 30-day crime trend (line chart, category toggles)
  ✓ Risk forecast (area chart with confidence band)
  ✓ Hover tooltips with exact numbers
- Alerts Carousel:
  ✓ Horizontal swipe (mobile), left-border severity coding (red/orange/yellow)
  ✓ Dismiss button per card
  ✓ "Drill to Map" or "Create Brief" CTA
- Color System: Use provided palette (brand-700 primary, semantic reds/oranges for alerts)
- Typography: Inter 400/500/600/700, monospace for IDs
- Spacing: Tailwind scale (16px base unit)
- Motion: Smooth zoom on drill-down (300ms), card hover lift (150ms ease-out)
- Accessibility: WCAG AA, focus rings, prefers-reduced-motion support
- Performance: LCP <2.5s, virtualize charts if >1000 data points
- Responsive: Full-height dashboard on mobile (stack vertically), 2-column tablet, full multi-column desktop

DELIVERABLES:
- Fully functional dashboard component (layout + maps + charts)
- Integrated with backend API (mock data OK for dev)
- Tailwind + shadcn/ui styling (no inline styles, use design system)
- Type-safe TypeScript (interfaces for all data structures)
- Accessibility audit pass (axe DevTools)
```

### PROMPT 2: Suspect Profile Page (Complete)

```
Design and implement the Suspect Profile detail page.

REQUIREMENTS:
- Layout:
  ✓ Header hero: Photo (200×240px) + biographical grid (right side)
  ✓ Tabbed interface: Incidents, Relationships, Modus Operandi, Locations
  ✓ Tab content dynamically renders based on active tab
- Header Bio Section:
  ✓ Photo: Left-aligned, 200px × 240px, object-fit: cover, border-radius: 4px
  ✓ Bio grid (right): 2 columns, name/age/ID/arrest-count/status
  ✓ Status badge: Color-coded (green=active, gray=inactive, red=wanted)
  ✓ Last known location: Mini map preview (Mapbox embed)
- Incidents Tab:
  ✓ Timeline or list view (vertical, 44px row height)
  ✓ Each incident: Date, crime type (color-coded), description, location, status
  ✓ Click → modal with full incident details
- Relationships Tab:
  ✓ Force-directed graph (React-force-graph)
  ✓ Center node = this suspect, connected = associated suspects + locations
  ✓ Edge labels (hover): "5 shared incidents"
  ✓ Click connected node → drill to their profile (new page/modal)
  ✓ Double-click → expand subgraph (2-hop neighborhood)
- Modus Operandi Tab:
  ✓ 2-column layout: Left = crime type breakdown (bar chart), Right = pattern analysis
  ✓ Right column: Top 5 recurring locations, time-of-day distribution, associate frequency
  ✓ Recharts for visualization, hover tooltips
- Locations Tab:
  ✓ Mini Mapbox GL embed (300×300px) with red markers for each incident
  ✓ Heatmap overlay (frequency)
  ✓ List below: Top 5 recurring locations, address + incident count + last-seen date
- Actions:
  ✓ [Flag for Investigation] [Export Profile] [Notify Supervisor] buttons
  ✓ Positioned top-right, secondary style
- Navigation:
  ✓ [← Back] link (top-left)
  ✓ Breadcrumb: Investigation > Suspects > [Name]
- Color System: Use palette (crime type colors consistent across tabs)
- Typography: 18px / 600 weight for name, 12px / 600 uppercase for labels
- Spacing: 32px container padding (desktop), 16px (mobile)
- Motion: Smooth tab content transitions (fade + scale 150ms)
- Accessibility: ARIA labels for tabs, keyboard navigation, focus indicators
- Performance: Lazy-load graph data, debounce graph interactions
- Responsive: Stack vertically on mobile, 2-column on tablet/desktop

DELIVERABLES:
- Full suspect profile page (all tabs functional)
- Mapbox GL integrations (maps on header + locations tab)
- React-force-graph for relationship visualization
- Recharts for MO analysis charts
- Backend API integration (fetch suspect/:id endpoints)
- Type-safe TypeScript interfaces
```

### PROMPT 3: Hotspot Intelligence Page (Complete)

```
Design and implement the Hotspot Intelligence / Geospatial Analytics page.

REQUIREMENTS:
- Layout:
  ✓ Left sidebar (collapsible): Filters (crime type, district, confidence slider, date range)
  ✓ Main canvas (80% width): Mapbox GL heatmap + overlay layers
  ✓ Time scrubber (full width, below map): Drag to seek, play button, speed controls
  ✓ Right sidebar (appears on click): Zone detail panel with metrics + actions
- Filter Sidebar:
  ✓ Crime type multi-checkbox (Theft, Assault, Homicide, Property, etc.)
  ✓ District dropdown (searchable)
  ✓ Confidence threshold slider (0-100%, gray to brand-color gradient)
  ✓ Date range: Dual date pickers (calendar popover)
  ✓ [Apply] [Reset] buttons (full-width)
  ✓ Sticky on scroll (position: sticky; top: 0)
- Main Geospatial Map:
  ✓ Mapbox GL v2+, vector tiles
  ✓ Heatmap layer: Blue (cold) → Yellow → Red (hot) color scale, logarithmic intensity
  ✓ Crime type overlay layers (toggleable): Each crime type = distinct marker color
  ✓ Hotspot pulses: 1.2s animation, only on anomalies (>50% spike threshold)
  ✓ Click hotspot → right sidebar opens with zone details
  ✓ Drag to pan, scroll to zoom
  ✓ Hover crime marker → tooltip (exact count, % change, address)
- Time Scrubber:
  ✓ Full-width container, 80px height (below map)
  ✓ Date endpoints (left/right): "2024-01-01 — 2024-12-31"
  ✓ Slider track: 3px height, slate-300, thumb 16px diameter (brand color)
  ✓ Mini sparkline chart (below slider): 24-hour crime incident count graph
  ✓ Playback controls (left): Play/Pause button, speed selector (×0.5, ×1, ×2)
  ✓ Display options (right): Toggles for "Show Heatmap" + "Animate Incidents"
  ✓ On Play: Scrubber auto-advances, heatmap updates in real-time, incidents appear/vanish
  ✓ Mobile: Stack vertically (date inputs > slider > controls in separate rows)
- Right Detail Panel (On Hotspot Click):
  ✓ Width: 300px fixed (desktop), 100% bottom sheet (mobile)
  ✓ Close button: X icon (top-right)
  ✓ Zone name: 20px / 600 weight
  ✓ Key metrics (4 cards): Total incidents, Risk score (badge), Trend (arrow + %), Last incident date
  ✓ "Drill to Police Station Level" CTA (full-width button)
  ✓ Action buttons: "View Incidents in Zone", "Deploy Resources"
  ✓ Mini map preview: 150px × 150px Mapbox embed (just this zone)
  ✓ Sticky on desktop, swipeable on mobile
- Color System: Risk gradient (green #10b981 → yellow #fbbf24 → red #ef4444), crime type colors
- Typography: Inter 400/500/600, monospace for zone IDs
- Motion: Zoom on drill-down (300ms), pulse animation (1.2s, prefers-reduced-motion: none)
- Accessibility: WCAG AA, keyboard nav for controls, color + text indicators (not color alone)
- Performance: Lazy-load map tiles, debounce slider (100ms), virtualize list if >100 zones
- Responsive: Full-height single-column on mobile, sidebar + map split on desktop

DELIVERABLES:
- Fully functional geospatial analysis page
- Mapbox GL integration (heatmap + overlay layers + drill-down zoom)
- Time scrubber with playback animation
- Filter sidebar + apply/reset logic
- Right detail panel (on hotspot click)
- Backend API integration (/hotspots, /incidents)
- Type-safe TypeScript
```

### PROMPT 4: Network Analysis Page (Complete)

```
Design and implement the Network Analysis / Relationship Mapping page.

REQUIREMENTS:
- Layout:
  ✓ Left sidebar (collapsible): Filters (crime type, date range, min connections slider, relationship type checkboxes)
  ✓ Main canvas (full width): Force-directed graph (React-force-graph or similar)
  ✓ Legend (below graph): Node/edge type definitions
  ✓ Right sidebar (on node click): Node detail panel + connected nodes list
- Filter Sidebar:
  ✓ Crime type: Dropdown (searchable, multi-select)
  ✓ Date range: Dual date pickers
  ✓ Min connections: Slider (1-20, filters out low-degree nodes)
  ✓ Relationship type: Multi-checkbox (Co-offenders, Location-shared, Temporal-linked)
  ✓ [Apply] [Reset] [Export Graph (JSON/SVG)] buttons
- Force-Directed Graph (Primary Canvas):
  ✓ React-force-graph (or Vis.js, Three.js alternative)
  ✓ Canvas: Full available width/height, min 500px height
  ✓ Node types:
    - Suspect: Circle, size ∝ incident count (min 20px, max 60px radius), brand color (#1e40af)
    - Location: Square (12px, border-radius: 2px), slate-400 color
  ✓ Edge types:
    - Co-offender: Solid line, 2px, brand-blue (#1e40af), opacity 0.6
    - Location-shared: Dotted line, 1.5px, orange (#f97316), opacity 0.4
    - Temporal-linked: Dashed line, 1.5px, gray (#6b7280), opacity 0.3
    - Width ∝ relationship strength
  ✓ Interactions:
    - Drag node → pin position (reset on filter change)
    - Scroll → zoom in/out
    - Drag empty space → pan canvas
    - Double-tap node → center + expand subgraph (focus on this node + 1-hop)
    - Hover node → highlight connected edges + show tooltip
    - Hover edge → show edge detail tooltip ("5 shared incidents")
    - Click node → open right detail panel
  ✓ Physics simulation:
    - Charge: -200 (repulsion)
    - Link distance: 60-100px (relationship-type dependent)
    - Link strength: 0.5
    - Friction: 0.7 (dampen jitter)
  ✓ Node labels: Show on hover only (avoid clutter) or small label near each node
- Legend (Below Graph):
  ✓ Horizontal layout (scrollable on mobile)
  ✓ Items: Suspect node (circle), Location node (square), Co-offender edge (solid line), Location-shared (dotted), Temporal-linked (dashed)
  ✓ Each item: Icon + label (12px font)
  ✓ Interactive: Click to toggle visibility on graph
- Right Detail Panel (On Node Click):
  ✓ Width: 280px fixed (desktop), bottom sheet (mobile)
  ✓ Close button: X icon (top-right)
  ✓ Node type badge: "Suspect" or "Location" (12px, pill-shaped)
  ✓ Name: 18px / 600 weight
  ✓ Metadata:
    - ID (if suspect): monospace, slate-500
    - Connections: Bold number + "connected nodes"
    - Incident role (if suspect): "Primary (8), Associate (4)" with breakdown
    - Address (if location): Full address, clickable → open map
  ✓ Connected To section:
    - List of directly connected nodes (max 10, scrollable)
    - Each item: Name + relationship type + strength ("5 shared incidents")
    - Click → center graph on that node + open their panel
  ✓ Actions:
    - "Open Full Profile" (CTA button, brand color)
    - "Export Subgraph" (secondary, downloads JSON)
    - "Create Alert" (secondary)
  ✓ Sticky on desktop
- Color System: Brand-blue for suspects, slate-400 for locations, semantic colors for relationship types
- Typography: Inter 400/500/600/700
- Motion: Node selection highlight (glow + scale, 150ms), edge highlighting (150ms)
- Accessibility: Keyboard nav (Tab through nodes, Arrow keys to explore, Enter to select), screen reader labels
- Performance: Lazy-load graph data, debounce physics simulation (100ms batches)
- Responsive: Full-height single-column on mobile, sidebar + graph on desktop

DELIVERABLES:
- Fully functional network visualization page
- React-force-graph integration (with custom node/edge rendering)
- Filter sidebar + apply/reset logic
- Right detail panel (on node click)
- Legend + toggleable visibility
- Backend API integration (/network/graph, /network/:id/subgraph)
- Type-safe TypeScript
```

### PROMPT 5: Predictive Analytics Page (Complete)

```
Design and implement the Predictive Analytics / AI-Driven Intelligence page.

REQUIREMENTS:
- Layout:
  ✓ Top: Model selector dropdown + Confidence threshold filter
  ✓ Summary cards row (3-wide grid, responsive): High Risk Zone Count, Emerging Trend Count, Repeat Offender Risk
  ✓ Risk ranking table (full width): Sortable columns (Rank, Zone, Risk %, Trend, Actions)
  ✓ AI reasoning panel (expandable): Why is [Zone] flagged? Breakdown of factors + confidence score
  ✓ Forecast heatmap (full width): 14-day prediction grid (rows = zones, cols = days)
- Summary Cards (3-wide grid, responsive):
  ✓ Card 1: High Risk Zones
    - Icon: AlertTriangle (24px, red)
    - Label: "High Risk Zones"
    - Value: Number (e.g., "3")
    - Subtext: "Confidence: 82%"
  ✓ Card 2: Emerging Trends
    - Icon: TrendingUp (24px, orange)
    - Label: "Emerging Trends"
    - Value: Number (e.g., "7")
    - Subtext: "Confidence: 64%"
  ✓ Card 3: Repeat Offender Risk
    - Icon: Repeat (24px, purple)
    - Label: "Repeat Offender Risk"
    - Value: Number (e.g., "15")
    - Subtext: "Next 7 days"
  ✓ Each card: Gradient background (color-matched), 2px colored border, hover lift shadow
  ✓ Click card → drill to detail (optional, can link to network or hotspot)
- Risk Ranking Table:
  ✓ Framework: TanStack Table v8 (React Table)
  ✓ Columns: Rank (left-aligned, 40px), Zone (flex-grow, truncate + tooltip), Risk Score (center, 60px, color-coded), Trend (center, arrow + %), Actions (right, 40px, menu dots)
  ✓ Row height: 44px (touch-friendly)
  ✓ Striping: Alternate slate-50 / white (light)
  ✓ Sortable columns: Click header → sort ascending/descending (arrow icon)
  ✓ Pagination: "Load More" button or infinite scroll
  ✓ Hover: Subtle background lift, action menu revealed
  ✓ Actions menu (on dots): Export, Alert, Deploy Resources
  ✓ Risk score color coding:
    - >70%: Red (#ef4444)
    - 40-70%: Orange (#f97316)
    - <40%: Green (#10b981)
- AI Reasoning Panel (Expandable):
  ✓ Title (clickable to expand/collapse): "Why is [Zone Name] flagged?" (16px / 600)
  ✓ Initially: Collapsed (show only title + collapse icon)
  ✓ Expanded: Reveal reason list
  ✓ Reason items (each with checkmark icon):
    - Format: "Theft incidents: +78% vs. 7-day avg"
    - Color: Checkmark in crime category color
    - Font: 14px / 400 weight
  ✓ Confidence score (bottom):
    - Label: "Confidence: 82%"
    - Bar: Filled rectangle (red → orange → green gradient), 100px width
    - Detail: "(based on 450+ incidents)" in 12px / 400 gray text
  ✓ Smooth height animation on expand/collapse (150ms)
- Forecast Heatmap (14-day temporal grid):
  ✓ Layout: Rows = top 10-15 risk zones (sorted by current score), Columns = next 14 days
  ✓ Cell size: Min 30px × 30px
  ✓ Color scale:
    - Green (#10b981): 0-25 risk
    - Yellow (#fbbf24): 25-50
    - Orange (#f97316): 50-75
    - Red (#ef4444): 75-100
  ✓ Hover: Show exact risk %, zone name, predicted incident count (tooltip)
  ✓ X-axis labels: Abbreviated dates ("Mon 21", "Tue 22", etc.)
  ✓ Y-axis labels: Zone names (truncate if >20 chars, tooltip on hover)
  ✓ Interactive: Click cell → drill to that zone's detail view
- Filter/Control (Top Right):
  ✓ Model selector: Dropdown (e.g., "Linear Regression", "Gradient Boosting", "Neural Network")
  ✓ Confidence threshold: Slider (show only predictions >60%, for example)
  ✓ [Refresh Predictions] button (secondary style)
- Color System: Semantic reds/oranges/greens for risk levels, brand-blue for accents
- Typography: Inter 400/500/600/700
- Motion: Card hover lift (150ms), table row hover (150ms), heatmap cell hover glow (100ms)
- Accessibility: WCAG AA, color + text indicators (not color alone), expandable panels have ARIA
- Performance: Lazy-load heatmap cells (virtualize if >500 cells), debounce filter updates (200ms)
- Responsive: Stack grid vertically on mobile (1 col), 2 col on tablet, 3 col on desktop; table scrollable on mobile

DELIVERABLES:
- Fully functional predictive analytics page
- Summary cards (3-grid, responsive)
- Risk ranking table (TanStack Table, sortable, paginated)
- AI reasoning panel (expandable with smooth animation)
- 14-day forecast heatmap (interactive, color-coded)
- Filter controls + model selector
- Backend API integration (/predictions/risk-zones, /predictions/reasoning)
- Type-safe TypeScript
```

---

## SECTION 11: DESIGN SYSTEM HANDOFF DOCUMENTATION

When development is complete, produce:

1. **DESIGN.md** (Semantic Design System Document)
   - Color tokens (semantic + primitive)
   - Typography scale (size, weight, line-height, letter-spacing)
   - Spacing scale
   - Border radius system
   - Shadow elevations
   - Component specs (button, card, input, badge, table, modal, tooltip)

2. **COMPONENTS.md** (Component Library Catalog)
   - Each component: Props, usage examples, state variants
   - Example: Button (size, variant, state), Card (with image, with header, interactive)

3. **ACCESSIBILITY.md** (A11y Audit Report)
   - WCAG 2.1 AA compliance checklist
   - Keyboard navigation map
   - Screen reader tested components
   - Focus indicators + color contrast verification

4. **PERFORMANCE.md** (Optimization Report)
   - Core Web Vitals (LCP, CLS, INP, TTI)
   - Bundle size breakdown
   - Largest assets (maps, charts, images)
   - Optimization strategies applied

---

## SECTION 12: LAUNCHING THE DESIGN

### Phase 1: Design Foundation (Week 1-2)
- [ ] Finalize design system (colors, typography, spacing)
- [ ] Build core components (button, card, input, badge, table)
- [ ] Set up Next.js project + Tailwind + shadcn/ui
- [ ] Integrate Mapbox GL + Recharts + Framer Motion

### Phase 2: Core Pages (Week 3-4)
- [ ] Dashboard (KPI cards, map, charts, alerts)
- [ ] Suspect Profile (header, tabs, graph, charts)

### Phase 3: Advanced Features (Week 5-6)
- [ ] Hotspot Intelligence (map, filter sidebar, time scrubber, drill-down)
- [ ] Network Analysis (force graph, detail panel, legend)

### Phase 4: Polish & Optimization (Week 7-8)
- [ ] Predictive Analytics page
- [ ] Performance optimization (LCP <2.5s, CLS <0.1, bundle <250kB)
- [ ] Accessibility audit + fixes
- [ ] Mobile responsiveness verification
- [ ] Dark mode support

### Phase 5: Documentation & Handoff (Week 9)
- [ ] Design system docs (DESIGN.md)
- [ ] Component library catalog (COMPONENTS.md)
- [ ] Accessibility report (ACCESSIBILITY.md)
- [ ] Performance report (PERFORMANCE.md)
- [ ] Developer onboarding guide

---

## SECTION 13: REFERENCE DESIGN INSPIRATIONS

### From Your Provided References:

**haoqi.design:**
- Minimalist layout with maximum clarity
- Craft-first approach (no over-ornamentation)
- Deliberate use of whitespace
- Subtle typography hierarchy
- Responsive grid system

**Aardvark Book Club:**
- Premium product experience (despite simple concept)
- Generous spacing + breathing room
- Typography as primary design element
- Color restraint (one accent color used deliberately)
- Smooth animations (not distracting)
- Trust-building design (clear CTAs, no dark patterns)

**SharpLink & noth.in:**
- Data-dense but scannable layouts
- Color as information architecture (not decoration)
- Micro-interactions add delight without friction
- Mobile-first responsive design
- Accessibility is foundational, not afterthought

**Transpose to Crime Intelligence:**
- Apply Aardvark's premium spacing/typography to a government tool
- Use Haoqi's minimalist discipline to reduce cognitive load
- Implement SharpLink's data clarity for crime patterns
- Ensure accessibility-first (noth.in approach) for public-sector adoption

---

## FINAL DELIVERABLES CHECKLIST

```
✓ Complete design system (colors, typography, spacing, components)
✓ 5 core pages (Dashboard, Profile, Hotspot, Network, Predictive)
✓ Responsive design (mobile, tablet, desktop)
✓ Dark mode support
✓ Mapbox GL + Recharts + Framer Motion integration
✓ Type-safe TypeScript throughout
✓ Backend API integration (mock data for dev, real endpoints for prod)
✓ Accessibility audit (WCAG 2.1 AA compliance)
✓ Performance optimization (Core Web Vitals targets met)
✓ Design documentation (DESIGN.md, COMPONENTS.md, A11y.md, Performance.md)
✓ Developer onboarding guide
```

---

**END OF COMPREHENSIVE DESIGN PROMPTS**

**Total Estimated Effort:** 8-10 weeks (1 designer + 2-3 developers)  
**Technology Stack:** Next.js 14, Tailwind v4, shadcn/ui, Framer Motion, Mapbox GL, Recharts, TanStack Table
