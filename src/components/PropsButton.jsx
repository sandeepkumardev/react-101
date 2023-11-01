import PropsTypes from "prop-types";

function PropsButton(props) {
  return <button style={{ backgroundColor: props.color }}>{props.name}</button>;
}

PropsButton.propTypes = {
  name: PropsTypes.string.isRequired,
  color: PropsTypes.string.isRequired,
};

export default PropsButton;
