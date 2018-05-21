import React from "react";
//import './index.css';

class AppView extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {newItem: "новый музыкант"};
         
        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onInputChange(e){
        this.setState({newItem:e.target.value});
    }
    onClick(e){
        if(this.state.newItem){
            this.props.onAddItem(this.state.newItem);
            this.setState({newItem:" "});
        }
    }
    onRemove(item){
        if(item){
            this.props.onRemoveItem(item);
        }
    }
    render(){
         
        let remove = this.props.onRemoveItem;
        return <div> 
					<input className="addnewitem" type="text" value={this.state.newItem} onChange={this.onInputChange} />    
					<button onClick={this.onClick}>Добавить</button>                
					
					<h5>Список музыкантов:</h5>
						<div>
							{
								this.props.musicians.map(function(item){
									 
									return <Musicians key={item} text={item} onRemove={remove} />
								})
							}
						</div>
              </div>;
    }
}
 
class Musicians extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {text: props.text};
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        this.props.onRemove(this.state.text);
    }
    render(){
        return <div> 
                <p>
                    <b>{this.state.text}</b><br />
                    <button onClick={this.onClick}>Изгнать</button> 
                </p>
            </div>;
    }
}
export default AppView;