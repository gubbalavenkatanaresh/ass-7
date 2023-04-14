import ModeContext from '../../context/ModeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ModeContext.Consumer>
    {value => {
      const {isDark} = value
      return <Navbar />
    }}
  </ModeContext.Consumer>
)

export default Home
