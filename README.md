# @flcossec/react-modal

A modern, accessible, and fully customizable React modal with TypeScript support.

## 🚀 Installation

```bash
npm install @flcossec/react-modal
# or
yarn add @flcossec/react-modal
# or
pnpm add @flcossec/react-modal
```

## 📖 Basic Usage

```tsx
import { Modal } from '@flcossec/react-modal';

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
        body={<p>Modal content</p>}
        footer={<button onClick={() => setIsOpen(false)}>Close</button>}
      />
    </div>
  );
}
```

## ⚙️ Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `open` | `boolean` | ✅ | Controls modal visibility |
| `onClose` | `() => void` | ✅ | Function called to close the modal |
| `title` | `string` | ❌ | Modal title (mutually exclusive with `header`) |
| `header` | `React.ReactNode` | ❌ | Custom header (mutually exclusive with `title`) |
| `body` | `React.ReactNode` | ✅ | Main modal content |
| `footer` | `React.ReactNode` | ❌ | Modal footer |
| `width` | `number \| string` | ❌ | Modal width (px or %) (default: `'500px'`) |
| `backgroundColor` | `string` | ❌ | Modal background color (default: `'#fff'`) |
| `textColor` | `string` | ❌ | Text color (default: `'#000'`) |
| `blur` | `boolean` | ❌ | Applies blur effect to background (default: `false`) |
| `persistent` | `boolean` | ❌ | Prevents closing when clicking overlay (default: `false`) |
| `closeButton` | `boolean` | ❌ | Shows close button (default: `true`) |
| `className` | `string` | ❌ | Custom CSS class for modal content |
| `overlayClassName` | `string` | ❌ | Custom CSS class for overlay |
| `zIndex` | `number` | ❌ | Modal z-index (default: `1000`) |

## ✨ Features

- ✅ **Full Accessibility**: ARIA attributes and keyboard navigation
- ✅ **TypeScript**: Complete type definitions included
- ✅ **Customizable**: Customizable CSS classes for all elements
- ✅ **Responsive**: Adapts to all screen sizes
- ✅ **Keyboard Navigation**: Full support for Tab, Escape, Enter, Space
- ✅ **Focus Management**: Automatic focus handling
- ✅ **React Portal**: Rendered in portal to avoid z-index issues
- ✅ **Flexible Header**: Simple title or custom header
- ✅ **Optional Footer**: Support for custom actions
- ✅ **Customizable Colors**: Background and text colors
- ✅ **Flexible Width**: Pixels or percentage
- ✅ **Configurable Z-index**: Overlay control

## 🎨 Usage Examples

### Basic modal with title
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation"
  body={<p>Are you sure you want to continue?</p>}
  footer={
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
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
  header={
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontSize: '24px' }}>🚀</span>
      <span>My Custom Header</span>
    </div>
  }
  body={<div>Custom content</div>}
/>
```

### Modal with custom colors
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Dark Modal"
  backgroundColor="#2c3e50"
  textColor="#ecf0f1"
  body={<p>Modal with dark theme</p>}
/>
```

### Persistent modal (won't close when clicking overlay)
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Important Action"
  persistent={true}
  body={<p>This action cannot be cancelled by clicking outside.</p>}
  footer={<button onClick={() => setIsOpen(false)}>I Understand</button>}
/>
```

### Modal with custom width
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Large Modal"
  width={800}
  body={<p>Modal with 800px width</p>}
/>
```

### Modal without close button
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Special Modal"
  closeButton={false}
  body={
    <div>
      <p>This modal has no X button.</p>
      <button onClick={() => setIsOpen(false)}>Close manually</button>
    </div>
  }
/>
```

## 🎨 CSS Customization

### Custom CSS classes
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Styled Modal"
  className="my-custom-modal"
  overlayClassName="my-custom-overlay"
  body={<p>Content with custom styling</p>}
/>
```

### Custom CSS example
```css
/* Overlay styles */
.my-custom-overlay {
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.3), rgba(0, 0, 255, 0.3)) !important;
  animation: overlayPulse 2s ease-in-out infinite alternate;
}

/* Modal content styles */
.my-custom-modal {
  background: linear-gradient(145deg, #ffffff, #f0f0f0) !important;
  border-radius: 20px !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
  animation: modalSlideIn 0.3s ease-out forwards;
}

@keyframes overlayPulse {
  0% { background: linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(0, 0, 255, 0.2)); }
  100% { background: linear-gradient(135deg, rgba(255, 0, 0, 0.4), rgba(0, 0, 255, 0.4)); }
}

@keyframes modalSlideIn {
  from { transform: scale(0.9) translateY(-50px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}
```

### Glass effect modal (glassmorphism)
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Glass Modal"
  className="glass-modal"
  overlayClassName="blur-overlay"
  body={<p>Modal with glass effect</p>}
/>
```

```css
.glass-modal {
  background: rgba(255, 255, 255, 0.25) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
}

.blur-overlay {
  backdrop-filter: blur(10px) saturate(180%) !important;
  background: rgba(0, 0, 0, 0.2) !important;
}
```

## ⌨️ Keyboard Navigation

The modal fully supports keyboard navigation:

- **Escape**: Closes the modal (unless `persistent={true}`)
- **Tab**: Circular navigation through focusable elements
- **Enter/Space**: Activates buttons and links
- **Auto focus**: First focusable element receives focus on open

## 🧪 Testing

To run tests:

```bash
npm test
```

Tests cover:
- ✅ Conditional rendering
- ✅ Event handling
- ✅ Keyboard navigation
- ✅ Custom CSS classes
- ✅ Accessibility
- ✅ Conditional props

## 🎯 Development

To test the modal in development mode:

```bash
npm run dev
```

This launches a test interface with several examples of customized modals.

## 📦 Build

```bash
npm run build
```

## 📄 License

MIT
