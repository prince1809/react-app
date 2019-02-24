import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const INGREDIENT_PRICES = {
    salad: 60,
    cheese: 80,
    meat: 140,
    bacon: 80,
    chicken: 90,
};

const initialState = {
    ingredients: null,
    totalPrice: 400,
    error: false,
};

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: updateObject(state.ingredients, {
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        }),
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    });
};

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
            chicken: action.ingredients.chicken,
        },
        totalPrice: 400,
        error: false,
    });
};

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredient(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});
        default:
            return state;
    }
};

export default burgerBuilder;