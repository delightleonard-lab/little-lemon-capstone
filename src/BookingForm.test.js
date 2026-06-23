/* global beforeAll, jest, test, expect, describe */
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./MainContent";

beforeAll(() => {
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    window.fetchAPI = jest.fn(() => expected);
});

// =============================================================
// STEP 1 & 2: Form Element & Validation State Tests
// =============================================================
describe("BookingForm HTML5 & JavaScript Validation", () => {
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    test("should apply correct HTML5 validation attributes to inputs", () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const dateInput = screen.getByLabelText(/Choose date/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);

        // Step 1: Verify presence of HTML5 validation constraint properties
        expect(dateInput).toBeRequired();
        expect(guestsInput).toBeRequired();
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("max", "10");
    });

    test("should keep submit button disabled when form state is invalid", () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const submitButton = screen.getByRole("button", { name: /Make Your Reservation/i });
        const guestsInput = screen.getByLabelText(/Number of guests/i);

        // Initial state is invalid because no date is chosen yet
        expect(submitButton).toBeDisabled();

        // Make date valid, but trigger an invalid guests value (0 guests)
        const dateInput = screen.getByLabelText(/Choose date/i);
        fireEvent.change(dateInput, { target: { value: "2026-06-23" } });
        fireEvent.change(guestsInput, { target: { value: "0" } });

        // Step 2: Verify JavaScript validation path blocks submission
        expect(submitButton).toBeDisabled();
    });

    test("should enable submit button when form state is fully valid", () => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const dateInput = screen.getByLabelText(/Choose date/i);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const submitButton = screen.getByRole("button", { name: /Make Your Reservation/i });

        // Step 2: Provide fully valid inputs via simulated user event changes
        fireEvent.change(dateInput, { target: { value: "2026-06-23" } });
        fireEvent.change(guestsInput, { target: { value: "4" } });

        // Verification check that state calculation enables form submission
        expect(submitButton).not.toBeDisabled();
    });
});

// =============================================================
// Reducer Logic Context Tests
// =============================================================
describe("Booking Reducer Functions with API integration", () => {
    test("initializeTimes calls fetchAPI and returns a non-empty array of available times", () => {
        const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const actualTimes = initializeTimes();
        expect(actualTimes).toEqual(expectedTimes);
        expect(window.fetchAPI).toHaveBeenCalled();
    });

    test("updateTimes updates and returns the correct available times based on a pre-selected dispatch date", () => {
        const previousState = ["17:00", "18:00"];
        const action = { type: "UPDATE_TIMES", payload: "2026-06-23" };
        const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const newState = updateTimes(previousState, action);
        expect(newState).toEqual(expectedTimes);
    });
});