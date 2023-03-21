const data = new Date();
export default function Footer() {
  

  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top navbar-fixed-bottom'>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            href='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>
            <svg className='bi' width='30' height='24'></svg>
          </a>
          <span className='mb-3 mb-md-0 text-muted'>
            {data.getFullYear()} - Jonathan Pereira <br />
            Feito com ☕️, usando React!
          </span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a className='text-muted' href=' '>
              <svg className='bi' width='24' height='24'>
                <use xlinkHref=''></use>
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href=' '>
              <svg className='bi' width='24' height='24'>
                <use xlinkHref='#instagram'></use>
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href=' '>
              <svg className='bi' width='24' height='24'>
                <use xlinkHref='#facebook'></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
  );
}
