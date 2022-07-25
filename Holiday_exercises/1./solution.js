// 01
function removeDuplicates(array){
    const result= []
    for (let i = 0; i < array.length; i++)
    {
        if (!result.includes(array[i])) result.push(array[i])
    }
    return result
}

console.log(removeDuplicates([1,2,3,1]))


//02

const recipe = {
    'title': 'Salad',
    'servings': 2,
    'ingredients': ['avocado', 'cucumber', 'tomato']
};
console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

//03
