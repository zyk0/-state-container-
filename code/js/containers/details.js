import React, {Component} from 'react';
import {connect} from 'react-redux';//
import Pure from 'react-pure';
//
class Details extends Component{
	render(){
		if (!this.props.copter){
				return(<p>клик</p>);
			}
		return(
			<div className="pure-g">
				<div className="pure-u-1-24">
					<p></p>
				</div>
				<div className="pure-u-22-24">
					<p><b>{this.props.copter.name}</b></p>
						<img className="pure-img" src= {this.props.copter.img} />
					<p>{this.props.copter.aim}</p>
				</div>
				<div className="pure-u-1-24">
					<p></p>
				</div>
				

				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		copter: state.active
	};
}

export default connect(mapStateToProps)(Details);