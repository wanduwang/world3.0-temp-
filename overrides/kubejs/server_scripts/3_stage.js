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

	//末地戈伯改钢豆腐
	event.replaceInput({output: 'gobber2:gobber2_ingot_end'}, 'minecraft:chorus_flower', 'tofucraft:tofumetal')

	//涡轮叶片改扇叶组件
	event.replaceInput({output: 'mekanismgenerators:turbine_blade'}, '#mekanism:alloys/infused', 'create_sa:fan_component')

	//灌注机改前置
	event.replaceInput({output: 'mekanism:metallurgic_infuser'}, 'minecraft:furnace', '#forge:circuits/basic')
	event.replaceInput({output: 'mekanism:metallurgic_infuser'}, '#forge:ingots/osmium', 'tofucraft:tf_capacitor')
	event.replaceInput({output: 'mekanism:metallurgic_infuser'}, '#forge:ingots/iron', '#forge:ingots/osmium')
	event.replaceInput({output: 'mekanism:metallurgic_infuser'}, 'minecraft:redstone', '#forge:alloys/advanced')

	//机器框架改前置
	event.replaceInput({output: 'thermal:machine_frame'}, '#forge:gears/tin', 'tofucraft:tf_circuit')
	event.replaceInput({output: 'thermal:energy_cell_frame'}, '#forge:gears/electrum', 'tofucraft:tf_capacitor')
	event.replaceInput({output: 'thermal:fluid_cell_frame'}, '#forge:gears/iron', 'tofucraft:tf_coil')

	//齿轮中轴改钻石豆腐粒
	event.replaceInput({output: '#forge:gears'}, '#forge:nuggets/iron', 'tofucraft:tofudiamondnugget')

	//去除富集铁，由钢粉直接替代
	event.replaceInput({input: 'mekanism:enriched_iron'}, 'mekanism:enriched_iron', '#forge:dusts/steel')
	event.replaceOutput({output: 'mekanism:enriched_iron'}, 'mekanism:enriched_iron', '#forge:dusts/steel')
	event.remove({id: 'mekanism:processing/steel/enriched_iron_to_dust'})

	//数字采矿机需要反物质
	event.remove({id: 'mekanism:digital_miner'})
	event.shaped('1x mekanism:digital_miner',
	[
		'CDC',
		'BAB',
		'FEF',
	],
	{
		A:'mekanism:robit',
		B:'mekanism:logistical_sorter',
		C:'#forge:pellets/antimatter',
		D:'#forge:circuits/ultimate',
		E:'mekanism:steel_casing',
		F:'mekanism:teleportation_core'
	}).id('kubejs:digital_miner')

	//生产充能赛特斯石英
	event.recipes.mekanismMetallurgicInfusing('ae2:charged_certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'mekanism:redstone', 10).id('kubejs:mekcharge')
	event.recipes.mekanismEnriching('mekanism:dust_sulfur', '#forge:gems/sulfur').id('kubejs:fulfurdust')
	//无限增幅卡需要反物质
	event.replaceInput({output: 'ae2wtlib:infinity_booster_card'}, 'ae2:fluix_pearl', '#forge:pellets/antimatter')
	//大量材料换钢
	event.replaceInput({output: 'ae2:controller'}, 'ae2:smooth_sky_stone_block', 'mekanism:steel_casing')
	event.replaceInput({output: 'ae2:drive'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:energy_acceptor'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:spatial_io_port'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:sky_compass'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:inscriber'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:charger'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:security_station'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:chest'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:interface'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:cell_workbench'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:io_port'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:condenser'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:vibration_chamber'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:quartz_growth_accelerator'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:crafting_unit'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:pattern_provider'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:molecular_assembler'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:blank_pattern'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:item_cell_housing'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:basic_card'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:advanced_card'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:wireless_booster'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:view_cell'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:item_storage_cell_1k'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:item_storage_cell_4k'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:item_storage_cell_16k'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:item_storage_cell_64k'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:item_storage_cell_256k'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:spatial_storage_cell_2'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:spatial_storage_cell_16'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:spatial_storage_cell_128'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:semi_dark_monitor'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:cable_anchor'}, '#ae2:metal_ingots', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:spatial_anchor'}, '#ae2:metal_ingots', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:import_bus'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:export_bus'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:annihilation_plane'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:formation_plane'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2:me_p2p_tunnel'}, '#forge:ingots/iron', '#forge:ingots/steel')
	event.replaceInput({output: 'ae2wtlib:magnet_card'}, 'minecraft:iron_block', '#forge:storage_blocks/steel')

	//ae大幅加价
	event.replaceInput({output: 'ae2wtlib:magnet_card'}, 'minecraft:redstone_block', '#forge:alloys/advanced')
	event.replaceInput({output: 'ae2wtlib:magnet_card'}, 'minecraft:lapis_block', '#forge:alloys/elite')
	event.replaceInput({output: 'ae2:chest'}, 'minecraft:copper_ingot', 'expandedstorage:iron_chest')
	event.replaceInput({output: 'ae2:cell_workbench'}, '#forge:chests/wooden', 'expandedstorage:iron_chest')
	event.replaceInput({output: 'ae2:energy_acceptor'}, 'minecraft:copper_ingot', 'mekanism:energy_tablet')
	event.replaceInput({output: 'ae2:molecular_assembler'}, 'minecraft:crafting_table', 'botania:auto_crafting_halo')
	event.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
    event.shaped('1x ae2:pattern_provider',
	[
		'BEB',
		'CAD',
		'BEB',
	],
	{
		A:'botania:crafting_halo',
		B:'#forge:ingots/steel',
		C:'ae2:annihilation_core',
		D:'ae2:formation_core',
		E:'#forge:circuits/ultimate'
	}).id('kubejs:pattern_provider')
	

	//强化玻璃通用化
	event.replaceInput({input: 'ae2:quartz_glass'}, 'ae2:quartz_glass', '#thermal:glass/hardened')
	event.replaceInput({input: 'ae2:quartz_vibrant_glass'}, 'ae2:quartz_vibrant_glass', '#thermal:glass/hardened')
	event.replaceInput({input: 'mekanismgenerators:reactor_glass'}, 'mekanismgenerators:reactor_glass', '#thermal:glass/hardened')
	event.replaceInput({input: 'mekanism:structural_glass'}, 'mekanism:structural_glass', '#thermal:glass/hardened')

    //末影箱更贵了
	event.remove({id: 'tconstruct:smeltery/casting/obsidian/chest'})
    event.replaceInput({output: 'minecraft:ender_chest'}, 'minecraft:obsidian', 'gobber2:gobber2_ingot_end')
	event.replaceInput({output: 'minecraft:ender_chest'}, 'minecraft:ender_eye', '#kubejs:great_endeye')

	//花药台前置
	event.remove({id: 'botania:apothecary_default'})
    event.shaped('1x botania:apothecary_default',
	[
		'BAB',
		' B ',
		'BBB',
	],
	{
		A:'ars_nouveau:water_essence',
		B:'bloodmagic:etherealslate',
	}).id('kubejs:apothecary_default')

	//添加御空药水
	event.recipes.botania.brew("kubejs:flight_effect", ["#kubejs:great_endeye","alexsmobs:flying_fish","bloodmagic:airsigil","ars_nouveau:air_essence","enigmaticlegacy:astral_dust","botania:ender_air_bottle"]).id('kubejs:flight_potion')

	//修改活石配方
	event.remove({id: 'botania:pure_daisy/livingrock'})
	event.recipes.botania.pure_daisy("botania:livingrock", "minecraft:quartz_block").id('kubejs:livingstone')

	//修改泰拉锭配方
	event.remove({id: 'botania:terra_plate/terrasteel_ingot'})
	event.recipes.botania.terra_plate("botania:terrasteel_ingot", ["enigmaticlegacy:earth_heart", "mekanism:ingot_refined_obsidian","mekanism:ingot_refined_glowstone"], 50000).id('kubejs:terraingot')

	//通量核心需要泰拉凝聚板
	event.remove({id: 'fluxnetworks:fluxcore'})
	event.recipes.botania.terra_plate("fluxnetworks:flux_core", ["minecraft:ender_eye", "fluxnetworks:flux_dust","minecraft:obsidian"], 10000).id('kubejs:fluxcore')

	//传送核心需要泰拉凝聚板
	event.remove({id: 'mekanism:teleportation_core'})
	event.recipes.botania.terra_plate("mekanism:teleportation_core", ["#forge:alloys/ultimate","fluxnetworks:flux_core","bloodmagic:teleposerfocus"], 25000).id('kubejs:tpcore')

	//聚变反应堆和蒸馏控制器只有精灵能做
	event.remove({id: 'mekanismgenerators:reactor/controller'})
	event.recipes.botania.elven_trade(["mekanismgenerators:fusion_reactor_controller"], "mekanismgenerators:fusion_reactor_frame").id('kubejs:nuketrans')
	event.remove({id: 'mekanism:thermal_evaporation/controller'})
	event.recipes.botania.elven_trade(["mekanism:thermal_evaporation_controller"], "mekanism:thermal_evaporation_block").id('kubejs:thermal_evaporation_controller')

	//压缩空间养成计划
	event.remove({id: 'compactmachines:machine_tiny'})
	event.remove({id: 'compactmachines:machine_small'})
	event.remove({id: 'compactmachines:machine_normal'})
	event.remove({id: 'compactmachines:machine_large'})
	event.remove({id: 'compactmachines:machine_maximum'})
	event.remove({id: 'compactmachines:machine_giant'})
	event.recipes.botania.runic_altar("compactmachines:machine_tiny", ["minecraft:ender_eye", "bloodmagic:voidsigil","ae2:spatial_cell_component_2","mekanism:steel_casing"], 5000).id('kubejs:tiny')
	event.recipes.botania.mana_infusion("compactmachines:machine_small", "compactmachines:machine_tiny", 25000).id('kubejs:small')
	event.recipes.botania.mana_infusion("compactmachines:machine_normal", "compactmachines:machine_small", 25000).id('kubejs:normal')
	event.recipes.botania.mana_infusion("compactmachines:machine_large", "compactmachines:machine_normal", 25000).id('kubejs:large')
	event.recipes.botania.mana_infusion("compactmachines:machine_giant", "compactmachines:machine_large", 50000).id('kubejs:giant')
	event.recipes.botania.mana_infusion("compactmachines:machine_maximum", "compactmachines:machine_giant", 100000).id('kubejs:maximum')

	//nasa工作台超级贵
	event.remove({id: 'beyond_earth:nasa_workbench'})
	event.recipes.botania.runic_altar("beyond_earth:nasa_workbench", ["botania:gaia_ingot","botania:gaia_ingot","mekanism:qio_drive_supermassive","mekanism:laser","thermal:upgrade_augment_3","compactmachines:machine_maximum","fluxnetworks:flux_controller"], 1000000).id('kubejs:nasa')

	//魔力钢要钢锭
	event.remove({id: 'botania:mana_infusion/manasteel'})
	event.recipes.botania.mana_infusion("botania:manasteel_ingot", "#forge:ingots/steel", 2500).id('kubejs:manasteel')
})

onEvent('item.tags', event => {
	//更多强化玻璃{
	event.get('thermal:glass/hardened').add('mekanismgenerators:reactor_glass')
	event.get('thermal:glass/hardened').add('mekanism:structural_glass')
	event.get('thermal:glass/hardened').add('ae2:quartz_glass')
	event.get('thermal:glass/hardened').add('ae2:quartz_vibrant_glass')

	//豆腐电路也是电路
	event.get('forge:circuits/basic').add('tofucraft:tf_circuit')
	event.get('forge:alloys/advanced').add('tofucraft:tf_coil')
})