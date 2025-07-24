# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LensTale is a photography blog built with Gatsby that combines markdown blog posts with image galleries. It features:
- A photo blog powered by Gatsby and Markdown
- Integration with Flickr API for external photo sourcing
- Responsive masonry layout for gallery display
- Styled navigation with burger menu
- RSS feed generation

## Common Commands

### Development
```bash
npm run develop    # Start development server
npm run start      # Alias for develop
```

### Production Build
```bash
npm run build      # Create production build
npm run serve      # Serve production build locally
```

### Code Quality
```bash
npm run format     # Format code with Prettier
npm run clean      # Clean Gatsby cache
```

### Testing
```bash
npm run test       # Currently outputs a reminder to write tests
```

## Architecture

### Core Structure
- **Gatsby.js**: Static site generator using React
- **Content Management**: Markdown files in `content/blog/` with frontmatter
- **Gallery System**: Images in `content/gallery/` processed with Gatsby Image
- **Flickr Integration**: External photo sourcing via gatsby-source-flickr
- **Styling**: Styled Components with custom CSS

### Key Directories
- `src/pages/`: Main pages (index, stream, streets, 404)
- `src/components/`: Reusable components including Nav system
- `src/templates/`: Template for blog posts
- `content/blog/`: Markdown blog posts with image folders
- `content/gallery/`: Images for masonry gallery display

### Important Files
- `gatsby-config.js`: Main configuration including plugins and site metadata
- `gatsby-node.js`: Programmatic page creation
- `src/components/layout.js`: Main layout with header and navigation
- `src/components/Nav/`: Burger menu system with styled-components

### Content Structure
Blog posts follow this pattern:
```
content/blog/post-name/
├── index.md       # Markdown content with frontmatter
└── images/        # Post-specific images
    ├── image1.jpg
    └── image2.jpg
```

### Environment Variables
- `FLICKR_API_KEY`: Flickr API key for photo sourcing
- `FLICKR_PHOTOSET_ID`: Specific photoset ID for Flickr integration

### Key Dependencies
- `gatsby-source-filesystem`: File system sourcing
- `gatsby-transformer-remark`: Markdown processing
- `gatsby-plugin-image`: Optimized image handling
- `gatsby-source-flickr`: Flickr API integration
- `styled-components`: CSS-in-JS styling
- `react-responsive-masonry`: Gallery layout
- `react-focus-lock`: Accessibility for navigation

## Development Notes

### Adding New Blog Posts
1. Create folder in `content/blog/`
2. Add `index.md` with frontmatter (title, date, description)
3. Add images to `images/` subfolder
4. Reference images in markdown using relative paths

### Gallery Management
- Add images directly to `content/gallery/` for masonry display
- Images are automatically processed and optimized by Gatsby

### Navigation System
The site uses a custom burger menu with:
- `Burger.js`: Animated hamburger icon
- `Menu.js`: Slide-out navigation menu
- `hooks.js`: Click outside detection
- `Style.js`: Styled-components theme

### Flickr Integration
Configure via environment variables for external photo sourcing. The integration pulls from specific photosets and displays them alongside local gallery images.

---

### 1. Create the Slider Component

**File:** `src/components/ImageSlider.js`

```javascript
import React, { useEffect, useState } from "react";
import "./imageSlider.css"; // We'll add this CSS next

const images = [
  // Replace with your image imports or URLs
  require("../images/slider/slide1.jpg"),
  require("../images/slider/slide2.jpg"),
  require("../images/slider/slide3.jpg"),
];

const SLIDE_INTERVAL = 3000; // 3 seconds

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt=""
          className={`slider-image${idx === current ? " active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
```

---

### 2. Add the CSS for the Slider

**File:** `src/components/imageSlider.css`

```css
.slider-container {
  position: relative;
  width: 100%;
  max-width: 800px; /* Adjust as needed */
  height: 400px;    /* Adjust as needed */
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  background: #000;
}

.slider-image {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
  z-index: 1;
}

.slider-image.active {
  opacity: 1;
  z-index: 2;
}
```

---

### 3. Use the Slider on Your Home Page

**In your home page file (e.g., `src/pages/index.js`):**

```javascript
import React from "react";
import Layout from "../components/layout";
import ImageSlider from "../components/ImageSlider";

const IndexPage = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <ImageSlider />
    {/* ...other homepage content... */}
  </Layout>
);

export default IndexPage;
```

---

### 4. Add Images

Place your images in `src/images/slider/` and update the `images` array in `ImageSlider.js` if you want to use URLs or GraphQL image data.

---

**That’s it!**  
You’ll have a clean, auto-advancing image slider on your homepage, with no navigation or captions, just a smooth periodic display of your selected images.

Let me know if you want a version that uses Gatsby’s `GatsbyImage` for optimized images, or if you want to fetch images dynamically!