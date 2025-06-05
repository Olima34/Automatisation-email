import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecipientForm from '../RecipientForm';
import { Recipient } from '../../types';

const setup = (recipient: Recipient = { firstName: '', email: '' }) => {
  const handleChange = vi.fn();
  render(<RecipientForm recipient={recipient} onChange={handleChange} />);
  return { handleChange };
};

describe('RecipientForm', () => {
  it('calls onChange when first name changes', async () => {
    const user = userEvent.setup();
    const { handleChange } = setup();
    const input = screen.getByLabelText(/prénom/i);
    await user.type(input, 'John');
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onChange when email changes', async () => {
    const user = userEvent.setup();
    const { handleChange } = setup();
    const input = screen.getByLabelText(/adresse email/i);
    await user.type(input, 'test@example.com');
    expect(handleChange).toHaveBeenCalled();
  });
});
