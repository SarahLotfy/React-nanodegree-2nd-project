import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
import NewPoll from './NewPoll';

const store = configureStore({ reducer });

describe('NewPoll Component', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  test('displays all input fields and labels correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    const firstOptionLabel = screen.getByTestId('firstOptionLabel');
    const firstOptionInput = screen.getByTestId('firstOption');
    const secondOptionLabel = screen.getByTestId('secondOptionLabel');
    const secondOptionInput = screen.getByTestId('secondOption');
    const submitButton = screen.getByTestId('submit-poll');

    expect(firstOptionLabel.textContent).toBe('First Option');
    expect(secondOptionLabel.textContent).toBe('Second Option');
    expect(submitButton.textContent).toBe('Add Poll');

    fireEvent.change(firstOptionInput, { target: { value: 'Texas' } });
    fireEvent.change(secondOptionInput, { target: { value: 'New Hampshire' } });

    expect(firstOptionInput.value).toBe('Texas');
    expect(secondOptionInput.value).toBe('New Hampshire');
  });
});
