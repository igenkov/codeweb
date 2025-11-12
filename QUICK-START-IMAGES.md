# 🚀 Quick Start: Adding Images (For Beginners)

## Simple 3-Step Process

### Step 1: Get Test Images Ready

You need 5 images with these **exact names**:
- `book-cover.jpg` (portrait - taller than wide)
- `page-1.jpg` (landscape - wider than tall)
- `page-2.jpg` (landscape)
- `page-3.jpg` (landscape)
- `page-4.jpg` (landscape)

**Don't have your book images yet?** No problem! Use any images for testing:
- Photos from your phone
- Stock photos from [Unsplash.com](https://unsplash.com)
- AI-generated images
- Even screenshots!

Just rename them to match the names above.

---

### Step 2: Upload via GitHub (Super Easy!)

**Option A: GitHub Website (No coding needed)**

1. **Go to your images folder on GitHub:**
   - Open: https://github.com/igenkov/codeweb
   - Click the branch dropdown (says "main") → Select `claude/marketing-funnel-011CV2pmw2n93WKQdzD8XKQL`
   - Click on `public` folder
   - Click on `images` folder

2. **Upload your images:**
   - Click the **"Add file"** button (top right)
   - Click **"Upload files"**
   - Drag and drop your 5 images OR click "choose your files"
   - Make sure filenames match exactly:
     - `book-cover.jpg`
     - `page-1.jpg`
     - `page-2.jpg`
     - `page-3.jpg`
     - `page-4.jpg`

3. **Commit (save) the changes:**
   - Scroll down
   - In the commit message box, type: "Add test images"
   - Click green **"Commit changes"** button

4. **Wait for deployment:**
   - Vercel will automatically rebuild your site (takes 1-2 minutes)
   - Go to your Vercel dashboard to see the deployment progress
   - Once done, refresh your live site - images will appear!

---

**Option B: Drag and Drop (Even Easier!)**

If you have GitHub Desktop or VS Code with Git:

1. Clone the repository (one-time setup)
2. Open the `public/images/` folder on your computer
3. Drag your 5 images into the folder
4. Commit and push
5. Vercel auto-deploys!

---

### Step 3: See Your Images Live!

1. **Check Vercel dashboard** - Wait for "Building" to change to "Ready"
2. **Open your live site** - Your images should now appear!
3. **Test on mobile** - Share the link to your phone to see how it looks

---

## 🔄 Replacing Images Later

To change any image:

1. Go to the GitHub images folder (same link as above)
2. Click on the image you want to replace (e.g., `book-cover.jpg`)
3. Click the trash icon to delete it
4. Upload the new image with the **same filename**
5. Vercel auto-deploys!

**OR** just upload a new file with the same name - GitHub will ask if you want to replace it.

---

## 📏 Image Size Tips

**For Best Results:**

**Book Cover:**
- **Size**: 600x800 pixels (or any 3:4 ratio)
- **Orientation**: Portrait (vertical)
- **File size**: Under 500KB

**Book Pages:**
- **Size**: 800x600 pixels (or any 4:3 ratio)
- **Orientation**: Landscape (horizontal)
- **File size**: Under 300KB each

**How to resize images:**
- Use [TinyPNG.com](https://tinypng.com) to compress large files
- Use any photo editor (even Preview on Mac or Paint on Windows)
- Or upload as-is - Next.js will handle optimization

---

## ❗ Troubleshooting

### Images not showing after upload?

**Check these:**

1. ✅ **Filenames are exact** (including `.jpg` extension)
   - ❌ `Book-Cover.jpg` (wrong - capital letters)
   - ❌ `book-cover.png` (wrong - must be .jpg)
   - ✅ `book-cover.jpg` (correct!)

2. ✅ **Images are in the right folder**
   - Path should be: `codeweb/public/images/book-cover.jpg`
   - NOT: `codeweb/images/book-cover.jpg`

3. ✅ **Vercel deployment finished**
   - Check Vercel dashboard - should say "Ready"
   - Wait 1-2 minutes after committing

4. ✅ **Clear browser cache**
   - Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or open in incognito/private browsing mode

### Still not working?

- Check if the image files are actually JPG (not PNG renamed to JPG)
- Try with smaller images first (under 1MB)
- Make sure you're on the correct branch in GitHub

---

## 🎨 Using Different Image Formats

The code currently expects `.jpg` files. If you want to use PNG:

**Two options:**

**Option 1: Convert to JPG** (Easiest)
- Use an online converter: [CloudConvert.com](https://cloudconvert.com/png-to-jpg)
- Or "Export as JPG" in any image editor

**Option 2: Update the code**
- If you need help changing the code to use `.png`, just ask!

---

## 💡 Pro Tips

1. **Test with any images first** - Don't wait for perfect images
2. **Use placeholders** - Screenshot anything colorful to see the layout
3. **Replace anytime** - You can swap images as many times as you want
4. **Mobile first** - Make sure images look good on phone screens
5. **Keep originals** - Save your original high-res images separately

---

## 🆘 Need Help?

If you get stuck:
1. Check the filename spelling (most common issue!)
2. Make sure you're uploading to the correct branch
3. Wait for Vercel to finish deploying
4. Clear your browser cache

---

## Next Steps After Images

Once your images are showing:
1. ✅ Update the text content (book title, description)
2. ✅ Customize colors
3. ✅ Set up email capture
4. ✅ Add Facebook Pixel for ads

Check the `CUSTOMIZATION.md` file for detailed guides on all of these!

---

Happy testing! 🎉
