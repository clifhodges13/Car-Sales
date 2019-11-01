import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const AddedFeature = props => {

  const handleClick = e => {
    e.preventDefault()
    props.removeItem(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>X</button>
      {props.feature.name}
    </li>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

const mapDispatchToProps = { removeItem }

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
