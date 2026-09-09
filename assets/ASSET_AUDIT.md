# Asset Audit

Audit date: 2026-09-08

## Camel Character Assets

The supplied 3D camel assets were found in `图形素材` with non-semantic batch filenames. They were copied into `assets/characters` with semantic names and mapped in `src/app.js`.

| State | Source file | Runtime file |
| --- | --- | --- |
| neutral | `图形素材/ckt批处理_2026-09-08+20-59_09.png` | `assets/characters/camel-neutral.png` |
| happy | `图形素材/ckt批处理_2026-09-08+20-59_02.png` | `assets/characters/camel-happy.png` |
| thinking | `图形素材/ckt批处理_2026-09-08+20-59_06.png` | `assets/characters/camel-thinking.png` |
| walking | `图形素材/ckt批处理_2026-09-08+20-59_07.png` | `assets/characters/camel-walking.png` |
| hop | `图形素材/ckt批处理_2026-09-08+20-59_04.png` | `assets/characters/camel-hop.png` |
| confused | `图形素材/ckt批处理_2026-09-08+20-59_08.png` | `assets/characters/camel-confused.png` |
| celebrate | `图形素材/ckt批处理_2026-09-08+20-59_00.png` | `assets/characters/camel-celebrate.png` |
| pointing | `图形素材/ckt批处理_2026-09-08+20-59_05.png` | `assets/characters/camel-pointing.png` |

Additional supplied camel variants kept for future use:
- `assets/characters/camel-lift-foot.png`
- `assets/characters/camel-smile-alt.png`

The development-only preview at `/?debug=assets` displays the mapped camel states.

## Background Assets

- `assets/backgrounds/desert-adventure.png`
- `assets/backgrounds/desert-learning.png`
- `assets/backgrounds/oasis.png`
- `assets/backgrounds/final-oasis.png`

## Object Assets

- `assets/objects/mystery-card.png`
- `assets/objects/sign-arrow.png`
- `assets/objects/treasure-chest.png`
- Other supplied objects remain available but are not placed unless needed by the lesson interaction.

## Reward Assets

- `assets/rewards/trophy-large.png`
- Other supplied reward assets remain available. Normal correct-answer bursts use transient CSS particles rather than permanent sticker placement.
