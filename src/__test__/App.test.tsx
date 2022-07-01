import { act, render, waitFor } from '@testing-library/react';
import App from '../App';
import { Content, GlobalStyle } from '../model/Global';


// helpers
import {
    componentRenderByMemoryRouter,
    toBeExpectByTestId,
} from "../utils/testUtils";

describe("Test App Router", () => {
    test("should render App componet", async () => {
        await act(async () => {
            componentRenderByMemoryRouter("/", <Content />);
        });
         waitFor(() => {
            toBeExpectByTestId("app-component-test-id");
        });
    })});
