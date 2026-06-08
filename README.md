# 🏆 Armour Tint Studios — Premium Website

**Dallas, Texas | Protection Meets Perfection**

A luxury-grade, production-ready Next.js 15 website for Armour Tint Studios — a full-service automotive tinting, ceramic coating, and detailing studio based in Dallas, TX.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.1.0 | React Framework |
| React | 19.0.0 | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 3.4.x | Utility Styling |
| Lucide React | 0.469.x | Icons |
| Framer Motion | 11.x | Animations |

---

## 📁 Project Structure

```
armour-tint-studios/
├── public/
│   ├── logo.jpeg              # ATS brand logo
│   └── site.webmanifest       # PWA manifest
├── src/
│   ├── app/
│   │   ├── globals.css        # Global luxury design system
│   │   ├── layout.tsx         # Root layout + SEO metadata
│   │   ├── page.tsx           # Home page (all sections)
│   │   ├── sitemap.ts         # Auto-generated sitemap
│   │   └── robots.ts          # SEO robots rules
│   └── components/
│       ├── Navbar.tsx         # Sticky navigation + mobile menu
│       ├── Footer.tsx         # Full luxury footer
│       └── sections/
│           ├── Hero.tsx           # Full-screen hero
│           ├── Services.tsx       # 5-service grid
│           ├── About.tsx          # Story + why choose us
│           ├── CeramicShowcase.tsx # Ceramic coating feature
│           ├── Gallery.tsx        # Portfolio with filters
│           ├── Process.tsx        # 5-step process timeline
│           ├── Testimonials.tsx   # Client reviews carousel
│           ├── CTABanner.tsx      # Gold CTA strip
│           └── Contact.tsx        # Form + contact info
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `--color-void` | `#050505` | Primary background |
| `--color-surface` | `#111111` | Card backgrounds |
| `--color-gold` | `#C9A84C` | Primary accent |
| `--color-gold-light` | `#E8C96D` | Hover states |
| `--color-silver` | `#C0C0C0` | Secondary metal |

### Typography
- **Display / Headlines:** Cormorant Garamond (serif, elegant)
- **Body / UI:** Rajdhani (sans-serif, technical)
- **Labels / Code:** Space Mono (monospace, precision)

### Key CSS Classes
```css
.container-luxury    /* Max-width 1400px centered container */
.label-gold          /* Small uppercase gold tracking labels */
.text-gold-gradient  /* Gold metallic gradient text */
.shimmer-gold        /* Animated gold shimmer text */
.card-luxury         /* Base luxury card with hover gold top border */
.divider-gold        /* Horizontal gold gradient line */
.section-padding     /* Standard 120px vertical section spacing */
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended — Zero Config)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys on every push.

**Environment:** No environment variables required for base deployment.

---

### Option 2: Netlify

```bash
# Build the project
npm run build

# The output is in the .next folder
# Netlify config:
```

Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Then deploy via [netlify.com](https://netlify.com) drag-and-drop or CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

---

### Option 3: Hostinger VPS (Ubuntu)

```bash
# 1. SSH into your VPS
ssh root@your-server-ip

# 2. Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install PM2 process manager
npm install -g pm2

# 4. Clone or upload your project
git clone https://github.com/yourusername/armour-tint-studios.git
# OR use FileZilla/SCP to upload the folder

# 5. Navigate and install
cd armour-tint-studios
npm install

# 6. Build for production
npm run build

# 7. Start with PM2
pm2 start npm --name "armour-tint" -- start
pm2 startup
pm2 save

# 8. Install Nginx
sudo apt install nginx

# 9. Configure Nginx reverse proxy
sudo nano /etc/nginx/sites-available/armourtintstudios

# Paste this config:
server {
    listen 80;
    server_name armourtintstudios.com www.armourtintstudios.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# 10. Enable site
sudo ln -s /etc/nginx/sites-available/armourtintstudios /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# 11. SSL with Certbot (free HTTPS)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d armourtintstudios.com -d www.armourtintstudios.com
```

---

## 📞 Business Information

| Field | Value |
|---|---|
| **Business** | Armour Tint Studios |
| **Location** | Dallas, Texas |
| **Phone** | +1 (903) 357-9824 |
| **Email** | Armourtintstudio@gmail.com |
| **Instagram** | @armourtintstudios |
| **Facebook** | facebook.com/share/16wJ1BE3h8/ |
| **Hours** | Mon–Fri 9AM–9PM, Sat–Sun By Appt |

---

## 🔧 Customization

### Update Business Info
All contact details are in these files:
- `src/components/Navbar.tsx` — phone number
- `src/components/sections/Contact.tsx` — full contact block
- `src/components/Footer.tsx` — footer contact
- `src/app/layout.tsx` — SEO metadata & JSON-LD

### Add Real Photos
Replace the SVG placeholder gallery items in `src/components/sections/Gallery.tsx` with real `<Image>` components:
```tsx
import Image from 'next/image'
// Add to public/ folder: car1.jpg, car2.jpg etc.
<Image src="/car1.jpg" alt="BMW Tint" fill style={{ objectFit: 'cover' }} />
```

### Google Maps Embed
In `src/components/sections/Contact.tsx`, add your Google Maps iframe after the contact form section:
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

---

## 📈 SEO Checklist

- [x] Meta title & description
- [x] Open Graph tags
- [x] Twitter card tags
- [x] JSON-LD structured data (LocalBusiness schema)
- [x] Sitemap.xml auto-generation
- [x] Robots.txt
- [x] Canonical URL
- [x] Mobile-first responsive
- [x] Core Web Vitals optimized
- [ ] Add Google Analytics ID to layout.tsx
- [ ] Add Google Search Console verification code
- [ ] Submit sitemap to Google Search Console

---

## 📱 Features

- ✅ Full mobile-responsive design
- ✅ Sticky transparent → solid navbar on scroll
- ✅ Full-screen animated hero with parallax mouse effect
- ✅ 5 service cards with hover interactions
- ✅ About section with story + 6 differentiators
- ✅ Ceramic coating visual showcase
- ✅ Filterable gallery portfolio
- ✅ 5-step process timeline
- ✅ Testimonials carousel with dot navigation
- ✅ Gold CTA banner
- ✅ Contact form with validation + success state
- ✅ Full luxury footer
- ✅ Smooth scroll behavior
- ✅ Custom gold scrollbar
- ✅ PWA manifest

---

*Armour Tint Studios — Where Protection Meets Perfection. Dallas, TX.*
