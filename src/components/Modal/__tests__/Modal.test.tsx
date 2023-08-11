import { Modal, ModalProps } from '../Modal';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event/';

describe('Modal component', () => {
  const mockOnCancelAction = jest.fn();
  const mockOnPrimaryAction = jest.fn();
  const modalProps: ModalProps = {
    isModalOpen: true,
    title: 'Unsaved changes',
    text: 'Are you sure you want to leave?',
    confirmButton: {
      text: 'Yes',
      onPrimaryAction: mockOnPrimaryAction,
    },
    cancelButton: { text: 'Cancel', onClose: mockOnCancelAction },
  };

  it('should render as expected', async () => {
    render(<Modal {...modalProps} />);
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible();
    });

    expect(screen.getByText(modalProps.title)).toBeVisible();

    const cancelButton = screen.getByRole('button', {
      name: modalProps.cancelButton.text,
    });
    const primaryActionButton = screen.getByRole('button', {
      name: modalProps.confirmButton.text,
    });

    expect(cancelButton).toBeVisible();
    expect(primaryActionButton).toBeVisible();

    await userEvent.click(cancelButton);
    expect(mockOnCancelAction).toHaveBeenCalledTimes(1);

    await userEvent.click(primaryActionButton);
    expect(mockOnPrimaryAction).toHaveBeenCalled();
  });
});
