Tailings Dam Breach
==================================

Tailings dam failures present additional complexity compared to clear water dam failures because the released material
behaves as a non-Newtonian fluid and transports significant sediment volumes during the failure.
In FLO-2D, tailings dam breach scenarios can be simulated using several approaches that account for the hydraulic and
rheological properties of the tailings material. These approaches range from simplified hydrograph-based
releases to more detailed simulations that explicitly represent erosion and material transport processes.

In general, four primary methods are available to represent tailings dam failures in FLO-2D.
Each method reflects a different level of modeling detail and physical representation of the failure mechanism.
The following sections describe these methods and their typical applications.

Method 1: Breach Hydrograph Tool
---------------------------------

.. image:: ../../img/dam-breach/dam-breach0008.png

The Breach Hydrograph Tool can be applied to tailings dam failures when the objective is to estimate the released
volume based on empirical correlations of documented failures. In this context, the tool is used to define the
volume of released tailings and the outflow hydrograph without explicitly simulating the erosion of the dam structure.

This method is commonly used for screening-level analyses, preliminary risk assessments, and emergency
planning studies where limited information is available about the failure mechanism or the physical properties of the
tailings material. The user defines the dam height, total impoundment volume, impounded tailings volume,
and the tool estimates the released volume based on several approaches. Then, a hydrograph shape can be
selected to be routed downstream using the FLO-2D sediment transport and mudflow capabilities to represent the
movement and deposition of tailings.

Because the hydrograph is predefined, this approach provides a practical and computationally efficient way to evaluate
potential downstream impacts while maintaining a consistent modeling framework. It is particularly useful when multiple
failure scenarios must be evaluated quickly or when regulatory guidance requires conservative estimates of released
volume and discharge.

Two case studies involved this method: Brumadinho I and Idaho I. Both demonstrate how to estimate the release hydrograph
and simulate the downstream movement of tailings using the Breach Hydrograph Tool.

.. toctree::
   :maxdepth: 1

   brumadinho-i/index
   idaho-i/index

Method 2: Prescribed Breach
---------------------------------

The Prescribed Breach method allows the user to define the breach geometry and the rate at which the breach develops in
a tailings dam structure. The model computes the release of tailings dynamically as the breach enlarges according to
the input data. This method provides greater control over the failure representation than simplified hydrograph estimation
methods while maintaining a relatively straightforward modeling workflow.

This approach is used when the breach dimensions and development time can be reasonably estimated based on design information,
historical performance, or regulatory guidance. The prescribed breach method enables the modeler to simulate the
progressive release of tailings while accounting for reservoir drawdown and flow routing through the downstream system.

The prescribed breach method is appropriate for engineering studies that require a defined and repeatable failure scenario,
such as consequence assessments, dam safety evaluations, and emergency response planning. It also allows the modeler to
evaluate different breach geometries and development times to understand how these assumptions influence the magnitude
and timing of the released material.

The case study for this method is Brumadinho II, which demonstrates how to define the reservoir, the breach geometry
and simulate the resulting release of tailings using the FLO-2D model.

.. toctree::
   :maxdepth: 1

   brumadinho-ii/index
   idaho-ii/index

Method 3: Erosion Breach
---------------------------

The Erosion Breach method represents a more physically based approach for simulating tailings dam failures in which the
breach develops dynamically as a result of erosion. In this method, the model computes the enlargement of the breach
during the simulation based on the interaction between flow hydraulics and the resistance of the dam material.
The resulting discharge and reservoir drawdown are calculated continuously as the breach evolves.

This approach is particularly useful when the failure mechanism involves overtopping or internal erosion and when the
objective of the study is to represent the time-dependent progression of the breach. The erosion breach method requires
the specification of material properties that control erosion resistance, such as erodibility coefficients and critical
shear stress. These parameters influence how quickly the breach enlarges and how much material is released during the failure.

Because the breach geometry is not predefined, the erosion breach method provides a realistic representation of
failure progression and is well suited for detailed engineering evaluations, risk assessments, and sensitivity analyses.
It is commonly applied in studies where the timing and magnitude of the release are critical for downstream
hazard analysis and emergency planning.

Method 4: Tailings Stack
---------------------------

The Tailings Stack method is specifically designed to represent failures involving dry or partially saturated tailings
deposits that are stored in stacked configurations rather than in a conventional impoundment pond. The tailings stack
is represented as a volume of stored material that becomes mobilized and flows downslope. The released material is
then routed through the computational domain using the FLO-2D mudflow formulations. The model computes the movement,
spreading, and deposition of the tailings based on the rheological properties of the material and the topographic
characteristics of the downstream terrain.

The tailings stack method is particularly useful for evaluating the consequences of failures in upstream or
downstream stacked tailings systems, dry stack facilities, or temporary storage piles. It allows engineers to
estimate the potential runout distance, flow depth, and deposition patterns associated with a sudden release of
tailings material. This method is commonly applied in hazard assessments, stability evaluations, and consequence
analyses for facilities where tailings are stored in stacked configurations rather than behind a traditional containment dam.
