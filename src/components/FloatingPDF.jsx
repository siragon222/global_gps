import React from 'react'

function FloatingPDF() {
  const pdfHref = 'http://drive.google.com/drive/folders/1YxAt7GcgRUFtxS'
  return (
    <a
      href={pdfHref}
      target="_blank"
      rel="noreferrer"
      className="pdf-float"
      aria-label="Descarga Nuestro Portafolio"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="pdf-icon"
        aria-hidden="true"
      >
        <path fill="#FFFFFF" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
      </svg>
      <span className="pdf-text">Descarga Nuestro Portafolio</span>
    </a>
  )
}

export default FloatingPDF