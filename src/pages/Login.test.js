import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
import Login from './Login';

const store = configureStore({ reducer });

describe('Login Component', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
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
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const existingUserLabel = screen.getByTestId('existing-user-label');
    const usernameLabel = screen.getByTestId('username-label');
    const usernameInput = screen.getByTestId('username-input');
    const passwordLabel = screen.getByTestId('password-label');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-login');

    expect(existingUserLabel.textContent).toBe('Existing User');
    expect(usernameLabel.textContent).toBe('Username');
    expect(passwordLabel.textContent).toBe('Password');
    expect(submitButton.textContent).toBe('Login');

    fireEvent.change(usernameInput, { target: { value: 'user' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(usernameInput.value).toBe('user');
    expect(passwordInput.value).toBe('password');
  });

  test('shows error message for invalid credentials', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const usernameInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-login');

    fireEvent.change(usernameInput, { target: { value: 'user' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage.textContent).toBe('Username or password is incorrect');
  });
});
