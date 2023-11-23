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

})

onEvent('item.tags', event => {


})