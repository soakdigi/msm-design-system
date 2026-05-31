function Footer({ onNav }) {
  const link = (id, label) => (
    <a href={'#' + id} onClick={(e) => { e.preventDefault(); onNav(id); }}>{label}</a>
  );
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="../../assets/logo/msm-logo-light.png" alt="MSM — Machinery Solutions & Maintenance" />
            <p className="tag">Driving your production further. Industrial machinery
              service, maintenance, design &amp; build — Melbourne, Australia.</p>
          </div>
          <div>
            <h5>Services</h5>
            <div className="flist">
              {link('services', 'Machinery Breakdown')}
              {link('services', 'Preventative Maintenance')}
              {link('services', 'Design & Development')}
              {link('services', 'Installation & Relocation')}
              {link('services', 'Spare Parts')}
            </div>
          </div>
          <div>
            <h5>Get In Touch</h5>
            <div className="flist">
              <a href="tel:+61390133772" className="mono">(+613) 9013 3772</a>
              <p>25A Slater Parade,<br />Keilor East 3033</p>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>Get Directions</a>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <span>&copy; Machinery Solutions &amp; Maintenance 2026</span>
          <span className="wordmark" style={{ fontSize: 12, letterSpacing: '.2em' }}>MSM</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
