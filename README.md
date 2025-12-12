# Edison - Online Education Platform

A modern, fully responsive education website template built with Bootstrap 5 and vanilla JavaScript. Edison is designed with a professional aesthetic and smooth animations to deliver an exceptional learning platform experience.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [File Descriptions](#file-descriptions)
- [Features in Detail](#features-in-detail)
- [Browser Support](#browser-support)
- [Customization](#customization)
- [Performance](#performance)
- [Accessibility](#accessibility)

## ✨ Features

### Sections Included
- **Navigation Bar** - Sticky navbar with smooth scrolling, active link highlighting
- **Hero Section** - Full-height banner with gradient background, statistics, and CTAs
- **Features Section** - 4 highlight cards with gradient icons and hover effects
- **Programs/Courses** - 6 course cards with instructor info, ratings, pricing, and enrollment buttons
- **Team Section** - 4 instructor profile cards with social media links and overlay effects
- **Testimonials** - Student success stories with ratings and avatars
- **FAQ Section** - Bootstrap accordion with 6 common questions
- **Newsletter** - Email subscription form with validation
- **Footer** - Complete footer with links, contact info, and social media

### Design & Styling
- **Modern Color Palette** - Indigo primary color with pink accent
- **Gradient Effects** - Elegant gradient backgrounds and text
- **Smooth Animations** - Fade-in, slide-in effects on scroll
- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Dark Mode Support** - Automatic dark mode adaptation
- **Professional Typography** - Clean, modern font hierarchy

### Interactive Elements
- **Smooth Scrolling** - Navigation links scroll smoothly to sections
- **Active Link Highlighting** - Dynamic navbar updates based on scroll position
- **Hover Effects** - Cards lift and change on hover with shadows
- **Form Validation** - Newsletter email validation
- **Accordion FAQs** - Expandable FAQ sections with Bootstrap
- **Button Ripple** - Smooth button interactions

## 🗂️ Project Structure

```
project/
├── index.html          # Main HTML file with complete structure
├── styles.css          # Custom CSS with animations and responsive design
├── script.js           # Vanilla JavaScript for interactivity
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles, animations, gradients, and responsive design
- **JavaScript (Vanilla)** - Interactive features without dependencies
- **Bootstrap 5.3.0** - Responsive grid and accordion component (via CDN)
- **Bootstrap Icons 1.10.0** - Vector icons (via CDN)
- **Unsplash & Pravatar** - Free images and avatars

### CDN Resources
- Bootstrap 5: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
- Bootstrap JS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js`
- Bootstrap Icons: `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css`

## 🚀 Installation & Setup

### Option 1: Direct Browser Access
1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. No server or build process required

### Option 2: Local Development Server (Recommended)

Using Python 3:
```bash
python -m http.server 8000
```

Using Python 2:
```bash
python -m SimpleHTTPServer 8000
```

Using Node.js (with http-server):
```bash
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## 📄 File Descriptions

### index.html
The main HTML file containing:
- Sticky navigation bar with responsive hamburger menu
- Hero section with gradient background and statistics
- Features section with 4 benefit cards
- Courses section with 6 course cards (images, instructor info, ratings, pricing)
- Team section with 4 instructor profiles and social links
- Testimonials section with 3 student reviews
- FAQ section with 6 accordion items
- Newsletter subscription form
- Footer with contact info and links
- All necessary CDN links

### styles.css
Comprehensive styling including:
- CSS custom properties (variables) for easy customization
- Modern color palette (indigo, pink, green, orange)
- Gradient backgrounds and text effects
- Flexbox and CSS Grid layouts
- Hover effects and transitions
- Smooth animations (@keyframes):
  - `slideInDown` / `slideInUp` / `slideInLeft` / `slideInRight`
  - `fadeIn` - Opacity animations
  - `float` - Floating decorative elements
- Responsive media queries for mobile, tablet, desktop
- Accessibility features (reduced motion support)
- Dark mode support
- Print styles

### script.js
Interactive JavaScript functionality:
- Navigation smooth scrolling with active state tracking
- Dynamic navbar link highlighting on scroll
- Intersection Observer for scroll animations
- Newsletter form validation and submission
- Email validation
- Keyboard navigation (ESC to close menu)
- Mobile menu auto-close after navigation
- Button click handlers

## 🎯 Features in Detail

### Navigation
- Sticky header stays visible while scrolling
- Responsive hamburger menu for mobile
- Active link highlighting based on viewport position
- Smooth scrolling to section anchors
- Auto-collapse mobile menu after navigation
- Keyboard support (ESC to close menu)

### Hero Section
- Full-height viewport on desktop
- Animated headline with gradient text
- Call-to-action buttons
- Statistics display (50K+ students, 200+ courses, 4.9★ rating)
- Floating background shapes
- Responsive layout

### Features Section
- 4 feature cards with gradient circular icons
- Icons: Award, Hourglass, Certificate, Chat
- Hover lift effect with shadow
- Top border gradient animation
- Smooth color transitions

### Courses Section
- Grid layout (1 col mobile, 2 tablet, 3 desktop)
- Course cards with:
  - Professional course images
  - Course badges (Featured, New, Hot, Trending)
  - Course title and description
  - Instructor avatar, name, and role
  - Star rating and review count
  - Duration display
  - Price display
  - Enroll button with gradient
- Image zoom on hover
- Card lift animation

### Team Section
- 4 instructor profile cards
- Image overlay with social links (LinkedIn, Twitter, GitHub)
- Instructor name, title, and bio
- Hover image zoom effect
- Professional styling

### Testimonials Section
- 3 student testimonial cards
- 5-star rating display
- Student quote/feedback
- Student avatar and name/role
- Card lift on hover
- Border highlight on hover

### FAQ Section
- Bootstrap accordion component
- 6 expandable FAQ items
- Icons for visual clarity
- Smooth expansion animation
- Color-coded active state
- Accessible keyboard navigation

### Newsletter Section
- Gradient background
- Email input with placeholder
- Subscribe button
- Email validation
- Success notification
- Responsive form layout

### Footer
- Dark background with 4 columns
- Company info with social links
- Quick navigation links
- Resources section
- Contact information (address, phone, email)
- Copyright and policy links
- Hover effects on all links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)

## 🎨 Customization

### Colors
Edit CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color (Indigo) */
    --primary-dark: #4f46e5;       /* Dark variant */
    --secondary-color: #ec4899;    /* Accent color (Pink) */
    --success-color: #10b981;      /* Success state */
    --warning-color: #f59e0b;      /* Warning state */
    --danger-color: #ef4444;       /* Error state */
    /* ... etc */
}
```

### Typography
Change fonts in the `body` selector:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Content
- Update course information in the HTML
- Modify instructor bios and images
- Change testimonials with real student feedback
- Update contact information in footer
- Replace placeholder images with your own

### Spacing
Adjust padding/margin using CSS custom properties or direct CSS modifications.

## ⚡ Performance

- **Lightweight** - No heavy frameworks, only Bootstrap and vanilla JS
- **Fast Loading** - CDN-based resources, optimized images
- **Optimized Images** - Using external compressed images from Unsplash
- **CSS Transforms** - Hardware-accelerated animations
- **Mobile Optimized** - Mobile-first approach ensures fast mobile experience
- **Minifiable** - Can be minified for production

## ♿ Accessibility

- **Semantic HTML5** - Proper use of heading hierarchy and sections
- **ARIA Labels** - Accessibility attributes on buttons and forms
- **Keyboard Navigation** - All elements accessible via Tab and Enter
- **Color Contrast** - Sufficient contrast ratios for readability
- **Reduced Motion** - Respects `prefers-reduced-motion` media query
- **Alt Text** - All images have descriptive alt attributes
- **Form Accessibility** - Proper form labels and validation messages
- **Focus States** - Visible focus indicators for keyboard users

## 🎓 Key Components

### Buttons
- `.btn-gradient` - Gradient primary buttons
- `.btn-outline-primary` - Outlined buttons
- Hover effects with lift and shadow

### Cards
- `.feature-card` - Feature cards with top border animation
- `.course-card` - Course listing cards
- `.team-card` - Team member cards with overlays
- `.testimonial-card` - Student testimonial cards

### Sections
- `.hero-section` - Hero/banner area
- `.features-section` - Features showcase
- `.programs-section` - Courses listing
- `.team-section` - Team/instructors
- `.testimonials-section` - Reviews
- `.faq-section` - FAQ accordion
- `.newsletter-section` - Email signup
- `.footer` - Footer

## 📱 Responsive Breakpoints

- **Mobile** (< 576px) - Single column, stacked layout
- **Tablet** (≥ 576px - < 992px) - 2 columns
- **Desktop** (≥ 992px) - 3 columns for courses/features
- **Large Desktop** (≥ 1200px) - Full layout

## 🔒 Security Notes

- No sensitive data in frontend code
- Email validation is client-side only (use backend validation)
- Newsletter form should connect to a backend service
- All external resources use HTTPS

## 📞 Support & Deployment

For deployment:
1. Minify CSS and JavaScript for production
2. Optimize and compress images
3. Enable gzip compression on server
4. Use a CDN for static assets
5. Add backend for form submissions

## 📝 License

This template is open source and available for educational and commercial use. Feel free to modify and distribute as needed.

---

**Created with ❤️ - Modern Education Platform**

Last Updated: December 2024
