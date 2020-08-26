import React from 'react';
import Features from './Features'
class MainForm extends React.Component {
     render(){
         return(
            <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
            features={this.props.features} 
            selected={this.props.selected} 
            updateFeature={(a,b)=>this.props.updateFeature(a,b)} 
            
            />
          </form>
         );
     }
    }
export default MainForm