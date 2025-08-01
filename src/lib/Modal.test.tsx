import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('ne devrait pas rendre la modal quand open est false', () => {
    render(
      <Modal
        open={false}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('devrait rendre la modal avec un titre quand open est true', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Contenu de test')).toBeInTheDocument();
  });

  it("devrait appeler onClose quand on clique sur l'overlay", () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("ne devrait pas appeler onClose quand on clique sur l'overlay si persistent est true", () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        persistent={true}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('ne devrait pas appeler onClose quand on clique sur le contenu de la modal', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    const content = screen.getByText('Contenu de test').closest('.modal-content');
    if (content) {
      fireEvent.click(content);
    }

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('devrait appeler onClose quand on clique sur le bouton de fermeture', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('devrait appeler onClose avec la touche Entrée sur le bouton de fermeture', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.keyDown(closeButton, { key: 'Enter' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('devrait appeler onClose avec la touche Espace sur le bouton de fermeture', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.keyDown(closeButton, { key: ' ' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('devrait appliquer la largeur spécifiée', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={600}
        body={<div>Contenu de test</div>}
      />,
    );

    const content = screen.getByText('Contenu de test').closest('.modal-content');
    expect(content).toHaveStyle({ width: '600px' });
  });

  it('devrait rendre avec un header personnalisé', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        header={<div>Header personnalisé</div>}
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    expect(screen.getByText('Header personnalisé')).toBeInTheDocument();
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('devrait rendre avec un footer', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
        footer={<button>Action</button>}
      />,
    );

    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('devrait appliquer la classe blur quand blur est true', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
        blur={true}
      />,
    );

    const overlay = screen.getByRole('dialog');
    expect(overlay).toHaveClass('modal-blur');
  });

  it('devrait appliquer les classes CSS personnalisées', () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
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
    const content = screen.getByText('Contenu de test').closest('.custom-content');
    const header = screen.getByText('Test Modal').closest('.custom-header');
    const body = screen.getByText('Contenu de test').closest('.custom-body');
    const footer = screen.getByText('Footer').closest('.custom-footer');
    const closeButton = screen.getByRole('button', { name: /close/i });

    expect(overlay).toHaveClass('custom-overlay');
    expect(content).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(closeButton).toHaveClass('custom-close');
  });

  it("devrait avoir les attributs d'accessibilité appropriés", () => {
    render(
      <Modal
        open={true}
        onClose={mockOnClose}
        title="Test Modal"
        width={400}
        body={<div>Contenu de test</div>}
      />,
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');

    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toHaveAttribute('tabIndex', '0');
    expect(closeButton).toHaveAttribute('aria-label', 'close');
  });
});
