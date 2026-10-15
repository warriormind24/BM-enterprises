Website development environment setup instructions:
================================================

If you encounter issues with the development server, try these steps:

1. Make sure you have Node.js 18.x or later installed
2. Try clearing npm cache: npm cache clean --force
3. Delete node_modules and package-lock.json, then reinstall:
   rm -rf node_modules package-lock.json
   npm install
4. If you still have issues, try using Yarn instead:
   npm install -g yarn
   yarn install
   yarn dev
5. For production build:
   npm run build
   npm start
6. Alternative: Use pnpm
   npm install -g pnpm
   pnpm install
   pnpm dev