import AppView from "../views/AppView.js";
import {Container} from "flux/utils"; 
//Container для соединения хранилищ, действий и представлений
import React from "react";
import MusiciansStore from "../data/MusiciansStore.js";
import Actions from "../data/Actions.js";
 
class AppContainer extends React.Component 
{ 
    static getStores() { 
        return [MusiciansStore]; 
    } 
    static calculateState(prevState) { 
        return { 
            musicians: MusiciansStore.getState(),
            onAddItem: Actions.addItem, //действие добавление
            onRemoveItem: Actions.removeItem //действие удаление
        }; 
    }
    render() { 
        return <AppView musicians={this.state.musicians} 
                        onRemoveItem={this.state.onRemoveItem}
                        onAddItem={this.state.onAddItem}  />; 
    } 
} 
export default Container.create(AppContainer); //создание контейнера