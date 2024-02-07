// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    //觉醒龙种子是七级
    event.recipes.botania.terra_plate("mysticalagriculture:awakened_draconium_seeds", ["draconicevolution:awakened_core","mysticalagriculture:gaia_spirit_seeds","mysticalagriculture:dragon_egg_seeds","mysticalagriculture:nether_star_seeds","mysticalagradditions:insanium_block","mysticalagriculture:draconium_seeds"], 100000).id('kubejs:draconium_seeds')
    event.remove({id: 'mysticalagriculture:seed/infusion/draconium'})
    //龙种子是六级
    event.recipes.botania.terra_plate("mysticalagriculture:draconium_seeds", ["draconicevolution:wyvern_core","mysticalagriculture:terrasteel_seeds","mysticalagriculture:hepatizon_seeds","mysticalagriculture:queens_slime_seeds","mysticalagriculture:manyullyn_seeds","mysticalagriculture:enderium_seeds","mysticalagriculture:wither_skeleton_seeds","mysticalagriculture:netherite_seeds","mysticalagriculture:emerald_seeds","mysticalagriculture:diamond_seeds","mysticalagradditions:insanium_essence"], 100000).id('kubejs:dra_seeds')
    event.remove({id: 'mysticalagriculture:seed/infusion/awakened_draconium'})

    //种子基底要符文合成
    event.recipes.botania.runic_altar("mysticalagriculture:prosperity_seed_base", ["#forge:seeds","mysticalagriculture:prosperity_shard","mysticalagriculture:prosperity_shard","mysticalagriculture:prosperity_shard","mysticalagriculture:prosperity_shard","#botania:runes","#botania:runes"], 100000).id('kubejs:seed_base')
    event.remove({id: 'mysticalagriculture:prosperity_seed_base'})
    event.recipes.botania.runic_altar("mysticalagriculture:soulium_seed_base", ["#forge:seeds","mysticalagriculture:soulium_dust","mysticalagriculture:soulium_dust","#botania:runes","#botania:runes"], 100000).id('kubejs:soulseed_base')
    event.remove({id: 'mysticalagriculture:soulium_seed_base'})

    //种子核心需要门核心
    event.replaceInput({id: "mysticalagradditions:nether_star_crux"}, 'minecraft:diamond_block', 'botania:alfheim_portal')
    event.replaceInput({id: "mysticalagradditions:dragon_egg_crux"}, 'minecraft:diamond_block', 'botania:alfheim_portal')
    event.replaceInput({id: "mysticalagradditions:gaia_spirit_crux"}, 'minecraft:diamond_block', 'botania:alfheim_portal')
    event.replaceInput({id: "mysticalagradditions:awakened_draconium_crux"}, 'minecraft:diamond_block', 'botania:alfheim_portal')
    //基础龙研改前置
    event.replaceInput({id: "draconicevolution:basic_crafting_injector"}, '#bookshelf:stones', 'beyond_earth:compressed_calorite')
    event.replaceInput({id: "draconicevolution:crafting_core"}, 'minecraft:lapis_block', 'beyond_earth:blue_iron_plating_block')
    event.replaceInput({id: "draconicevolution:crafting_core"}, 'minecraft:diamond', 'mekanism:pellet_antimatter')
    event.replaceInput({id: "draconicevolution:components/draconium_core"}, 'draconicevolution:draconium_ingot', 'mekanism:ingot_refined_obsidian')
    event.replaceInput({id: "draconicevolution:components/draconium_core"}, 'minecraft:gold_ingot', 'mekanism:ingot_refined_glowstone')
    
    //不准手拆混沌碎片
    event.remove({id: 'draconicevolution:decompress/large_chaos_frag'})
    event.remove({id: 'draconicevolution:decompress/medium_chaos_frag'})
    event.remove({id: 'draconicevolution:decompress/small_chaos_frag'})
    event.shaped('9x draconicevolution:large_chaos_frag',
	[
		'BBB',
		'BAB',
		'BBB',
	],
	{
		A:'draconicevolution:chaos_shard',
		B:'mysticalagriculture:awakened_draconium_essence',
	}).id('kubejs:chaos_shard2frag')
    event.shaped('9x draconicevolution:medium_chaos_frag',
	[
		'BBB',
		'BAB',
		'BBB',
	],
	{
		A:'draconicevolution:large_chaos_frag',
		B:'mysticalagriculture:awakened_draconium_essence',
	}).id('kubejs:chaos_frag2mfrag')
    event.shaped('9x draconicevolution:small_chaos_frag',
	[
		'BBB',
		'BAB',
		'BBB',
	],
	{
		A:'draconicevolution:medium_chaos_frag',
		B:'mysticalagriculture:awakened_draconium_essence',
	}).id('kubejs:chaos_mfrag2sfrag')

    //传送符咒需要传送核心
    event.replaceInput({id: "draconicevolution:dislocator"}, 'minecraft:ender_eye', 'mekanism:teleportation_core')

    //神秘农业机壳
    event.remove({id: 'mysticalagriculture:machine_frame'})
    event.recipes.botania.mana_infusion("mysticalagriculture:machine_frame", "mekanism:steel_casing", 25000).id('kubejs:mahoframe')
    

    //RFT机壳
    event.remove({id: 'rftoolsbase:machine_frame'})
    event.recipes.botania.runic_altar("rftoolsbase:machine_frame", ["rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard","rftoolsbase:dimensionalshard","rftoolsbase:dimensionalshard","mekanism:steel_casing"], 50000)

    //神秘农业注魔台需要泰拉祭坛
    event.remove({id: 'mysticalagriculture:infusion_pedestal'})
    event.recipes.botania.terra_plate("mysticalagriculture:infusion_pedestal", ["#kubejs:great_endeye", "draconicevolution:dislocator_receptacle","draconicevolution:dislocator_receptacle",], 100000).id('kubejs:infusion')
    event.remove({id: 'mysticalagriculture:infusion_altar'})
    event.recipes.botania.terra_plate("mysticalagriculture:infusion_altar", ["draconicevolution:dragon_heart", "gobber2:dragon_star","enigmaticlegacy:cosmic_heart","beyond_earth:calorite_block","beyond_earth:calorite_block"], 100000).id('kubejs:infusion_core')
})

onEvent('item.tags', event => {

    //眼睛是眼睛
    event.get('kubejs:great_endeye').add('endrem:black_eye')
    event.get('kubejs:great_endeye').add('endrem:cold_eye')
    event.get('kubejs:great_endeye').add('endrem:corrupted_eye')
    event.get('kubejs:great_endeye').add('endrem:lost_eye')
    event.get('kubejs:great_endeye').add('endrem:nether_eye')
    event.get('kubejs:great_endeye').add('endrem:old_eye')
    event.get('kubejs:great_endeye').add('endrem:rogue_eye')
    event.get('kubejs:great_endeye').add('endrem:cursed_eye')
    event.get('kubejs:great_endeye').add('endrem:evil_eye')
    event.get('kubejs:great_endeye').add('endrem:guardian_eye')
    event.get('kubejs:great_endeye').add('endrem:magical_eye')
    event.get('kubejs:great_endeye').add('endrem:wither_eye')
    event.get('kubejs:great_endeye').add('endrem:witch_eye')
    event.get('kubejs:great_endeye').add('endrem:undead_eye')
    event.get('kubejs:great_endeye').add('endrem:exotic_eye')
})