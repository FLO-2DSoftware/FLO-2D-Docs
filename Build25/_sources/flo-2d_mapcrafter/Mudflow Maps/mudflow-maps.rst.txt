Mudflow Maps
============

Creates maps specifically focused on mudflow simulations, illustrating
areas prone to mudflow events based on FLO-2D outputs.

Site Characteristics
--------------------

Static layers describing the physical and geometric properties of the model domain. These maps provide the terrain framework governing mudflow routing, confinement, and accumulation.

Ground elevation
~~~~~~~~~~~~~~~~

:math:`\qquad` ``TOPO.DAT`` - Grid element, x- and y-coordinates, and
their elevations (ft or m).

Basic
-----

Primary hydraulic outputs for mudflow simulations. These layers describe depth, velocity, and water surface conditions that control mudflow extent and momentum.

Maximum Depth
~~~~~~~~~~~~~

:math:`\qquad` ``DEPTH.OUT`` - Maximum combined channel/floodplain flow
depths (ft or m).

Maximum Velocity
~~~~~~~~~~~~~~~~

:math:`\qquad` ``VELFP.OUT`` - Maximum floodplain flow velocity (ft/s or
m/s).

Maximum Velocity Vectors
~~~~~~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` ``VELFP.OUT`` - Maximum floodplain flow velocity (ft/s
  or m/s).
| :math:`\qquad` ``VELDIREC.OUT`` - Flow maximum velocity direction
  (flow directions 1 to 8).

Maximum WSE
~~~~~~~~~~~

:math:`\qquad` ``MAXWSELEV.OUT`` - Maximum water surface elevation of
either the floodplain or channel (ft or m).

Final Depth
~~~~~~~~~~~

:math:`\qquad` ``FINALDEP.OUT`` - Final floodplain flow depths (ft or
m). Channel not included.

Final Velocity
~~~~~~~~~~~~~~

:math:`\qquad` ``FINALVEL.OUT`` - Flow velocity at the end of the
simulation (ft/s or m/s). Channel not included.

Final Velocity Vectors
~~~~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` ``FINALVEL.OUT`` - Flow velocity at the end of the
  simulation (ft/s or m/s).
| :math:`\qquad` ``FINALDIR.OUT`` - Flow final velocity direction at the
  end of the simulation.

Derived
-------

Secondary metrics calculated from basic mudflow hydraulic results. These layers combine depth and velocity to represent mudflow intensity and destructive potential.

Depth x Velocity
~~~~~~~~~~~~~~~~

:math:`\qquad` ``VEL_X_DEPTH.OUT`` - Maximum of velocity times depth for
each floodplain element (ft²/s or m²/s).

Time
----

Time based indicators showing when critical mudflow conditions occur. These maps support analysis of mudflow onset, peak timing, and progression.

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

Hydraulic conditions within channel elements during mudflow events. These maps are used to assess channel confinement and conveyance of debris laden flows.

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

Mudflow
-------

Mudflow specific outputs describing sediment concentration and rheological behavior. These layers characterize the spatial distribution and evolution of mudflow material.

Maximum Sediment Concentration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``CVFPMAX.OUT`` - Floodplain fluid maximum sediment
concentration by volume (vsed/vtotal).

Final Sediment Concentration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:math:`\qquad` ``FINALCVFP`` - Final floodplain mudflow sediment
concentration by volume (vsed/vtotal).

Structures
----------

Outputs describing the interaction between mudflows and engineered structures. These maps support evaluation of levee performance under mudflow loading.

Levee Deficit
~~~~~~~~~~~~~

:math:`\qquad` ``LEVEEDEFIC.OUT`` - Levee freeboard deficit.

Definition:

-  0, freeboard > 3 ft
-  1, 2 ft < freeboard < 3 ft
-  2, 1 ft < freeboard < 2 ft
-  3, freeboard < 1 ft
-  4, levee overtopped

Hydraulic
---------

Advanced hydraulic force and energy metrics. These layers quantify pressures, forces, and energy levels relevant to structural loading during mudflow events.

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
