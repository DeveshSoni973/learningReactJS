function Card(props) {
    return (
        <>
            <h1 className="bg-green-400 text-black rounded-2xl p-4">Tailwind Test</h1>

            <div className="max-w-sm mx-auto mt-6 bg-white shadow-lg rounded-2xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80"
                    alt="Nature"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{props.username}</h2>
                    <p className="text-gray-600 text-sm mt-2">{props.quote}</p>
                </div>
            </div>
        </>
    )
}

export default Card;