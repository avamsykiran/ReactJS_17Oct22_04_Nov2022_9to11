import { useState, useEffect } from 'react';

const FCounter = () => {

    let [steps, setSteps] = useState(-1);
    let [rounds, setRounds] = useState(-1);

    useEffect(()=>{
        setSteps(0);
        setRounds(0);
    }, []);

    useEffect(() => {
        if (steps < 0) {
            setSteps(0);
        } else if (steps === 10) {
            setSteps(0);
            setRounds(rounds + 1);
        }
    }, [steps]);

    const stepUp = event => setSteps(steps + 1);

    const stepDown = event => setSteps(steps - 1);

    return (
        <div className="col text-center">
            <button className="btn btn-lg btn-primary" onClick={stepUp}>Step Up</button>
            <h3>{steps} / {rounds} </h3>
            <button className="btn btn-lg btn-danger" onClick={stepDown}>Step Down</button>
        </div>
    );
}

export default FCounter;