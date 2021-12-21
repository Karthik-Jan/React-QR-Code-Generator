import React, { useState } from 'react';
import Basic from './qr-types/Basic';
import Advance from './qr-types/Advance';

const App = () => {
    const [enableBasic, setEnableBasic] = useState(false)
    const [enableAdvance, setEnableAdvance] = useState(false)

    return (
        <div style={{
            backgroundColor: '#dddfd4',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h4 style={{ backgroundColor: '#fae596', padding: '24px 300px', borderRadius: 8 }}
                onClick={() => {
                    setEnableBasic(true)
                    setEnableAdvance(false)
                }}>Generate Basic</h4>
            <h4 style={{ backgroundColor: '#fae596', padding: '24px 290px', borderRadius: 8 }}
                onClick={() => {
                    setEnableBasic(false)
                    setEnableAdvance(true)
                }}>Generate Advance</h4>
            {enableBasic && <Basic />}
            {enableAdvance && <Advance />}
        </div>
    )
}

export default App;
