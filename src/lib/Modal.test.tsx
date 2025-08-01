import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('should not render modal when open is false', () => {
    render(
      <Modal
        open={false}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render modal with title when open is true', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should call onClose when clicking on overlay', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when clicking on overlay if persistent is true', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        persistent={true}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should not call onClose when clicking on modal content', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    const content = screen.getByText('Test content').closest('.modal-content-default');
    if (content) {
      fireEvent.click(content);
    }

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should call onClose when clicking on close button', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose with Enter key on close button', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.keyDown(closeButton, { key: 'Enter' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose with Space key on close button', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.keyDown(closeButton, { key: ' ' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should apply specified width', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={600}
        body={<div>Test content</div>}
      />,
    );

    const content = screen.getByText('Test content').closest('.modal-content-default');
    expect(content).toHaveStyle({ width: '600px' });
  });

  it('should render with custom header', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        header={<div>Custom header</div>}
        width={400}
        body={<div>Test content</div>}
      />,
    );

    expect(screen.getByText('Custom header')).toBeInTheDocument();
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('should render with footer', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
        footer={<button>Action</button>}
      />,
    );

    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('should apply blur class when blur is true', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
        blur={true}
      />,
    );

    const overlay = screen.getByRole('dialog');
    expect(overlay).toHaveClass('modal-blur');
  });

  it('should apply custom CSS classes', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
        overlayClassName="custom-overlay"
        contentClassName="custom-content"
        headerClassName="custom-header"
        bodyClassName="custom-body"
        footerClassName="custom-footer"
        closeButtonClassName="custom-close"
        footer={<div>Footer</div>}
      />,
    );

    const overlay = screen.getByRole('dialog');
    const content = screen.getByText('Test content').closest('.custom-content');
    const header = screen.getByText('Test Modal').closest('.custom-header');
    const body = screen.getByText('Test content').closest('.custom-body');
    const footer = screen.getByText('Footer').closest('.custom-footer');
    const closeButton = screen.getByRole('button', { name: /close/i });

    expect(overlay).toHaveClass('custom-overlay');
    expect(content).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(closeButton).toHaveClass('custom-close');
  });

  it('should have appropriate accessibility attributes', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Test content</div>}
      />,
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');

    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toHaveAttribute('tabIndex', '0');
    expect(closeButton).toHaveAttribute('aria-label', 'close');
  });
});
