import React from 'react'

function FloatingWhatsApp() {
  const whatsappHref = 'https://wa.me/5758841288'
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chatea por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="wa-icon"
        aria-hidden
      >
        <path fill="#FFFFFF" d="M19.1 17.7c-.3-.1-1-.5-1.1-.6-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 .2.4.5.8c.3.4 1.9 3 4.6 4.1.6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.5-.3z"/>
        <path fill="#FFFFFF" d="M16 3C8.8 3 3 8.8 3 16c0 2.2.6 4.3 1.7 6.2L3 29l6.9-1.8c1.8 1 3.9 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2.1 0-4-.6-5.6-1.6l-.4-.2-4.1 1.1 1.1-4-.2-.4c-1.1-1.7-1.6-3.7-1.6-5.7 0-6 4.9-10.9 10.9-10.9s10.9 4.9 10.9 10.9-4.9 10.8-10.9 10.8z"/>
      </svg>
    </a>
  )
}

export default FloatingWhatsApp


