import React, {useState} from "react";
import "./index.css";

export function Counter() {
    const [Counter, setCounter] = useState(0);
        return(
            <div className="counter">
                <h1 className={Counter > 0 ? "counter__title--increment" : Counter === 0 ? "counter__title" : "counter__title--decrement"}>{Counter}</h1>
                <section className="buttons">
                    <button
                        onClick={() => setCounter(Counter + 1)}
                        className="button button--increment"
                    >
                        incrementar
                    </button>
                    <button
                        onClick={() => setCounter(Counter - 1)}
                        className="button button--decrement"
                    >
                        decrementar
                    </button>
                </section>
            </div>
        );
  }
