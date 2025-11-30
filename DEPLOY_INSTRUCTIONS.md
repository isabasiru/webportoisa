# How to Deploy to cPanel

1. **Build the Project**
   Open a terminal in this folder and run:
   ```bash
   npm run build
   ```
   This will create a `dist` folder containing your website files.

2. **Prepare for Upload**
   - Go into the `dist` folder.
   - Select all files (`index.html`, `assets` folder, etc.).
   - Zip them into a file named `website.zip`.

3. **Upload to cPanel**
   - Log in to your cPanel File Manager.
   - Navigate to `public_html` (or your domain's folder).
   - Upload `website.zip`.
   - Extract the zip file.
   - Ensure `index.html` is in the root of your domain folder.

4. **Done!**
   Your modern DJ portfolio is now live.

## Customization

### 📸 Adding Gallery Photos
1.  **Upload Photos**: Copy your photo files (jpg, png) into the folder `public/gallery/`.
2.  **Update Code**: 
    - Open `src/components/Gallery.jsx`.
    - Edit the `images` list to match your filenames:
      ```javascript
      const images = [
        "./gallery/foto1.jpg",
        "./gallery/foto2.jpg",
        // ...
      ];
      ```
3.  **Rebuild**: Run `npm run build` to update the website.

- **Edit Content**: Modify the files in `src/components/` to change text, links, and images.
- **Add Music**: Replace the URL placeholders in `MusicPlayer.jsx` with your own audio file links.
