import React from 'react'

function UserCard() {
    return (
        <button className="flex items-center">
            <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                className="w-10 h-10 object-cover rounded-full mx-4"
            />
            <span className="text-gray-700 font-bold mx-1 hover:underline">Alex John</span>
        </button>
    )
}

export default UserCard
