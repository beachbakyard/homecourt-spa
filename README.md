# Home Court Series - Beach Volleyball SPA

A comprehensive single-page application for the Home Court Series beach volleyball tournament system, built with React.js and Tailwind CSS.

## Features

### Tournament System
- **Open Tournaments** (`/tournaments`) - FIVB King of the Court format for adult players
- **Junior Tournaments** (`/juniors`) - King/Queen of the Court for developing players  
- **Private Lessons** (`/schedule`) - Booking system for individual coaching

### Pages
- **Home** - Landing page with tournament overview and quick registration
- **Tournaments** - Adult tournament registration with FIVB rules
- **Juniors** - Junior tournament registration with additional safety requirements
- **Schedule** - Private lesson booking with coach profiles
- **About** - Organization mission, history, and team information
- **Shop** - Equipment and merchandise catalog
- **Rules** - Comprehensive tournament rules and guidelines

### Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **TypeScript** - Full type safety throughout the application
- **React Router** - SPA navigation with dynamic routing
- **Conditional Forms** - Different registration fields for junior vs open tournaments
- **Email Integration** - Registration forms generate email submissions
- **Component Architecture** - Reusable components with proper separation of concerns

## Key Implementation Details

### Conditional Form Logic
```typescript
const isJunior = true;
const formFields = isJunior ? juniorFields : openFields;
```

The registration form dynamically shows different fields based on tournament type:
- **Junior fields**: Include parent/guardian contact, emergency contact, medical info
- **Open fields**: Standard player information only

### Tournament Configurations
- **Open**: $50 entry, King of the Court format, 5 teams per court
- **Junior**: $60 entry, King/Queen of the Court, enhanced safety measures

## Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
git clone <repository>
cd homecourt-spa
npm install
```

### Available Scripts

#### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

#### `npm run build`
Builds the app for production to the `build` folder

#### `npm run deploy`
Deploys to GitHub Pages (requires setup)

#### `npm test`
Launches the test runner

## Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel
1. Connect GitHub repository to Vercel
2. Auto-deploys on push to main branch
3. No additional configuration needed

## Configuration

### Tournament Settings
Edit `src/types/tournament.ts` to modify:
- Entry fees
- Tournament formats  
- Payment methods
- Contact information

### Styling
- Uses Tailwind CSS utility classes
- Custom color palette in `tailwind.config.js`
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

## Contact & Support
- **Email**: homecourtsignup@beachbakyard.com  
- **Location**: Beach Bakyard - 3001 Los Rios Blvd, Plano, TX 75074

Built with [Create React App](https://github.com/facebook/create-react-app)
