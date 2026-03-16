# Website Builder & Project Showcase System

A complete web design and portfolio system with a powerful visual builder, project management, and beautiful showcase gallery.

## 🚀 Quick Start

### 1. **Open the Builder**
- Open `index_beta.html` in your browser
- Start creating websites visually with drag-and-drop components

### 2. **Create and Manage Projects**
- Build multiple projects in isolated environments
- Each project has its own pages and assets
- Switch between projects instantly

### 3. **Create Pages & Sections**
- Add pages to your project
- Choose from 11 pre-built section templates:
  - Generic, Hero, Cards, Gallery, Testimonials, Stats
  - Dashboard, Forms, Pricing, CTA, Footer

### 4. **Add & Edit Elements**
- Drag sections onto your page
- Edit text directly (contenteditable)
- Upload images and style everything visually
- Use the inspector panel to customize colors, padding, fonts

### 5. **Export Your Project**
- Click "Export HTML" button
- Fill in project metadata (name, description, icon, folder path)
- Download ZIP with:
  - `index.html` - Your main page
  - `manifest-entry.json` - Pre-formatted entry for showcase gallery
  - `assets/` folder - All your images

### 6. **Showcase Your Projects**
- Click "🎨 View Showcase" to open the gallery
- Projects are loaded from `projects-manifest.json`
- Browse, search, sort, preview, and share your work

---

## 📁 System Overview

### Files & Their Purpose

| File | Purpose |
|------|---------|
| **index_beta.html** | Visual page builder (main app) - optimized & cleaned |
| **showcase projects page.html** | Project gallery & portfolio |
| **projects-manifest.json** | List of all projects to display |
| **generate-manifest.js** | Auto-scanner for Node.js |
| **generate-manifest.py** | Auto-scanner for Python |
| **README.md** | This file - system overview |
| **DIRECTORY_SHOWCASE_GUIDE.md** | Directory setup & manifest details |

### Architecture

```
Your Projects
    ↓
[Builder] Creates pages + exports with manifest
    ↓
[Projects Folder] Stores exported projects
    ↓
[Generator] Scans folders → creates manifest
    ↓
[Showcase] Reads manifest → displays gallery
```

### Build System (Optimized)
- **Manifest-Aware Export**: All exports include structured metadata
- **Clean Codebase**: Deprecated functions removed, modern architecture only
- **Import/Export Integration**: Seamless round-trip for editing existing projects

---

## 🏗️ The Builder (index_beta.html)

### Project Management
- **Create Projects**: "+" button stores multiple projects in browser storage
- **Switch Projects**: Dropdown selector with instant switching
- **Projects Dashboard**: Beautiful gallery view of all projects
- **Data Isolation**: Each project has its own pages and assets

### Section Templates

Choose from 11 pre-built responsive sections:

1. **Generic Section** - Simple content container
2. **Hero Section** - Large banner with background image
3. **Feature Cards** - 3-column card grid
4. **Dashboard** - Table and metrics display
5. **Image Gallery** - Responsive image grid
6. **Testimonials** - Client quotes in cards
7. **Stats Section** - Key metrics highlight
8. **Call to Action** - Button-focused section
9. **Form Section** - Contact/signup forms
10. **Pricing Table** - Pricing plans grid
11. **Footer** - Site footer with content

### Editing Features

**Inspector Panel** (right sidebar):
- Change background colors
- Change text colors
- Adjust padding
- Move sections up/down
- Duplicate sections
- Delete sections
- Add elements:
  - Headings, paragraphs, images
  - Buttons, links, cards
  - Gallery items, form fields

**Element Editing**:
- Click any element to select
- Edit text directly (for contenteditable elements)
- Change styling (color, background, image)
- Move elements within sections
- Delete or duplicate elements

**Image Uploads**:
- Upload images directly in the builder
- Images stored per-project
- Automatically included in exports

### Exporting Projects

**Export Process**:
1. Click "Export HTML" button
2. Fill in project metadata:
   - Project Name
   - Description
   - Icon (emoji)
   - Folder Path (e.g., "my-project")
3. Select pages to export:
   - **Current Page** - Export only the active page
   - **Selected Pages** - Choose specific pages via checkboxes
   - **All Pages** - Export entire project
4. Optional: Enter export password for copyright protection
5. Download ZIP file

**Export Options**:
- **Single Page Export** → Downloads as individual HTML or ZIP (if images included)
- **Multiple Pages Export** → Downloads as ZIP with manifest entry and assets folder

**What You Get**:
- `index.html` - Your website (or first page if multi-page)
- `manifest-entry.json` - Pre-formatted for showcase gallery
- `assets/` folder - All your images
- Additional HTML files - One per page in multi-page exports

**To Use Exported Project**:
1. Extract ZIP file
2. Copy folder to your project root
3. Add `manifest-entry.json` content to `projects-manifest.json`
4. Run generator script to update manifest
5. Project appears in showcase gallery

---

## 🎨 The Showcase Gallery (showcase projects page.html)

A beautiful, standalone portfolio/gallery website.

### Features

**🔍 Search**
- Real-time filtering by project name or description
- Instant results as you type

**📊 Sort**
- Newest: Projects sorted by creation date (default)
- A-Z: Alphabetical sorting

**👁️ Live Preview**
- Click "Preview" to see full website in modal
- Device testing: Desktop (1200px), Tablet (768px), Mobile (375px)
- Reload button to refresh preview
- Fully interactive preview

**📸 Screenshots**
- One-click capture with high quality (2x resolution)
- Auto-downloads as PNG
- Perfect for portfolios and sharing

**📤 Sharing**
- Native share dialog (iOS, Android, some browsers)
- Fallback: Copy to clipboard
- Share project info and link

**📱 Responsive Design**
- Works perfectly on mobile, tablet, desktop
- Touch-friendly interface
- Full-screen previews

---

## 📚 Project Setup & Directory Structure

### Option 1: Auto-Generate (Recommended)

**Using Python:**
```bash
cd c:\Users\ephraim\Downloads\oburuephraim2.github.io-main
python generate-manifest.py
```

**Using Node.js:**
```bash
cd c:\Users\ephraim\Downloads\oburuephraim2.github.io-main
node generate-manifest.js
```

### Option 2: Manual Setup

Create folder structure:
```
📁 Project Root/
├── 📄 index_beta.html
├── 📄 showcase projects page.html
├── 📄 projects-manifest.json
│
├── 📁 project-folder-1/
│   └── 📄 index.html
│
└── 📁 project-folder-2/
    └── 📄 index.html
```

Edit `projects-manifest.json`:
```json
{
  "projects": [
    {
      "name": "My First Project",
      "description": "A beautiful website",
      "folderPath": "project-folder-1",
      "pagePath": "index.html",
      "icon": "🎨",
      "createdDate": "2026-03-14T10:00:00Z"
    }
  ]
}
```

### Manifest Entry Format

After exporting from the builder, you get `manifest-entry.json`:

```json
{
  "name": "workingv1",
  "description": "Project description",
  "folderPath": "workingv1",
  "pagePath": "index.html",
  "icon": "🎨",
  "createdDate": "2026-03-14T18:56:42.941775Z"
}
```

Copy this into your `projects-manifest.json` array.

---

## 💡 Typical Workflow

### Single Project
1. Open `index_beta.html`
2. Build your website
3. Click "Export HTML"
4. Fill in project metadata
5. Download ZIP
6. Extract to folder
7. Add manifest entry to `projects-manifest.json`
8. Run generator script
9. Open `showcase projects page.html` to view

### Multiple Projects
1. Create Project A in builder
2. Create Project B in builder
3. Export Project A with metadata
4. Export Project B with metadata
5. Extract both to folders
6. Add both manifest entries to JSON
7. Run generator script
8. All projects appear in showcase gallery

### Client Presentations
1. Build website in builder
2. Export with client name as project name
3. Extract and share folder
4. Add to manifest
5. Open showcase to present portfolio

---

## 🔒 Data & Privacy

- **100% Client-Side**: No server required
- **Local Storage**: Projects stored in browser
- **No Tracking**: No analytics or external calls
- **Your Data**: Complete control and ownership
- **Offline Capable**: Works without internet

---

## 📊 Browser Support

✅ **Fully Supported:**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers

---

## 🎯 Features Summary

### Builder
- ✅ Multiple project manager
- ✅ 11 section templates
- ✅ Drag-and-drop design
- ✅ Image uploads
- ✅ Real-time preview
- ✅ Export with manifest
- ✅ Project dashboard
- ✅ Per-project isolation

### Showcase
- ✅ Beautiful gallery
- ✅ Search and sort
- ✅ Live preview
- ✅ Device testing
- ✅ Screenshots
- ✅ Social sharing
- ✅ Responsive design
- ✅ Toast notifications

---

## 🆘 Troubleshooting

### Projects Not Showing in Showcase
1. Check `projects-manifest.json` exists
2. Verify JSON syntax is valid
3. Ensure folder paths are correct
4. Run generator script to recreate manifest
5. Check browser console (F12) for errors

### Preview Not Loading
1. Click "Reload" button in preview
2. Verify project `index.html` exists
3. Check all image paths are relative (not absolute)
4. Ensure assets are in project folder

### Export Not Working
1. Ensure pages are not empty
2. Verify Project Name and Folder Path are filled
3. Check browser console for errors
4. Try different browser if issue persists

### Can't Open Showcase on file:// Protocol
The showcase page needs an HTTP server to load projects due to browser security.

**Quick Fix:**
```bash
# Python (Python 3.x)
python -m http.server 8000

# Node.js (if installed)
npm install -g http-server
http-server
```

Then visit: `http://localhost:8000/showcase%20projects%20page.html`

**Why?** Browsers block `fetch()` requests on `file://` protocol for security reasons.

---

## 📞 Support

For detailed setup instructions: See [DIRECTORY_SHOWCASE_GUIDE.md](DIRECTORY_SHOWCASE_GUIDE.md)

---

## 🎉 Ready to Build?

1. **Open** `index_beta.html`
2. **Create** a new project
3. **Build** your website
4. **Export** with metadata
5. **Showcase** in the gallery

**Happy building! 🚀**

---

**Last Updated**: March 14, 2026  
**Version**: 1.0  
**Status**: ✅ Fully Functional
