import { Dropdown, DropdownItem } from 'flowbite-react';

function DropdownComponent() {
  return (
    <Dropdown dismissOnClick={false} label="My custom item">
      {/* <DropdownItem as={Link} href="#">
        Home
      </DropdownItem>
      <DropdownItem as="a" href="https://flowbite.com/" target="_blank">
        External link
      </DropdownItem> */}
    </Dropdown>
  );
}

export default DropdownComponent;