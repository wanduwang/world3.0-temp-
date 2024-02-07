// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

	//血之祭坛修改前置
	event.replaceInput({output: 'bloodmagic:altar'}, 'minecraft:furnace', 'enigmaticlegacy:twisted_core')
    event.replaceInput({output: 'bloodmagic:altar'}, 'minecraft:gold_ingot', 'twilightforest:knightmetal_ingot')

    //空白石板改焦煤
    event.replaceInput({output: 'bloodmagic:blankslate'}, '#balm:stones', '#forge:coal_coke')

    //气血宝珠前置修改
    event.replaceInput({output: 'bloodmagic:weakbloodorb'}, 'minecraft:diamond', 'enigmaticlegacy:earth_heart')
    event.replaceInput({output: 'bloodmagic:apprenticebloodorb'}, 'minecraft:redstone_block', 'enigmaticlegacy:etherium_ingot')
    event.replaceInput({output: 'bloodmagic:magicianbloodorb'}, 'minecraft:gold_block', 'enigmaticlegacy:cosmic_heart')

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
    }).id('kubejs:cokebrick')

    //高炉更贵了，相当贵
    event.remove({id:'immersiveengineering:crafting/blastbrick'})
    event.recipes.createMechanicalCrafting('9x immersiveengineering:blastbrick', 
    [
        ' CDC ',
        'CBBBC',
        'DBABD',
        'CBBBC',
        ' CDC '
    ], 
    {
        A: '#kubejs:castle/door',
        B: 'twilightforest:fiery_ingot',
        C: 'tconstruct:scorched_brick',
        D: 'enigmaticlegacy:earth_heart',
    }).id('kubejs:blastbrick')

    //轻型工程块更贵了
    event.remove({id:'immersiveengineering:crafting/light_engineering'})
    event.recipes.createMechanicalCrafting('4x immersiveengineering:light_engineering', 
    [
        ' DDD ',
        'DCBCD',
        'DBABD',
        'DCBCD',
        ' DDD '
    ], 
    {
        A: '#forge:storage_blocks/constantan',
        B: 'immersiveengineering:component_iron',
        C: 'immersiveengineering:sheetmetal_aluminum',
        D: 'immersiveengineering:sheetmetal_iron',
    }).id('kubejs:light_engineering')

    //重型工程块更贵了
    event.remove({id:'immersiveengineering:crafting/heavy_engineering'})
    event.recipes.createMechanicalCrafting('4x immersiveengineering:heavy_engineering', 
    [
        ' DDD ',
        'DCBCD',
        'DBABD',
        'DCBCD',
        ' DDD '
    ], 
    {
        A: '#forge:storage_blocks/electrum',
        B: 'immersiveengineering:component_steel',
        C: 'immersiveengineering:sheetmetal_silver',
        D: 'immersiveengineering:sheetmetal_steel',
    }).id('kubejs:heavy_engineering')

    //红石工程块更贵了
    event.remove({id:'immersiveengineering:crafting/rs_engineering'})
    event.recipes.createMechanicalCrafting('4x immersiveengineering:rs_engineering', 
    [
        ' DDD ',
        'DCBCD',
        'DBABD',
        'DCBCD',
        ' DDD '
    ], 
    {
        A: '#forge:storage_blocks/copper',
        B: '#forge:storage_blocks/redstone',
        C: '#forge:wires/electrum',
        D: '#forge:sheetmetals',
    }).id('kubejs:rs_engineering')

    //合金窑需要焦黑砖
    event.replaceInput({output: 'immersiveengineering:alloybrick'}, '#forge:ingots/brick', 'tconstruct:seared_brick')

    //风车需要钢锭
    event.replaceInput({output: 'immersiveengineering:windmill'}, '#forge:ingots/iron', '#forge:ingots/steel')

    //钢锭不准直接熔炼
    event.remove({id:'beyond_earth:steel_ingot_blasting'})

    //无法通过锤子直接锤金属板和粉碎矿了
    event.remove({id:'immersiveengineering:crafting/plate_silver_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_aluminum_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_electrum_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_iron_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_gold_hammering'})
    event.remove({id:'beyond_earth_giselle_addon:compat/immersiveengineering/crafting/plate_desh_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_steel_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_uranium_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_copper_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_nickel_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_lead_hammering'})
    event.remove({id:'immersiveengineering:crafting/plate_constantan_hammering'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_zinc'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_silver'})  
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_nickel'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_gold'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_copper'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_iron'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_tin'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_lead'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_uranium'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_aluminum'})
    event.remove({id:'immersiveengineering:crafting/raw_hammercrushing_osmium'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_zinc'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_osmium'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_nickel'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_lead'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_silver'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_uranium'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_tin'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_aluminum'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_iron'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_gold'})
    event.remove({id:'immersiveengineering:crafting/hammercrushing_copper'})

    //不能制作半个石磨电极
    event.remove({id:'immersiveengineering:metalpress/electrode'})

    
    //盐通用
    event.replaceInput({input: 'tofucraft:salt'}, 'tofucraft:salt', '#forge:salts')

    //末地戈伯改钢豆腐
	event.replaceInput({output: 'gobber2:gobber2_ingot_nether'}, 'minecraft:netherite_scrap', '#forge:ingots/steel')

    //枪械工作台要用下界戈伯、钢板金属块做
    event.replaceInput({id: 'tac:workbench'}, 'minecraft:iron_ingot', 'gobber2:gobber2_ingot_nether')
    event.replaceInput({id: 'tac:workbench'}, 'minecraft:iron_block', '#forge:sheetmetals/steel')

    //空白符文改末地石
    event.replaceInput({id: 'bloodmagic:blood_altar'}, '#bookshelf:stones', 'minecraft:end_stone')
    event.replaceInput({id: 'bloodmagic:alchemy_table'}, '#bookshelf:stones', 'minecraft:end_stone')
    event.replaceInput({id: 'bloodmagic:arc'}, '#bookshelf:stones', 'minecraft:end_stone')
    event.replaceInput({id: 'bloodmagic:soul_forge'}, '#bookshelf:stones', 'minecraft:end_stone')

    //豆腐魔杖配方
    event.shaped('1x tofucraft:tofustick',
	[
		' CB',
		' AD',
		'A  ',
	],
	{
		A:'immersiveengineering:graphite_electrode',
		B:'ars_nouveau:wilden_tribute',
        C:'bloodmagic:dungeon_metal',
        D:'bloodmagic:reagentvoid'
	}).id('kubejs:tofustick')

    //豆腐能部件
    event.shaped('1x tofucraft:tf_circuit',
	[
		'   ',
		'BCB',
		'AAA',
	],
	{
		A:'tofucraft:tofumetal',
		B:'minecraft:redstone',
        C:'tofucraft:tofudiamondnugget'
	}).id('kubejs:tf_circuit')
    event.shaped('1x tofucraft:tf_coil',
	[
		'AAA',
		'CCC',
		'AAA',
	],
	{
		A:'tofucraft:tofusomen',
        C:'tofucraft:tofudiamondnugget'
	}).id('kubejs:tf_coil')
    event.shaped('1x tofucraft:tf_capacitor',
	[
		' A ',
		'BCB',
		' A ',
	],
	{
		A:'tofucraft:tofumetal',
        B:'minecraft:redstone',
        C:'tofucraft:tofudiamondnugget'
	}).id('kubejs:tf_capacitor')
	
})

onEvent('item.tags', event => {
	//为城堡门添加tag
	event.get('kubejs:castle/door').add('twilightforest:pink_castle_door')
    event.get('kubejs:castle/door').add('twilightforest:yellow_castle_door')
    event.get('kubejs:castle/door').add('twilightforest:blue_castle_door')
    event.get('kubejs:castle/door').add('twilightforest:violet_castle_door')

    //为寰宇之心添加tag
    event.get('kubejs:cosmic/heart').add('enigmaticlegacy:cosmic_heart')

})