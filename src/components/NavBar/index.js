import './index.css';

const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    <ul>
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'link-active' : 'link-inactive'}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={
            currentPage === 'Portfolio' ? 'link-active' : 'link-inactive'
          }
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'link-active' : 'link-inactive'}
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={
            currentPage === 'Contact' ? 'link-active' : 'link-inactive'
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
