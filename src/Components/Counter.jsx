import { useSelector } from "react-redux";

const Counter = () => {
    const {count} = useSelector(state => state.counter)
    
    return (
        <div>
            <button className="bg-gray-600 p-2 font-semibold text-white">Increment by 5</button>
            <button className="bg-gray-800 p-2 font-semibold text-white">Increment</button>
            <h2>{count}</h2>
            <button className="bg-gray-600 p-2 font-semibold text-white">Decrement</button>
            <button className="bg-gray-800 p-2 font-semibold text-white">Decrement by 5</button>
        </div>
    );
};

export default Counter;