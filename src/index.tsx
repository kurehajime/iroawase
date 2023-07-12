import ReactDOM from 'react-dom/client'
import './index.css'
import GameElement from './components/GameElement'
import BackElement from './components/BackElement'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(<div className='container'>
    <BackElement></BackElement>
    <div className='outbox'>
        <GameElement />
    </div>
</div>)