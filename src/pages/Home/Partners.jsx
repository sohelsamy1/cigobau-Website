// src/components/Partners.jsx
import React from 'react';
import './Partners.css'; // প্রয়োজনীয় সিএসএস

const Partners = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#e9ecef' }}>
      <div className="custom-box-width text-center">
        {/* সেকশন শিরোনাম */}
        <h2 className="fw-bold mb-4">Our Partners</h2>
        <div className="mx-auto mb-4" style={{ width: '100px', height: '2px', backgroundColor: '#3b82f6' }}></div>
        <p className="text-muted mb-5">
          Wir empfehlen uneingeschränkt als verlässlicher Partner im Bauwesen und freuen uns auf zukünftige gemeinsame Projekte.
        </p>

        {/* লোগো গ্রিড */}
        <div className="row align-items-center justify-content-center g-4">
          <div className="col-6 col-md-3">
            <div className="p-3 bg-white shadow-sm rounded">Logo 1</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-white shadow-sm rounded">Logo 2</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-white shadow-sm rounded">Logo 3</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-white shadow-sm rounded">Logo 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;