import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function Navigation() {
    return (
        <div className='menu'>
            
            <Link to='/'>
                <h2 className="main-header">React Crud Operations</h2>
            </Link>
            <div>
                <Link to='/create'>
                    <Button>Create</Button>
                </Link>
            </div>
        </div>
    )

}