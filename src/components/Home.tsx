import { CiCircleAlert } from 'react-icons/ci';



function Home() {
  return (
      <header className='header-container'>
        <div className='logo-container'>
        <img src="/public/logo-img.svg"/>
          <div className='logo-text'>
            <span className='logo-text-bold'>summerly</span>
            <span className='logo-text-regular'>media</span>
          </div>
          </div>
        <nav className="menu-options">
          <a href="#">What We Offer</a>
          <a href="#">How it Works</a>
          <a href="#">Portifolio</a>
        </nav>
        <button>
          <div className='btn-face-white'>
          Contact us  <CiCircleAlert/>
          </div>
          <div className='btn-face-purple'>
          Contact us  <CiCircleAlert/>
          </div>
          </button>

      </header>
  )
}

export default Home
