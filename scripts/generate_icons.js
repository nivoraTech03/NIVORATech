const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. Precise 3D Ribbon "N" SVG matching the user's uploaded brand image
function getRibbonNSvg(size = 512, withBg = true) {
  // If withBg, render the rounded squircle with soft ambient glow
  const bgContent = withBg
    ? `
    <!-- Deep dark background with ambient neon glow -->
    <rect width="${size}" height="${size}" rx="${size * 0.24}" fill="#0A0E1A" />
    <circle cx="${size * 0.5}" cy="${size * 0.5}" r="${size * 0.35}" fill="#3B82F6" opacity="0.25" filter="url(#ambientGlow)" />
    <circle cx="${size * 0.6}" cy="${size * 0.6}" r="${size * 0.3}" fill="#A855F7" opacity="0.2" filter="url(#ambientGlow)" />
    `
    : '';

  // SVG viewBox is 100 x 100.
  // Ribbon N coordinates:
  // Left pillar: x=14 to 34, y=28 to 86
  // Diagonal fold: from top left (x=24, y=20) down to bottom right (x=76, y=80)
  // Right pillar: x=66 to 86, y=14 to 72
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">
  <defs>
    <!-- Cyan to Deep Blue Gradient (Left Stem & Top Fold) -->
    <linearGradient id="cyanToBlue" x1="0%" y1="100%" x2="50%" y2="0%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="50%" stop-color="#00A2FF" />
      <stop offset="100%" stop-color="#0055FF" />
    </linearGradient>

    <!-- Deep Blue to Royal Indigo to Violet Gradient (Diagonal Fold) -->
    <linearGradient id="blueToPurple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0044EE" />
      <stop offset="35%" stop-color="#2563EB" />
      <stop offset="70%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#9333EA" />
    </linearGradient>

    <!-- Royal Purple to Magenta Gradient (Right Stem & Curve) -->
    <linearGradient id="purpleToMagenta" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7C3AED" />
      <stop offset="50%" stop-color="#A855F7" />
      <stop offset="100%" stop-color="#D946EF" />
    </linearGradient>

    <!-- Shadow filter for the 3D overlap -->
    <filter id="foldShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="-2" dy="3" stdDeviation="3.5" flood-color="#020617" flood-opacity="0.55" />
    </filter>

    <filter id="ambientGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="15" />
    </filter>
  </defs>

  ${bgContent}

  <g transform="translate(0, 0)">
    <!-- 1. Right Vertical Stem (Back layer) -->
    <path
      d="M 68 84
         C 78 84 86 76 86 64
         L 86 28
         C 86 20 78 14 70 18
         C 64 22 64 30 64 34
         L 64 70
         C 64 78 68 84 68 84 Z"
      fill="url(#purpleToMagenta)"
    />

    <!-- 2. Diagonal Crossing Ribbon (Middle 3D fold layer) -->
    <path
      d="M 23 23
         C 29 17 40 18 47 27
         L 82 72
         C 88 80 82 90 71 88
         C 64 87 56 78 50 70
         L 19 33
         C 15 28 18 24 23 23 Z"
      fill="url(#blueToPurple)"
      filter="url(#foldShadow)"
    />

    <!-- 3. Left Vertical Stem (Front layer with smooth bottom curve) -->
    <path
      d="M 14 72
         L 14 36
         C 14 22 24 14 36 17
         C 44 20 45 28 41 36
         L 34 50
         L 34 72
         C 34 81 26 87 19 83
         C 15 80 14 76 14 72 Z"
      fill="url(#cyanToBlue)"
    />
  </g>
</svg>
  `;
}

async function build() {
  console.log('Generating brand icons from 3D Ribbon N vector...');

  const icon512Svg = getRibbonNSvg(512, true);
  const icon180Svg = getRibbonNSvg(180, true);
  const icon32Svg = getRibbonNSvg(64, true);

  // Generate app/icon.png
  await sharp(Buffer.from(icon512Svg))
    .png()
    .toFile(path.join(__dirname, '../app/icon.png'));
  console.log('✓ app/icon.png generated');

  // Generate app/apple-icon.png
  await sharp(Buffer.from(icon180Svg))
    .png()
    .toFile(path.join(__dirname, '../app/apple-icon.png'));
  console.log('✓ app/apple-icon.png generated');

  // Also ensure public/icon.png and public/apple-icon.png exist for manifest / SEO
  await sharp(Buffer.from(icon512Svg))
    .png()
    .toFile(path.join(__dirname, '../public/icon.png'));

  await sharp(Buffer.from(icon180Svg))
    .png()
    .toFile(path.join(__dirname, '../public/apple-icon.png'));

  // Standalone transparent ribbon N for direct image usage
  const transparentN = getRibbonNSvg(512, false);
  await sharp(Buffer.from(transparentN))
    .png()
    .toFile(path.join(__dirname, '../public/images/logo_mark.png'));

  console.log('All icons generated successfully!');
}

build().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
