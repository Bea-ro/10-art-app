/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthForm from '../ui/Form/AuthForm';


jest.mock('next/router', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));

describe('AuthForm', () => {
    it('should be render an error message when the email provided is not valid', () => {
      render(
          <AuthForm action="login"/>
      );
      const emailInput = screen.getByPlaceholderText('email')
      userEvent.type(emailInput, 'invalid-email')

      const submitButton = screen.getByText('Submit');
      userEvent.click(submitButton);

      waitFor(() => expect(screen.queryByText('Please, check your email and password and try again.')).toBeInTheDocument())
    });
  });