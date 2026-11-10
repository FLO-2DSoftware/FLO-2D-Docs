Two-Phase Maps
==============

Generates flood maps integrating two-phase simulation data, offering a
description of flooding scenarios for enhanced analysis.

Site Characteristics
--------------------

Static layers defining the physical and geometric properties of the model domain. These maps provide the terrain framework controlling both fluid and solid phase movement.

Ground elevation
~~~~~~~~~~~~~~~~

:math:`\qquad` ``TOPO.DAT`` - Grid element, x- and y-coordinates, and
their elevations (ft or m).

Basic
-----

Primary outputs from two phase simulations. These layers describe floodplain flow, mudflow behavior, sediment concentration, and combined depth conditions resulting from phase interaction.

Maximum Flood Depth
~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``DEPTH.OUT`` - Maximum combined channel/floodplain flow
depths (ft or m).

Maximum Flood Velocity Vectors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` ``VELFP.OUT`` - Maximum floodplain flow velocity (ft/s
  or m/s).
| :math:`\qquad` ``VELDIREC.OUT`` - Flow maximum velocity direction
  (flow directions 1 to 8).

Maximum Flood Sediment Concentration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``CVFPMAX.OUT`` - Floodplain fluid maximum sediment
concentration by volume (vsed/vtotal).

Maximum Flood Velocity
~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``VELFP.OUT`` - Maximum floodplain flow velocity (ft/s or
m/s).

Maximum Combined Depth
~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``DEPTHMAX_2PHASE_COMBINED.OUT`` - Maximum flow depth of
the combined two phase fluid and mudflow depths (added together) (ft or
m).

Final Flood Depth
~~~~~~~~~~~~~~~~~

:math:`\qquad` ``FINALDEP.OUT`` - Final floodplain flow depths (ft or
m).

Final Flood Velocity Vectors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` ``FINALVEL.OUT`` - Flow velocity at the end of the
  simulation (ft/s or m/s).
| :math:`\qquad` ``FINALDIR.OUT`` - Flow final velocity direction at the
  end of the simulation (flow directions 1 to 8).

Final Flood Velocity
~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``FINALVEL.OUT`` - Flow velocity at the end of the
simulation (ft/s or m/s).

Final Combined Depth
~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``FINALDEP_COMBO.OUT`` - Combined floodplain fluid and
mudflow maximum flow depths. Floodplain fluid or mudflow max depth
(whichever is greater) (ft or m).

Derived
-------

Secondary metrics computed from two phase hydraulic results. These layers combine depth and velocity to represent overall hazard intensity from coupled fluid and sediment processes.

Depth x Velocity
~~~~~~~~~~~~~~~~

:math:`\qquad` ``VEL_X_DEPTH.OUT`` - Maximum of velocity times depth for
each floodplain element (ft²/s or m²/s).

Time
----

Time based indicators showing when critical two phase conditions occur. These maps support analysis of flood and mudflow onset, peak interaction, and temporal evolution.

Time to 1 ft (0.3 m)
~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``TIMEONEFT.OUT`` - The initial time to one foot of depth
(hrs).

Time to 2 ft (0.6 m)
~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``TIMETWOFT.OUT`` - The initial time to two feet of depth
(hrs).

Time to Max
~~~~~~~~~~~

:math:`\qquad` ``TIMETOPEAK.OUT`` - The time of occurrence of the
maximum depth (hrs).

Channel
-------

Hydraulic results specific to channel elements under two phase flow conditions. These maps describe channel response to combined fluid and sediment transport.

Maximum Channel Depth
~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``DEPCH.OUT`` - Maximum channel flow depths (ft or m).

Maximum Channel Velocity
~~~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``VELOC.OUT`` - Maximum channel flow velocity (ft/s or
m/s).

Final Channel Depth
~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``DEPCHFINAL.OUT`` - Final channel flow depths (ft or m).

Final Channel Velocity
~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``VELCHFINAL.OUT`` - Final channel flow velocities (ft/s
or m/s).

Structures
----------

Outputs describing interaction between two phase flows and engineered structures. These layers support evaluation of levee performance under combined hydraulic and sediment loading.

Levee Deficit
~~~~~~~~~~~~~

:math:`\qquad` ``LEVEEDEFIC.OUT`` - Levee freeboard deficit.

Definition:

-  0, freeboard > 3 ft
-  1, 2 ft < freeboard < 3 ft
-  2, 1 ft < freeboard < 2 ft
-  3, freeboard < 1 ft
-  4, levee overtopped

Mudflow
-------

Mudflow specific results extracted from two phase simulations. These layers describe mudflow depth, velocity, direction, and sediment concentration as a distinct phase.

Maximum Mudflow Depth
~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``DEPFPMAX_MUD.OUT`` - Floodplain maximum mudflow depth
(ft or m).

Maximum Mudflow Velocity
~~~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``VELFP_MUD.OUT`` - Floodplain maximum mudflow velocity
in the reported outflow direction (ft/s or m/s).

Maximum Mudflow Sediment Concentration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``CVFPMAX_MUD.OUT`` - Floodplain mudflow maximum sediment
concentration by volume (vsed/vtotal).

Maximum Mudflow Velocity Vectors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` ``VELFP_MUD.OUT`` - Maximum floodplain mudflow velocity
  (ft/s or m/s).
| :math:`\qquad` ``VELDIREC_MUD.OUT`` - Mudflow maximum velocity
  direction (flow directions 1 to 8).

Final Mudflow Depth
~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``FINALDEP_MUD.OUT`` - Final mudflow depth (ft or m).

Final Mudflow Velocity
~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``FINALVEL_MUD.OUT`` - Floodplain final mudflow velocity
in the reported outflow direction (ft/s or m/s).

Final Mudflow Sediment Concentration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``FINALCVFP_MUD.OUT`` - Final floodplain mudflow sediment
concentration by volume (vsed/vtotal).

Final Mudflow Velocity Vectors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` ``FINALVEL_MUD.OUT`` - Final floodplain mudflow
  velocity (ft/s or m/s).
| :math:`\qquad` ``FINALDIR_MUD.OUT`` - Mudflow final velocity direction
  (flow directions 1 to 8).

Sediment
--------

Sediment transport and bed change results associated with two phase simulations. These maps describe erosion, deposition, and net bed elevation change driven by coupled processes.

Maximum Deposition
~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``SEDFP.OUT`` - Maximum deposition (ft or m)

Maximum Scour
~~~~~~~~~~~~~

:math:`\qquad` ``SEDFP.OUT`` - Maximum scour (ft or m)

Final Bed Difference
~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``SEDFP.OUT`` - Final bed elevation difference (ft or m)

Hydraulic
---------

Advanced hydraulic force and energy metrics for two phase conditions. These layers quantify pressures and forces acting on structures under combined fluid and mudflow loading.

Specific Energy
~~~~~~~~~~~~~~~

:math:`\qquad` ``SPECENERGY.OUT`` - Maximum specific energy for a
floodplain grid element (ft or m).

Static Pressure
~~~~~~~~~~~~~~~

:math:`\qquad` ``STATICPRESS.OUT`` - Spatially variable static force per
linear foot for each floodplain element (lbf/ft or N/m).

Impact Force
~~~~~~~~~~~~

:math:`\qquad` ``IMPACT.OUT`` - Impact force per linear foot of
structure on the floodplain (lbf/ft or N/m).
