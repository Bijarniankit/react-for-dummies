import React,{forwardRef} from 'react';

function User3( props, ref) {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
}

export default forwardRef(User3)