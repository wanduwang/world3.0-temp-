// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    //箱柜改革
    event.remove({id: 'mekanism:bin/basic'})
    event.shaped('1x mekanism:basic_bin',
	[
		'BAB',
		'C C',
		'BBB',
	],
	{
		A:'create_sa:vault_component',
		B:'minecraft:cobblestone',
        C:'minecraft:redstone'
	}).id('kubejs:basic_bin')
    event.remove({id: 'mekanism:bin/advanced'})
    event.shaped('1x mekanism:advanced_bin',
	[
		'BAB',
		'C C',
		'BBB',
	],
	{
		A:'create_sa:vault_component',
		B:'create:andesite_casing',
        C:'create:andesite_alloy'
	}).id('kubejs:advanced_bin')
    event.remove({id: 'mekanism:bin/elite'})
    event.shaped('1x mekanism:elite_bin',
	[
		'BAB',
		'C C',
		'BBB',
	],
	{
		A:'create_sa:vault_component',
		B:'create:brass_casing',
        C:'create:electron_tube'
	}).id('kubejs:elite_bin')
    event.remove({id: 'mekanism:bin/ultimate'})
    event.shaped('1x mekanism:ultimate_bin',
	[
		'BAB',
		'C C',
		'BBB',
	],
	{
		A:'create_sa:vault_component',
		B:'create_sa:brass_cube',
        C:'gobber2:gobber2_ingot'
	}).id('kubejs:ultimate_bin')

    //保险箱改革
    event.remove({id: 'mekanism:personal_chest'})
    event.shaped('1x mekanism:personal_chest',
	[
		'BDB',
		'CAC',
		'BBB',
	],
	{
		A:'create_sa:vault_component',
		B:'create:andesite_alloy',
        C:'#balm:wooden_chests',
        D:'create:crafter_slot_cover'
	}).id('kubejs:personal_chest')
    event.remove({id: 'mekanism:personal_barrel'})
    event.shaped('1x mekanism:personal_barrel',
	[
		'BDB',
		'CAC',
		'BBB',
	],
	{
		A:'create_sa:vault_component',
		B:'create:andesite_alloy',
        C:'#forge:barrels/wooden',
        D:'create:crafter_slot_cover'
	}).id('kubejs:personal_barrel')

    //储罐改革
    event.remove({id: 'mekanism:fluid_tank/basic'})
    event.shaped('1x mekanism:basic_fluid_tank',
	[
		'CBC',
		'BAB',
		'CBC',
	],
	{
		A:'create:fluid_tank',
		B:'#forge:ingots/iron',
        C:'minecraft:redstone'
	}).id('kubejs:basic_fluid_tank')
    event.remove({id: 'mekanism:fluid_tank/advanced'})
    event.shaped('1x mekanism:advanced_fluid_tank',
	[
		' B ',
		'BAB',
		' B ',
	],
	{
		A:'mekanism:basic_fluid_tank',
		B:'create:andesite_alloy'
	}).id('kubejs:advanced_fluid_tank')
    event.remove({id: 'mekanism:fluid_tank/elite'})
    event.shaped('1x mekanism:elite_fluid_tank',
	[
		' B ',
		'BAB',
		' B ',
	],
	{
		A:'mekanism:advanced_fluid_tank',
		B:'create:polished_rose_quartz'
	}).id('kubejs:elite_fluid_tank')
    event.remove({id: 'mekanism:fluid_tank/ultimate'})
    event.shaped('1x mekanism:ultimate_fluid_tank',
	[
		' B ',
		'BAB',
		' B ',
	],
	{
		A:'mekanism:elite_fluid_tank',
		B:'gobber2:gobber2_ingot'
	}).id('kubejs:ultimate_fluid_tank')

})