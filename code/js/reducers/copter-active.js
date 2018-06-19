export default function(state=null, action){
	switch (action.type){
		case "COPTER_SELECTED":
			return action.payload;
			break; 
		case "ANOTHER_SELECTED":
			return action.payload;
			break;	
		default:
			return ' helicoprer is crashed ';
	}
}