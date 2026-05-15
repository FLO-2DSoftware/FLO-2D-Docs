Two-phase Dam Breach
==================================

Two-phase dam breach modeling is used when the failure involves a phase of water and mudflow that interacts dynamically
during the flow process. In these scenarios, the released material cannot be adequately represented as clear water or
as a single-phase mudflow because the movement of water and the hyperconcentrated fluid influences the flow behavior
simultaneously. The two-phase model simulates the coupled motion of fluid and sediment, allowing the prediction of
flow depth, velocity, sediment concentration, and deposition patterns during and after a dam failure.

This approach is important for tailings dam failures where large volumes of tailings are released together with water,
and where sediment transport processes affect the magnitude and extent of downstream impacts.
The two-phase formulation accounts for momentum exchange between the fluid and sediment phases and allows the
simulation of erosion, transport, and deposition as part of the same hydraulic process.

Three methods are available to represent two-phase dam failures in FLO-2D. Each method reflects a different level of
modeling detail and physical representation of the failure mechanism. The following sections describe these methods and
their typical applications.

Method 1: Prescribed Breach
---------------------------------

The Prescribed Breach method allows the user to define the development time of the breach while simulating the
coupled movement of water and sediment during the failure. In this approach, the breach enlarges according to
user-defined parameters, and the model computes the resulting discharge and sediment transport dynamically as the
reservoir drains.

This method provides greater physical representation of the failure because the discharge is computed as a
function of the evolving breach geometry and reservoir conditions. At the same time, the model tracks the
concentration and movement of sediment released during the breach, allowing the prediction of both
hydraulic and erosion/scour impacts.

The prescribed breach method is commonly used in engineering studies where the breach characteristics can be
reasonably estimated based on design information or regulatory guidance. It is well suited for consequence assessments,
dam safety evaluations, and emergency planning studies where a defined failure scenario must be simulated consistently
while accounting for sediment transport processes.


Method 2: Erosion Breach
---------------------------------

The Erosion Breach method represents the most physically detailed approach for simulating dam failures.
In this method, the breach develops dynamically as a result of hydraulic erosion while the model simultaneously
computes the coupled transport of water and sediment. The enlargement of the breach, the discharge rate, and the
sediment concentration are calculated continuously during the simulation based on the interaction between
flow hydraulics and material resistance.

This approach is particularly appropriate when the failure mechanism involves overtopping or progressive erosion
and when the objective of the study is to represent the time-dependent evolution of the breach and the associated
sediment release. Because the breach geometry is not predefined, the resulting hydrograph and sediment discharge
depend on both the hydraulic conditions and the assumed material properties.

The erosion breach method is commonly applied in detailed engineering analyses, risk assessments,
and design studies where the timing and magnitude of the release must be represented as realistically as possible.
It is also useful for evaluating how changes in material properties, reservoir conditions, or erosion resistance
influence the progression of the failure and the downstream hazard.

Method 3: Tailings Stack
---------------------------------

The Tailings Stack method can be applied in two-phase modeling when the failure involves a stacked deposit of
tailings that becomes mobilized together with water. The released material is represented as a phase of water
and other phase of mudflow that flows downslope and interacts dynamically during transport.
The model computes both the hydraulic behavior of the flow and the movement and deposition of sediment as part of the same simulation.

This method is particularly useful for evaluating failures in partially saturated tailings storage systems where rainfall,
seepage, or structural instability can mobilize large volumes of material. The two-phase formulation allows the simulation
of complex flow behavior, including rapid mobilization, sediment transport, and deposition over irregular terrain.

The tailings stack method is commonly used in hazard assessments, consequence analyses, and emergency planning studies
for facilities that store tailings in stacked configurations. It allows engineers to estimate the potential runout
distance, inundation depth, and deposition patterns associated with the release of mixed water and sediment.
