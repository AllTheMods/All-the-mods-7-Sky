onEvent('block.right_click', event => {
  if (event.hand != MAIN_HAND) { return; }
  let block = event.block
  if (block.hasTag("minecraft:dirt")) {
      let mcPlayer = event.player.minecraftPlayer
      if (mcPlayer.getMainHandItem() == Item.of("minecraft:air")) {
          let loot = [
              "exnihilosequentia:andesite_pebble",
              "exnihilosequentia:basalt_pebble",
              "exnihilosequentia:blackstone_pebble",
              "exnihilosequentia:diorite_pebble",
              "exnihilosequentia:granite_pebble"
          ]
          random = Math.floor(Math.random() * 2 * loot.length)
          dropItem = Item.of(loot[random] ?? "exnihilosequentia:stone_pebble")
          block.popItemFromFace(dropItem,event.facing)
          //event.player.addExhaustion(1)
          event.player.swingArm(event.hand)
      }
  }
})