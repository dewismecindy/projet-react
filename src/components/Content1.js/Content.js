import Description from "./Description";
import Title from "./Title";

const Content = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <Title name={props.name} />
        <Description text={props.text} />
      </div>
    </>
  );
};

export default Content;
