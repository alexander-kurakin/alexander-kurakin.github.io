---
layout: page
title: Gameplay Systems & Architecture
description: 2025-mid 2026.<br>A series of progressively more complex gameplay systems focused on scalable architecture, decoupling, and practical implementation of design patterns.
img: assets/img/custom_image.png
importance: 2
category: Current / Future
---

**2D specifics.Event-driven gameplay**<br>

* 2D: Sprites, animatons, tile map, rules, palette, colliders, gravity, effectors, popular platformer mechanics.
* Delegates, subscriptions, invocation list, Action/Func, callbacks, WaitUntil/WaitWhile.
* Events, practical differences vs delegates, anonymous methods and lambda expressions.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drag_and_drop_cinemachine.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drag_and_drop_cinemachine.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drag_and_drop_cinemachine.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>    
</div>
<div class="caption">
    Left - "Advanced wallet". Middle - "Advanced timer". Right - "Conditinal enemy destroying"
</div>

**Navigation and advanced VFX**<br>

* AI-Navigation (NavMesh), Navmesh links traversal, custom NavMesh agent physics.
* Async programming, coroutines and yield instructions. Sounds, effects, audio mixer. 
* Humanoid animations, retargeting, animation layers, blend trees, animation events
* Shader graph: water waves simulation, gradient, dissolving, pulse (Fresnel effect + vertices scale).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/shader_graph_pulse.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div> 
    <div class="col-sm mt-3 mt-md-0">
        <iframe width="420" height="225" src="https://www.youtube.com/embed/pHxtJPOuRg0?si=dNSTnBGw1cbUF4GG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>
<div class="caption">
    Left - "Shadergraph for pulse effect". Right - "NavMesh guy and absolutely normal mines".
</div>

**Advanced unity systems**<br>

* Raycast, gizmos, physical layers, interpolation, scalar math, vector product
* Cinemachine, types of physical movement. Facade pattern. MVC.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="ratio ratio=16x9">
            <video autoplay loop muted playsinline>
                <source src="{{ '/assets/img/boat2.mp4' | relative_url }}" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drag_and_drop_cinemachine.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left - "Boat on the wind". Right - "Raycast drag and drop".
</div>

**Polymorphism and inheritance**<br>

* OOP principles, inheritance, prefabs, spawners
* Abstract and virtual classes, polymorphysm. Structs, static, readonly, enum, ref and out modifiers
* Interfaces, composition, Strategy pattern. 
* Basic UI components, code style and coding principles DRY, KISS, YAGNI

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
    <iframe width="420" height="225" src="https://www.youtube.com/embed/Wc5udciUTrw?si=SCborR6GGXYjrw5l&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>    
    <div class="col-sm mt-3 mt-md-0">
        <iframe width="420" height="225" src="https://www.youtube.com/embed/xgls6vUqIV0?si=7xvHXvgbrvasJdII&amp;start=39" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>
<div class="caption">
    Left - "Items and effects". Right - "Enemy behaviour".
</div>


**Unity fundamentals and prototyping**<br>

* Scene composition, materials, textures, FBX models, basic animations, particle effects, trails.
* Input handling, physics-based movement, score.
* Vector math, character-controller movement, Quaternions and rotation.
* Verson control, physics, colliders, rigidbody.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/advanced_scene_composition.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flappy_bird.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left - "Scene composition". Right - "Flappy ball".
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <iframe width="420" height="225" src="https://www.youtube.com/embed/TcwkYWZV5VI?si=sReVgxAoICugQS5q&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>    
    <div class="col-sm mt-3 mt-md-0">
        <iframe width="420" height="225" src="https://www.youtube.com/embed/mKbvo20oICY?si=A9UPn2AJsETENAMZ&amp;start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>
<div class="caption">
    Left - "Don't forget the batteries". Right - "Rolling ball".
</div>


**C# Programming Foundations**<br>
Terminal-based projects focused on core programming logic, state management, and system design without engine support.

* Types, operations, console, conditionals, loops, arrays, nesting
* Methods, overloading, List, Queue, Dictionary, Stack, 
* Classes, fields, properties, constructors, access modificators, data security
* State-driven systems (wallet, health, turn-based attacks, gameplay). Defensive programming