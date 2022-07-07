onEvent('item.registry', e => {
	e.create('cobalt_pieces').displayName('Cobalt Pieces')
})

onEvent('block.registry', e => {
	e.create('fluorite_block').displayName('Fluorite Block').material('ice').hardness(1.2)
	e.create('lithium_block').displayName('Lithium Block').material('iron').hardness(1)
	e.create('magical_soil').displayName('§bMagical Soil').material('grass').hardness(0.6);
})
