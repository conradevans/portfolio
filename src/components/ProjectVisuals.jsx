import golfMulletScreenshot from '../images/golf-mullet-homepage.png'
import mySchedulerScreenshot from '../images/myscheduler-dashboard.png'
import reactorLabScreenshot from '../images/reactorlab-overview.png'

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

export function ReactorLabVisual() {
  return <ProjectScreenshot
    src={reactorLabScreenshot}
    alt="ReactorLab infrastructure overview showing live server health, resource usage, and active services"
    className="reactorlab-screenshot"
  />
}
