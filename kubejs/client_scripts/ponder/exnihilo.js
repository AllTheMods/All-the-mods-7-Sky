onEvent("ponder.tag", event => {
    event.createTag("kubejs:nihilo", "exnihilosequentia:wooden_crook", "Ex Nihilo: Sequentia", "Information about Resource Generation", [
        "exnihilosequentia:wooden_crook",
        "exnihilosequentia:wooden_hammer",
        "exnihilosequentia:oak_sieve",
        "exnihilosequentia:oak_crucible",
        "exnihilosequentia:oak_barrel",
        "exnihilosequentia:crafting_doll"
    ])
})

onEvent("ponder.registry", event => {
    event.create([
        "exnihilosequentia:andesite_crook",
        "exnihilosequentia:bone_crook",
        "exnihilosequentia:diamond_crook",
        "exnihilosequentia:diorite_crook",
        "exnihilosequentia:gold_crook",
        "exnihilosequentia:granite_crook",
        "exnihilosequentia:iron_crook",
        "exnihilosequentia:stone_crook",
        "exnihilosequentia:wooden_crook",
        "exnihilosequentia:silkworm",
        "exnihilosequentia:infested_leaves",
        "exnihilosequentia:infesting_leaves"
    ])
        .scene("enscrook1", "Using the crook", "kubejs:oaktree", (scene, util) => {
            scene.showStructure()
            scene.showControls(40, [0, 4.5, 0], "left")
                .leftClick()
                .withItem("exnihilosequentia:wooden_crook")
            scene.overlay.showText(30).text("Breaking Leaves").independent(20).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("with a Crook").independent(36).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("can drop Silkworms").independent(52).placeNearTarget()
            scene.idle(10)
            scene.world.modifyBlock([0, 4, 0], () => Block.id("minecraft:air"), true)
            let worm = scene.world.createItemEntity(util.vector.centerOf(0, 4, 0), util.vector.of(0, -0.2, 0), "exnihilosequentia:silkworm")
            scene.idle(60)
            scene.world.removeEntity(worm)
            scene.markAsFinished()
        })
        .scene("enscrook2", "Playing with worms", "kubejs:oaktree", (scene, util) => {
            scene.showStructure()
            scene.showControls(40, [0, 5.5, 0], "left")
                .rightClick()
                .withItem("exnihilosequentia:silkworm")
            scene.overlay.showText(30).text("Using a Silkworm").independent(-4).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("on leaves will").independent(12).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("begin to infest them").independent(28).placeNearTarget()
            scene.idle(10)
            scene.world.modifyBlock([0, 5, 0], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.idle(60)
            scene.addLazyKeyframe()
            scene.world.modifyBlock([0, 5, 0], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([0, 4, 0], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([1, 5, 0], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([0, 5, 1], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.idle(10)
            scene.world.modifyBlock([0, 4, 0], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([1, 4, 0], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([0, 4, 1], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([1, 5, 0], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([1, 5, 1], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([2, 5, 0], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([0, 5, 1], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([0, 5, 2], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.idle(10)
            scene.world.modifyBlock([1, 4, 0], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([2, 4, 0], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([0, 4, 1], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([0, 4, 2], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([1, 5, 1], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([1, 6, 1], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([2, 5, 1], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([1, 5, 2], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([2, 5, 0], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([3, 5, 0], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.world.modifyBlock([0, 5, 2], () => Block.id("exnihilosequentia:infested_leaves"), false)
            scene.world.modifyBlock([0, 5, 3], () => Block.id("exnihilosequentia:infesting_leaves"), false)
            scene.markAsFinished()
        })
        .scene("enscrook3", "String Theory", "kubejs:oakinfestedtree", (scene, util) => {
            scene.showStructure()
            scene.showControls(40, [0, 4.5, 0], "left")
                .leftClick()
                .withItem("exnihilosequentia:wooden_crook")
            scene.overlay.showText(30).text("Breaking Infested Leaves").independent(20).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("with a Crook").independent(36).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(30).text("can drop Silkworms and String").independent(52).placeNearTarget()
            scene.idle(10)
            scene.world.modifyBlock([0, 4, 0], () => Block.id("minecraft:air"), true)
            let worm = scene.world.createItemEntity(util.vector.centerOf(0, 4, 0), util.vector.of(-0.01, -0.2, -0.01), "exnihilosequentia:silkworm")
            let stringItem = scene.world.createItemEntity(util.vector.centerOf(0, 4, 0), util.vector.of(0.01, -0.2, 0.01), "minecraft:string")
            scene.idle(60)
            scene.world.removeEntity(worm)
            scene.world.removeEntity(stringItem)
            scene.markAsFinished()
        })
    event.create([
        "exnihilosequentia:diamond_hammer",
        "exnihilosequentia:golden_hammer",
        "exnihilosequentia:iron_hammer",
        "exnihilosequentia:netherite_hammer",
        "exnihilosequentia:stone_hammer",
        "exnihilosequentia:wooden_hammer",
    ])
        .scene("enshammer1", "Using the hammer", (scene, util) => {
            scene.showBasePlate()
            scene.world.setBlock([2, 1, 2], "minecraft:cobblestone", false)
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.showControls(260, [2.5, 2.5, 2.5], "down")
                .leftClick()
                .withItem("exnihilosequentia:wooden_hammer")
            scene.idle(10)
            scene.overlay.showText(20).text("Hammers crush blocks").independent(40).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(20).text("down to a different material").independent(56).placeNearTarget()
            scene.idle(30)
            let crushes = [
                { in: "minecraft:cobblestone", out: "minecraft:gravel", lang: ["Cobblestone", "to", "Gravel"] },
                { in: "minecraft:gravel", out: "minecraft:sand", lang: ["Gravel", "to", "Sand"] },
                { in: "minecraft:sand", out: "exnihilosequentia:dust", lang: ["Sand", "to", "Dust"] }
            ]
            crushes.forEach((crush) => {
                scene.addLazyKeyframe()
                scene.overlay.showText(30).text(crush.lang[0]).independent(40).placeNearTarget()
                scene.idle(10)
                scene.overlay.showText(30).text(crush.lang[1]).independent(56).placeNearTarget()
                scene.idle(10)
                scene.overlay.showText(30).text(crush.lang[2]).independent(72).placeNearTarget();
                for (let x = 0; x < 10; x++) {
                    scene.world.setBlock([2, 1, 2], crush.in, false)
                    scene.world.incrementBlockBreakingProgress([2, 1, 2])
                    scene.idle(4)
                }
                let thing = scene.world.createItemEntity(util.vector.of(2, 1, 2), util.vector.of(-0.06, 0.3, -0.06), crush.out)
                scene.idle(20)
                scene.world.removeEntity(thing)
            })
            scene.idle(10)
            scene.markAsFinished()
        })
    event.create([
        "exnihilosequentia:acacia_sieve",
        "exnihilosequentia:birch_sieve",
        "exnihilosequentia:dark_oak_sieve",
        "exnihilosequentia:jungle_sieve",
        "exnihilosequentia:oak_sieve",
        "exnihilosequentia:spruce_sieve",
        "exnihilosequentia:crimson_sieve",
        "exnihilosequentia:warped_sieve",
    ])
        .scene("enssieve1", "Using the sieve", (scene, util) => {
            scene.showBasePlate()
            scene.world.setBlock([2, 1, 2], "exnihilosequentia:oak_sieve", false)
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.showControls(30, [2.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("exnihilosequentia:diamond_mesh")
            scene.idle(10)
            scene.overlay.showText(30).text("Add a mesh").independent(40).placeNearTarget()
            scene.idle(30)
            scene.overlay.showText(30).text("Sneak Right-Click").independent(56).placeNearTarget()
            scene.overlay.showText(30).text("to remove it again").independent(72).placeNearTarget()
            scene.world.modifyBlock([2, 1, 2], (state) => state.with("mesh", "diamond"), false)
            scene.idle(40)
            scene.addLazyKeyframe()
            scene.showControls(70, [2.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:gravel")
            scene.idle(10)
            scene.overlay.showText(40).text("Add a Material").independent(40).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Continue holding Right-Click").independent(56).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Until completely sieved").independent(72).placeNearTarget();
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(p => {
                scene.world.modifyTileNBT([2, 1, 2], nbt => {
                    nbt.block = { id: "minecraft:gravel", Count: 1 }
                    nbt.progress = p
                }, true)
                scene.idle(6)
            })
            scene.world.modifyTileNBT([2, 1, 2], nbt => {
                nbt.block = {}
                nbt.progress = 0
            }, true)
            scene.addKeyframe()
            const centerTop = util.vector.topOf(2, 1, 2)
            scene.world.createItemEntity(centerTop, util.vector.of(-0.06, 0.2, -0.06), "exnihilosequentia:iron_pieces")
            scene.world.createItemEntity(centerTop, util.vector.of(0.06, 0.2, -0.06), "exnihilosequentia:uranium_pieces")
            scene.world.createItemEntity(centerTop, util.vector.of(0.06, 0.2, 0.06), "exnihilosequentia:gold_pieces")
            scene.world.createItemEntity(centerTop, util.vector.of(-0.06, 0.2, 0.06), "exnihilosequentia:silver_pieces")
            scene.idle(20)
        })
        .scene("enssieve2", "Mass Production", (scene, util) => {
            scene.showBasePlate();
            [0, 1, 2, 3, 4].forEach(x => {
                [0, 1, 2, 3, 4].forEach(z => {
                    scene.world.setBlock([x, 1, z], Block.id("exnihilosequentia:oak_sieve", { mesh: "iron" }), false)
                    scene.world.showSection([x, 1, z], Facing.down)
                    scene.idle(2)
                })
            })
            scene.overlay.showText(40).text("A 5x5 array of sieves").independent(40).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Can all be controlled together").independent(56).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("By using the the center sieve").independent(72).placeNearTarget();
            scene.idle(10)
            scene.showControls(50, [2.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:sand")
            scene.idle(10);
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(p => {
                [0, 1, 2, 3, 4].forEach(x => {
                    [0, 1, 2, 3, 4].forEach(z => {
                        scene.world.modifyTileNBT([x, 1, z], nbt => {
                            nbt.block = { id: "minecraft:sand", Count: 1 }
                            nbt.progress = p
                        }, true)
                    })
                })
                scene.idle(5)
            });
            [0, 1, 2, 3, 4].forEach(x => {
                [0, 1, 2, 3, 4].forEach(z => {
                    scene.world.modifyTileNBT([x, 1, z], nbt => {
                        nbt.block = {}
                        nbt.progress = 0
                    }, true)
                })
            })
            scene.idle(20)
        })

    event.create([
        "exnihilosequentia:fired_crucible",
        "exnihilosequentia:acacia_crucible",
        "exnihilosequentia:birch_crucible",
        "exnihilosequentia:dark_oak_crucible",
        "exnihilosequentia:jungle_crucible",
        "exnihilosequentia:oak_crucible",
        "exnihilosequentia:spruce_crucible",
        "exnihilosequentia:crimson_crucible",
        "exnihilosequentia:warped_crucible",
    ])
        .scene("enscrucible1", "Using the crucible", (scene, util) => {
            scene.showBasePlate()
            scene.world.setBlock([1, 1, 2], "exnihilosequentia:oak_crucible", false)
            scene.world.showSection([1, 1, 2], Facing.down)
            scene.world.setBlock([3, 1, 2], "exnihilosequentia:fired_crucible", false)
            scene.world.showSection([3, 1, 2], Facing.down)
            scene.overlay.showText(40).text("Crucibles melt down").independent(62).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("materials into liquids").independent(78).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Wooden Crucibles for water").independent(94).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("Fired Crucible for lava").independent(110).placeNearTarget()
            scene.idle(45)
            scene.addLazyKeyframe()
            scene.showControls(30, [1.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:oak_leaves");
            [1, 2, 3, 4].forEach(ct => {
                scene.world.modifyTileNBT([1, 1, 2], nbt => {
                    nbt.currentItem = { id: "minecraft:oak_leaves", Count: ct }
                    nbt.solidAmount = ct * 250
                }, true)
                scene.idle(10)
            })
            scene.idle(10)
            scene.addLazyKeyframe()
            scene.showControls(30, [3.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:cobblestone");
            [1, 2, 3, 4].forEach(ct => {
                scene.world.modifyTileNBT([3, 1, 2], nbt => {
                    nbt.currentItem = { id: "minecraft:cobblestone", Count: ct }
                    nbt.solidAmount = ct * 250
                }, true)
                scene.world.modifyTileNBT([1, 1, 2], nbt => {
                    nbt.currentItem = { id: "minecraft:oak_leaves", Count: ct }
                    nbt.solidAmount = 1000 - ct * 250
                    nbt.tank = { FluidName: "minecraft:water", Amount: 1000 * ct }
                }, true)
                scene.idle(10)
            });
            [1, 2, 3, 4].forEach(ct => {
                scene.world.modifyTileNBT([3, 1, 2], nbt => {
                    nbt.currentItem = { id: "minecraft:cobblestone", Count: ct }
                    nbt.solidAmount = 1000 - ct * 250
                    nbt.tank = { FluidName: "minecraft:lava", Amount: 1000 * ct }
                }, true)
                scene.idle(10)
            })
        })
        .scene("enscrucible2", "Bring the Heat!", (scene, util) => {
            scene.showBasePlate()
            scene.world.setBlock([1, 2, 2], "exnihilosequentia:oak_crucible", false)
            scene.world.showSection([1, 2, 2], Facing.up)
            scene.world.setBlock([3, 2, 2], "exnihilosequentia:fired_crucible", false)
            scene.world.showSection([3, 2, 2], Facing.up)
            scene.world.setBlock([1, 1, 2], "minecraft:campfire", false)
            scene.world.showSection([1, 1, 2], Facing.up)
            scene.world.setBlock([3, 1, 2], "minecraft:magma_block", false)
            scene.world.showSection([3, 1, 2], Facing.up)
            scene.overlay.showText(40).text("Heat Blocks speed up melting").independent(20).placeNearTarget()
        })
    event.create([
        "exnihilosequentia:stone_barrel",
        "exnihilosequentia:acacia_barrel",
        "exnihilosequentia:birch_barrel",
        "exnihilosequentia:dark_oak_barrel",
        "exnihilosequentia:jungle_barrel",
        "exnihilosequentia:oak_barrel",
        "exnihilosequentia:spruce_barrel",
        "exnihilosequentia:crimson_barrel",
        "exnihilosequentia:warped_barrel",
    ])
        .scene("ensbarrel1", "Using the barrel", (scene, util) => {
            scene.showStructure()
            scene.world.setBlock([2, 1, 2], "exnihilosequentia:oak_barrel", false)
            scene.world.showSection([2, 1, 2], Facing.up)
            scene.showControls(80, [2.5, 2, 2.5], "down")
                .rightClick()
                .withItem("minecraft:oak_leaves")
            scene.overlay.showText(40).text("Barrels can work similar").independent(62).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("to a composter turning").independent(78).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("living material into dirt").independent(94).placeNearTarget();
            [1, 2, 3, 4, 5, 6, 7, 8].forEach((amt) => {
                scene.idle(10)
                scene.world.modifyTileNBT([2, 1, 2], nbt => {
                    nbt.barrelMode = "compost"
                    nbt.solidAmount = amt * 125
                }, true)
            })
            scene.idle(10)
            scene.particles.simple(40, "ash", [2.5, 2.2, 2.5]).withinBlockSpace()
            scene.idle(50)
            scene.world.modifyTileNBT([2, 1, 2], nbt => {
                nbt.barrelMode = "block"
                nbt.solidAmount = 0
                nbt.inventory = { Size: 1, Items: [{ Slot: 0, id: "minecraft:dirt", Count: 1 }] }
            }, true)
            scene.markAsFinished()
        })
        .scene("ensbarrel2", "Making Fluids", (scene, util) => {
            scene.showStructure()
            scene.world.setBlock([1, 2, 2], "exnihilosequentia:oak_barrel", false)
            scene.world.showSection([1, 2, 2], Facing.up)
            scene.world.setBlock([3, 2, 2], "exnihilosequentia:oak_barrel", false)
            scene.world.showSection([3, 2, 2], Facing.up)
            scene.world.setBlock([1, 1, 2], "minecraft:sand", false)
            scene.world.showSection([1, 1, 2], Facing.up)
            scene.world.setBlock([3, 1, 2], "minecraft:mycelium", false)
            scene.world.showSection([3, 1, 2], Facing.up)
            scene.overlay.showText(40).text("Barrels above certain").independent(20).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("blocks will convert").independent(36).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("water into other fluids").independent(52).placeNearTarget();
            scene.idle(30)
            scene.showControls(20, [3.5, 3, 2.5], "down")
                .rightClick()
                .withItem("minecraft:water_bucket");
            scene.idle(10)
            scene.world.modifyTileNBT([3, 2, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "minecraft:water", Amount: 1000 }
            }, true)
            scene.showControls(20, [1.5, 3, 2.5], "down")
                .rightClick()
                .withItem("minecraft:water_bucket");
            scene.idle(10)
            scene.world.modifyTileNBT([1, 2, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "minecraft:water", Amount: 1000 }
            }, true)
            scene.particles.simple(30, "effect", [3.5, 2, 2.5]).density(5)
            scene.idle(10)
            scene.particles.simple(30, "effect", [1.5, 2, 2.5]).density(5)
            scene.idle(40)
            scene.world.modifyTileNBT([3, 2, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "exnihilosequentia:witch_water", Amount: 1000 }
            }, true)
            scene.idle(10)
            scene.world.modifyTileNBT([1, 2, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "exnihilosequentia:sea_water", Amount: 1000 }
            }, true)
        })
    event.create([
        "exnihilosequentia:crafting_doll",
        "exnihilosequentia:blaze_doll",
        "exnihilosequentia:enderman_doll",
        "exnihilosequentia:shulker_doll",
        "exnihilosequentia:guardian_doll",
        "exnihilosequentia:bee_doll",
    ])
        .scene("ensdoll1", "Playing with Dolls", (scene, util) => {
            scene.showStructure()
            scene.world.setBlock([2, 1, 2], "exnihilosequentia:stone_barrel", false)
            scene.world.showSection([2, 1, 2], Facing.up)
            scene.world.modifyTileNBT([2, 1, 2], nbt => {
                nbt.blockMode = "fluid"
                nbt.tank = { FluidName: "minecraft:lava", Amount: 1000 }
            }, true)
            scene.showControls(30, [2.5, 2, 2.5], "down")
                .rightClick()
                .withItem("exnihilosequentia:blaze_doll");
            scene.overlay.showText(40).text("Using a doll").independent(62).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("on the appropriate").independent(78).placeNearTarget()
            scene.idle(10)
            scene.particles.simple(40, "large_smoke", [2.5, 1, 2.5])
            scene.overlay.showText(40).text("fluid in a barrel").independent(94).placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(40).text("will spawn a mob").independent(110).placeNearTarget()
            scene.idle(50)
            scene.world.modifyTileNBT([2, 1, 2], nbt => {
                nbt.tank = { FluidName: "minecraft:empty", Amount: 0 }
                nbt.blockMode = "empty"
            }, true)
            scene.idle(10)
            const blaze = scene.world.createEntity("blaze", util.vector.topOf(2, 1, 2))
        })
})