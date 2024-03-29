# use-dom-outside-click

> react hook to handle outside click events 

<p>
  <a href="https://www.npmjs.com/package/use-dom-outside-click">
    <img alt="Version" src="https://img.shields.io/npm/v/use-dom-outside-click.svg">
  </a>
</p>

## Getting Started

You can install the module via `npm` or `yarn`:

```sh
npm i use-dom-outside-click --save
```

```sh
yarn add use-dom-outside-click
```

## Example

```tsx
import { useOutsideClick } from 'use-dom-outside-click';
```

```tsx
const [isPanelOpen, setIsPanelOpen] = useState(false)

const triggerRef = useRef<HTMLButtonElement>();
const panelRef= useRef<HTMLDivElement>();

// third argument is optional
useOutsideClick(panelRef, () => setIsPanelOpen(false), [triggerRef]);

const handleClick = () => {
  setIsPanelOpen(open => !open)
}

<Popover>
  <Popover.Button ref={triggerRef} onClick={handleClick}>
    // button code
  </Popover.Button>
  <Popover.Panel ref={panelRef} isOpen={isPanelOpen}>
    // panel code
  </Popover.Panel>
</Popover>
```

![chrome_7DgcqHreNp](https://user-images.githubusercontent.com/26444448/212521263-288f54ce-d71e-465d-8e0e-838e0a54ffac.gif)

## Reference

```tsx
useOutsideClick(elementRef, callback, [...exceptionsRefs]);
```

- `elementRef` - reference of the element from which you want to detect the outside click
- `callback` - function to execute when clicked outside the element
- `exceptionsRefs` (optional) - array of references in which you want to prevent the callback from being executed if they are clicked
