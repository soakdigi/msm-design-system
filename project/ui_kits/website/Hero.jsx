function Hero({ onNav }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src="../../assets/photos/banner.jpg" alt="" aria-hidden="true" />
      </div>
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dash"></span>
          <span className="eyebrow">Industrial Machinery Specialists · Melbourne</span>
          <span className="dash"></span>
        </div>
        <h1>Driving your<br />production further</h1>
        <p className="lead">
          When a production line goes down, every minute counts. MSM keeps manufacturers
          running with hands-on breakdown response, preventative maintenance, and custom
          machine design &amp; build.
        </p>
        <div className="hero-ctas">
          <button className="cta" onClick={() => onNav('contact')}>
            <span className="lab">Get In Touch</span>
            <span className="cap"><Icon name="arrowRight" /></span>
          </button>
          <button className="btn btn-ghost-light" onClick={() => onNav('services')}>What We Do</button>
        </div>
      </div>
      <button className="hero-scroll" onClick={() => onNav('intro')} aria-label="Scroll to services">
        <span>Scroll</span>
        <Icon name="arrowDown" />
      </button>
    </section>
  );
}
window.Hero = Hero;
