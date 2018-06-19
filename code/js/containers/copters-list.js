import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'; //
import {Pure, Menus} from 'react-pure';

class CoptersList extends Component{
	showList(){
		return this.props.copters.map ((copter) => { 
			return(
			<div className="pure-menu pure-menu-horizontal">
				<ul className="pure-menu-list">
					<li className="pure-menu-item">
						<a href="#" className="pure-menu-link" onClick={() => this.props.select(copter)} key={copter.id} >
						{copter.name}
						</a>		
					</li>
				</ul>
			</div>	
					);
				});
			}
			
	render (){
		return(
			<div>
			{this.showList()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return{
		copters: state.copters
	};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({select: select}, dispatch)
}

//export default CoptersList;
export default connect(mapStateToProps, matchDispatchToProps)(CoptersList);