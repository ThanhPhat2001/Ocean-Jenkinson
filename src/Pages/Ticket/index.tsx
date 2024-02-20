import styles from './ticket.module.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const Ticket = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className='history'>
        <div className={`${styles.main} container`}>
          <div className='col-xs-12 col-sm-12 col-md-6 col-xxl-8'>abcoii</div>
          <div className='col-xs-12 col-sm-12 col-md-6 col-xxl-4'>123</div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Ticket