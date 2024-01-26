// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    //添加大地之心配方
    event.shaped('1x enigmaticlegacy:earth_heart',
	[
		'CBC',
		'BAB',
		'CBC',
	],
	{
		A:'enigmaticlegacy:massive_shroomlamp',
		B:'tconstruct:manyullyn_ingot',
        C:'gobber2:gobber2_ingot'
	}).id('kubejs:earth_heart')

    //添加禁忌之果配方
    event.shaped('1x enigmaticlegacy:forbidden_fruit',
	[
		'BBB',
		'BAB',
		'BBB',
	],
	{
		A:'enigmaticlegacy:twisted_core',
		B:'enigmaticlegacy:evil_ingot'
	}).id('kubejs:forbidden_fruit')

    //添加救赎药水配方
    event.shaped('1x enigmaticlegacy:antiforbidden_potion',
	[
		'CBC',
		'DAD',
		'CDC',
	],
	{
		A:'croptopia:mead',
		B:'enigmaticlegacy:etherium_ingot',
        C:'twilightforest:torchberries',
        D:'twilightforest:charm_of_life_1'
	}).id('kubejs:antiforbidden_potion')

    //添加不洁圣杯配方
    event.shaped('1x enigmaticlegacy:unholy_grail',
	[
		'ABA',
		'ADA',
		'CAC',
	],
	{
		A:'twilightforest:fiery_ingot',
		B:'enigmaticlegacy:abyssal_heart',
        C:'enigmaticlegacy:astral_dust',
        D:'enigmaticlegacy:etherium_ingot'
	}).id('kubejs:unholy_grail')

    //删除邪恶之石配方
    event.remove({output:'enigmaticlegacy:cursed_stone'})

})