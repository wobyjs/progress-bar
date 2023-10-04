/** @jsx automatic */
/** @jsxImportSource voby */

//@ts-ignore
import { JSX } from 'voby'
import './index.css'

import { render } from 'voby'
import { App } from './App'

import '../../dist/output.css'


render(<App />, document.getElementById('root'))
