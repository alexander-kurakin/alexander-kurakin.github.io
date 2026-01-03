---
layout: page
title: Action roguelike prototype (Archero-inspired)
description: Early 2026.<br>Action roguelike prototype focused on systemic combat, modular skills, and scalable progression systems.
img: assets/img/WIP.png
importance: 2
category: Systems and architecture
related_publications: false
---

This project serves as a capstone for my advanced C# and architecture studies; it is approached as an independent engineering project.

**Design Focus**<br>
* **Gameplay systems** skill system with composable effects, enemy behavior composition, data-driven progression, and spawners.<br>
* **Architecture** decoupled core and meta gameplay systems, explicit initialization, persistent player state.<br>
* **Player experience** responsive controls, readable combat, clear progression and rewards.<br>
* **UI and UX** modular UI architecture (menu, upgrades, settings).<br>
* **Audio and visuals:** SFX/VFX integration and animation tuning to reinforce the gameplay feedback.<br>
* **Performance:** optimization targeting mobile platform

Placeholder images (not final art):
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/archero_1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/archero_2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/archero_3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left - skills progression. Middle - Waves system. Right - boss fight.
</div>

**Design Constraints**<br>
* Adding new enemies or skills must not require changes to existing systems logic.
* Readable and maintainable code.
* Must not rely on the script execution order.

The project will be further documented through short write-ups describing decisions, tradeoffs, and refactoring outcomes.