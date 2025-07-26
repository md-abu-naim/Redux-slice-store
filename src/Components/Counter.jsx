import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Redux/Features/Counter/CounterSlice";

const Counter = () => {
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button className="bg-gray-600 p-2 font-semibold text-white">Increment by 5</button>
            <button onClick={() => dispatch(increment())} className="bg-gray-800 p-2 font-semibold text-white">Increment</button>
            <h2>{count}</h2>
            <button className="bg-gray-600 p-2 font-semibold text-white">Decrement</button>
            <button className="bg-gray-800 p-2 font-semibold text-white">Decrement by 5</button>
        </div>
    );
};

export default Counter;