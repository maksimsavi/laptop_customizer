import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';
class SummaryItem extends React.Component {
   render(){
    const feature = this.props.feature;
    const idx = this.props.idx;
    const featureHash = feature + '-' + idx;
    const selectedOption = this.props.selected[feature];
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
   }
    }
export default SummaryItem