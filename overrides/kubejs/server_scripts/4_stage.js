// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

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