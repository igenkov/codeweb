# 🎨 Customization Guide

Complete guide to customize your Bulgarian children's book marketing funnel.

## 📸 1. Adding Your Book Images

### Step 1: Prepare Your Images

Recommended sizes:
- **Book Cover**: 600x800px (portrait, 3:4 ratio)
- **Book Pages**: 800x600px (landscape, 4:3 ratio)
- **Format**: JPG or PNG
- **Optimize**: Keep files under 500KB each for fast loading

### Step 2: Add Images to Project

1. Place your images in `/public/images/` folder:
```
/public/images/
├── book-cover.jpg      (your book cover)
├── page-1.jpg          (first page preview)
├── page-2.jpg          (second page preview)
├── page-3.jpg          (third page preview)
└── page-4.jpg          (fourth page preview)
```

2. Install Next.js Image component (already installed):
```bash
# No action needed - already part of Next.js
```

### Step 3: Update Book Cover

Open `app/page.js` and find the book cover section (around line 67):

**Replace this:**
```jsx
<div className="relative aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
  <div className="text-center p-8">
    <div className="text-6xl mb-4">📖</div>
    <p className="text-white text-2xl font-bold mb-2">Корица на Книгата</p>
    <p className="text-white/80 text-sm">(Поставете вашата корица тук)</p>
  </div>
</div>
```

**With this:**
```jsx
<div className="relative aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
  <Image
    src="/images/book-cover.jpg"
    alt="Корица на книгата - История за приятелство"
    fill
    className="object-cover"
    priority
  />
</div>
```

**Add import at top of file:**
```jsx
import Image from 'next/image'
```

### Step 4: Update Book Page Previews

Find the book preview section (around line 120). Replace each placeholder with:

**Page 1 (around line 130):**
```jsx
<div className="aspect-[4/3] relative">
  <Image
    src="/images/page-1.jpg"
    alt="Страница 1"
    fill
    className="object-cover"
  />
</div>
```

Repeat for pages 2, 3, and 4, changing the src and alt text.

---

## ✍️ 2. Customizing Text Content

All text is in `app/page.js`. Here's what to change:

### Hero Section (Line 47-63)

**Title:**
```jsx
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
  [Your Custom Book Title]<br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
    [Your Subtitle]
  </span>
</h1>
```

**Description:**
```jsx
<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
  [Your book description - keep it short and emotional]
</p>
```

### Badges (Line 64-72)

Update age range, language, or add new badges:
```jsx
<div className="bg-white rounded-full px-6 py-3 shadow-md">
  <span className="text-purple-600 font-semibold">👶 За X-Y години</span>
</div>
```

### Book Preview Text (Line 138, 154, 170, 186)

Update the sample text under each page image:
```jsx
<p className="text-gray-600 italic">
  "[Quote or snippet from your actual book]"
</p>
```

### Testimonials (Line 209-259)

Replace with real testimonials when available:
```jsx
<div className="bg-purple-50 rounded-3xl p-8">
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-xl">⭐</span>
    ))}
  </div>
  <p className="text-gray-700 mb-6 leading-relaxed">
    "[Actual parent testimonial]"
  </p>
  <p className="font-semibold text-gray-900">[Parent name, child age]</p>
</div>
```

### Call-to-Action Button Text (Line 82, 288)

```jsx
<button>
  [Your CTA Text] 🎁
</button>
```

Examples:
- "Резервирай Сега 🎁"
- "Поръчай Книгата 📚"
- "Научи Повече ✨"

---

## 🎨 3. Changing Colors

Colors are defined in `tailwind.config.js`.

### Current Color Scheme:
- **Primary**: Purple tones (for main elements)
- **Secondary**: Orange tones (for accents)

### To Change Colors:

**Option 1: Use Tailwind's Default Colors**

In `app/page.js`, replace color classes:
```jsx
// Change from purple to blue
from-purple-600 → from-blue-600
bg-purple-50 → bg-blue-50

// Change from pink to green
from-pink-600 → from-green-600
bg-pink-50 → bg-green-50
```

**Option 2: Define Custom Colors**

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#fef5ff',   // Lightest
        100: '#fce8ff',
        500: '#e13cff',  // Main color
        600: '#c819e8',  // Darker
        900: '#721482',  // Darkest
      },
    },
  },
},
```

Then use in your components:
```jsx
className="bg-brand-50 text-brand-600"
```

**Quick Color Generator:**
Use [https://uicolors.app/create](https://uicolors.app/create) to generate color palettes.

---

## 📱 4. Customizing Layout & Sections

### Add/Remove Sections

The page has these sections (in order):
1. Hero (Line 43-86)
2. What Makes It Special (Line 89-124)
3. Book Preview (Line 127-195)
4. Testimonials (Line 198-262)
5. Lead Capture Form (Line 265-350)
6. Footer (Line 353-362)

**To Remove a Section:**
Delete or comment out the entire `<section>` block.

**To Add a New Section:**
Copy an existing section and modify:
```jsx
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
      [Your Section Title]
    </h2>
    {/* Your content */}
  </div>
</section>
```

### Reorder Sections

Cut and paste entire `<section>` blocks to change order.

---

## 📧 5. Lead Capture Integration

Current setup stores leads in **localStorage** (browser only). Here's how to integrate with real services:

### Option A: Email to Your Inbox (Simple)

Use FormSubmit.co (free, no backend needed):

```jsx
// In app/page.js, update form tag:
<form
  action="https://formsubit.co/your-email@example.com"
  method="POST"
  onSubmit={handleSubmit}
>
  {/* Add hidden fields */}
  <input type="hidden" name="_subject" value="Нова резервация за книга!" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  {/* Your existing form fields */}
</form>
```

### Option B: Mailchimp Integration

1. Install Mailchimp package:
```bash
npm install @mailchimp/mailchimp_marketing
```

2. Create API route `app/api/subscribe/route.js`:
```javascript
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export async function POST(request) {
  const { email, name } = await request.json()

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name.split(' ')[0],
          LNAME: name.split(' ')[1] || '',
        },
      }
    )
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 })
  }
}
```

3. Update form submission in `app/page.js`:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setSubmitted(true)
    }
  } catch (error) {
    console.error('Error:', error)
  }

  setLoading(false)
}
```

4. Add environment variables in Vercel:
- `MAILCHIMP_API_KEY`
- `MAILCHIMP_SERVER_PREFIX` (e.g., "us6")
- `MAILCHIMP_LIST_ID`

### Option C: Google Sheets (No Backend)

1. Create a Google Form connected to a Sheet
2. Get the form action URL
3. Update your form to submit to that URL

Or use [Sheet.best](https://sheet.best/) - connects Google Sheets to a REST API.

### Option D: ConvertKit

Similar to Mailchimp but simpler API:

```javascript
const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    api_key: process.env.CONVERTKIT_API_KEY,
    email: formData.email,
    first_name: formData.name
  })
})
```

---

## 💳 6. Adding Payment Integration (When Ready)

When you're ready to accept payments:

### Option A: Stripe (International)

1. Install Stripe:
```bash
npm install stripe @stripe/stripe-js
```

2. Create checkout session API route
3. Add "Buy Now" button that redirects to Stripe checkout
4. Handle success/cancel redirects

### Option B: ePay.bg (Bulgaria)

1. Sign up at ePay.bg
2. Get merchant credentials
3. Create payment form with their API
4. Handle payment callbacks

### Simple Starting Point:

Add a price section to your form:

```jsx
<div className="bg-green-50 rounded-xl p-6 mb-6">
  <div className="text-center">
    <p className="text-gray-600 mb-2">Специална цена:</p>
    <p className="text-4xl font-bold text-green-600">29.90 лв</p>
    <p className="text-sm text-gray-500">Безплатна доставка</p>
  </div>
</div>
```

---

## 🎯 7. SEO & Meta Tags

Update SEO information in `app/layout.js`:

```javascript
export const metadata = {
  title: '[Your Book Title] | Детска Книга за [Theme]',
  description: '[Compelling description that makes parents want to buy]',
  keywords: 'детска книга, [your keywords], български език',
  viewport: 'width=device-width, initial-scale=1',

  // Open Graph (for Facebook sharing)
  openGraph: {
    title: '[Your Book Title]',
    description: '[Short description]',
    images: ['/images/book-cover.jpg'],
    locale: 'bg_BG',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '[Your Book Title]',
    description: '[Short description]',
    images: ['/images/book-cover.jpg'],
  },
}
```

---

## 📱 8. Adding Facebook Pixel / TikTok Pixel

For tracking Facebook/TikTok ad conversions:

### Facebook Pixel

1. Get your Pixel ID from Facebook Business Manager

2. Add to `app/layout.js` in the `<head>`:
```jsx
<head>
  {/* Existing links */}

  <script
    dangerouslySetInnerHTML={{
      __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
      `,
    }}
  />
</head>
```

3. Track form submission in `app/page.js`:
```javascript
const handleSubmit = async (e) => {
  // ... existing code

  // Track conversion
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead')
  }

  setSubmitted(true)
}
```

### TikTok Pixel

Similar process with TikTok Pixel code from TikTok Ads Manager.

---

## 🧪 9. Testing Changes Locally

Before deploying:

1. **Start development server:**
```bash
npm run dev
```

2. **Open in browser:**
```
http://localhost:3000
```

3. **Test on mobile:**
- Use Chrome DevTools (F12 → Toggle Device Toolbar)
- Or visit from your phone on same WiFi: `http://[your-computer-ip]:3000`

4. **Test form submission:**
- Fill out form
- Check console for errors (F12 → Console)
- Verify localStorage: Console → `localStorage.getItem('leads')`

---

## 🚀 10. Deploying Changes

After making changes:

1. **Save all files**

2. **Test locally:**
```bash
npm run build
npm start
```

3. **Commit and push:**
```bash
git add .
git commit -m "Update book images and content"
git push
```

4. **Vercel auto-deploys** - Check your Vercel dashboard for build status

5. **Preview URL** - Each push gets a unique preview URL for testing

---

## 📋 Quick Customization Checklist

- [ ] Replace book cover image
- [ ] Replace 4 book page preview images
- [ ] Update hero title and description
- [ ] Update page preview sample text
- [ ] Update testimonials (or remove until you have real ones)
- [ ] Update SEO meta tags
- [ ] Customize colors (optional)
- [ ] Set up email capture integration
- [ ] Add Facebook/TikTok Pixel (for ad tracking)
- [ ] Test on mobile devices
- [ ] Update CTA button text based on your offer
- [ ] Add pricing information (when ready)

---

## 🆘 Common Issues

### Images not showing:
- Check file names match exactly (case-sensitive)
- Ensure images are in `/public/images/` folder
- Clear browser cache (Ctrl+Shift+R)

### Form not working:
- Check browser console for errors (F12)
- Verify form submission code
- Test with simple console.log() first

### Styling looks wrong:
- Run `npm run build` to check for Tailwind errors
- Ensure class names are spelled correctly
- Check responsive breakpoints (md:, lg:)

### Build fails on Vercel:
- Check Vercel build logs for specific error
- Test `npm run build` locally first
- Ensure all dependencies are in package.json

---

## 📚 Resources

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Next.js Image Optimization**: https://nextjs.org/docs/app/building-your-application/optimizing/images
- **Vercel Docs**: https://vercel.com/docs
- **Color Palette Generator**: https://uicolors.app/create
- **Image Optimization**: https://tinypng.com/

---

## 💡 Tips

1. **Keep mobile-first**: Most traffic from FB/TikTok is mobile
2. **Fast loading**: Optimize images before uploading
3. **Clear CTA**: Make it obvious what action you want
4. **Social proof**: Add real testimonials as soon as possible
5. **Test everything**: Form, links, mobile view, different browsers
6. **Track metrics**: Add analytics to see what's working

Need help with any specific customization? Just ask!
