import golfMulletScreenshot from '../images/golf-mullet-homepage.png'
import mySchedulerScreenshot from '../images/myscheduler-dashboard.png'

function ProjectScreenshot({ src, alt, className }) {
  return <figure className={`project-screenshot ${className}`}>
    <img src={src} alt={alt} loading="lazy" decoding="async" />
  </figure>
}

export function GolfVisual() {
  return <ProjectScreenshot
    src={golfMulletScreenshot}
    alt="Golf Mullet storefront homepage featuring its golf course collection"
    className="golf-screenshot"
  />
}

export function MySchedulerVisual() {
  return <ProjectScreenshot
    src={mySchedulerScreenshot}
    alt="MyScheduler weekly workforce scheduling dashboard with staffing controls and calendar"
    className="myscheduler-screenshot"
  />
}

export function WadVisual() {
  return <div className="terminal-preview" role="img" aria-label="Terminal showing a mounted WAD archive as a directory tree">
    <div className="terminal-bar"><span/><span/><span/><em>wadfs — ~/archives</em></div>
    <pre><span className="prompt">$</span> ./wadfs sample.wad ./mnt{`\n`}<span className="success">mounted sample.wad at ./mnt</span>{`\n\n`}<span className="prompt">$</span> tree ./mnt{`\n`}<span className="tree">./mnt{`\n`}├── maps{`\n`}│   └── map01{`\n`}│       ├── things{`\n`}│       ├── linedefs{`\n`}│       └── vertexes{`\n`}├── textures{`\n`}└── sprites</span></pre>
  </div>
}
