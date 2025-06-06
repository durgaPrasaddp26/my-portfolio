import React, { useState } from 'react';
import Cert from "../ass/cert.jpeg";

const certifications = [
  {
    name: 'JAVA, J2EE, TESTING & DEBUGGING',
    issuer: 'Tecknowledge',
    date: 'Nov-2022 - Feb-2023',
    image: Cert
  },
];

const Certifications = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div id="certifications" className='pt-3'>
      <section  className="pt-5 bg-opacity-50 fade-in section-delay-1 d-flex flex-column align-items-center" >
        <div className="container text-center">
          <h2 className="display-5 fw-bold text-primary mb-5 slide-in section-delay-2">Certifications</h2>
          <div className="d-flex justify-content-center">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="col-md-6 slide-in section-delay-1">
                <div className="card bg-black text-light border-primary card-hover h-100">
                  <div className="position-relative">
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      className="card-img-top border-bottom border-primary"
                      style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => openModal(cert.image)}
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x200.png?text=Certificate+Not+Found';
                      }}
                    />
                    {showTooltip && (
                      <div
                        className="position-absolute bg-primary text-white px-2 py-1 rounded"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 10,
                          pointerEvents: 'none',
                          fontSize: '0.9rem'
                        }}
                      >
                        Click to see preview
                      </div>
                    )}
                  </div>
                  <div className="card-body">
                    <h3 className="card-title h4 fw-bold text-primary">{cert.name}</h3>
                    <p className="card-text">Issuer: {cert.issuer}</p>
                    <p className="card-text">Date: {cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Preview */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content bg-dark text-light border-primary">
              <div className="modal-header border-primary">
                <h5 className="modal-title text-primary">Certificate Preview</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedImage}
                  alt="Certificate Preview"
                  style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;