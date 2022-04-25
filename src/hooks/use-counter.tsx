import { useEffect, useState } from "react";

const useCounter = () => {
    const [, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
};

export default useCounter;