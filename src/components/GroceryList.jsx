const GroceryList = () => {
  return (
  <div>
      <h1>Grocery List</h1>
      <ul>
          <li>
              <label htmlFor="item1">Apples</label>
              <input type="checkbox" id="item1"/>
          </li>
          <li>
              <label htmlFor="item2">Milk</label>
              <input type="checkbox" id="item2"/>
          </li>
          <li>
              <label htmlFor="item3">Cereal</label>
              <input type="checkbox" id="item3"/>
          </li>
      </ul>
  </div>
  )
};

export default GroceryList;