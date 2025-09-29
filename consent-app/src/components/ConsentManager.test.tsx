import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ConsentManager from "./ConsentManager";

void React;
describe("ConsentManager", () => {
  test("renders consent management title", () => {
    render(<ConsentManager />);

    expect(screen.getByRole("heading", { name: /consent management/i })).toBeInTheDocument();
  });

  test("renders all consent options with correct initial states", () => {
    render(<ConsentManager />);

    const smsCheckbox = screen.getByLabelText(/receive notifications by sms/i);
    expect(smsCheckbox).toBeInTheDocument();
    expect(smsCheckbox).toBeChecked();

    const emailCheckbox = screen.getByLabelText(/receive notifications by e-mail/i);
    expect(emailCheckbox).toBeInTheDocument();
    expect(emailCheckbox).not.toBeChecked();
  });

  test("toggles checkbox when clicked", async () => {
    const user = userEvent.setup();
    render(<ConsentManager />);

    const smsCheckbox = screen.getByLabelText(/receive notifications by sms/i);
    const emailCheckbox = screen.getByLabelText(/receive notifications by e-mail/i);

    await user.click(smsCheckbox);
    expect(smsCheckbox).not.toBeChecked();

    await user.click(emailCheckbox);
    expect(emailCheckbox).toBeChecked();

    await user.click(smsCheckbox);
    expect(smsCheckbox).toBeChecked();
  });

  test("maintains independent state for each consent option", async () => {
    const user = userEvent.setup();
    render(<ConsentManager />);

    const smsCheckbox = screen.getByLabelText(/receive notifications by sms/i);
    const emailCheckbox = screen.getByLabelText(/receive notifications by e-mail/i);

    expect(smsCheckbox).toBeChecked();
    expect(emailCheckbox).not.toBeChecked();

    await user.click(smsCheckbox);

    expect(smsCheckbox).not.toBeChecked();
    expect(emailCheckbox).not.toBeChecked();

    await user.click(emailCheckbox);
    expect(smsCheckbox).not.toBeChecked();
    expect(emailCheckbox).toBeChecked();
  });
});
