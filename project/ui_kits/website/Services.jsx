const MSM_SERVICES = [
  {
    n: '01', icon: 'wrench', title: 'Machinery Breakdown Service',
    photo: 'machinery-breakdown-service.jpg',
    body: 'We are on call to help you get back online and minimise your production down time, with our experience and expertise in mechanical, electrical, pneumatic and hydraulic systems.',
  },
  {
    n: '02', icon: 'shield', title: 'Periodical Preventative Maintenance',
    photo: 'periodical-preventative-maintenance.jpg',
    body: 'We can put in place a tailor-made maintenance plan designed to suit your company\u2019s needs, resulting in reduced down time and preventing costly and time-consuming breakdowns.',
  },
  {
    n: '03', icon: 'ruler', title: 'Design & Development',
    photo: 'cad-design-development.jpg',
    body: 'Using 3D modelling and CAD software, we have the ability to design just about anything from one-off parts to full assemblies. This includes complete machine builds from concept through to fabrication, redesign of components already on your machine to improve operation and accuracy, and retro-fitting add-on components to improve your capabilities and work flow \u2014 as well as OH&S upgrades, one-off parts and even prototyping.',
  },
  {
    n: '04', icon: 'truck', title: 'Installation, Commissioning & Relocation',
    photo: 'machinery-installation.jpg',
    body: 'Just bought a machine, or looking to relocate your existing machines to a new location within your factory to optimise floor space and production? With effective planning to minimise down time, we at MSM do it with ease \u2014 providing all the necessary services such as floor-plan layouts, power requirements and the lifting equipment needed.',
  },
  {
    n: '05', icon: 'package', title: 'Spare Parts',
    photo: 'spare-parts.jpg',
    body: 'Using our local and world-wide network of suppliers, we can source the components and consumables that are needed to keep your business running at maximum efficiency.',
  },
];

function ServiceRow({ s, flip }) {
  return (
    <div className={'svc-row' + (flip ? ' flip' : '')}>
      <div className="svc-media">
        <img src={'../../assets/photos/' + s.photo} alt={s.title} loading="lazy" />
      </div>
      <div className="svc-text">
        <div className="svc-ic"><Icon name={s.icon} /></div>
        <h3>{s.title}</h3>
        <p>{s.body}</p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head center" id="intro">
          <span className="eyebrow">What We Do</span>
          <h2>High-quality service across the<br />manufacturing industry</h2>
          <p className="lead">At Machinery Solutions &amp; Maintenance, our aim is to provide
            high-quality services for our clients in every field of the manufacturing industry.</p>
        </div>
      </div>
      <div className="svc-rows">
        {MSM_SERVICES.map((s, i) => <ServiceRow key={s.n} s={s} flip={i % 2 === 1} />)}
      </div>
    </section>
  );
}
window.Services = Services;
