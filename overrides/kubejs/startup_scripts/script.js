// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent("botania.brews.registry", event => {
    event.create("flight_effect")
        //消耗魔力
        .cost(5000)
        //设置效果
        .effect("cyclic:flight", 180 * 20, 0, false, false)
        //熏香
        //.noIncense()
        //吊坠
        //.noPendant()
})
