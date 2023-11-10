let hasira_x = 0
let x = 0
let hasira_z = 0
let z = 0
let y = 0
function hasira () {
    hasira_x = x + 2
    hasira_z = z + 2
    for (let カウンター = 0; カウンター <= 4; カウンター++) {
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(カウンター * 8 + hasira_x, y, hasira_z),
        world(カウンター * 8 + hasira_x + 1, y + 10, hasira_z + 1),
        FillOperation.Replace
        )
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(カウンター * 8 + hasira_x, y, hasira_z + 28),
        world(カウンター * 8 + hasira_x + 1, y + 10, hasira_z + 29),
        FillOperation.Replace
        )
    }
    for (let カウンター = 0; カウンター <= 1; カウンター++) {
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(カウンター * 32 + hasira_x, y, hasira_z + 3),
        world(カウンター * 32 + hasira_x + 1, y + 10, hasira_z + 26),
        FillOperation.Replace
        )
        blocks.fill(
        AIR,
        world(カウンター * 32 + hasira_x, y, hasira_z + 5),
        world(カウンター * 32 + hasira_x + 1, y + 8, hasira_z + 24),
        FillOperation.Replace
        )
    }
}
function glass () {
    blocks.fill(
    LIGHT_BLUE_STAINED_GLASS,
    world(x + 5, y, z + 5),
    world(x + 32, y + 10, z + 28),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(x + 17, y, z + 5),
    world(x + 20, y + 7, z + 28),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(x + 6, y, z + 6),
    world(x + 15, y + 10, z + 27),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(x + 22, y, z + 6),
    world(x + 31, y + 10, z + 27),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(x + 16, 9, z + 7),
    world(x + 21, y + 10, z + 26),
    FillOperation.Replace
    )
}
function water () {
    blocks.fill(
    WATER,
    world(x + 6, y, z + 6),
    world(x + 15, y + 7, z + 27),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    world(x + 22, y, z + 6),
    world(x + 31, y + 7, z + 27),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    world(x + 6, y + 10, z + 6),
    world(x + 31, y + 10, z + 27),
    FillOperation.Replace
    )
}
player.onChat("build", function () {
    x = player.position().getValue(Axis.X)
    y = player.position().getValue(Axis.Y)
    z = player.position().getValue(Axis.Z)
    yuka()
    hasira()
    yane()
    glass()
    water()
    moji()
    fish()
})
player.onChat("del", function () {
    blocks.fill(
    AIR,
    world(0, 0, 0),
    world(40, 14, 40),
    FillOperation.Replace
    )
})
function yuka () {
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(x, y - 1, z),
    world(x + 37, y - 1, z + 37),
    FillOperation.Replace
    )
    blocks.fill(
    SEA_LANTERN,
    world(x + 17, y - 1, z + 5),
    world(x + 20, y - 1, z + 28),
    FillOperation.Replace
    )
    blocks.fill(
    SAND,
    world(x + 5, y - 1, z + 5),
    world(x + 16, y - 1, z + 28),
    FillOperation.Replace
    )
    blocks.fill(
    SAND,
    world(x + 21, y - 1, z + 5),
    world(x + 32, y - 1, z + 28),
    FillOperation.Replace
    )
}
function yane () {
    for (let カウンター = 0; カウンター <= 2; カウンター++) {
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(カウンター * 5 + x, y + 11 + カウンター, z),
        world(x + 37 - カウンター * 5, y + 11 + カウンター, z + 35),
        FillOperation.Replace
        )
    }
    blocks.fill(
    WOODEN_TRAPDOOR,
    world(x + 15, y + 14, z + 10),
    world(x + 22, y + 14, z + 17),
    FillOperation.Replace
    )
    blocks.fill(
    SEA_LANTERN,
    world(x + 14, y + 11, z + 9),
    world(x + 23, y + 11, z + 18),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(x + 15, y + 10, z + 10),
    world(x + 22, y + 13, z + 17),
    FillOperation.Replace
    )
}
function fish () {
    for (let index = 0; index < 10; index++) {
        mobs.spawn(TROPICAL_FISH, world(x + 10, y + 1, z + 11))
        mobs.spawn(TROPICAL_FISH, world(x + 24, y + 1, z + 11))
        mobs.spawn(TROPICAL_FISH, world(x + 18, y + 9, z + 13))
        mobs.spawn(SEA_TURTLE, world(x + 24, y + 1, z + 11))
        mobs.spawn(GLOW_SQUID, world(x + 10, y + 1, z + 11))
    }
}
function moji () {
    blocks.print(
    "GO",
    SEA_LANTERN,
    world(x + 24, y + 1, z + 11),
    SOUTH
    )
    blocks.print(
    "OK",
    SEA_LANTERN,
    world(x + 10, y + 1, z + 11),
    SOUTH
    )
}
