import React from 'react';

import Options from './Options';

class Features extends React.Component {
     render(){
      const USCurrencyFormat = this.props.USCurrencyFormat;
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        console.log(feature);
        
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Options USCurrencyFormat={USCurrencyFormat} feature={feature} features={this.props.features}
              updateFeature={(a,b)=>this.props.updateFeature(a,b)}
              selected={this.props.selected}
            />
          </fieldset>
        );
      });
      return (<div>{features}</div>)
     }
    }
export default Features