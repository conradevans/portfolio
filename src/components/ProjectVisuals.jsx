function BrowserFrame({ children, className = '' }) {
  return <div className={`browser-frame ${className}`}><div className="browser-bar"><span/><span/><span/><div className="browser-url" /></div>{children}</div>
}

export function GolfVisual() {
  return <BrowserFrame className="golf-preview"><div className="shop-nav"><strong>GOLF MULLET</strong><span>SHOP</span><span>NEW</span><span className="shop-bag">BAG 02</span></div><div className="shop-hero"><div><span className="eyebrow-mini">DROP 04</span><h4>Built for the<br/>back nine.</h4><div className="fake-button">SHOP COLLECTION</div></div><div className="golf-orb"><span>GM</span></div></div><div className="product-row">{['01','02','03'].map((n)=><div className="product" key={n}><div className="product-img">{n}</div><div className="product-line"/></div>)}</div></BrowserFrame>
}

export function HiberVisual() {
  const bars = [42,58,49,72,64,80,69]
  return <BrowserFrame className="hiber-preview"><div className="sleep-top"><div><span className="sleep-logo">☾</span><strong>HiberGator</strong></div><span className="sleep-avatar">CE</span></div><div className="sleep-grid"><div className="sleep-score"><span>Sleep score</span><strong>86</strong><small>+8 this week</small></div><div className="sleep-chart"><div className="chart-label">7-day consistency</div><div className="bars">{bars.map((h,i)=><span key={i} style={{height:`${h}%`}} />)}</div></div><div className="sleep-note"><span>Tonight</span><strong>11:15 PM</strong><small>Target bedtime</small></div></div></BrowserFrame>
}

export function MySchedulerVisual() {
  const shifts = [
    { name: 'Jordan', role: 'Manager', start: 8, width: 72 },
    { name: 'Taylor', role: 'Sales', start: 22, width: 58 },
    { name: 'Morgan', role: 'Support', start: 10, width: 48 },
  ]

  return <BrowserFrame className="scheduler-preview">
    <div className="scheduler-top">
      <div><span className="scheduler-mark">M</span><strong>MyScheduler</strong></div>
      <span className="scheduler-week">Aug 17–23</span>
    </div>
    <div className="scheduler-shell">
      <div className="scheduler-summary">
        <span>Weekly schedule</span>
        <strong>24 shifts generated</strong>
        <small>All requirements covered</small>
      </div>
      <div className="scheduler-board">
        <div className="scheduler-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span></div>
        {shifts.map((shift) => <div className="shift-row" key={shift.name}>
          <div className="shift-person"><strong>{shift.name}</strong><span>{shift.role}</span></div>
          <div className="shift-track"><span style={{ marginLeft: `${shift.start}%`, width: `${shift.width}%` }} /></div>
        </div>)}
      </div>
    </div>
  </BrowserFrame>
}
