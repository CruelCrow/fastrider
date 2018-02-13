import { combineReducers }  from 'redux';
import pin from './pin';
import rides from './rides';
import loading from './loading';

const appReducer = combineReducers({
    loading,
    rides,
    pin,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
