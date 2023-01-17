import Accordion from "./components/Accordion";
function App() {
  const items = [
    {
      id: "abc",
      label: "Can I use React on a project",
      content: "You can use react on any project",
    },
    {
      id: "bcd",
      label: "Can I use Javascript on a project",
      content: "You can use Javascript on any project",
    },
    {
      id: "cde",
      label: "Can i use Css on a project",
      content: "You can use Css on any project",
    },
    {
      id: "def",
      label: "Can i use tailwind on a project",
      content: "You can use tailwind on any project",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
