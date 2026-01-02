---
layout: page
title: Gameplay Systems & Architecture
description: 2025-mid 2026.<br>A series of progressively more complex gameplay systems focused on scalable architecture, decoupling, and practical implementation of design patterns.
img: assets/img/custom_image.png
importance: 2
category: Current / Future
---

**Event-driven architecture and decoupled systems**<br>

* **Architecture** designed decoupled communication layers using C# events and delegates to minimize dependency between systems.<br>
* **Asynchronous logic** implemented reactive gameplay loops and callback systems using advanced flow control (WaitUntil/WaitWhile/Invoke).<br>
* **2D implementation** engineered robust 2D pipelines including Tilemap management, physics effectors, and sprite-based animation state machines.<br>

Key implementation: **to be continued / WIP**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/advanced_wallet.gif" title="pending image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/advanced_timer.gif" title="pending image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/conditional_enemy.gif" title="pending image" class="img-fluid rounded z-depth-1" %}
    </div>    
</div>
<div class="caption">
    Left - "Event-based wallet". Middle - "Event-based decoupled timer". Right - "Conditinal enemy destroying"
</div>

**AI pathfinding, async operations and technical art**<br>
* **AI and navigation** developed custom AI agents utilizing NavMesh traversal, off-mesh links, and physics-driven agent movement.<br>
* **Performance and async** optimized runtime performance using coroutines and asynchronous programming for non-blocking operations.<br>
* **Technical art** created dynamic visual effects via Shader Graph (vertex manipulation, Fresnel effects) and managed complex audio via Audio Mixer.<br>
* **Animation** implemented advanced humanoid animation systems involving retargeting, blend trees, and layered state management.<br>

Key implementation:  
<a href="https://github.com/alexander-kurakin/PointAndClick_improved_new/tree/master/Assets/_Develop">Tactical NavMesh Agent</a>
<div class="caption"> 
    A full implementation of NavMesh agent handling traversal, off-mesh links (jumping), custom shader for visual feedback, and layered humanoid animations.
</div>

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

**Design patterns and gameplay engineering**<br>
* **Architectural patterns** applied MVC (Model-View-Controller) and Facade patterns to structure complex gameplay systems and abstract subsystem complexity.<br>
* **Math and physics** utilized vector mathematics (Dot/Cross products) and interpolation for precise gameplay mechanics and raycast-based spatial queries.<br>
* **Camera systems** engineered procedural camera behaviors and cutscenes using Cinemachine and code-driven constraints.<br>

Key implementation:  
<a href="https://github.com/alexander-kurakin/RaycastDragAndDropDemo/tree/main/Assets/_Scripts">Raycast Interaction System</a>
<div class="caption"> 
    A physics-based drag-and-drop controller utilizing raycasting, interface-based interaction, and vector interpolation for smooth object handling.
</div>

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

**Scalable Object-Oriented architecture**<br>
* **OOD principles** constructed modular and scalable codebases using SOLID principles, focusing on Composition over Inheritance and Interface segregation.<br>
* **Design patterns** implemented the Strategy pattern to manage interchangeable behaviors and decoupled entity spawning systems.<br>
* **Code quality** enforced strict coding standards (DRY, KISS, YAGNI) and type safety using Generics, Enums, and encapsulation strategies.<br>

Key implementation:  
<a href="https://github.com/alexander-kurakin/AbstractItemUseDemo/tree/main/Assets/_Scripts">Modular Ability System</a> and <a href="https://github.com/alexander-kurakin/EnemyBehaviourDemo/tree/main/Assets/_Scripts">Strategy Pattern AI</a>
<div class="caption"> 
    Demonstrates abstract item/ability system and an Interface-based enemy behavior system.
</div>

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


**Core engine mechanics and physics implementation**<br>
* **Physics and math** applied linear algebra (Quaternions, Vectors) for custom character controllers and physics-based rigid body interactions.<br>
* **Scene architecture** managed efficient scene hierarchies, asset integration (FBX/Materials), and version control workflows for rapid prototyping.<br>
* **Input systems** developed responsive input handling systems for precise player control and immediate feedback.<br>

Key implementation:  
<a href="https://gist.github.com/alexander-kurakin/9dcfb72a7207306596fd96ce9bb5cded">Math-Driven Target Tracking</a> and <a href="https://github.com/alexander-kurakin/PhysicalBallPrototype/blob/main/Assets/_Scripts/Ball.cs">Physics Controllers</a>
<div class="caption"> 
    Code examples focusing on vector math for AI traversal, distance calculations, and RigidBody physics.
</div>

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


**C# data structures and logic foundations**<br>
* **System design** engineered pure C# applications focusing on state management and logic flow without engine dependencies.<br>
* **Data structures** utilized optimized collections (Dictionaries, Stacks, Queues) for efficient data handling and memory management.<br>
* **Defensive programming** implemented robust error handling and data security through encapsulation, access modifiers, and constructor injection.<br>

Key implementation: <a href="https://gist.github.com/alexander-kurakin/83e9cc50a8fc5e0e079ef30399412478">Terminal RPG Architecture</a>
<div class="caption">
    A pure C# boss-fight simulation demonstrating inventory logic (Wallet), state management, and class hierarchy without engine overhead.
</div>
