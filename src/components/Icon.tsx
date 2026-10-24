type IconName = 'arrow' | 'download' | 'mail' | 'github' | 'linkedin' | 'menu' | 'close' | 'plus' | 'code' | 'network' | 'scan' | 'book' | 'leaf'

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-1.7-.8-2.2 3-.3 5.8-1.5 5.8-6.3A5 5 0 0 0 18.7 6c.1-.8.2-2-.4-3 0 0-1.1-.4-3.6 1.3a12.3 12.3 0 0 0-6.4 0C5.8 2.6 4.7 3 4.7 3c-.6 1-.5 2.2-.4 3A5 5 0 0 0 3 9.5c0 4.8 2.8 6 5.8 6.3-.5.5-.8 1.2-.8 2.2v4" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  close: <><path d="m6 6 12 12M6 18 18 6" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20" /></>,
  network: <><circle cx="5" cy="5" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="9" cy="19" r="2" /><path d="m7 5 10 1M6 7l3 10m2 0 7-9" /></>,
  scan: <><path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5M8 12h8m-4-4v8" /></>,
  book: <><path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1v15" /></>,
  leaf: <><path d="M20 3C8 2 2 8 5 15s14 7 15-12ZM4 21 16 9" /></>,
}

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
