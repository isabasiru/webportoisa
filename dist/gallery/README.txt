# Gallery Instructions

1.  **Add Your Photos**
    - Place your photo files (jpg, png, webp) inside this folder: `public/gallery/`
    - Rename them simply, e.g., `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.

2.  **Update the Code**
    - Open `src/components/Gallery.jsx`.
    - Update the `images` array with your filenames.
    
    Example:
    ```javascript
    const images = [
      "./gallery/photo1.jpg",
      "./gallery/photo2.jpg",
      "./gallery/photo3.jpg",
      // ... add more
    ];
    ```

3.  **Build**
    - Run `npm run build` to include these images in your final website.
