import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TemplateSelector from '../TemplateSelector';
import { EmailTemplate } from '../../types';

const templates: EmailTemplate[] = [
  { id: '1', name: 'A', subject: 'A subject', body: 'Body A' },
  { id: '2', name: 'B', subject: 'B subject', body: 'Body B' }
];

describe('TemplateSelector', () => {
  it('calls onSelect when a template is clicked', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    render(
      <TemplateSelector templates={templates} selectedTemplateId="1" onSelect={handleSelect} />
    );
    await user.click(screen.getByText('B'));
    expect(handleSelect).toHaveBeenCalledWith('2');
  });

  it('highlights the selected template', () => {
    const handleSelect = vi.fn();
    render(
      <TemplateSelector templates={templates} selectedTemplateId="2" onSelect={handleSelect} />
    );
    const selected = screen.getByText('B').closest('div');
    expect(selected).toHaveClass('bg-amber-50', { exact: false });
  });
});
