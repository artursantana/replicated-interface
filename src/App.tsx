import '../src/App.scss'
import { Content } from './components/Content'

import Home from './components/Home'

export const App = () => {
  return (
    <div className='main'>
      <Home />
      <Content />
    </div>
  )
}
