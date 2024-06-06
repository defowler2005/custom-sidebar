import { world, system } from '@minecraft/server';

system.runInterval(() => {
    world.getAllPlayers().forEach((player) => {
        player.onScreenDisplay.setTitle(
            {
                "rawtext": [
                    {
                        "text": `§aName: §e${player.nameTag}\n§aHealth: §e20\n§aArmor: §e10\n§aLevel: §e5`
                    }
                ]
            },
            {
                subtitle: '§l§aYour §eserver',
                stayDuration: 20,
                fadeInDuration: 0,
                fadeOutDuration: 0
            }
        )
    })
}, 10);
