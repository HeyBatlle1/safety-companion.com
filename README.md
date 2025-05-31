<svg width="1280" height="640" viewBox="0 0 1280 640" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a8a"/>
      <stop offset="50%" style="stop-color:#1e40af"/>
      <stop offset="100%" style="stop-color:#3b82f6"/>
    </linearGradient>
    
    <!-- Logo gradient -->
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#60a5fa"/>
      <stop offset="100%" style="stop-color:#93c5fd"/>
    </linearGradient>
    
    <!-- Tower gradient -->
    <linearGradient id="towerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#60a5fa" stop-opacity="0.3"/>
      <stop offset="100%" style="stop-color:#93c5fd" stop-opacity="0.3"/>
    </linearGradient>
    
    <!-- Bolt gradient -->
    <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#f97316"/>
    </linearGradient>
    
    <!-- Grid pattern -->
    <pattern id="gridPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#60a5fa" stroke-width="0.5" opacity="0.2"/>
    </pattern>
    
    <!-- Glow filter -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1280" height="640" fill="url(#bgGradient)"/>
  
  <!-- Right section background -->
  <rect x="640" y="0" width="640" height="640" fill="rgba(255,255,255,0.05)"/>
  
  <!-- Grid pattern on right -->
  <rect x="640" y="0" width="640" height="640" fill="url(#gridPattern)"/>
  
  <!-- Logo triangle -->
  <polygon points="100,140 120,180 80,180" fill="url(#logoGradient)"/>
  
  <!-- Main title -->
  <text x="60" y="230" font-family="Inter, sans-serif" font-size="48" font-weight="700" fill="#60a5fa">Safety Companion</text>
  
  <!-- Subtitle -->
  <text x="60" y="255" font-family="Inter, sans-serif" font-size="18" font-weight="400" fill="#94a3b8">Modern Safety Management Platform</text>
  
  <!-- Description -->
  <text x="60" y="305" font-family="Inter, sans-serif" font-size="20" font-weight="400" fill="#e2e8f0">
    <tspan x="60" dy="0">A comprehensive web application designed to provide</tspan>
    <tspan x="60" dy="25">OSHA-compliant safety assistance, real-time monitoring,</tspan>
    <tspan x="60" dy="25">and location-based services to keep workers safe.</tspan>
  </text>
  
  <!-- Tech Stack title -->
  <text x="60" y="410" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#cbd5e1" text-transform="uppercase" letter-spacing="1px">TECH STACK</text>
  
  <!-- Tech stack badges -->
  <g>
    <!-- Row 1 -->
    <rect x="60" y="430" width="80" height="28" rx="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)"/>
    <text x="100" y="448" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#bfdbfe" text-anchor="middle">React 18</text>
    
    <rect x="150" y="430" width="90" height="28" rx="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)"/>
    <text x="195" y="448" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#bfdbfe" text-anchor="middle">TypeScript</text>
    
    <rect x="250" y="430" width="60" height="28" rx="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)"/>
    <text x="280" y="448" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#bfdbfe" text-anchor="middle">Vite</text>
    
    <rect x="320" y="430" width="100" height="28" rx="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)"/>
    <text x="370" y="448" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#bfdbfe" text-anchor="middle">Tailwind CSS</text>
    
    <!-- Row 2 -->
    <rect x="60" y="468" width="80" height="28" rx="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)"/>
    <text x="100" y="486" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#bfdbfe" text-anchor="middle">Firebase</text>
    
    <rect x="150" y="468" width="100" height="28" rx="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)"/>
    <text x="200" y="486" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#bfdbfe" text-anchor="middle">Google Maps</text>
    
    <rect x="260" y="468" width="110" height="28" rx="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)"/>
    <text x="315" y="486" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#bfdbfe" text-anchor="middle">AI Integration</text>
    
    <rect x="380" y="468" width="110" height="28" rx="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)"/>
    <text x="435" y="486" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#bfdbfe" text-anchor="middle">Framer Motion</text>
  </g>
  
  <!-- Features -->
  <g>
    <!-- Feature 1 -->
    <circle cx="70" cy="530" r="8" fill="#10b981"/>
    <text x="68" y="535" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="white" text-anchor="middle">✓</text>
    <text x="85" y="535" font-family="Inter, sans-serif" font-size="14" fill="#cbd5e1">OSHA Compliance &amp; Safety Guidelines</text>
    
    <!-- Feature 2 -->
    <circle cx="70" cy="555" r="8" fill="#10b981"/>
    <text x="68" y="560" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="white" text-anchor="middle">✓</text>
    <text x="85" y="560" font-family="Inter, sans-serif" font-size="14" fill="#cbd5e1">Interactive Maps &amp; Location Services</text>
    
    <!-- Feature 3 -->
    <circle cx="70" cy="580" r="8" fill="#10b981"/>
    <text x="68" y="585" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="white" text-anchor="middle">✓</text>
    <text x="85" y="585" font-family="Inter, sans-serif" font-size="14" fill="#cbd5e1">AI-Powered Safety Recommendations</text>
    
    <!-- Feature 4 -->
    <circle cx="340" cy="530" r="8" fill="#10b981"/>
    <text x="338" y="535" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="white" text-anchor="middle">✓</text>
    <text x="355" y="535" font-family="Inter, sans-serif" font-size="14" fill="#cbd5e1">Real-time Safety Data &amp; SDS Management</text>
  </g>
  
  <!-- Built with Bolt.new badge -->
  <rect x="60" y="610" width="140" height="28" rx="14" fill="url(#boltGradient)"/>
  <text x="75" y="628" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="white">⚡ Built with Bolt.new</text>
  
  <!-- GitHub link -->
  <text x="220" y="628" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="#94a3b8">View on GitHub →</text>
  
  <!-- Tower visualization -->
  <g transform="translate(960, 120)">
    <!-- Glow effect -->
    <ellipse cx="0" cy="400" rx="150" ry="80" fill="rgba(96,165,250,0.1)"/>
    
    <!-- Tower -->
    <polygon points="0,50 -50,400 50,400" fill="url(#towerGradient)" stroke="#60a5fa" stroke-width="2" opacity="0.8" filter="url(#glow)"/>
    
    <!-- Grid overlay on tower -->
    <g clip-path="polygon(0 50, -50 400, 50 400)">
      <g opacity="0.3">
        <!-- Vertical lines -->
        <line x1="-40" y1="50" x2="-32" y2="400" stroke="#60a5fa" stroke-width="0.5"/>
        <line x1="-20" y1="50" x2="-16" y2="400" stroke="#60a5fa" stroke-width="0.5"/>
        <line x1="0" y1="50" x2="0" y2="400" stroke="#60a5fa" stroke-width="1"/>
        <line x1="20" y1="50" x2="16" y2="400" stroke="#60a5fa" stroke-width="0.5"/>
        <line x1="40" y1="50" x2="32" y2="400" stroke="#60a5fa" stroke-width="0.5"/>
        
        <!-- Horizontal lines -->
        <line x1="-45" y1="100" x2="45" y2="100" stroke="#60a5fa" stroke-width="0.5"/>
        <line x1="-40" y1="150" x2="40" y2="150" stroke="#60a5fa" stroke-width="0.5"/>
        <line x1="-35" y1="200" x2="35" y2="200" stroke="#60a5fa" stroke-width="0.5"/>
        <line x1="-30" y1="250" x2="30" y2="250" stroke="#60a5fa" stroke-width="0.5"/>
        <line x1="-25" y1="300" x2="25" y2="300" stroke="#60a5fa" stroke-width="0.5"/>
        <line x1="-20" y1="350" x2="20" y2="350" stroke="#60a5fa" stroke-width="0.5"/>
      </g>
    </g>
  </g>
</svg>
