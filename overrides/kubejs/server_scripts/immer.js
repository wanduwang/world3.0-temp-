// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    //焦炉更贵了，相当贵
    event.remove({id:'immersiveengineering:crafting/cokebrick'})
    event.recipes.createMechanicalCrafting('9x immersiveengineering:cokebrick', 
    [
        ' CCC ',
        'CCBCC',
        'CBABC',
        'CCBCC',
        ' CCC '
    ], 
    {
        A: 'immersiveengineering:alloybrick',
        B: 'twilightforest:fiery_ingot',
        C: 'tconstruct:scorched_brick',
    }).id('immersiveengineering:cokebrick')

    //合金窑需要焦黑砖
    event.replaceInput({output: 'immersiveengineering:alloybrick'}, '#forge:ingots/brick', 'tconstruct:seared_brick')
})