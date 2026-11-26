// Abstract CSS previews. These are illustrations, not real screenshots.

export function MoviePreview() {
  return (
    <div className="pv pv-movie" aria-hidden="true">
      <div className="pv-inner">
        <div className="pv-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="pv-search">
          <i />
          <b />
        </div>
        <div className="pv-posters">
          <div className="pv-poster p1">
            <span className="pv-play" />
          </div>
          <div className="pv-poster p2" />
          <div className="pv-poster p3" />
          <div className="pv-poster p4" />
          <div className="pv-poster p5" />
          <div className="pv-poster p6" />
        </div>
        <div className="pv-pager">
          <i />
          <i className="on" />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

export function PetPreview() {
  return (
    <div className="pv pv-pet" aria-hidden="true">
      <div className="pv-inner">
        <div className="pv-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="pv-banner">
          <div className="paw">
            <i className="toe t1" />
            <i className="toe t2" />
            <i className="toe t3" />
            <i className="toe t4" />
            <i className="pad" />
          </div>
          <div className="pv-lines">
            <b />
            <b />
            <em />
          </div>
        </div>
        <div className="pv-cats">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="pv-products">
          {[1, 2, 3].map((n) => (
            <div className="pv-product" key={n}>
              <div className={`pv-thumb th${n}`} />
              <b />
              <span />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
