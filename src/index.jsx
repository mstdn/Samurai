// import './style.css'
import './styles.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import Intro from './Intro'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<>
    <Intro>
        <App />
    </Intro>
</>
    
)