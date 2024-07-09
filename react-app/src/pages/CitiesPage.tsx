import ListGroup from "../components/ListGroup";

export const CitiesPage = () => {
  
  let items = [
    'New York',
    'San Francisco',
    'Paris',
    'London',
    'Tokyo'
  ]
  
  const handleSelectItem = (item: string) => {
    console.log(`${item} has been clicked.`);
  }
  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} ></ListGroup>
  );
}

