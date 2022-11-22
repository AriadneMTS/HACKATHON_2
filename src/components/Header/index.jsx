import { Link } from 'react-router-dom'
import logoImg from '../../imagens/rick.png'

export const Header = () => {
  return (
    <header 
      className='d-flex justify-content-between align-items-center'
      style={{
        background: '#0AB0C7',
        padding: '0 20px'
      }}
    >
      <div 
        style={{
          display: 'flex',
          textDecoration: 'none',
          color: '#fafafa',
          alignItems: 'center',
          gap: 16
        }}
      >
        <Link to='/'>
          <img 
            src={logoImg} 
            alt='LOGO'
            style={{
              width: 125,
            }}
          />
        </Link>
        <h1
          style={{
            fontFamily: 'GetSchwifty',
            fontSize: 46,
            fontWeight: 600,
          }}
        >
          Rick and Morty
        </h1>
      </div>
      
      <Link 
        to='/'
        className='btn btn-light'
        style={{
          padding: '10px',
        }}
      >
        Home
      </Link>
    </header>
  )
}