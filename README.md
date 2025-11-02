# Keyboard Shortcut Learning Web App

An interactive 3D keyboard shortcut visualization and practice tool with a neo-futuristic design. Learn keyboard shortcuts by seeing them highlighted on a beautiful 3D keyboard.

## Features

- **3D Keyboard Display**: Apple keyboard layout with perspective view
- **Interactive Shortcuts**: Click or hover over commands to see keys highlighted
- **Collapsible Categories**: Organize shortcuts by category with expand/collapse all
- **Neo-futuristic Design**: Sharp blues and grays with the Satoshi font
- **Cursor Shortcuts**: Pre-loaded with comprehensive Cursor IDE shortcuts and Figma shortcuts
- **Smooth Animations**: Pulsing highlights and smooth transitions

## How to Use

1. **Open the app**: Go to https://practice-shortcuts.vercel.app/ or open `index.html` in your web browser
2. **Select an app**: Use the dropdown to choose which app's shortcuts to view (currently Cursor or Figma)
3. **Browse shortcuts**: Click category headers to expand/collapse them
4. **See highlights**: 
   - **Hover** over a command to temporarily highlight the keys
   - **Click** a command to keep it highlighted (click again to deselect)
5. **Expand/Collapse All**: Use the icon in the shortcuts header to expand or collapse all categories at once

## Technologies Used

- Pure HTML, CSS, and JavaScript (no frameworks)
- Satoshi font from Fontshare
- Lucide icons for UI elements
- CSS 3D transforms for keyboard perspective

## Customization

### Adding More Apps

Edit the `shortcutsData` object in `script.js`:

```javascript
const shortcutsData = {
    yourApp: {
        name: "Your App Name",
        categories: [
            {
                name: "Category Name",
                commands: [
                    { name: "Command Name", keys: ["cmd", "key"] }
                ]
            }
        ]
    }
};
```

Then add the option to the select dropdown in `index.html`.

### Adjusting the 3D Effect

Modify the `transform` property in `.keyboard` class in `styles.css`:

```css
.keyboard {
    transform: rotateX(25deg) rotateZ(0deg); /* Adjust these values */
}
```

## Design Details

- **Color Palette**: Neo-futuristic blues (#0A84FF, #00D9FF) and grays (#1A1D24, #252932)
- **Typography**: Satoshi font family with multiple weights
- **Shape Language**: Sharp corners with minimal border radius (4px)
- **Icons**: Lucide icon library for consistent, sharp iconography
- **Sidebar Width**: Fixed at 340px to prevent resizing during expand/collapse

## Browser Compatibility

Works best in modern browsers that support:
- CSS 3D transforms
- CSS Grid and Flexbox
- ES6+ JavaScript

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

Enjoy learning your shortcuts! 🚀

