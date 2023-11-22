import { world, system } from "@minecraft/server";

system.runInterval(() => {
    world.getAllPlayers().forEach((player) => {
        player.onScreenDisplay.setTitle({
            "rawtext": [
                {
                    "text": "§aName: §edefowler2OO5\n§aHealth: §e20\n§aArmor: §e10\n§aLevel: §e5"
                }
            ]
        })
    })
}, 83);
