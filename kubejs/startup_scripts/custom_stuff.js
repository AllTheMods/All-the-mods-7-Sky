onEvent('item.registry', e => {
	e.create('piece_osmium').displayName('Osmium Ore Piece')
	e.create('chunk_osmium').displayName('Osmium Ore Chunk')
})

onEvent('block.registry', e => {
	e.create('fluorite_block').displayName('Fluorite Block').material('ice').hardness(1.2)
	e.create('lithium_block').displayName('Lithium Block').material('iron').hardness(1)
})
