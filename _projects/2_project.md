---
layout: page
title: Gameplay Systems & Architecture
description: 2025-mid 2026.<br>A series of progressively more complex gameplay systems focused on scalable architecture, decoupling, and practical implementation of design patterns.
img: assets/img/custom_image.png
importance: 2
category: Current / Future
giscus_comments: true
---


**Unity fundamentals and prototyping**<br>
Unity gameplay prototyping

* Scene composition, input, rigidbody-based movement, score.
* Materials, textures, FBX models, basic animations, particle effects, trails.
* Vector math, character-controller movement, Quaternions and rotation. "Don't forget the batteries" game.
* Verson control, physics, colliders, rigidbody. Classic phyical "Rolling ball" game.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/advanced_scene_composition.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flappy_bird.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left - Advanced scene composition. Right - "Flappy ball" game.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <iframe width="420" height="225" src="https://www.youtube.com/embed/tGxst2KJQdQ?si=ykBWkw1sXchZBHpo&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <iframe width="420" height="225" src="https://www.youtube.com/embed/tGxst2KJQdQ?si=ykBWkw1sXchZBHpo&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>    
</div>
<div class="caption">
    Left - "Don't forget the batteries" game. Right - "Rolling ball" game.
</div>


**C# Programming Foundations**<br>
Terminal-based projects focused on core programming logic, state management, and system design without engine support.

* Types, operations, console, conditionals, loops, arrays, nesting
* Methods, overloading, List, Queue, Dictionary, Stack, 
* Classes, fields, properties, constructors, access modificators, data security
* State-driven systems (wallet, health, turn-based attacks, gameplay). Defensive programming