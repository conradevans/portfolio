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

export function WadVisual() {
  return <div className="terminal-preview"><div className="terminal-bar"><span/><span/><span/><em>wadfs — ~/p3</em></div><pre><span className="prompt">$</span> ./wadfs sample1.wad ./mnt{`\n`}<span className="prompt">$</span> tree ./mnt{`\n`}<span className="tree">./mnt{`\n`}├── E1M0{`\n`}│   ├── THINGS{`\n`}│   ├── LINEDEFS{`\n`}│   └── VERTEXES{`\n`}├── F{`\n`}│   └── F1{`\n`}└── mp.txt</span>{`\n\n`}<span className="success">35 tests passed.</span></pre></div>
}

const mineCells = ['','1','','⚑','','1','2','2','1','','','1','✹','2','1','','1','2','2','1','','','','1','']
export function MinesweeperVisual() {
  return <div className="mini-app mine-app"><div className="mini-title"><span>Minesweeper</span><span>010</span></div><div className="mine-grid">{mineCells.map((c,i)=><div key={i} className={`mine-cell ${c==='✹'?'bomb':''} ${c==='⚑'?'flag':''}`}>{c}</div>)}</div></div>
}

const sudoku = [
  5,3,'','',7,'','','','',
  6,'','',1,9,5,'','','',
  '',9,8,'','','','',6,'',
  8,'','','',6,'','','',3,
  4,'','',8,'',3,'','',1,
  7,'','','',2,'','','',6,
  '',6,'','','','',2,8,'',
  '','','',4,1,9,'','',5,
  '','','','',8,'','',7,9
]
export function SudokuVisual() {
  return <div className="mini-app sudoku-app"><div className="mini-title"><span>Sudoku</span><span>Medium</span></div><div className="sudoku-grid">{sudoku.map((n,i)=><div key={i} className={`${(Math.floor(i/9)%3===2 && Math.floor(i/9)!==8)?'thick-bottom ':''}${(i%9===2||i%9===5)?'thick-right':''}`}>{n}</div>)}</div></div>
}
