import React from 'react';
import FeatureArrayVar from './FeatureArray'
import OptionsItem from './OptionsItem';

class Options extends React.Component {
     render(){
        
        const feature= this.props.feature;
        const options = FeatureArrayVar[feature].map(item => 
          <OptionsItem item={item} 
          feature={feature} 
          updateFeature={(a,b)=>this.props.updateFeature(a,b)}
          selected={this.props.selected}
          key={item.name}     
          />
          );
          return (<ul>{options}</ul>)
     }
}
export default Options