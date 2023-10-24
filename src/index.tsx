import ReactDOM from 'react-dom/client';

import './index.scss';
import { AppDropdown } from './AppDropdown';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <h1>Dropdown React</h1>
    <AppDropdown />
  </>
);