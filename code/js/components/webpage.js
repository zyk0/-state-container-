import React from 'react';
import CoptersList from '../containers/copters-list';
import Details from '../containers/details';
import {Pure, Menus} from 'react-pure';

let Uscopter = () => {
	<small>US Corp. LTD</small>
}

const WebPage = () => (

<div>
	
	<div>
		<p className="pure-u-1-5 pure-u-sm-1-3"></p>
		<p className="pure-u-1-5 pure-u-sm-1-3"> Military </p>
		<p className="pure-u-1-5 pure-u-sm-1-3"> Transport</p>
		<p className="pure-u-1-5 pure-u-sm-1-3"> Service  </p>
		<p className="pure-u-1-5 pure-u-sm-1-3"></p>
	</div>	
	
	<p>кликни, чтобы узнать подробности. </p>
	<CoptersList />
	<p></p>
	<Details />
	
		
</div>		
);

export default WebPage; 