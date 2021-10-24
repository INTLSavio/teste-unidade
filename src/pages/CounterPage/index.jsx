import { useState } from "react";
import { Header } from "../../components/Header";

import { Counter } from '../../components/Counter'

export function CounterPage(){

    return(
        <>
            <Header />
            <Counter />
        </>
    );
}