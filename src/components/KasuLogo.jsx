import React from 'react';

// We accept dynamic props (size and color) so we can control the logo later
function KasuLogo({ size = "h-8", mainColor = "text-blue-900", accentColor = "text-orange-500" }) {
  return (
    // This is an SVG (Scalable Vector Graphic) rendered inside JSX.
    // It's much faster than an image file and looks perfectly sharp on all screens.
    <svg 
      className={`${size} w-auto`} // Sets the height (passed as a prop) and maintains aspect ratio.
      viewBox="0 0 100 100" // Defines the coordinates within the logo's internal canvas.
      fill="none" // By default, don't fill shapes; we'll define color on individual paths.
      xmlns="http://www.w3.org/2000/svg"
    >
      
      {/* This is the modern, dynamic 'K' design. We apply the accentColor here.
        'currentColor' tells the SVG to use the color from the surrounding Tailwind text color class.
      */}
      <path 
        className={`${accentColor} fill-current`} // This stroke will be Safari Orange by default.
        d="M20 10V90H35V55L65 90H80L45 50L80 10H65L35 45V10H20Z" 
      />

      {/* This is the shared vertical bar that forms the 'T'. We apply the mainColor (Deep Blue) here.
      */}
      <path 
        className={`${mainColor} fill-current`} // This stroke will be Deep Blue by default.
        d="M35 10H100V25H35V10Z" 
      />
      
    </svg>
  );
}

// Explaining how we use this dynamic approach:
// To use it with default colors:  <KasuLogo />
// To make it white (like for a dark footer): <KasuLogo mainColor="text-white" accentColor="text-white" />
// To make it bigger: <KasuLogo size="h-16" />

export default KasuLogo;