# Modal Plugin

A modern and accessible React modal with TypeScript support.

## Installation

```bash
npm install modal-plugin
# or
yarn add modal-plugin
# or
pnpm add modal-plugin
```

## Usage

```tsx
import { Modal } from 'modal-plugin';
import 'modal-plugin/dist/Modal.css'; // CSS styles

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="My Modal"
        width={500}
        body={<p>Modal content</p>}
        footer={<button onClick={() => setIsOpen(false)}>Close</button>}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | ✅ | Controls modal visibility |
| `onClose` | `() => void` | ✅ | Function called to close the modal |
| `title` | `string` | ❌ | Modal title (mutually exclusive with `header`) |
| `header` | `React.ReactNode` | ❌ | Custom header (mutually exclusive with `title`) |
| `body` | `React.ReactNode` | ✅ | Main modal content |
| `footer` | `React.ReactNode` | ❌ | Modal footer |
| `width` | `number` | ✅ | Modal width in pixels |
| `blur` | `boolean` | ❌ | Applies blur effect to background (default: `false`) |
| `persistent` | `boolean` | ❌ | Prevents modal from closing when clicking overlay (default: `false`) |
| `overlayClassName` | `string` | ❌ | Custom CSS class for overlay |
| `contentClassName` | `string` | ❌ | Custom CSS class for content |
| `headerClassName` | `string` | ❌ | Custom CSS class for header |
| `bodyClassName` | `string` | ❌ | Custom CSS class for body |
| `footerClassName` | `string` | ❌ | Custom CSS class for footer |
| `closeButtonClassName` | `string` | ❌ | Custom CSS class for close button |

## Features

- ✅ **Accessibility**: Full ARIA attributes and keyboard navigation support
- ✅ **TypeScript**: Complete type definitions included
- ✅ **Customizable**: Customizable CSS classes
- ✅ **Responsive**: Adapts to different screen sizes
- ✅ **Multiple close methods**: Click overlay, close button, keyboard shortcuts
- ✅ **Flexible header**: Simple title or custom header
- ✅ **Optional footer**: Support for custom actions

## Examples

### Modal with simple title
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation"
  width={400}
  body={<p>Are you sure you want to continue?</p>}
  footer={
    <div>
      <button onClick={() => setIsOpen(false)}>Cancel</button>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  }
/>
```

### Modal with custom header
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  header={<h2>My Custom Header</h2>}
  width={600}
  body={<div>Custom content</div>}
/>
```

### Modal with custom CSS classes
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Styled Modal"
  width={500}
  body={<p>Content</p>}
  overlayClassName="my-overlay"
  contentClassName="my-content"
  headerClassName="my-header"
  bodyClassName="my-body"
  closeButtonClassName="my-close-btn"
/>
```

### Persistent modal (won't close on overlay click)
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Important Action"
  width={400}
  body={<p>This action cannot be cancelled by clicking outside.</p>}
  persistent={true}
  footer={<button onClick={() => setIsOpen(false)}>I Understand</button>}
/>
```

## License

MIT
