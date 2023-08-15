import { render, screen } from '@testing-library/react';
import { CustomBarChart } from '../CustomBarChart';

describe('CustomBarChart', () => {
  const mockData = [
    { month: 'January', count: 150 },
    { month: 'February', count: 220 },
    { month: 'March', count: 180 },
  ];

  it('renders with provided data and props', () => {
    render(
      <CustomBarChart data={mockData} title="Monthly Data" dataKey="month" />
    );

    const titleElement = screen.getByText('Monthly Data');

    expect(titleElement).toBeInTheDocument();
  });
});
