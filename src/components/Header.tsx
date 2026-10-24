import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import { Icon } from './Icon'

const links = [['work', 'Work'], ['about', 'About'], ['interests', 'Interests'], ['contact', 'Contact']]

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return <header className="site-header">
    <div className="container header-inner">
      <a href="#home" className="wordmark" aria-label="Chuanling Yu, home" onClick={() => setOpen(false)}><span className="monogram">cy<span>.</span></span><span className="wordmark-name">Chuanling Yu</span></a>
      <button ref={menuButton} className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
      <nav id="main-navigation" aria-label="Main navigation" className={`navigation ${open ? 'is-open' : ''}`}>
        {links.map(([id, text]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{text}</a>)}
        <a className="resume-nav" href={profile.resume} download="Chuanling-Yu-Resume.pdf">Résumé <Icon name="download" /></a>
      </nav>
    </div>
  </header>
}
