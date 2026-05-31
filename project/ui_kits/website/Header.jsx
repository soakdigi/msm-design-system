function Header({ onNav, onMenu }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const link = (id, label) => (
    <a href={'#' + id} onClick={(e) => { e.preventDefault(); onNav(id); }}>{label}</a>
  );
  const logo = scrolled ? 'msm-mark-dark.png' : 'msm-logo-light.png';
  return (
    <header className={'hdr' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap hdr-inner">
        <a href="#top" className="hdr-logo-link" onClick={(e) => { e.preventDefault(); onNav('top'); }}>
          <img className={'hdr-logo' + (scrolled ? ' is-mark' : '')} src={'../../assets/logo/' + logo} alt="MSM — Machinery Solutions & Maintenance" />
        </a>
        <nav className="nav">
          {link('services', 'What We Do')}
          {link('why', 'Why MSM')}
          {link('contact', 'Get In Touch')}
        </nav>
        <div className="hdr-cta">
          <button className="cta cta-sm" onClick={() => onNav('contact')}>
            <span className="lab">Get In Touch</span>
            <span className="cap"><Icon name="arrowRight" /></span>
          </button>
          <button className="menu-btn" onClick={onMenu} aria-label="Menu"><Icon name="menu" style={{ width: 26, height: 26 }} /></button>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
