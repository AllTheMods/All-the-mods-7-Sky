onEvent('block.right_click', event => {
  if (event.hand != MAIN_HAND) { return; }
  let block = event.block
  if (block.hasTag("minecraft:dirt")) {
      let player = event.player
      if (player.getMainHandItem() == Item.of("minecraft:air")) {
          let loot = [
              "exnihilosequentia:andesite_pebble",
              "exnihilosequentia:basalt_pebble",
              "exnihilosequentia:blackstone_pebble",
              "exnihilosequentia:diorite_pebble",
              "exnihilosequentia:granite_pebble"
          ]
          let random = Math.floor(Math.random() * 2 * loot.length)
          let dropItem = Item.of(loot[random] ?? "exnihilosequentia:stone_pebble")
          block.popItemFromFace(dropItem,event.facing)
          //player.addExhaustion(1)
          player.swingArm(event.hand)
      }
  }
})