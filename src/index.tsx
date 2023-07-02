import ReactDOM from 'react-dom/client'
import './index.css'
import GameElement from './components/GameElement'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(<div className='container'>
    <div className='outbox'>
        <GameElement />
    </div>
</div>)