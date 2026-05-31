function WhyMSM() {
  const industries = ['Printing', 'Packaging', 'Furniture', 'Timber'];
  return (
    <section className="why" id="why">
      <div className="why-bg">
        <img src="../../assets/photos/why-msm.jpg" alt="" aria-hidden="true" />
      </div>
      <div className="wrap why-inner">
        <span className="eyebrow">Why MSM</span>
        <h2>A history of excellence</h2>
        <p className="lead">
          Machinery Solutions &amp; Maintenance has established a history of excellence. Our
          specialised staff are exceedingly gifted and dedicated to help you recognise your
          company&rsquo;s equipment servicing demands.
        </p>
        <div className="why-ind">
          <span className="why-ind-lbl">Experience across</span>
          <div className="chips">
            {industries.map((i) => <span className="chip" key={i}>{i}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
window.WhyMSM = WhyMSM;
