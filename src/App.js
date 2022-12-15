import "./App.css";
import Title from "./components/Content1.js/Title";
import Description from "./components/Content1.js/Description";

function App() {
  return (
    <div className="App">
      <Title name="Lorem" text="Lorem" className="title1" />
      <Description
        name="Lorem"
        text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id nisi magna. Nam ut felis eget lacus dapibus tempor eu non turpis. Aenean in posuere risus. In finibus vitae eros vitae mollis. Donec ac ligula lacus. Cras augue risus, tincidunt vitae velit sit amet, porttitor vulputate libero. Duis a diam cursus, aliquam ante sed, lacinia purus. Praesent elit mauris, laoreet sed lacus id, pellentesque tincidunt urna."
        className="description1"
      />
      <Title name="Ipsum" text="Ipsum" className="title2" />
      <Description
        name="Ipsum"
        text="Etiam luctus vulputate nulla. Quisque ullamcorper justo quis tincidunt consequat. Duis aliquet eu justo id aliquet. Sed vitae eleifend urna, sed iaculis libero. Suspendisse id fringilla neque. Suspendisse varius in tellus nec semper. Pellentesque lectus arcu, fermentum eu nunc nec, pharetra aliquet mauris. Morbi ultricies est ut magna accumsan tincidunt. Aliquam sed gravida nisl.
        "
        className="description2"
      />
    </div>
  );
}

export default App;
