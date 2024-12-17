import { fireEvent, render } from "@testing-library/react";
import useKeyPress from "../../../hooks/use-key-press";

describe("useKeyPress works if", () => {
  const targetKey = "j";
  const KeyPressComponent = () => {
    const isKeyPressed = useKeyPress(targetKey, {});
    return (
      <p data-testid="result-text">{isKeyPressed ? "pressed" : "waiting"}</p>
    );
  };

  it("the target key has pressed", () => {
    const { container, getByText } = render(<KeyPressComponent />);

    fireEvent.keyDown(container, {
      key: targetKey,
    });

    expect(getByText(/pressed/i)).toBeTruthy();
  });

  it("the target key has not pressed", () => {
    const { getByText } = render(<KeyPressComponent />);
    expect(getByText(/waiting/i)).toBeTruthy();
  });
});
