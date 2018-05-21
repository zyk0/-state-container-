# -state-container-


приложулька Flux + React.js по типу todo
сборка WebPack:
npm run build
npm run dev


////////////
Action.js - это штука, которая передает данные из приложения в хранилище. 
 определяет действия.
 
 addItem(text) {
    MusiciansDispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      text,
    });
	
======диспетчер dispatcher ==
import {Dispatcher} from "flux";

======хранилище store ==
определим для хранилища файл MusiciansStore.js
getInitialState() устанавливается состояние хранилища.

========представление view == 
AppView.js с 2ми реакт-классами(musicians и AppView)


соединение хранилищ, экшенов и вью во Flux применяются контейнер - AppContainer.js:
2 метода:
getStores() 
	return хранилище MusiciansStore.
и 
calculateState()
	return состояние контейнера(со списоком musicians).

и 2 действия:
onAddItem: Actions.addItem,
onRemoveItem: Actions.removeItem	


