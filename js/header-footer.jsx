const headerRoot = ReactDOM.createRoot(document.querySelector('.header-root'));
const footerRoot = ReactDOM.createRoot(document.querySelector('.footer-root'));

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClassName: 'menul',
    };
  }

  changeVisibility = () => {
    this.setState((prevState) => ({
      menuClassName: prevState.menuClassName === 'menul' ? 'menul_show' : 'menul',
    }));
  };

  render() {
    const { menuClassName } = this.state;

    return (
      <header className="header">
        <div className="header__wrapper">
          <div className="block-logo">
            <a href="/">
            <img src="/img/logo.svg" alt="logo" className="block-logo__image" />
            </a>
          </div>
          <nav className="nav">
            <div className={`menu ${menuClassName}`}>
              <a className="menu__item" href="/about">
                About us
              </a>
              <a className="menu__item" href="/dev">
                Development
              </a>
              <a className="menu__item" href="/vacancies">
                Vacancies
              </a>
              <a className="menu__item menu__item_bordered" href="/contact">
                Contact us
              </a>
            </div>
            <button className="burger-button" onClick={this.changeVisibility}>
              <span className="menu-toggle-bar menu-toggle-bar--top"></span>
              <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
              <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
            </button>
          </nav>
        </div>
      </header>
    );
  }
}

const footer = (
  <footer className="footer">
    <a className="footer__link" href="#">
      careers@solvix-group.com
    </a>
    <div className="middle-line">
      <a href="/about" className="middle-line__link">
        About us
      </a>
      <a href="#" className="middle-line__link">
        Careers
      </a>
      <a href="#" className="middle-line__link">
        Contact us
      </a>
    </div>
    <div className="bottom-line">
      <span className="bottom-line__copyright">
        ©2024 - {new Date().getFullYear()}. Sovix All rights reserved.
      </span>
      <img src="/img/logo.svg" alt="logo" className="bottom-line__image" />
    </div>
  </footer>
);

headerRoot.render(<Header />);
footerRoot.render(footer);
