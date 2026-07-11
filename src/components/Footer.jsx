import React from 'react';

const Footer = () => {
  return (
    <footer className="footer py-5 mt-5" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
      <div className="custom-box-width">
        <div className="row align-items-center g-4">
          
          {/* ১. লোগো এরিয়া */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <img src="/logo1.jpg"  alt="CIGO-BAU GMBH" style={{ width: '100%', maxWidth: '180px', height: 'auto' }} />
          </div>

          {/* ২. সদস্যপদ এরিয়া */}
          <div className="col-12 col-md-3 text-center">
            <h6 className="fw-bold mb-3">Mitgliedschaft</h6>
            <img src="/logo2.jpg"  alt="Handwerkskammer Berlin" style={{ width: '100%', maxWidth: '120px', height: 'auto' }} />
          </div>

          {/* ৩. ম্যানেজিং ডিরেক্টর */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h6 className="fw-bold mb-3">Geschäftsführer:</h6>
            <p className="mb-1 fw-bold">Dervis Aljkovic</p>
            <ul className="list-unstyled small">
              <li>📱 0173 3103347</li>
              <li>📠 030 726211048</li>
              <li>📞 030 726211047</li>
            </ul>
          </div>

          {/* ৪. কোম্পানির ঠিকানা */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h6 className="fw-bold mb-3">CIGO BAU GMBH</h6>
            <div className="small">
              <p className="mb-1">Landsberger Str. 218, 12623 Berlin</p>
              <p className="mb-1">Amtsgericht Berlin-Charlottenburg</p>
              <p className="mb-1">HRB Nr. 208362B</p>
              <p className="mb-0">USt. ID: DE326968695</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;