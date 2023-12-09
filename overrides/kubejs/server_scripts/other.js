// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    //巨型火把更贵了
    event.remove({id: 'torchmaster:megatorch'})
    event.shaped('1x torchmaster:megatorch',
	[
		' A ',
		'BDB',
		'CDC',
	],
	{
		A:'prefab:block_compressed_glowstone',
		B:'gobber2:gobber2_ingot',
        C:'twilightforest:torchberries',
        D:'twilightforest:ironwood_ingot'
	}).id('kubejs:megatorch')
    event.replaceInput({output: 'torchmaster:feral_flare_lantern'}, 'minecraft:glowstone_dust', 'twilightforest:torchberries')

	//指南针更贵了
    event.remove({id: 'naturescompass:natures_compass'})
    event.shaped('1x naturescompass:naturescompass',
	[
		'CBC',
		'BAB',
		'CBC',
	],
	{
		A:'twilightforest:magic_map_focus',
		B:'#forge:bookshelves',
        C:'twilightforest:hollow_oak_sapling'
	}).id('kubejs:naturescompass')
    event.remove({id: 'explorerscompass:explorers_compass'})
    event.shaped('1x explorerscompass:explorerscompass',
	[
		'CBC',
		'BAB',
		'CBC',
	],
	{
		A:'twilightforest:magic_map_focus',
		B:'twilightforest:carminite_reactor',
        C:'twilightforest:firefly_jar'
	}).id('kubejs:explorerscompass')

	//无尽手杖改反物质
	event.replaceInput({output: 'constructionwand:infinity_wand'}, 'minecraft:nether_star', 'mekanism:pellet_antimatter')

	
    //健体苹果
    event.replaceInput({output: 'cyclic:apple_lofty_stature'}, 'minecraft:cyan_dye', 'twilightforest:raven_feather')
    event.replaceInput({output: 'cyclic:apple_lofty_stature'}, 'minecraft:orange_dye', 'twilightforest:naga_scale')

    //禁用物品合成替换
    event.replaceInput({output: 'cyclic:wireless_item'}, 'cyclic:gem_amber', 'twilightforest:charm_of_keeping_1')
    event.replaceInput({output: 'cyclic:wireless_fluid'}, 'cyclic:gem_amber', 'twilightforest:charm_of_keeping_1')
    event.replaceInput({output: 'cyclic:spawn_inspector'}, 'cyclic:gem_amber', 'twilightforest:raven_feather')
    event.replaceInput({output: 'cyclic:experience_pylon'}, 'cyclic:gem_amber', 'twilightforest:charm_of_keeping_1')
    event.replaceInput({output: 'cyclic:experience_pylon'}, 'cyclic:fireball', 'twilightforest:torchberries')
    event.replaceInput({output: 'cyclic:wireless_energy'}, 'cyclic:gem_amber', 'bloodmagic:blankslate')
    event.replaceInput({output: 'cyclic:peat_farm'}, 'cyclic:generator_item', 'immersiveengineering:light_engineering')
    event.replaceInput({output: 'cyclic:forester'}, 'cyclic:gem_amber', 'bloodmagic:reinforcedslate')
    event.replaceInput({output: 'cyclic:harvester'}, 'cyclic:obsidian_pressure_plate', 'bloodmagic:reinforcedslate')
    event.replaceInput({output: 'cyclic:disenchanter'}, 'cyclic:gem_obsidian', 'bloodmagic:infusedslate')



    //复写纸能一次合成更多
    event.remove({id: 'cyclic:carbon_paper'})
    event.shaped('3x cyclic:carbon_paper',
	[
		' A ',
		' B ',
		' A ',
	],
	{
		A:'minecraft:charcoal',
		B:'minecraft:paper'
	}).id('kubejs:carbon_paper')

    //红石钟需要砷铅铁矿石
    event.replaceInput({output: 'cyclic:clock'}, 'minecraft:repeater', 'twilightforest:carminite')

})

	

onEvent('item.tags', event => {


})