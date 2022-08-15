onEvent('recipes', event => {
    event.remove({ id: 'twilightforest:uncrafting_table' })
})

onEvent('block.right_click', event => {
  if (event.block.id == "twilightforest:uncrafting_table") {
    event.cancel()
  }
})
