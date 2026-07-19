import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const einsatzbereicheLeft = [
    "Wohnanlagen", "Bürogebäude", "Industriehallen", 
    "Gewerbeobjekte", "Bildungseinrichtungen & Schulen", 
    "Hotels & Gastronomiebetriebe", "Kliniken & Pflegeheime"
  ];

  const einsatzbereicheRight = [
    "Einkaufszentren", "Rohbauprojekte", "Sanierungsmaßnahmen", 
    "Praxen & Kanzleien", "Öffentliche Gebäude & Behörden", 
    "Logistikzentren & Lagerhallen", "Freizeit- & Sportanlagen"
  ];

  return (
    <section className="testimonial-section">
      <div className="custom-box-width mb-5">
        <div className="row g-4 align-items-stretch">
          
          <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
            <h5 className="fw-bold mb-3 text-center text-lg-start" style={{ color: '#468DFF', letterSpacing: '1px', fontSize: '14px' }}>
              UNSERE REFERENZPARTNER
            </h5>
            <div className="row g-2 align-items-center justify-content-center py-3 border-top border-bottom h-100">
              <div className="row">
                
                {/* Box 1 */}
                <div className="col-6 col-md-4">
                  <div className="ref-box">
                    <div className="ref-img-container"><img src="/Testimonial/Reflogo1.webp" alt="Partner" /></div>
                    <span className="ref-description">Partner für Rohbau- und Betonarbeiten sowie Reinigungsleistungen auf diversen Baustellen.</span>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="col-6 col-md-4">
                  <div className="ref-box">
                    <div className="ref-img-container"><img src="/Testimonial/Reflogo2.webp" alt="Partner" /></div>
                    <span className="ref-description">Zusammenarbeit bei Industrie- und Gewerbebauprojekten im Bereich Bauleistungen und Facility Services.</span>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="col-6 col-md-4">
                  <div className="ref-box">
                    <div className="ref-img-container"><img src="/Testimonial/Reflogo3.webp" alt="Partner" /></div>
                    <span className="ref-description">Zusammenarbeit im Bereich Reinigungs- und Facility-Services für Büro-, Industrie- und Gewerbeobjekte.</span>
                  </div>
                </div>

                {/* Box 4 */}
                <div className="col-6 col-md-4">
                  <div className="ref-box">
                    <div className="ref-img-container"><img src="/Testimonial/Reflogo4.webp" alt="Partner" /></div>
                    <span className="ref-description">Zusammenarbeit im Bereich Gebäudereinigung und infrastrukturelles Facility Management.</span>
                  </div>
                </div>

                {/* Box 5 */}
                <div className="col-6 col-md-4">
                  <div className="ref-box">
                    <div className="ref-img-container"><img src="/Testimonial/Reflogo5.webp" alt="Partner" /></div>
                    <span className="ref-description">Unterstützung bei Unterhalts-, Glas- und Sonderreinigungsleistungen sowie Facility Services.</span>
                  </div>
                </div>

                {/* Box 6: Text Based */}
                <div className="col-6 col-md-4">
                  <div className="sasse-box-container">
                    <span className="sasse-title">STRABAG</span>
                    <span className="sasse-description">
                      <strong className="sasse-subtitle">SOCIETAS EUROPAEA</strong>
                      Unterstützung bei verschiedenen Bauprojekten im Bereich Rohbauarbeiten, Schalungsarbeiten und Maurerarbeiten.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="p-4 text-white h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: '#202020', borderRadius: '4px' }}>
              <h6 className="fw-bold mb-3" style={{ color: '#468DFF', letterSpacing: '0.5px', fontSize: '13px' }}>
                EINSATZBEREICHE
              </h6>
              <div className="row g-2">
                <div className="col-6">
                  <ul className="list-unstyled mb-0" style={{ fontSize: '11px', lineHeight: '2' }}>
                    {einsatzbereicheLeft.map((item, i) => <li key={i} className="d-flex align-items-center gap-2 opacity-90"><span style={{ color: '#468DFF', fontSize: '12px' }}>✓</span> {item}</li>)}
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled mb-0" style={{ fontSize: '11px', lineHeight: '2' }}>
                    {einsatzbereicheRight.map((item, i) => <li key={i} className="d-flex align-items-center gap-2 opacity-90"><span style={{ color: '#468DFF', fontSize: '12px' }}>✓</span> {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;