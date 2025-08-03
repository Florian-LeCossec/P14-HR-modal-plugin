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
        body={<div>Test content</div>}
      />,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render modal with title when open is true', () => {
    render(
      <Modal open={true} onClose={mockOnClose} title="Test Modal" body={<div>Test content</div>} />,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should call onClose when clicking on overlay', () => {
    render(
      <Modal open={true} onClose={mockOnClose} title="Test Modal" body={<div>Test content</div>} />,
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
        body={<div>Test content</div>}
      />,
    );

    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should not call onClose when clicking on modal content', () => {
    render(
      <Modal open={true} onClose={mockOnClose} title="Test Modal" body={<div>Test content</div>} />,
    );

    const content = screen.getByText('Test content').closest('.modal-content-default');
    if (content) {
      fireEvent.click(content);
    }

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should call onClose when clicking on close button', () => {
    render(
      <Modal open={true} onClose={mockOnClose} title="Test Modal" body={<div>Test content</div>} />,
    );

    const closeButton = screen.getByRole('button', { name: /close modal/i });
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose with Enter key on close button', () => {
    render(
      <Modal open={true} onClose={mockOnClose} title="Test Modal" body={<div>Test content</div>} />,
    );

    const closeButton = screen.getByRole('button', { name: /close modal/i });
    fireEvent.keyDown(closeButton, { key: 'Enter' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose with Space key on close button', () => {
    render(
      <Modal open={true} onClose={mockOnClose} title="Test Modal" body={<div>Test content</div>} />,
    );

    const closeButton = screen.getByRole('button', { name: /close modal/i });
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
        body={<div>Test content</div>}
        overlayClassName="custom-overlay"
        className="custom-content"
        footer={<div>Footer</div>}
      />,
    );

    const overlay = screen.getByRole('dialog');
    const content = screen.getByText('Test content').closest('.custom-content');
    const footer = screen.getByText('Footer').closest('.modal-footer-default');

    expect(overlay).toHaveClass('custom-overlay');
    expect(content).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should have appropriate accessibility attributes', () => {
    render(
      <Modal open={true} onClose={mockOnClose} title="Test Modal" body={<div>Test content</div>} />,
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');

    const closeButton = screen.getByRole('button', { name: /close modal/i });
    expect(closeButton).toHaveAttribute('tabIndex', '0');
    expect(closeButton).toHaveAttribute('aria-label', 'Close modal');
  });

  it('should call onClose when pressing Escape key', () => {
    render(
      <Modal open={true} onClose={mockOnClose} title="Test Modal" body={<div>Test content</div>} />,
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should not call onClose when pressing Escape key if persistent is true', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        persistent={true}
        title="Test Modal"
        body={<div>Test content</div>}
      />,
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should apply custom background and text colors', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        backgroundColor="#000"
        textColor="#fff"
        body={<div>Test content</div>}
      />,
    );

    const content = screen.getByText('Test content').closest('.modal-content-default');
    expect(content).toHaveStyle({ backgroundColor: '#000', color: '#fff' });
  });

  it('should apply custom z-index', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        zIndex={2000}
        body={<div>Test content</div>}
      />,
    );

    const overlay = screen.getByRole('dialog');
    expect(overlay).toHaveStyle({ zIndex: 2000 });
  });

  it('should hide close button when closeButton is false', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        closeButton={false}
        body={<div>Test content</div>}
      />,
    );

    expect(screen.queryByRole('button', { name: /close modal/i })).not.toBeInTheDocument();
  });

  // Tests pour les classes CSS personnalisées
  describe('Custom CSS Classes', () => {
    it('should apply custom className to modal content', () => {
      render(
        <Modal
          open={true}
          onClose={mockOnClose}
          title="Test Modal"
          className="my-custom-modal"
          body={<div>Test content</div>}
        />,
      );

      const content = screen.getByText('Test content').closest('.my-custom-modal');
      expect(content).toBeInTheDocument();
      expect(content).toHaveClass('my-custom-modal');
    });

    it('should apply custom overlayClassName to overlay', () => {
      render(
        <Modal
          open={true}
          onClose={mockOnClose}
          title="Test Modal"
          overlayClassName="my-custom-overlay"
          body={<div>Test content</div>}
        />,
      );

      const overlay = screen.getByRole('dialog');
      expect(overlay).toHaveClass('my-custom-overlay');
    });

    it('should apply both custom className and overlayClassName', () => {
      render(
        <Modal
          open={true}
          onClose={mockOnClose}
          title="Test Modal"
          className="custom-content-class"
          overlayClassName="custom-overlay-class"
          body={<div>Test content</div>}
        />,
      );

      const overlay = screen.getByRole('dialog');
      const content = screen.getByText('Test content').closest('.custom-content-class');

      expect(overlay).toHaveClass('custom-overlay-class');
      expect(content).toBeInTheDocument();
      expect(content).toHaveClass('custom-content-class');
    });

    it('should combine custom classes with default classes', () => {
      render(
        <Modal
          open={true}
          onClose={mockOnClose}
          title="Test Modal"
          className="custom-content"
          overlayClassName="custom-overlay"
          body={<div>Test content</div>}
        />,
      );

      const overlay = screen.getByRole('dialog');
      const content = screen.getByText('Test content').closest('.custom-content');

      // L'overlay devrait avoir à la fois la classe par défaut et la classe personnalisée
      expect(overlay).toHaveClass('modal-overlay-default');
      expect(overlay).toHaveClass('custom-overlay');

      // Le contenu devrait avoir la classe personnalisée
      expect(content).toHaveClass('custom-content');
    });

    it('should work with multiple custom classes', () => {
      render(
        <Modal
          open={true}
          onClose={mockOnClose}
          title="Test Modal"
          className="class1 class2 class3"
          overlayClassName="overlay1 overlay2"
          body={<div>Test content</div>}
        />,
      );

      const overlay = screen.getByRole('dialog');
      const content = screen.getByText('Test content').closest('.class1');

      expect(overlay).toHaveClass('modal-overlay-default');
      expect(overlay).toHaveClass('overlay1');
      expect(overlay).toHaveClass('overlay2');
      expect(content).toHaveClass('class1');
      expect(content).toHaveClass('class2');
      expect(content).toHaveClass('class3');
    });
  });
});
