// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    //安山合金石头改末地石，去除铁粒配方
    event.remove({id: 'create:mixing/andesite_alloy'})
    event.remove({id: 'tconstruct:compat/create/andesite_alloy_iron'})
    event.remove({id: 'tconstruct:compat/create/andesite_alloy_zinc'})
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.replaceInput({iutput: 'minecraft:andesite', output: 'create:andesite_alloy'}, 'minecraft:andesite', 'minecraft:end_stone')
    event.replaceInput({output: 'create:millstone'}, '#bookshelf:stones', 'minecraft:end_stone')

    //附魔台相当贵
    event.replaceInput({output: 'minecraft:enchanting_table'}, 'minecraft:book', 'apotheosis:hellshelf')
    event.replaceInput({output: 'minecraft:enchanting_table'}, 'minecraft:diamond', 'gobber2:gobber2_ingot')
    event.replaceInput({output: 'minecraft:enchanting_table'}, 'minecraft:obsidian', 'minecraft:crying_obsidian')

    //粉碎轮改高塔方块
    event.replaceInput({output: 'create:crushing_wheel'}, '#minecraft:planks', 'twilightforest:encased_towerwood')
    event.replaceInput({output: 'create:crushing_wheel'}, '#bookshelf:stones', 'minecraft:end_stone')

    //弹射台改液压部件
    event.replaceInput({output: 'create:weighted_ejector'}, '#forge:plates/gold', 'create_sa:hydraulic_engine')

    //轧机改为铁树锭
    event.replaceInput({output: 'createaddition:rolling_mill'}, 'create:andesite_alloy', 'twilightforest:ironwood_ingot')

    //鼓风机扇叶换成风扇组件
    event.replaceInput({output: 'create:encased_fan'}, 'create:propeller', 'create_sa:fan_component')
	
	//大型水车需要防腐木
	event.replaceInput({output: 'create:large_water_wheel'}, '#minecraft:planks', '#forge:treated_wood')

    //动力臂更贵了，需要部件
    event.remove({id: 'create:crafting/kinetics/mechanical_arm'})
    event.shaped('4x create:mechanical_arm',
	[
		'DEF',
		'C  ',
		'BA ',
	],
	{
		A:'create_sa:brass_cube',
		B:'create:precision_mechanism',
        C:'create_sa:steam_engine',
        D:'create_sa:heat_engine',
        E:'create_sa:hydraulic_engine',
        F:'create:andesite_alloy'
	}).id('kubejs:mechanical_arm')

    //黄铜方块更便宜了，改铁树锭，一次能做8个
    event.remove({id: 'create_sa:brass_cube_recipe'})
    event.shaped('8x create_sa:brass_cube',
	[
		'BBB',
		'BAB',
		'BBB',
	],
	{
		A:'twilightforest:ironwood_ingot',
		B:'#forge:ingots/brass'
	}).id('kubejs:brass_cube')

    //烈焰人不需要活捉了，可以用烈焰棒合成
    event.shaped('1x create:blaze_burner',
	[
		'BCB',
		'BAB',
		'BBB',
	],
	{
		A:'create:empty_blaze_burner',
		B:'minecraft:blaze_rod',
        C:'botania:blaze_block'
	}).id('kubejs:blaze_burner')

    //经验瓶可以用经验颗粒合成
    event.shapeless('1x minecraft:experience_bottle',['create_sa:heap_of_experience','minecraft:glass_bottle']).id('kubejs:XPbottle')

})