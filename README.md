# use-dom-outside-click

react hook for handle outside click events

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
