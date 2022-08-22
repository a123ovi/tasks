import { useState, ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';
import { DropdownItem } from '../../types/dropdown';

const StyledDropdown = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const StyledDropdownHeader = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDropdownItems = styled.div`
  padding: 5px;
  border-top: 1px solid #e5e8ec;
  display: block;
`;

const StyledDropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
  }
`;

export const Dropdown = ({
  items,
  title,
  defaultItemId,
  onItemSelected,
}: {
  items: DropdownItem[];
  title?: string;
  defaultItemId?: number;
  onItemSelected?: (item: DropdownItem) => void;
}): ReactElement => {
  const [isOpen, setOpen] = useState(false);
  const defaultItem = items.find((item) => item.id === defaultItemId);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    defaultItem,
  );

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (
    e: MouseEvent<HTMLDivElement>,
    item: DropdownItem,
  ) => {
    e.preventDefault();
    setSelectedItem(item);
    toggleDropdown();
    onItemSelected && onItemSelected(item);
  };

  return (
    <StyledDropdown>
      <StyledDropdownHeader onClick={toggleDropdown}>
        {selectedItem ? selectedItem?.label : title || 'Select'}
      </StyledDropdownHeader>
      {isOpen && (
        <StyledDropdownItems>
          {items.map((item: DropdownItem) => (
            <StyledDropdownItem
              onClick={(e) => handleItemClick(e, item)}
              key={item.id}
            >
              {item.label}
            </StyledDropdownItem>
          ))}
        </StyledDropdownItems>
      )}
    </StyledDropdown>
  );
};
