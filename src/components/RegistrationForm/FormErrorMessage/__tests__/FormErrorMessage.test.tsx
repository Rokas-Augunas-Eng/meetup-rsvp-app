import React from 'react';
import { render } from '@testing-library/react';
import { FormErrorMessage } from '../FormErrorMessage';

describe('FormErrorMessage component', () => {
  it('renders the error message when there is an error', () => {
    const mockErrors = {
      exampleField: {
        type: 'required',
        message: 'This field is required',
      },
    };

    const name = 'exampleField';

    const { getByText } = render(
      <FormErrorMessage errors={mockErrors} name={name} />
    );

    const errorMessage = getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
  });

  it('does not render the error message when there is no error', () => {
    const errors = {};
    const name = 'exampleField';

    const { queryByText } = render(
      <FormErrorMessage errors={errors} name={name} />
    );

    const errorMessage = queryByText('This field is required');
    expect(errorMessage).toBeNull();
  });
});
