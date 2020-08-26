import React from 'react';
import FeatureArrayVar from './FeatureArray'
import Options from './Options';

class Features extends React.Component {
     render(){
      const features = Object.keys(FeatureArrayVar).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        console.log(feature);
        
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Options feature={feature}
              updateFeature={(a,b)=>this.props.updateFeature(a,b)}
              selected={this.props.selected}
              key={feature}
            />
          </fieldset>
        );
      });
      return (<div>{features}</div>)
     }
    }
export default Features