.. vim: syntax=rst

=============================================
Dam Breach
=============================================

FLO-2D provides a comprehensive framework for simulating dam breach scenarios involving water, tailings,
and two-phase. The model supports multiple approaches to represent dam failure,
allowing the user to select a method that is consistent with the available data, the expected failure mechanism,
and the objectives of the study. These approaches range from simplified hydrograph estimation methods to fully
dynamic simulations that explicitly represent breach development and sediment transport.

Dam breach modeling in FLO-2D can be grouped into four primary methods that are applicable across water,
tailings, and two-phase systems. Each method reflects a different level of physical detail and modeling complexity.
The selection of the appropriate method depends on factors such as data availability, regulatory requirements, project scale,
and the desired level of realism in representing the failure process.

In practice, the selection of the appropriate dam breach method is guided by the expected failure mechanism,
the level of available site information, and the objectives of the analysis.
Simplified hydrograph methods are typically used for screening and planning studies,
while prescribed or erosion-based methods are more appropriate for detailed engineering evaluations and regulatory submissions.
The tailings stack method extends the modeling capability to facilities where material is stored in stacked configurations
rather than behind a traditional dam, ensuring that modern tailings storage systems can be evaluated using the same modeling platform.

This structured set of modeling options allows FLO-2D users to apply a consistent and defensible methodology across a
wide range of dam safety and flood hazard applications, from rapid consequence screening to detailed failure analysis
and emergency planning.

.. toctree::
   :maxdepth: 3
   :caption: Contents

   water/index.rst
