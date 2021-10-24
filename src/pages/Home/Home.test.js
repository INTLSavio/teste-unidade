import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {Home} from ".";

describe ("Counter Component", () => {
    test("Deve iniciar o titulo com o valor 0", () => {
        render(<Home />);

        const CounterTitle = screen.getByText('Sávio')
        expect(CounterTitle).toHaveClass("textList");

    });
});
