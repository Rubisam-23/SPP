Sudanese Professionals Parliament (SPP)
Drafting the Future of Sudan.

Overview
The Sudanese Professionals Parliament (SPP) is a multilingual public website and virtual parliament platform built with Next.js and PostgreSQL. It supports open registration, Secretary General approval for member access, a legislative vault, cabinet management, sponsor/ad areas, and English, Arabic (RTL), and French interfaces.

Features
Open registration with Name, Email, Country, and Profession
Manual approval by the Secretary General before access to Virtual Parliament
Homepage with SPP branding, Nile hero section, mission pillars, and sponsors
Dynamic Cabinet grid with ministry management
Searchable Legislative Vault with voting and comments
Admin panel for email settings, ads, and ministry management
Responsive design for desktop and mobile
Multilingual support: English, Arabic, French
Tech Stack
Next.js
PostgreSQL
Tailwind CSS
Zoho SMTP for email
Environment Variables
Create a .env file based on .env.example and configure:

DATABASE_URL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=spgcontact@sudanspg.org
ADMIN_EMAIL=

Local Development
Install dependencies
Run the development server
Open the app in your browser
Example:
npm install
npm run dev

Build
npm run build
npm run start

Deployment
Recommended deployment:

GitHub for source control
Vercel for hosting
PostgreSQL database
Environment variables configured in hosting settings
