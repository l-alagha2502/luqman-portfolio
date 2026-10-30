import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Brain, Clock3, Command, Dumbbell, Github, Linkedin, Mail, Volume2, VolumeX, X, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import './styles.css'
import './hero-overrides.css'

gsap.registerPlugin(ScrollTrigger)

const stack = ['REACT', 'VITE', 'JAVASCRIPT', 'CSS', 'GSAP', 'DISCORD.JS']
const pixelStorageKey = 'luqa-pixel-drawing'
const projects = [
  { id: '01', name: 'VASTY', type: 'EXPERIMENTAL', detail: 'Web Dev / Web Design / 1 Day', color: '#3b82f6', href: 'https://vastx.app' },
  { id: '02', name: 'KXK.LIB', type: 'OPENLIBRARY', detail: 'Community / OpenLibrary / 2 Days', color: '#f97316' },
  { id: '03', name: 'SKULL KNIGHT SKETCH', type: 'SKETCHING', detail: 'Art / Sketch / 5 Hours', color: '#a3e635' },
]
const skills = [
  ['React / Vite', 'DEV'], ['Python', 'DEV'], ['GSAP Motion', 'DEV'], ['WebGL', 'DEV'],
  ['Visual Systems', 'DESIGN'], ['Pixel Art', 'DESIGN'], ['Figma', 'DESIGN'], ['Muay Thai', 'ATHLETICS'],
  ['Boxing', 'ATHLETICS'], ['Linux Workflows', 'UTILITIES'], ['Supabase', 'UTILITIES'], ['Git / CLI', 'UTILITIES'],
]
const terminalIntro = ['LUQA_OS v2.1', 'type help for options']

function App() {
  const root = useRef(null)
  const cursor = useRef(null)
  const pursuitAudio = useRef(null)
  const [filter, setFilter] = useState('ALL')
  const [sound, setSound] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [command, setCommand] = useState('')
  const [terminalLines, setTerminalLines] = useState(terminalIntro)
  const [pixelColor, setPixelColor] = useState('blue')
  const [pixelDrawing, setPixelDrawing] = useState(() => {
    try {
      const savedDrawing = JSON.parse(localStorage.getItem(pixelStorageKey))
      return Array.isArray(savedDrawing) && savedDrawing.length === 128 ? savedDrawing : Array(128).fill('')
    } catch {
      return Array(128).fill('')
    }
  })
  const [isDrawing, setIsDrawing] = useState(false)
  const [sketchOpen, setSketchOpen] = useState(false)
  const [activeArrow, setActiveArrow] = useState(null)
  const [aboutTab, setAboutTab] = useState('MIND')

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => { lenis.raf(time * 1000); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    const context = gsap.context(() => {
      gsap.from('.hero-line', { yPercent: 110, duration: 1.1, stagger: 0.1, ease: 'power4.out', delay: 0.2 })
      gsap.from('.hero-meta > *', { opacity: 0, y: 14, duration: 0.7, stagger: 0.08, delay: 0.75, ease: 'power2.out' })
      gsap.utils.toArray('.reveal').forEach((el) => gsap.from(el, {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      }))
      gsap.to('.scanline', { yPercent: 100, duration: 2.4, repeat: -1, ease: 'none' })
    }, root)
    return () => { context.revert(); lenis.destroy() }
  }, [])

  useEffect(() => {
    localStorage.setItem(pixelStorageKey, JSON.stringify(pixelDrawing))
  }, [pixelDrawing])

  useEffect(() => {
    pursuitAudio.current = new Audio('/Pursuit%20-%20Gesaffelstein.mp3')
    pursuitAudio.current.loop = true
    pursuitAudio.current.volume = 0.12
    return () => {
      pursuitAudio.current?.pause()
      pursuitAudio.current = null
    }
  }, [])

  useEffect(() => {
    const move = (event) => {
      if (!cursor.current) return
      gsap.to(cursor.current, { x: event.clientX, y: event.clientY, duration: 0.35, ease: 'power3.out' })
    }
    const hoverOn = () => gsap.to(cursor.current, { scale: 2.8, duration: 0.25 })
    const hoverOff = () => gsap.to(cursor.current, { scale: 1, duration: 0.25 })
    window.addEventListener('pointermove', move)
    const targets = document.querySelectorAll('a, button, .project-row, .pixel')
    targets.forEach((target) => { target.addEventListener('mouseenter', hoverOn); target.addEventListener('mouseleave', hoverOff) })
    return () => { window.removeEventListener('pointermove', move); targets.forEach((target) => { target.removeEventListener('mouseenter', hoverOn); target.removeEventListener('mouseleave', hoverOff) }) }
  })

  const playSound = () => {
    if (!sound) return
    const audio = new AudioContext()
    const oscillator = audio.createOscillator()
    const gain = audio.createGain()
    oscillator.frequency.value = 520
    gain.gain.setValueAtTime(0.06, audio.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.12)
    oscillator.connect(gain); gain.connect(audio.destination); oscillator.start(); oscillator.stop(audio.currentTime + 0.12)
  }

  const toggleMusic = () => {
    const nextSoundState = !sound
    setSound(nextSoundState)
    if (!pursuitAudio.current) return
    if (nextSoundState) {
      pursuitAudio.current.play().catch(() => setSound(false))
    } else {
      pursuitAudio.current.pause()
      pursuitAudio.current.currentTime = 0
    }
  }

  const runCommand = (event) => {
    event.preventDefault()
    const value = command.trim().toLowerCase()
    if (!value) return
    const responses = {
      help: ['available: skills / projects / clear / contact / location / languages'],
      skills: ['Web development · Web design · Drawing · Basketball · Football', 'Volleyball · Boxing · Kickboxing · Discord server management · Pixel art'],
      projects: [
        <span key="vasty">Vasty: <em><a href="https://vastx.app" target="_blank" rel="noreferrer">vastx.app</a></em> / custom websites for friends</span>,
        <span key="kxk">Kxk.lib: <em><a href="https://discord.gg/DPmcTX2ne8" target="_blank" rel="noreferrer">discord.gg/DPmcTX2ne8</a></em> / community-first openlibrary server</span>,
        <span key="lqmn">Lqmn.lol: <em><a href="https://lqmn-lol.vercel.app/" target="_blank" rel="noreferrer">lqmn-lol.vercel.app</a></em> / link-in-bio website</span>,
      ],
      contact: [
        <span key="gmail">Gmail: <em><a href="mailto:l.alagha2502@gmail.com">l.alagha2502@gmail.com</a></em></span>,
        <span key="linkedin">LinkedIn: <em><a href="https://www.linkedin.com/in/luqman2502/" target="_blank" rel="noreferrer">linkedin.com/in/luqman2502</a></em></span>,
        <span key="github">Github: <em><a href="https://github.com/l-alagha2502" target="_blank" rel="noreferrer">github.com/l-alagha2502</a></em></span>,
      ],
      location: ['Doha, Qatar'],
      languages: ['English && Arabic'],
    }
    const next = value === 'clear' ? terminalIntro : [...terminalLines, `> ${value}`, ...(responses[value] || ['command not found — try help'])]
    setTerminalLines(next); setCommand(''); playSound()
  }

  const filteredSkills = filter === 'ALL' ? skills : skills.filter(([, group]) => group === filter)
  const paintPixel = (index) => {
    setPixelDrawing((current) => current.map((value, cellIndex) => cellIndex === index ? pixelColor : value))
  }
  const startDrawing = (index) => { setIsDrawing(true); paintPixel(index) }
  const resetDrawing = () => { setPixelDrawing(Array(128).fill('')); setIsDrawing(false) }
  const aboutContent = {
    MIND: { text: 'Self taught in coding, design and art, I like building stuff, from discord servers to websites', Icon: Brain },
    BODY: { text: "When I'm not on my desk, I'm out training, from boxing to basketball, it keeps me active, and a break from all the work", Icon: Dumbbell },
    HISTORY: { text: "I've had a ton of lost, failed, or scrapped projects and works, but they weren't in vain, I learned from them and I'm constantly becoming better than before", Icon: Clock3 },
  }
  const activeAbout = aboutContent[aboutTab]

  return (
    <div ref={root} className="site-shell">
      <div className="noise" /><div className="scanline" /><div ref={cursor} className="cursor" />
      <nav className="nav wrap">
        <a className="brand magnetic" href="#top">LUQA<span>/</span></a>
        <div className="nav-links"><a href="#work">WORK</a><a href="#system">SYSTEM</a><a href="#contact">CONTACT</a></div>
        <button className="sound-button magnetic" onClick={toggleMusic} aria-label="Toggle sound">{sound ? <Volume2 size={16} /> : <VolumeX size={16} />}<span>{sound ? 'SOUND ON' : 'SOUND OFF'}</span></button>
      </nav>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-meta"><span className="eyebrow">[ 01 / INTRODUCTION ]</span><span className="status"><i /> AVAILABLE FOR ALMOST ANYTHING</span></div>
          <h1 className="hero-title"><span className="line-mask"><span className="hero-line accent-blue">LUQMAN</span></span><span className="line-mask"><span className="hero-line">M. ALAGHA</span></span></h1>
          <div className="hero-bottom"><p className="hero-description">I'm a Student, developer, designer, artist & athlete.<br />I love exploring hobbies and skills...</p><a className="round-cta magnetic" href="#work" aria-label="Scroll to selected work"><svg className="round-cta-label" viewBox="0 0 100 100" aria-hidden="true"><defs><path id="cta-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" /></defs><text><textPath href="#cta-circle" startOffset="0%">SELECTED WORKS · SELECTED WORKS · </textPath></text></svg><ArrowDownRight size={25} /></a><span className="scroll-label">SCROLL TO EXPLORE <span>↘</span></span></div>
          <div className="stack-ticker"><span className="ticker-label">CURRENTLY RUNNING ON</span><div className="ticker-items">{stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        </section>

        <section className="workspace wrap reveal"><div className="section-heading"><span className="eyebrow">[ 02 / WORKSPACE ]</span><span className="section-note">A DUAL-CORE OPERATING SYSTEM</span></div>
          <div className="bento-grid">
            <div className="bento terminal-panel"><div className="panel-top"><span>DEV / COMMAND LINE</span><span className="live-dot">● ONLINE</span></div><div className="terminal-body">{terminalLines.map((line, index) => <div key={`${line}-${index}`} className={index === 0 ? 'terminal-title' : ''}>{line}</div>)}<form onSubmit={runCommand} className="terminal-input"><span>root@luqa:~$</span><input value={command} onChange={(event) => setCommand(event.target.value)} aria-label="Terminal command" autoComplete="off" /></form></div><div className="panel-footer"><Command size={14} /> interactive shell / enter command</div></div>
            <div className="bento regimen-panel"><div className="panel-top"><span>02 / PHYSICALITY</span></div><div className="regimen-title">BODY<br /><span>IN MOTION.</span></div><div className="metrics">{[['MARTIAL ARTS', '75'], ['BALL SPORTS', '55'], ['CALISTHENICS', '30'], ['SWIMMING', '85']].map(([label, value]) => <div className="metric" key={label}><div><span>{label}</span><b>{value}%</b></div><div className="meter"><i style={{ width: `${value}%` }} /></div></div>)}</div><div className="motion-lines"><i /><i /><i /><i /></div></div>
            <div className="bento pixel-panel"><div className="panel-top"><span>03 / VISUAL OUTPUT</span><button className="pixel-reset" onClick={resetDrawing}>RESET</button></div><div className="pixel-tools"><div className="pixel-swatches" aria-label="Pixel colors">{[['blue', '#3b82f6'], ['orange', '#f97316'], ['white', '#f3f4f6']].map(([name, color]) => <button key={name} className={`swatch ${pixelColor === name ? 'active' : ''}`} style={{ background: color }} onClick={() => setPixelColor(name)} aria-label={`Use ${name}`} />)}</div><span>16 × 8 SPRITE CANVAS</span></div><div className="pixel-grid" onPointerUp={() => setIsDrawing(false)} onPointerLeave={() => setIsDrawing(false)}>{pixelDrawing.map((value, index) => <i className={`pixel ${value ? `painted ${value}` : ''}`} key={index} onPointerDown={() => startDrawing(index)} onPointerEnter={() => isDrawing && paintPixel(index)} />)}</div><div className="pixel-caption"><span>CLICK OR DRAG TO DRAW</span><ArrowUpRight size={16} /></div></div>
          </div>
        </section>

        <section id="work" className="projects wrap reveal"><div className="section-heading"><span className="eyebrow">[ 03 / SELECTED WORK ]</span><span className="section-note">THINGS THAT HAVE LEFT THE TERMINAL</span></div><div className="project-list">{projects.map((project) => <div className="project-row magnetic" key={project.id} onMouseEnter={() => setActiveProject(project)} onMouseLeave={() => { setActiveProject(null); setActiveArrow(null) }} onClick={() => project.id === '03' && setSketchOpen(true)}><span className="project-id">{project.id}</span>{project.href ? <a className="project-name" href={project.href} target="_blank" rel="noreferrer">{project.name}</a> : <span className="project-name">{project.name}</span>}<span className="project-type">{project.type}</span>{project.id === '02' ? <span className="project-arrows"><span className="project-arrow-wrap" onMouseEnter={() => setActiveArrow('coming')}><span className="hover-arrow-label">{activeArrow === 'coming' ? 'COMING SOON' : ''}</span><ArrowUpRight className="project-arrow" size={22} /></span><a className="project-arrow-wrap" href="https://discord.gg/DPmcTX2ne8" target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} onMouseEnter={() => setActiveArrow('server')}><span className="hover-arrow-label">{activeArrow === 'server' ? 'SERVER' : ''}</span><ArrowUpRight className="project-arrow" size={22} /></a></span> : <ArrowUpRight className="project-arrow" size={22} />}{activeProject?.id === project.id && <span className="project-preview" style={{ '--preview-color': project.color }}><strong>{project.id}</strong><small>{project.detail}</small><span className="preview-art" /></span>}</div>)}</div></section>

        {sketchOpen && <div className="sketch-modal-backdrop" role="presentation" onClick={() => setSketchOpen(false)}><div className="sketch-modal" role="dialog" aria-modal="true" aria-label="Skull Knight Sketch" onClick={(event) => event.stopPropagation()}><div className="panel-top"><span>03 / SKULL KNIGHT SKETCH</span><button className="modal-close" onClick={() => setSketchOpen(false)} aria-label="Close sketch"><X size={18} /></button></div><div className="sketch-image-wrap"><img src="/sk-drawing.jpeg" alt="Skull Knight sketch" /></div><div className="sketch-modal-footer"><span>ART / SKETCH / 5 HOURS</span><span>SKETCHING / ORIGINAL STUDY</span></div></div></div>}

        <section id="system" className="system wrap reveal"><div className="section-heading"><span className="eyebrow">[ 04 / MORE ABOUT ME ]</span><span className="section-note">SOME MORE INFO</span></div><div className="system-layout about-layout"><div className="linux-badge about-identity"><div className="about-shape"><activeAbout.Icon size={108} strokeWidth={1} /></div><span className="eyebrow">LUQMAN ALAGHA</span><h2>LU<br /><em>QA</em></h2><p>01001100 01110101 01110001 01100001</p><span className="badge-code">LQ / 2026 / 001</span></div><div className="skills-wrap about-info"><div className="about-tabs">{Object.keys(aboutContent).map((tab) => <button className={aboutTab === tab ? 'active' : ''} key={tab} onClick={() => { setAboutTab(tab); playSound() }}>{tab}</button>)}</div><div className="about-copy"><span className="eyebrow">{aboutTab} / PERSONAL LOG</span><p>{activeAbout.text}</p></div><div className="about-footer"><span>LUQA / FIELD NOTES</span><span>STATUS: EVOLVING</span></div></div></div></section>

        <section id="contact" className="contact wrap reveal"><span className="eyebrow">[ 05 / CONTACT ME ]</span><h2>LET <span>US</span><br /><em>CONNECT.</em></h2><div className="contact-bottom"><a className="contact-email magnetic" href="mailto:l.alagha2502@gmail.com">l.alagha2502@gmail.com <ArrowUpRight size={20} /></a><div className="socials"><a href="https://github.com/l-alagha2502" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB</a><a href="https://www.linkedin.com/in/luqman2502/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LINKEDIN</a><a href="https://vastx.app/l" target="_blank" rel="noreferrer">UNPRO <ArrowUpRight size={15} /></a></div></div></section>
      </main>
      <footer className="footer wrap"><span>© 2026 LUQMAN ALAGHA</span><span>DESIGNED / BUILT WITH INTENT</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
