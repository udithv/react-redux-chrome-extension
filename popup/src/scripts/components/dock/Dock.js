import React from 'react';

import DockCreate from './DockCreate';
import DockList from './DockList';

const Dock = () => {
    return (
        <div class="dock__dashboard">
            <DockCreate />
            <DockList /> 
        </div>
    );
}

export default Dock;