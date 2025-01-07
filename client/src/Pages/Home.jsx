const Homepage = () => {
    return (
        <>
            <div className="flex justify-center items-center h-dvh">
                <div>
                    <input type="email"  className="block border border-gray-400 m-2 p-1" placeholder="Enter email" aria-label="Email Input" />
                    <input type="text" className="block border border-gray-400 m-2 p-1" placeholder="Enter room code" aria-label="Room Code Input" />
                    <button className="block border border-gray-400 bg-green-500 m-2 p-1">Enter Room</button>
                </div>
            </div>
        </>
    );
};

export default Homepage;
