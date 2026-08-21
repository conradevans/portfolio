import golfMulletScreenshot from '../images/golf-mullet-homepage.png'
import mySchedulerScreenshot from '../images/myscheduler-dashboard.png'

function BrowserFrame({ children, className = '' }) {
  return <div className={`browser-frame ${className}`}><div className="browser-bar"><span/><span/><span/><div className="browser-url" /></div>{children}</div>
}

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

export function HiberVisual() {
  const bars = [42,58,49,72,64,80,69]
  return <BrowserFrame className="hiber-preview"><div className="sleep-top"><div><span className="sleep-logo">☾</span><strong>HiberGator</strong></div><span className="sleep-avatar">CE</span></div><div className="sleep-grid"><div className="sleep-score"><span>Sleep score</span><strong>86</strong><small>+8 this week</small></div><div className="sleep-chart"><div className="chart-label">7-day consistency</div><div className="bars">{bars.map((h,i)=><span key={i} style={{height:`${h}%`}} />)}</div></div><div className="sleep-note"><span>Tonight</span><strong>11:15 PM</strong><small>Target bedtime</small></div></div></BrowserFrame>
}

export function MySchedulerVisual() {
  return <ProjectScreenshot
    src={mySchedulerScreenshot}
    alt="MyScheduler weekly workforce scheduling dashboard with staffing controls and calendar"
    className="myscheduler-screenshot"
  />
}
