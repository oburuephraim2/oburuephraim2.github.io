# Directory-Based Project Showcase Setup Guide

## Overview

The showcase page now scans your local directory structure to find and display projects stored in their own folders. Each project folder must contain an `index.html` file.

## Directory Structure

```
📁 oburuephraim2.github.io-main/
├── 📄 index_beta.html                    (Page Builder)
├── 📄 showcase projects page.html        (Project Gallery - THIS FILE)
├── 📄 projects-manifest.json             (Project List - AUTO-GENERATED)
├── 📄 generate-manifest.js               (Scanner Script - Node.js)
├── 📄 generate-manifest.py               (Scanner Script - Python)
│
├── 📁 Project1/
│   ├── 📄 index.html                     (Your project HTML)
│   ├── 📄 style.css                      (Optional)
│   └── 📁 images/                        (Optional assets)
│
├── 📁 Project2/
│   ├── 📄 index.html                     (Your project HTML)
│   └── ...
│
└── 📁 ProjectN/
    ├── 📄 index.html
    └── ...
```

## Step 1: Organize Your Projects

1. Create folders for each project (e.g., `Project1`, `Project2`)
2. Place an `index.html` file in each project folder
3. Include any assets (CSS, images, JS) in that folder or subfolders

## Step 2: Generate the Manifest

Choose **ONE** of these methods:

### Method A: Using Node.js (Recommended)
```bash
# In the command line, navigate to your project directory
cd c:\Users\ephraim\Downloads\oburuephraim2.github.io-main

# Run the script
node generate-manifest.js
```

### Method B: Using Python
```bash
# In the command line, navigate to your project directory
cd c:\Users\ephraim\Downloads\oburuephraim2.github.io-main

# Run the script
python generate-manifest.py
```

### Method C: Manual Edit
Edit `projects-manifest.json` directly:

```json
{
  "projects": [
    {
      "name": "My First Project",
      "description": "A beautiful landing page",
      "folderPath": "Project1",
      "pagePath": "index.html",
      "icon": "🎨",
      "createdDate": "2026-03-14T10:00:00Z"
    },
    {
      "name": "My Second Project",
      "description": "Portfolio website",
      "folderPath": "Project2",
      "pagePath": "index.html",
      "icon": "🎨",
      "createdDate": "2026-03-14T09:00:00Z"
    }
  ]
}
```

## Step 3: Open the Showcase Page

1. Open `showcase projects page.html` in your browser
2. All projects from the `projects-manifest.json` will appear in the gallery

## Features Available

### 🔍 Search
- Filter projects by name or description in real-time

### 📊 Sort
- **Newest**: Shows projects by creation date (newest first)
- **A-Z**: Sorts projects alphabetically by name

### 👁️ Preview
- Click "Preview" to see the full HTML page in a modal
- All styles and assets are loaded from the project folder
- **Device Testing**: Switch between Desktop (1200px), Tablet (768px), and Mobile (375px) views

### 📸 Screenshot
- Capture a high-quality PNG screenshot of any preview
- Automatically downloads with the project name and timestamp
- Perfect for sharing designs via email or messaging

### 📤 Share
- **Web Share API**: Native share dialog (on supported browsers/devices)
- **Clipboard Fallback**: Automatically copies link if Web Share isn't available
- Share from gallery cards or from the preview modal

## Manifest File Format

The `projects-manifest.json` file controls what appears in the gallery:

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Project title | "My Portfolio" |
| `description` | Short description | "My personal portfolio website" |
| `folderPath` | Folder name (relative path) | "Project1" |
| `pagePath` | HTML file to display | "index.html" |
| `icon` | Emoji icon for the card | "🎨" |
| `createdDate` | ISO date string | "2026-03-14T10:30:00Z" |

### Icon Examples
- 🎨 Art/Design
- 🌐 Website
- 📱 Mobile App
- 💼 Business
- 🛍️ E-commerce
- 📸 Photography
- 📱 App
- 🎯 Landing Page

## Auto-Detection with Scripts

The `generate-manifest.js` (Node.js) and `generate-manifest.py` (Python) scripts:

✅ **Automatically detect** all project folders  
✅ **Check** for `index.html` in each folder  
✅ **Extract** creation dates from file metadata  
✅ **Generate** the manifest JSON file  
✅ **Sort** projects by newest first  

**Skip folders**: Hidden files (`.`), `node_modules`, and known system files

## Troubleshooting

### Projects Not Showing

1. **Check folder names**: Are they in the same directory as `showcase projects page.html`?
2. **Check index.html**: Does each project folder have an `index.html` file?
3. **Regenerate manifest**: Run the generate script again
4. **Check console**: Open browser DevTools (F12) → Console tab for error messages

### Preview Not Loading

- Ensure relative paths in your HTML are correct
- If using images, place them in a folder relative to `index.html`
  - Example: `Project1/index.html` with `Project1/images/pic.jpg`
  - Reference in HTML: `<img src="images/pic.jpg">`

### Screenshot Not Downloading

- Ensure the preview loads correctly first
- Check browser console for errors
- Try a different browser if the issue persists

### Paths Not Resolving on Server

When deployed to a server, ensure:
- Relative paths work correctly: `../assets/style.css`
- All asset files are uploaded to the server
- Use consistent path separators (`/`)

## Fallback: Builder Integration

If `projects-manifest.json` is not found, the showcase page falls back to:
- Projects saved from `index_beta.html` (builder)
- Retrieved from browser's localStorage
- Shows message if neither is available

## Tips & Tricks

### 1. Custom Icons
Edit `projects-manifest.json` to use different emojis per project:
```json
{ "name": "E-Commerce", "icon": "🛍️", ... }
{ "name": "Portfolio", "icon": "📸", ... }
```

### 2. Organize Subfolders
Group related projects:
```
📁 Client-Projects/
  ├── 📁 Project1/index.html
  ├── 📁 Project2/index.html
```

Then update the manifest:
```json
{ "folderPath": "Client-Projects/Project1", ... }
```

### 3. Asset Paths in HTML
Use relative paths for images and assets:
```html
<!-- ✓ WORKS -->
<img src="images/logo.png">
<link rel="stylesheet" href="styles.css">

<!-- ✗ AVOID -->
<img src="c:\Path\To\images\logo.png">
<img src="/images/logo.png">
```

### 4. Batch Generate Manifest
Set up a scheduled task or git hook to auto-run the generator:
```bash
# Windows batch file (auto-generate.bat)
cd /d "%~dp0"
node generate-manifest.js
```

### 5. Link Back to Builder
Your `index_beta.html` has a "🎨 View Showcase" button in the sidebar that opens this gallery.

## What Gets Stored

The showcase page **does NOT** modify or store your projects — it only:
- ✅ Reads the `projects-manifest.json` file
- ✅ Loads and displays your `index.html` files
- ✅ Captures screenshots locally (not stored)
- ✅ Shares via system share dialog or clipboard (not stored)

All your project files remain completely independent and untouched.

## Questions or Issues?

- Check the browser console (F12) for error messages
- Verify folder structure matches the guide above
- Re-run the generate script if you added new projects
- Ensure all relative paths in your HTML are correct
