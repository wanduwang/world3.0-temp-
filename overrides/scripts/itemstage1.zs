//导入库{
    import mods.itemstages.ItemStages;
    import mods.itemstages.Restriction;
    import crafttweaker.api.text.TextComponent;
    import crafttweaker.api.text.TranslatableComponent;
    import crafttweaker.api.event.entity.player.interact.EntityInteractEvent;
    import crafttweaker.api.util.InteractionHand;
    import mods.gamestages.StageHelper;
    import crafttweaker.api.events.CTEventManager;
    import mods.gamestages.events.GameStageAdded;
    import mods.gamestages.events.GameStageRemoved;
    import mods.gamestages.events.GameStageCleared;
    import crafttweaker.api.item.IItemStack;
//}
//简单教程{
    //当合成***时，获得***阶段
    //StageHelper.grantStageWhenCrafting(<item:minecraft:oak_planks>, "0_origin");
    //捡起***时，获得***阶段
    //StageHelper.grantStageWhenPickedUp(<item:minecraft:stick>, "pickup_sticks");
    //将***模组下的所有物品置入***阶段
    //ItemStages.createModRestriction("minecraft", "0_origin");
    //将***物品置入***阶段
    //ItemStages.restrict(<item:minecraft:stone>, "0_origin");
    //将***tag置入***阶段
    //ItemStages.restrict(<tag:items:forge:cobblestone>, "ex_two");
    //添加一个配方并设置他的阶段
    /*mods.recipestages.Recipes.addShaped("阶段", "配方名称", <产物>*数量,[
    [<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>]]
    );*/
    //按模组设置配方阶段
    //mods.recipestages.Recipes.setRecipeStageByMod(阶段名,模组id);
    //按产物设置配方阶段
    //mods.recipestages.Recipes.setRecipeStage(阶段名,<产物>);
//}

//启动阶段{
    StageHelper.grantStageOnAdvancement("minecraft:story/1", "1_create");
    StageHelper.grantStageOnAdvancement("minecraft:story/2", "2_enginee");
    StageHelper.grantStageOnAdvancement("minecraft:story/3", "3_mechine");
    StageHelper.grantStageOnAdvancement("minecraft:story/4", "4_future");
//}
//当获得***阶段时，执行***事件{
    CTEventManager.register<GameStageAdded>((event) => {
        if (event.stage == "1_create") {
            event.player.sendMessage("-----§a您已进入 §3§l《齿轮与神秘》§f-----");
        }
    });
    CTEventManager.register<GameStageAdded>((event) => {
        if (event.stage == "2_enginee") {
            event.player.sendMessage("-----§a您已进入 §3§l《工程师与魔法师》§f-----");
        }
    });
    CTEventManager.register<GameStageAdded>((event) => {
        if (event.stage == "3_mechine") {
            event.player.sendMessage("-----§a您已进入 §3§l《星辰与深渊》§f-----");
        }
    });
    CTEventManager.register<GameStageAdded>((event) => {
        if (event.stage == "4_future") {
            event.player.sendMessage("-----§a您已进入 §3§l《起始与终结》§f-----");
        }
    });
//}

//一般禁用物品{
    ItemStages.restrict(<item:draconicevolution:info_tablet>, "disabled");
    ItemStages.restrict(<item:draconicevolution:reactor_stabilizer>, "disabled");
    ItemStages.restrict(<item:draconicevolution:reactor_prt_stab_frame>, "disabled");
    ItemStages.restrict(<item:draconicevolution:reactor_prt_in_rotor>, "disabled");
    ItemStages.restrict(<item:draconicevolution:reactor_prt_out_rotor>, "disabled");
    ItemStages.restrict(<item:draconicevolution:reactor_prt_rotor_full>, "disabled");
    ItemStages.restrict(<item:draconicevolution:reactor_prt_focus_ring>, "disabled");
    ItemStages.restrict(<item:draconicevolution:reactor_injector>, "disabled");
    ItemStages.restrict(<item:draconicevolution:reactor_core>, "disabled");
    ItemStages.restrict(<item:alexsmobs:mimicream>, "disabled");
    ItemStages.restrict(<item:twilightforest:uncrafting_table>, "disabled");
    ItemStages.restrict(<item:alexsmobs:mimicream>, "disabled");
    ItemStages.restrict(<item:mekanism:creative_chemical_tank>, "disabled");
    ItemStages.restrict(<item:mekanism:creative_fluid_tank>, "disabled");
    ItemStages.restrict(<item:mekanism:creative_energy_cube>, "disabled");
    ItemStages.restrict(<item:botania:creative_pool>, "disabled");
    ItemStages.restrict(<item:botania:infrangible_platform>, "disabled");
    ItemStages.restrict(<item:botania:lens_storm>, "disabled");
    ItemStages.restrict(<item:cyclic:battery_infinite>, "disabled");
    ItemStages.restrict(<item:draconicevolution:creative_op_capacitor>, "disabled");
    ItemStages.restrict(<item:draconicevolution:creative_capacitor>, "disabled");
    ItemStages.restrict(<item:immersiveengineering:capacitor_creative>, "disabled");
    ItemStages.restrict(<item:mekanism:creative_bin>, "disabled");
    ItemStages.restrict(<item:ars_nouveau:creative_spell_book>, "disabled");
    ItemStages.restrict(<item:ars_nouveau:creative_source_jar>, "disabled");
    ItemStages.restrict(<item:buildinggadgets:construction_paste_container_creative>, "disabled");
    ItemStages.restrict(<item:create:creative_motor>, "disabled");
    ItemStages.restrict(<item:create:creative_fluid_tank>, "disabled");
    ItemStages.restrict(<item:create:creative_crate>, "disabled");
    ItemStages.restrict(<item:create:creative_blaze_cake>, "disabled");
    ItemStages.restrict(<item:createaddition:creative_energy>, "disabled");
    ItemStages.restrict(<item:enigmaticlegacy:enigmatic_item>, "disabled");
    ItemStages.restrict(<item:thermal:rf_coil_creative_augment>, "disabled");
    ItemStages.restrict(<item:thermal:fluid_tank_creative_augment>, "disabled");
    ItemStages.restrict(<item:thermal:machine_efficiency_creative_augment>, "disabled");
    ItemStages.restrict(<item:thermal:machine_catalyst_creative_augment>, "disabled");
    ItemStages.restrict(<item:touhou_little_maid:substitute_jizo>, "disabled");
    ItemStages.restrict(<item:mysticalagradditions:creative_essence>, "disabled");
    ItemStages.restrict(<item:fluxnetworks:admin_configurator>, "disabled");
    ItemStages.restrict(<item:artifacts:everlasting_beef>, "disabled");
    ItemStages.restrict(<item:artifacts:eternal_steak>, "disabled");

//}
//设置1阶段模组{
    ItemStages.createModRestriction("untitledduckmod", "1_create");
    ItemStages.createModRestriction("alexsdelight", "1_create");
    ItemStages.createModRestriction("biomesoplenty", "1_create");
    ItemStages.createModRestriction("born_in_chaos_v1", "1_create");
    ItemStages.createModRestriction("cataclysm", "1_create");
    ItemStages.createModRestriction("chococraft", "1_create");
    ItemStages.createModRestriction("cookingforblockhands", "1_create");
    ItemStages.createModRestriction("cookingforblockheads", "1_create");
    ItemStages.createModRestriction("create", "1_create");
    ItemStages.createModRestriction("createaddition", "1_create");
    ItemStages.createModRestriction("create_sa", "1_create");
    ItemStages.createModRestriction("create_central_kitchen", "1_create");
    ItemStages.createModRestriction("croptopia", "1_create");
    ItemStages.createModRestriction("denseoresreborn", "1_create");
    ItemStages.createModRestriction("endrem", "1_create");
    ItemStages.createModRestriction("enigmaticlegacy", "1_create");
    ItemStages.createModRestriction("expandedstorage", "1_create");
    ItemStages.createModRestriction("ftbquests", "1_create");
    ItemStages.createModRestriction("farmersdelight", "1_create");
    ItemStages.createModRestriction("farmingforblockheads", "1_create");
    ItemStages.createModRestriction("gobberdelight", "1_create");
    ItemStages.createModRestriction("infernalexp", "1_create");
    ItemStages.createModRestriction("modernlife", "1_create");
    ItemStages.createModRestriction("nethersdelight", "1_create");
    ItemStages.createModRestriction("byg", "1_create");
    ItemStages.createModRestriction("pamhc2crops", "1_create");
    ItemStages.createModRestriction("pamhc2foodcore", "1_create");
    ItemStages.createModRestriction("pamhc2foodextended", "1_create");
    ItemStages.createModRestriction("pamhc2trees", "1_create");
    ItemStages.createModRestriction("prefab", "1_create");
    ItemStages.createModRestriction("quark", "1_create");
    ItemStages.createModRestriction("syp", "1_create");
    ItemStages.createModRestriction("sophisticatedbackpacks", "1_create");
    ItemStages.createModRestriction("solsweetpotato", "1_create");
    ItemStages.createModRestriction("supplementaries", "1_create");
    ItemStages.createModRestriction("graveyard", "1_create");
    ItemStages.createModRestriction("tconstruct", "1_create");
    ItemStages.createModRestriction("tinkerslevellingaddon", "1_create");
    ItemStages.createModRestriction("toms_storage", "1_create");
    ItemStages.createModRestriction("touhou_little_maid", "1_create");
    ItemStages.createModRestriction("twilightdelight", "1_create");
    ItemStages.createModRestriction("untitledduck", "1_create");
    ItemStages.createModRestriction("upgrade_aquatic", "1_create");
    ItemStages.createModRestriction("well", "1_create");
    ItemStages.createModRestriction("monsters_and_girls", "1_create");
    ItemStages.createModRestriction("torchmaster", "1_create");
    ItemStages.createModRestriction("alexsmobs", "1_create");
    ItemStages.createModRestriction("twilightforest", "1_create");
    ItemStages.createModRestriction("artifacts", "1_create");
//}
//设置2阶段模组{
    ItemStages.createModRestriction("ars_nouveau", "2_enginee");
    ItemStages.createModRestriction("bloodmagic", "2_enginee");
    ItemStages.createModRestriction("explorerscompass", "2_enginee");
    ItemStages.createModRestriction("tac", "2_enginee");
    ItemStages.createModRestriction("tofucraft", "2_enginee");
    ItemStages.createModRestriction("vampirism", "2_enginee");
//}
//设置3阶段模组{
    ItemStages.createModRestriction("ae2wtlib", "3_mechine");
    ItemStages.createModRestriction("appmek", "3_mechine");
    ItemStages.createModRestriction("buildinggadgets", "3_mechine");
    ItemStages.createModRestriction("compactmachines", "3_mechine");
    ItemStages.createModRestriction("fluxnetworks", "3_mechine");
//}
//设置4阶段模组{
    ItemStages.createModRestriction("mysticalagriculture", "4_future");
    ItemStages.createModRestriction("rftoolsbase", "4_future");
    ItemStages.createModRestriction("rftoolsbuilder", "4_future");
    ItemStages.createModRestriction("rftoolspower", "4_future");
    ItemStages.createModRestriction("rftoolsstorage", "4_future");
    ItemStages.createModRestriction("rftoolsutility", "4_future");
    ItemStages.createModRestriction("mysticaladaptations", "4_future");
    ItemStages.createModRestriction("mysticalagradditions", "4_future");
    ItemStages.createModRestriction("draconicevolution", "4_future");
    ItemStages.createModRestriction("futurepack", "4_future");
//}
