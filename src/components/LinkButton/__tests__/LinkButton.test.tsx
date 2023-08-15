import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LinkButton } from '../LinkButton';

describe('LinkButton component', () => {
  it('renders button with default link and name', () => {
    render(<LinkButton name="RSVP" />);
    const button = screen.getByText('RSVP');
    expect(button).toBeInTheDocument();
    expect(button.getAttribute('href')).toBe('/');
  });

  it('renders button with custom link', () => {
    render(<LinkButton name="View Guests" link="/guests" />);
    const button = screen.getByText('View Guests');
    expect(button).toBeInTheDocument();
    expect(button.getAttribute('href')).toBe('/guests');
  });

  it('calls onClick when button is clicked', async () => {
    const handleClick = jest.fn();
    render(<LinkButton name="Admin" onClick={handleClick} />);
    const button = screen.getByText('Admin');

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
