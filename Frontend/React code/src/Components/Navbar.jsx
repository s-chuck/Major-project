import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold mr-4">Apipedia</h1>
                <div className="flex items-center max-w-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-2 px-4 mr-2 border border-gray-300 rounded-lg flex-grow"
                    />
                    <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Search</button>
                </div>
            </div>
        </>
    )
}

export default Navbar