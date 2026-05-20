# Minecraft Tools

The page `https://useful.page.gd/minecraft-tools` contains **30+ utilities** for Minecraft players and server admins. All tools work client‑side and generate ready‑to‑use commands or links.

## 1. Download Skin

Enter a player’s username. The site fetches the UUID via Mojang API and creates a direct skin link (using Crafatar). You can download the skin or copy the link.

## 2. Crafting Table

Shows an example recipe for a given item ID (dictionary limited, but you can extend it in the code).

## 3. Custom Crafting

Allows you to enter your own JSON recipe (Minecraft format) and validate it.

## 4. Flat World

Selects a flat world preset and generates the command `/setworldpreset`.

## 5. Custom World

Generates the command `/seed` with your specified seed.

## 6. Enchantment Calculator

For a chosen item (sword, pickaxe, helmet), lists possible enchantments at a given experience level.

## 7. Armor Color

RGB calculator for leather armor: pick a colour with sliders, get a `/give` command with the `display:{color:...}` tag.

## 8. Firework

Firework builder: choose type (small/large ball) and colour, receive an NBT command.

## 9. Banners (Craft)

Gives a `/give` command with the selected pattern (creeper, skull, flower).

## 10. Banner Gallery

Shows a textual ASCII preview of the pattern.

## 11. Shield (Craft)

Generates a shield with a pattern: `/give @p shield{BlockEntityTag:{Base:15,Patterns:[{Pattern:flo,Color:14}]}}`.

## 12. Shield Gallery

For selected preset (creeper or skull) produces a command with the corresponding pattern.

## 13. Mob Generator

Choose a mob type (zombie, skeleton, creeper) and optionally a custom name – get a `/summon` command with `CustomName`.

## 14. Drop Tables

Shows which items drop from the selected mob (zombie, skeleton).

## 15. Custom Potions

Generates `/effect give @p <effect> <duration> 1` (duration in seconds).

## 16. Beacon

Configure primary and secondary beacon effects, get the `/setblock` command.

## 17. Coordinates Calculator

Calculates Euclidean distance between two points (X1,Z1) and (X2,Z2).

## 18. Selector Target

Helps build a selector like `@p[arg=value,...]`. Displays the result as text.

## 19. Text Generators (Nicknames)

Generates a random nickname using the same rules as Minecraft nickname generator.

## 20. Colour Codes

Replaces `&` with `§` in Minecraft colour codes.

## 21. JSON Text Component

Takes text and colour, outputs JSON like `{"text":"...","color":"..."}`.

## 22. Styled Text

Adds formatting: bold, italic, underline (using `§l`, `§o`, `§n`).

## 23. Title Generator

Generates `/title @p title {...}` and `/title @p subtitle {...}` commands for main and subtitle.

## 24. Sign Generator

Takes 4 lines of text and outputs a `/setblock` command with the filled sign.

## 25. Book Editor

Creates a `/give @p written_book` command with the content you enter.

## 26. /tellraw Editor

Takes text and colour, generates `/tellraw @p {"text":"...","color":"..."}`.

## 27. MOTD Generator

Takes two lines of server message (supports `&` colour codes) and outputs the string for `server.properties`.

All tools are logged in the admin panel as `TOOL_USE` events with the parameter `minecraft_<tool_name>`.