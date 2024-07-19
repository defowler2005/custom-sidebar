import { world, system } from '@minecraft/server';

system.runInterval(() => {
    world.getAllPlayers().forEach((player) => {
        player.onScreenDisplay.setActionBar(
            {
                "rawtext": [
                    {
                        "text": `§aName: §e${player.nameTag}\n§aHealth: §e20\n§aArmor: §e10\n§aLevel: §e5`
                    }
                ]
            }
        )
    })
});
