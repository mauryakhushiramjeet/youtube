import React from 'react'

const Head = () => {
    return (
        <div className='grid grid-flow-col' >
            <div className='flex'>
                <img className='h-6'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" 
                    alt="menu" />
                <img className="h-10"
                    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" 
                    alt="youtube logo" />
            </div>
            <div>
                <input type='text' />
                <button className='bg-yellow-400'>Search</button>
            </div>
            <div>
                <img
                    src="https://iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user -icon" />
            </div>
        </div>
    )
}

export default Head
