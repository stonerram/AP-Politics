import React, { useState, useEffect } from 'react';
import './Headers.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import Modal from 'react-modal';
import ContactForm from '../Form/ContactForm';

Modal.setAppElement('#root'); // Ensure this is set correctly.

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' };
    }
  };

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleMouseEnter = () => {
    setShowContactForm(true);
  };

  const handleMouseLeave = () => {
    // Delay hiding to allow interaction with the modal
    setTimeout(() => {
      if (!document.querySelector('.modal-overlay')) {
        setShowContactForm(false);
      }
    }, 100);
  };

  const closeModal = () => {
    setShowContactForm(false);
  };

  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img
          src='./images/logo party.png'
          alt=''
          style={{ marginLeft: '-1rem', marginTop: '0.3rem', width: '100px' }}
        />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
            if (!document.querySelector('.modal-overlay')) {
              setShowContactForm(false);
            }
          }}
        >
          <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
            <a href=''>UPCOMING EVENTS</a>
            <a href=''>NEWS</a>
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault(); 
                handleContactClick();
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              CONTACT US
            </a>
            <a href=''>KUTAMI LIVE</a>

            <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>

            <button className='button'>
              <a href=''>JOIN NOW</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
       
      </div>

      <Modal
        isOpen={showContactForm}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <ContactForm onClose={closeModal} />
      </Modal>
    </section>
  );
};

export default Header;
