import { render } from ''
import ReactDOM from 'woby-dom'
import App from './App'

it('renders without crashing', () => {
    const div = document.createElement('div')
    const unmount = render(<App />, div)
  unmount()
})
