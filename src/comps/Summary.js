import React from 'react';
import SummaryItem from './SummaryItem';

class Summary extends React.Component {
     render(){
      const summary = Object.keys(this.props.selected).map((feature, idx) => 
        <SummaryItem 
        feature={feature} 
        idx={idx} 
        selected={this.props.selected} 
        USCurrencyFormat={this.props.USCurrencyFormat}
        />
      );
      return (<div>{summary}</div>)
      };
    }
export default Summary