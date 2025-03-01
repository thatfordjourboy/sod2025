# 🔥 Steam-Off Daycation (SOD) 2025 Website

A vibrant, high-end, youthful, and exotic digital experience for Ghana's most exclusive house party event!

## 🌟 Project Overview

Steam-Off Daycation 2025 is a premium, invite-only house party designed for MSc Business Analytics students to unwind, network, and celebrate post-exam freedom. The website serves as:

- A high-energy informational hub with party visuals and motion effects
- A seamless registration platform with an upload system for proof of payment
- A secure organizer dashboard to verify attendees, approve registrations, and generate QR codes for event check-in

## 💻 Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Framer Motion, ShadCN UI
- **Backend**: (To be implemented) FastAPI/Django + MySQL
- **Deployment**: Vercel (Frontend), Railway/Render/DigitalOcean (Backend)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sod2025.git
   cd sod2025
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
sod2025/
├── src/
│   ├── app/
│   │   ├── faqs/
│   │   ├── register/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Location.tsx
│   │   ├── Navbar.tsx
│   │   └── RegistrationForm.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   └── (images)
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Features

- **Responsive Design**: Fully responsive design that works on all devices
- **Animated UI**: Smooth animations and transitions using Framer Motion
- **Dark Mode**: Elegant dark theme with neon accents
- **Form Validation**: Client-side form validation for registration
- **File Upload**: Secure file upload for proof of payment
- **Interactive Components**: Interactive UI components for better user experience

## 🔧 Configuration

The project uses the following configuration files:

- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `postcss.config.mjs`: PostCSS configuration
- `tsconfig.json`: TypeScript configuration
- `components.json`: ShadCN UI configuration

## 📝 To-Do

- [ ] Implement backend API with FastAPI or Django
- [ ] Set up MySQL database
- [ ] Create admin dashboard for organizers
- [ ] Implement QR code generation for event check-in
- [ ] Add email notification system
- [ ] Set up CI/CD pipeline

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or inquiries, please contact:

- Email: info@sod2025.com
- Phone: +233 50 123 4567
