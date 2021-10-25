import { render, screen } from "@testing-library/react";

import {Home} from ".";

describe ("Home Component", () => {
    test("Verificar se o h1 está com a classe correta", () => {
        render(<Home />);

        const CounterTitle = screen.getByText('Sávio')
        expect(CounterTitle).toHaveClass("textList");

    });
});
