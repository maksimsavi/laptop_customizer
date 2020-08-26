import React from 'react';
import slugify from 'slugify';

class OptionsItem extends React.Component {
  render(){
    const item = this.props.item;
    const feature = this.props.feature;
    const itemHash = slugify(JSON.stringify(item));
    const USCurrencyFormat = this.props.USCurrencyFormat;
    console.log(item);
    return (
      <li key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.selected[feature].name}
          onChange={e => this.props.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </li>
    );
  }
    }
export default OptionsItem