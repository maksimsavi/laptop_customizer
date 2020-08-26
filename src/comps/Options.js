import React from 'react';
import slugify from 'slugify';
import OptionsItem from './OptionsItem';

class Options extends React.Component {
     render(){
        const USCurrencyFormat = this.props.USCurrencyFormat;
        const feature= this.props.feature;
        const options = this.props.features[feature].map(item => 
          <OptionsItem item={item} 
          USCurrencyFormat={USCurrencyFormat} 
          feature={feature} 
          updateFeature={(a,b)=>this.props.updateFeature(a,b)}
          selected={this.props.selected}
          />
          );
          return (<ul>{options}</ul>)
     }
}
export default Options