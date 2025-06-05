import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SendButton from '../SendButton';
import { Recipient } from '../../types';

const renderButton = (recipient: Recipient, isValid: boolean, onSend = vi.fn()) => {
  render(<SendButton recipient={recipient} isValid={isValid} onSend={onSend} />);
  return onSend;
};

describe('SendButton', () => {
  it('displays email validation error', () => {
    renderButton({ firstName: 'John', email: 'invalid' }, false);
    expect(screen.getByText(/adresse email valide/i)).toBeInTheDocument();
  });

  it("displays first name error when missing", () => {
    renderButton({ firstName: '', email: 'test@example.com' }, false);
    expect(screen.getByText(/prénom du destinataire/i)).toBeInTheDocument();
  });

  it('calls onSend when valid and clicked', async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const onSend = renderButton({ firstName: 'John', email: 'test@example.com' }, true);
    await user.click(screen.getByRole('button'));
    vi.advanceTimersByTime(1500);
    expect(onSend).toHaveBeenCalled();
    vi.useRealTimers();
  });
});
