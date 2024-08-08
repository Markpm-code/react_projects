import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Manila"];

  const handleSelecteditem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelecteditem}
      />
      {/* passing children example */}
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}
export default App;
