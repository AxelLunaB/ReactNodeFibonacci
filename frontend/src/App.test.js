import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import userEvent from "@testing-library/user-event";
import { FibonacciCalculator } from "./components/FibonacciCalculator";

test("has components", () => {
  const mStore = store;
  render(
    <Provider store={mStore}>
      <App />
    </Provider>
  );
  const sendButton = screen.getByDisplayValue("Calculate");
  expect(sendButton).toBeInTheDocument();

  const inputButton = screen.getByAltText("inputFibonacci");
  expect(inputButton).toBeInTheDocument();

  const resDiv = screen.getByTestId("fibonacciStatusText");
  expect(resDiv).toBeInTheDocument();
});

test("has click function", async () => {
  const mStore = store;
  render(
    <Provider store={mStore}>
      <App />
    </Provider>
  );
  const inputButton = screen.getByAltText("inputFibonacci");
  expect(inputButton).toBeInTheDocument();

  const resDiv = screen.getByTestId("fibonacciStatusText");
  expect(resDiv).toBeInTheDocument();

  userEvent.click(inputButton);

  expect(resDiv).toHaveTextContent(/loading.../i);
});
