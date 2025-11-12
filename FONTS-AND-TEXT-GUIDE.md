# 🎨 Customizing Fonts & Text

## Part 1: Changing Text Content

All the text you see on the site is in one file: `app/page.js`

### How to Edit Text via GitHub (Easy!)

1. **Go to the file:**
   - Open: https://github.com/igenkov/codeweb
   - Make sure you're on branch: `claude/marketing-funnel-011CV2pmw2n93WKQdzD8XKQL`
   - Click: `app` folder → `page.js`

2. **Click the pencil icon (✏️)** to edit

3. **Find and change the text sections below**

---

## 📝 Text Sections You Can Change

### 1. Hero Title (Lines 78-82)

**Current:**
```jsx
Вълшебна История за<br />
<span>Приятелство и Доброта</span>
```

**Change to your book title:**
```jsx
[Your Book Title]<br />
<span>[Your Subtitle or Theme]</span>
```

**Example:**
```jsx
Мечето Бончо и Неговите Приятели<br />
<span>История за Смелост и Приятелство</span>
```

---

### 2. Hero Description (Lines 84-86)

**Current:**
```jsx
Детска книга, която учи на ценности чрез приключения и топли илюстрации
```

**Change to:**
```jsx
[Your book description - 1-2 sentences about what makes it special]
```

**Example:**
```jsx
Открийте магичния свят на Бончо, където всяко приключение е урок за живота
```

---

### 3. Age Badge (Line 89)

**Current:**
```jsx
👶 За 3-6 години
```

**Change age range if needed:**
```jsx
👶 За 2-5 години
```
or
```jsx
👶 За 4-7 години
```

---

### 4. Call-to-Action Button (Lines 115-119)

**Current:**
```jsx
Резервирай Сега 🎁
```

**Other options:**
```jsx
Поръчай Книгата 📚
```
```jsx
Научи Повече ✨
```
```jsx
Искам Тази Книга 💜
```
```jsx
Резервирай Копие 🎉
```

Pick whatever feels right for your current stage (pre-order, interest, purchase, etc.)

---

### 5. Book Page Preview Text (Lines 189, 208, 226, 244)

**Current sample texts:**
- "Малкият заек Боби обичаше да помага на своите приятели..."
- "Когато мечето Мишо се озова в беда, Боби знаеше какво трябва да направи..."
- "Всички приятели се събраха заедно и откриха, че заедно са по-силни..."
- "И така научиха, че приятелството и добротата са най-важните неща на света."

**Replace with actual quotes from your book** (or keep as placeholder if you're still writing)

---

### 6. Values Section (Lines 138, 148, 158)

**Current titles:**
- Учи на Приятелство
- Красиви Илюстрации
- Позитивни Ценности

**Customize to match your book's actual themes:**

Example for an adventure book:
- Развива Въображението
- Учи на Смелост
- Стимулира Любопитството

---

### 7. Testimonials (Lines 264-279)

**These are placeholder testimonials.** Remove them OR:

**Option A:** Keep as social proof examples until you have real ones

**Option B:** Remove the entire testimonials section:
- Find line 250: `{/* Social Proof / Testimonials Section */}`
- Delete everything until line 293 (end of that section)

**Option C:** Update with real testimonials once you get them from beta readers/early buyers

---

### 8. Form Section Title (Line 273)

**Current:**
```jsx
Резервирайте Вашето Копие
```

**Other options based on your goal:**
```jsx
Запишете се за Известие  (if not ready to sell)
```
```jsx
Поръчайте Книгата  (if ready to sell)
```
```jsx
Получете Ранен Достъп  (for pre-orders)
```

---

## 🔤 Part 2: Changing Fonts

Currently using **Inter** font (modern, clean, great for Bulgarian Cyrillic).

### Option A: Choose a Different Google Font

**Popular fonts that work well with Bulgarian:**

1. **Montserrat** - Modern, geometric, bold
2. **Open Sans** - Clean, friendly, readable
3. **Roboto** - Tech-friendly, neutral
4. **Lato** - Warm, stable, professional
5. **Poppins** - Geometric, modern, playful
6. **Nunito** - Rounded, friendly, soft

**How to change:**

Edit `app/layout.js` (line 16):

**Current:**
```jsx
href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap&subset=cyrillic"
```

**Change to Montserrat:**
```jsx
href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap&subset=cyrillic"
```

**Change to Poppins:**
```jsx
href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap&subset=cyrillic"
```

Then update `app/globals.css` (line 8):

**Current:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, ...
```

**Change to match your font:**
```css
font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, ...
```

---

### Option B: Test Different Fonts Easily

**Use Google Fonts Explorer:**

1. Go to: https://fonts.google.com
2. Filter by: **Languages** → **Cyrillic**
3. Preview fonts with Bulgarian text
4. Click on a font you like
5. Click "Get font" → "Get embed code"
6. Copy the `<link>` URL and paste in `app/layout.js`
7. Update the font-family name in `app/globals.css`

---

## 🎯 Quick Edit Workflow (via GitHub)

**For Text Changes:**

1. Go to `app/page.js` on GitHub
2. Click pencil icon ✏️
3. Find the text you want to change (use Ctrl+F to search)
4. Edit it
5. Scroll down → "Commit changes"
6. Vercel auto-deploys (1-2 min)
7. Refresh your site!

**For Font Changes:**

1. Go to `app/layout.js` on GitHub
2. Click pencil icon ✏️
3. Change the Google Fonts URL (line 16)
4. Commit changes
5. Go to `app/globals.css`
6. Click pencil icon ✏️
7. Change the font-family name (line 8)
8. Commit changes
9. Vercel auto-deploys!

---

## 💡 Tips

**For Text:**
- Keep titles short and emotional
- Use action words in CTAs (Резервирай, Открий, Научи)
- Test on mobile - long text gets cut off
- Use emojis sparingly but effectively

**For Fonts:**
- Stick to one font family for consistency
- Make sure it supports Cyrillic
- Test readability on mobile
- Heavier fonts (700-900) are great for titles
- Lighter fonts (400-600) are better for body text

---

## ⚡ Even Faster: Let Me Do It For You!

If you tell me:
1. **Your book's title and subtitle**
2. **A short description (1-2 sentences)**
3. **Your preferred font** (or "keep Inter")
4. **What your CTA button should say**

I can make all the changes for you right now! Just give me the content and I'll update everything.

---

## 🆘 Need Help?

Common questions:

**Q: How do I preview changes before they go live?**
A: You can't easily with GitHub direct edits. Either:
- Make small changes one at a time
- Or set up local development (ask me for help)

**Q: I messed something up, how do I undo?**
A: GitHub keeps all versions. Click "History" → find the old version → copy the old text back

**Q: Can I use multiple fonts?**
A: Yes! You can use one for titles, another for body. Ask me and I'll show you how.

**Q: My text has weird characters**
A: Make sure the file is saved as UTF-8 encoding (GitHub does this automatically)

---

Want me to update specific text for you? Just tell me what to change!
