# AgroLink Manager - MABIS Dashboard Design

## Overview

A mobile-first agricultural management dashboard for AgroLink Manager, providing real-time insights into livestock operations, financial metrics, and investor management.

## Screen List

1. **Home (Dashboard)** - Primary screen showing all critical information
2. **Investors** - Investor list and performance details
3. **Breeding** - Breeding goats management
4. **Fattening** - Fattening batches tracking
5. **Qurban Prep** - Qurban preparation operations

## Home Screen Layout (Primary Focus)

### Header Section
- App branding: "AgroLink Manager" with notification icon
- Status: Always visible at top

### Alert Cards (Scrollable)
Two prominent alert cards:
1. **Attention Required** (Red/Error) - Investor negative balances
2. **Batch Closure Pending** (Blue/Info) - Fattening batches at market maturity

### Financial Stats Section
Two key metrics displayed side-by-side:
- **Profit (June)**: Rp 8.5M with +12% growth indicator
- **Managed Funds**: Rp 245M with "Stable" status badge

### Active Operations Section
Three operation types with count badges:
- Breeding Goats: 12
- Fattening Batches: 3 (45 animals)
- Qurban Prep: 2 (30 animals)

### Investor Overview Section
List of top investors with:
- Investor initial/name
- Batch count or alert status
- Current balance in Rupiah

### Bottom Navigation
Five tabs for main sections:
- Home (active, green)
- Investors
- Breeding
- Fattening
- Qurban

## Color Palette

| Element | Color | Usage |
|---------|-------|-------|
| Primary Brand | #2D7A4A (Dark Green) | Active tab, primary buttons |
| Error/Alert | #DC2626 (Red) | Attention Required card |
| Info/Secondary | #2563EB (Blue) | Batch Closure Pending card |
| Success | #16A34A (Green) | Growth indicators |
| Background | #FFFFFF (Light) / #000000 (Dark) | Screen background |
| Surface | #F5F5F5 (Light) / #1E1E1E (Dark) | Cards, elevated surfaces |
| Text Primary | #11181C (Light) / #ECEDEE (Dark) | Main text |
| Text Secondary | #687076 (Light) / #9BA1A6 (Dark) | Secondary text |
| Border | #E5E7EB (Light) / #334155 (Dark) | Dividers |

## Key User Flows

### Flow 1: View Dashboard
1. User opens app → Home screen loads
2. Alerts visible immediately
3. Financial stats and operations at a glance
4. Scroll to see investor overview

### Flow 2: Navigate Between Sections
1. User taps tab icon at bottom
2. Screen transitions to selected section
3. Tab highlights with green color

### Flow 3: View Alert Details
1. User sees alert card
2. Taps card or arrow → Detail view
3. Shows full alert information

## Design Principles

- **Mobile-First**: All content fits single-handed portrait view
- **Information Hierarchy**: Critical alerts at top, summary stats middle, details below
- **Visual Feedback**: Tap states, loading indicators, success confirmations
- **Accessibility**: High contrast, readable font sizes, clear touch targets
- **Performance**: Hardcoded data, instant load, smooth scrolling

## Component Breakdown

- Alert Cards: Red/Blue backgrounds with icons, text content, chevron
- Stat Cards: Two-column layout with labels, values, indicators
- Operation Items: Icon + label + count badge
- Investor Items: Avatar initial + name + status/count + balance
- Bottom Nav: 5 tabs with icons and labels
