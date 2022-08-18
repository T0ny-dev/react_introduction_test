import { render, screen} from '@testing-library/react';
import GroceryList from './components/GroceryList';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
 
test('should mark the first checkbox as checked', () => {
  // render the grocery list
  render(<GroceryList />);
  // grab the apple item
  const appleItem = screen.getByLabelText('Apples');
  // simulate a "click" on the apple checkbox
  userEvent.click(appleItem);
  // assert that the apple checkbox was checked
  expect(appleItem).toBeChecked();
});