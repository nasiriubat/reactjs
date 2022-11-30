import { Routes, Route } from 'react-router-dom'
import Create from './components/user/create';
import Read from './components/user/read';
import Update from './components/user/update';
export default function CustomRoute() {
    return (
        <div>
            <div>
                <Routes>
                    <Route exact path='/' element={<Read />} />
                </Routes>
            </div>
            <div>
                <Routes>
                    <Route exact path='/create' element={<Create />} />
                </Routes>
            </div>
            <div style={{ marginTop: 20 }}>
                <Routes>
                    <Route exact path='/read' element={<Read />} />
                </Routes>

            </div>
            <Routes>
                <Route path='/update' element={<Update />} />
            </Routes>

        </div>
    )

}