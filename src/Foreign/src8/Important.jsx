import { createRoot } from 'react-dom/client'
// import Button from './button.jsx'
import Button from './EnhancedButton.jsx'
/* EnhancedButton.jsx use react hooks while the button.jsx uses pure javascript
but enhancedButton.jsx is more optimized and react controlled first may lead to bugs it shouldnt be used   */
import './button.css'

createRoot(document.getElementById('Javascript-React')).render(
    <Button />
)