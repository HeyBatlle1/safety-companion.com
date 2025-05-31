<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Safety Companion README</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%);
            width: 1280px;
            height: 640px;
            display: flex;
            overflow: hidden;
            position: relative;
        }

        .container {
            display: flex;
            width: 100%;
            height: 100%;
        }

        .left-section {
            flex: 1;
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            z-index: 2;
        }

        .right-section {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
        }

        .header {
            margin-bottom: 30px;
        }

        .logo {
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #60a5fa, #93c5fd);
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            margin-bottom: 15px;
        }

        .title {
            font-size: 48px;
            font-weight: 700;
            color: #60a5fa;
            margin: 0;
            line-height: 1.1;
        }

        .subtitle {
            font-size: 18px;
            color: #94a3b8;
            margin: 8px 0 0 0;
            font-weight: 400;
        }

        .description {
            font-size: 20px;
            color: #e2e8f0;
            margin: 30px 0;
            line-height: 1.5;
            max-width: 500px;
        }

        .tech-stack {
            margin-bottom: 30px;
        }

        .tech-title {
            font-size: 16px;
            font-weight: 600;
            color: #cbd5e1;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .tech-items {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .tech-item {
            background: rgba(96, 165, 250, 0.2);
            border: 1px solid rgba(96, 165, 250, 0.3);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            color: #bfdbfe;
            font-weight: 500;
        }

        .built-with {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 30px;
        }

        .bolt-badge {
            background: linear-gradient(45deg, #f59e0b, #f97316);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            color: white;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .github-link {
            color: #94a3b8;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
        }

        .visual-element {
            width: 300px;
            height: 400px;
            position: relative;
        }

        .grid-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(rgba(96, 165, 250, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(96, 165, 250, 0.2) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        .tower {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 350px;
            background: linear-gradient(45deg, rgba(96, 165, 250, 0.3), rgba(147, 197, 253, 0.3));
            clip-path: polygon(50% 0%, 20% 100%, 80% 100%);
            border: 2px solid rgba(96, 165, 250, 0.5);
        }

        .glow {
            position: absolute;
            top: -100px;
            left: -100px;
            right: -100px;
            bottom: -100px;
            background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
            pointer-events: none;
        }

        .features {
            margin-top: 20px;
        }

        .feature-list {
            font-size: 14px;
            color: #cbd5e1;
            line-height: 1.8;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .check-icon {
            width: 16px;
            height: 16px;
            background: #10b981;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="left-section">
            <div class="header">
                <div class="logo"></div>
                <h1 class="title">Safety Companion</h1>
                <p class="subtitle">Modern Safety Management Platform</p>
            </div>
            
            <p class="description">
                A comprehensive web application designed to provide OSHA-compliant safety assistance, real-time monitoring, and location-based services to keep workers safe and informed.
            </p>

            <div class="tech-stack">
                <div class="tech-title">Tech Stack</div>
                <div class="tech-items">
                    <span class="tech-item">React 18</span>
                    <span class="tech-item">TypeScript</span>
                    <span class="tech-item">Vite</span>
                    <span class="tech-item">Tailwind CSS</span>
                    <span class="tech-item">Firebase</span>
                    <span class="tech-item">Google Maps</span>
                    <span class="tech-item">AI Integration</span>
                    <span class="tech-item">Framer Motion</span>
                </div>
            </div>

            <div class="features">
                <div class="feature-list">
                    <div class="feature-item">
                        <div class="check-icon">✓</div>
                        <span>OSHA Compliance & Safety Guidelines</span>
                    </div>
                    <div class="feature-item">
                        <div class="check-icon">✓</div>
                        <span>Interactive Maps & Location Services</span>
                    </div>
                    <div class="feature-item">
                        <div class="check-icon">✓</div>
                        <span>AI-Powered Safety Recommendations</span>
                    </div>
                    <div class="feature-item">
                        <div class="check-icon">✓</div>
                        <span>Real-time Safety Data & SDS Management</span>
                    </div>
                </div>
            </div>

            <div class="built-with">
                <div class="bolt-badge">
                    ⚡ Built with Bolt.new
                </div>
                <a href="https://github.com/HeyBatlle1/safety-companion.com" class="github-link">
                    View on GitHub →
                </a>
            </div>
        </div>

        <div class="right-section">
            <div class="glow"></div>
            <div class="visual-element">
                <div class="grid-pattern"></div>
                <div class="tower"></div>
            </div>
        </div>
    </div>
</body>
</html>

