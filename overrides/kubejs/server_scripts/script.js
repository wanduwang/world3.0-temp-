// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	/* 移除配方
	event.remove({})移除全部
	event.remove({output:'minecraft:stone_pickaxe'})输出物品移除
	event.remove({output:'#minecraft:wool'})输出标签移除
	event.remove({input:'#forge:dusts/redstone'})输入标签移除
	event.remove({mod:'quartzchests'})模组移除
	event.remove({type:'minecraft:campfire_cooking'})类型移除
	event.remove({id:'minecraft:glowstone'})配方名移除
	event.remove({output:'minecraft:cooked_chicken',type:'minecraft:campfire_cooking'})
	 */
	/* 有序合成和命名
	event.shaped('3x minecraft:stone',
	[
		'SAS',
		'S S',
		'SAS',
	],
	{
		S:'minecraft:sponge',
		A:'minecraft:apple'
	}).id('wudjimodpack:wudji_first_recipe_id')
	 */
	/* 无序合成
	event.shapeless('4x minecraft:cobblestone',['minecraft:stone','#forge:dusts/glowstone']) 
	 */
	/* 切石机配方
	event.stonecutting('4x minecraft:apple','minecraft:golden_apple')
	 */
	/* 熔炉配方
	event.smelting('2x minecraft:carrot','minecraft:golden_apple')
	 */
	/* 高炉配方
	event.smelting('3x minecraft:apple','minecraft:golden_apple')
	*/
	/* 烟熏炉配方
	event.smoking('5x minecraft:apple','minecraft:golden_apple')
	*/
	/* 在无序配方中，将任何模板替换为minecraft:gold_nugget
	event.replaceInput({type:'minecraft:crafting_shapeless'},'#minecraft:planks','minecraft:gold_bugget') 
	*/
	/* 在所有配方中，将输出物品中的minecraft:stick替换为minecraft:oak_sapling
	event.replaceOutput({}, 'minecraft:stick', 'minecraft:oak_sapling') 
	*/
	
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})