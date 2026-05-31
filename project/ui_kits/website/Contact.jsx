function Contact() {
  const mapEmbed = 'https://maps.google.com/maps?q=25A%20Slater%20Parade%2C%20Keilor%20East%20VIC%203033&t=&z=15&ie=UTF8&iwloc=&output=embed';
  const directions = 'https://www.google.com/maps/dir/?api=1&destination=25A+Slater+Parade+Keilor+East+VIC+3033';
  const details = [
    { icon: 'phone', k: 'Call us', v: '(+613) 9013 3772', href: 'tel:+61390133772', mono: true },
    { icon: 'mapPin', k: 'Visit us', v: '25A Slater Parade,\nKeilor East 3033', mono: false },
    { icon: 'clock', k: 'Hours', v: 'Mon\u2013Fri 7:00\u201317:00', mono: false },
  ];
  return (
    <section className="contact" id="contact">
      <div className="contact-map">
        <iframe title="MSM location — 25A Slater Parade, Keilor East" src={mapEmbed}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="wrap contact-wrap">
        <div className="contact-card">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let&rsquo;s talk about<br />your machinery</h2>
          <p>Find out more about our services — our friendly team members are always happy to talk.</p>
          <div className="cinfo">
            {details.map((d) => (
              d.href ? (
                <a className="detail" href={d.href} key={d.k}>
                  <Icon name={d.icon} />
                  <div>
                    <div className="k">{d.k}</div>
                    <div className={'v' + (d.mono ? '' : ' plain')}>{d.v}</div>
                  </div>
                </a>
              ) : (
                <div className="detail" key={d.k}>
                  <Icon name={d.icon} />
                  <div>
                    <div className="k">{d.k}</div>
                    <div className={'v' + (d.mono ? '' : ' plain')}>{d.v}</div>
                  </div>
                </div>
              )
            ))}
          </div>
          <a className="cta" href={directions} target="_blank" rel="noopener">
            <span className="lab">Get Directions</span>
            <span className="cap"><Icon name="arrowRight" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
