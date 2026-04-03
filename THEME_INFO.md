# 🌌 Retro Dark Theme - Cyberpunk Terminal Aesthetic

## 🎨 Theme Overview

Your bio website now features a modern retro dark theme with a cyberpunk/terminal aesthetic inspired by old CRT monitors and hacker terminals.

## 🎯 Color Palette

### Primary Colors
- **Primary Green**: `#00ff41` - Neon terminal green
- **Accent Green**: `#0dff92` - Lighter green accent
- **Secondary Green**: `#39ff14` - Bright neon green

### Background Colors
- **Dark Base**: `#0a0e27` - Deep dark blue-black
- **Secondary Dark**: `#1a1f3a` - Slightly lighter dark
- **Card Background**: `#151a2e` - Dark card surfaces

### Text Colors
- **Primary Text**: `#e0e0e0` - Light gray for readability
- **Secondary Text**: `#a0a0a0` - Medium gray for descriptions
- **Muted Text**: `#606060` - Dark gray for dates/metadata

## ✨ Design Features

### 1. Typography
- **Font Family**: `'Courier New', 'Consolas', 'Monaco', monospace`
- **Terminal-style** monospace font throughout
- **Uppercase headings** with wide letter-spacing
- **Text shadows** with green glow effects

### 2. Visual Effects

#### Scanning Effect
- **Hero section** has a subtle animated scan line effect
- Simulates old CRT monitor scanning
- Gentle pulsing animation

#### Glow Effects
- **Hover states** create glowing borders
- **Text shadows** with green glow on headings
- **Box shadows** with neon green transparency
- **Buttons** glow on hover

#### Border Animations
- **Experience cards** - animated left border on hover
- **Project cards** - animated top border on hover
- **Skill categories** - glowing border effect

### 3. UI Components

#### Buttons
- **Sharp rectangular** borders (no border-radius)
- **Uppercase text** with letter-spacing
- **Green border** with fill animation on hover
- **Glowing shadow** effects

#### Cards & Sections
- **No rounded corners** - everything is angular
- **2px solid borders** with green tint
- **4px accent borders** (left or top)
- **Dark card backgrounds**
- **Hover animations** with transforms

#### Navigation
- **Sticky dark nav bar** with green bottom border
- **Uppercase menu items** with wide spacing
- **Green hover states** with glow
- **Active state** with green highlight

#### Forms
- **Dark input backgrounds**
- **Green borders** on focus
- **Glow effect** when typing
- **Monospace font** in inputs

## 🔥 Special Features

### Hero Section
```
- Large uppercase name with green glow
- Animated scan-line effect
- Green accent colors
- Terminal-style taglines
```

### Skill Categories
```
- Dark cards with borders
- Green accent bars
- ">" prefix bullets (terminal style)
- Glow on hover
```

### Project Cards
```
- Animated top border on hover
- Tech tags with green tint
- ">" prefix for highlights
- Glowing effects
```

### Experience Timeline
```
- Vertical accent bar animation
- Green company names
- Terminal-style dates
- Smooth hover transitions
```

## 🎮 Interactive Elements

All interactive elements feature:
- ✅ **Smooth transitions** (0.3s ease)
- ✅ **Hover states** with glow effects
- ✅ **Transform animations** (translate, scale)
- ✅ **Border color changes**
- ✅ **Shadow effects**

## 📱 Responsive Design

The theme maintains its aesthetic across all screen sizes:
- **Desktop**: Full effects and animations
- **Tablet**: Optimized grid layouts
- **Mobile**: Stacked layout, maintained effects

## 🛠️ Customization

### To Change Colors

Edit `/bio_site/public/css/style.css` variables:

```css
:root {
    /* Change primary green color */
    --primary-color: #00ff41;  /* Your custom green */
    --accent-color: #0dff92;   /* Your accent color */
    
    /* Change background darkness */
    --dark-bg: #0a0e27;        /* Darker or lighter */
    --dark-bg-secondary: #1a1f3a;
}
```

### Popular Alternative Color Schemes

**Cyan Terminal** (Matrix-style):
```css
--primary-color: #00ffff;
--accent-color: #00d4d4;
```

**Purple Neon**:
```css
--primary-color: #a855f7;
--accent-color: #c084fc;
```

**Orange Hacker**:
```css
--primary-color: #ff6b00;
--accent-color: #ff8c3a;
```

**Red Alert**:
```css
--primary-color: #ff0055;
--accent-color: #ff3377;
```

### To Adjust Glow Intensity

Search for `box-shadow` and adjust the rgba values:

```css
/* Less glow */
box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);

/* More glow */
box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
```

## 🎯 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## 📊 Performance

Theme optimizations:
- **Hardware-accelerated** animations (transform, opacity)
- **Efficient CSS** transitions
- **No heavy images** in theme
- **Fast rendering** with modern CSS

## 🌟 Inspired By

- **Cyberpunk 2077** aesthetics
- **Terminal/Hacker** interfaces
- **CRT monitor** displays
- **Retro computing** era
- **Matrix** movie style

## 🎨 Design Philosophy

**Modern Retro**: Combines cutting-edge web design with nostalgic retro computing aesthetics. The monospace fonts, green-on-black color scheme, and terminal-style elements evoke classic hacker terminals while modern animations and effects create a contemporary feel.

**High Contrast**: Dark backgrounds with bright green text ensure excellent readability and a striking visual impact.

**Interactive**: Every element responds to user interaction with smooth animations and glowing effects, creating an engaging, tactile experience.

---

**Status**: ✅ Fully implemented and live!  
**URL**: http://localhost:3000  
**Last Updated**: April 2, 2026

🚀 Enjoy your retro-futuristic cyberpunk bio site!
