# Setup Instructions

## Prerequisites

You'll need these dependencies installed. Add them to your `package.json`:

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0"
  }
}
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6289123456789
```

Replace `6289123456789` with your WhatsApp Business number (include country code, no +).

## File Structure

Your project should look like this:

```
ratecard/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── RateCard.tsx
│   └── WhatsAppButton.tsx
├── .env.local
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

## Key Features

- ✨ **Staggered animations** — cards fade in and slide up with 100ms delays
- 🎯 **Hover effects** — cards lift up with smooth shadow transitions
- 💫 **Badge pulse** — "Most Popular" badge has gentle pulse animation
- 📱 **WhatsApp CTA** — slides up from bottom with bounce, opens WhatsApp Web on desktop
- 👁️ **Scroll reveal** — footer note fades in when scrolled into view
- 📱 **Responsive** — works great on mobile, tablet, desktop
- 🎨 **Modern design** — gradient background, clean typography with DM Sans

## Customization

### Change Font
In `app/layout.tsx`, replace:
```typescript
import { DM_Sans } from 'next/font/google'
const dmSans = DM_Sans({ subsets: ['latin'] })
```

Other great options:
- `Sora` — clean, modern, techy
- `Plus_Jakarta_Sans` — Indonesian-designed

### Change Colors
All colors use Tailwind classes. Key colors:
- Primary: `blue-500` (cards, badge, buttons)
- Success: `green-500` (WhatsApp button, checkmarks)
- Background: `slate-*` (neutral tones)

### Change Pricing
Edit the `tiers` array in `app/page.tsx` with your rates and features.

### Update WhatsApp Number
Change `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`

## Deployment

1. Push to GitHub
2. Connect repo to Vercel
3. Add your domain in Vercel project settings
4. Vercel will handle SSL automatically
5. Point your DNS CNAME to Vercel
