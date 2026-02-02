Hazard Maps
===========

Develops hydrodynamic risk maps, highlighting areas with elevated risks
based on FLO-2D simulations, aiding in risk management.

Australian Rainfall & Runoff (ARR)
----------------------------------

.. image:: ../img/haz_1.png

This hazard map is based on the *Australian Rainfall & Runoff: A Guide
to Flood Estimation (2019)*.

Flood Hazard Map
~~~~~~~~~~~~~~~~

| :math:`\qquad` H1: Generally safe for vehicles, people and buildings
| :math:`\qquad` H2: Unsafe for small vehicles
| :math:`\qquad` H3: Unsafe for vehicles, children and the elderly
| :math:`\qquad` H4: Unsafe for vehicles and people
| :math:`\qquad` H5: Unsafe for vehicles and people. All buildings
  vulnerable to structural damage. Some less robust buildings subject to
  failure
| :math:`\qquad` H6: Unsafe for vehicles and people. All building types
  considered vulnerable to failure

Swiss
-----

.. image:: ../img/haz_2.png

These hazard maps are based on *Vademecum: Hazard maps and related
instruments (2005)*.

Flood Intensity Map
~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` HIGH INTENSITY: Depth > 2 m or Depth \* Velocity > 2
  m²/s
| :math:`\qquad` MODERATE INTENSITY: 0.5 > Depth > 2 m or 0.5 > Depth \*
  Velocity > 2 m²/s
| :math:`\qquad` LOW INTENSITY: Depth < 0.5 m or Depth \* Velocity < 0.5
  m²/s

Debris Intensity Map
~~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` HIGH INTENSITY: Depth > 1 m and Velocity > 1 m/s
| :math:`\qquad` MODERATE INTENSITY: Depth < 1 m or Velocity < 1 m/s

US Bureau of Reclamation
------------------------

.. image:: ../img/haz_3.png

These hazard maps are based on the *Downstream Hazard Classification
Guidelines (1988)*.

Houses Hazard Map
~~~~~~~~~~~~~~~~~

| :math:`\qquad` HIGH DANGER ZONE: Occupants of most houses are in
  danger from flood water
| :math:`\qquad` JUDGMENT ZONE: Danger level is based upon engineering
  judgment
| :math:`\qquad` LOW DANGER ZONE: Occupants of most houses are not
  seriously in danger from flood water

Mobile Home Hazard Map
~~~~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` HIGH DANGER ZONE: Occupants of almost any size mobile
  home are in danger from flood water
| :math:`\qquad` JUDGMENT ZONE: Danger level is based upon engineering
  judgment
| :math:`\qquad` LOW DANGER ZONE: Occupants of almost any size mobile
  home are not seriously in danger from flood water

Vehicle Hazard Map
~~~~~~~~~~~~~~~~~~

| :math:`\qquad` HIGH DANGER ZONE: Occupants of almost any size
  passenger vehicle are in danger from flood water
| :math:`\qquad` JUDGMENT ZONE: Danger level is based upon engineering
  judgment
| :math:`\qquad` LOW DANGER ZONE: Occupants of almost any size passenger
  vehicle are not seriously in danger from flood water

Adults Hazard Map
~~~~~~~~~~~~~~~~~

| :math:`\qquad` HIGH DANGER ZONE: Almost any size adult is in danger
  from flood water
| :math:`\qquad` JUDGMENT ZONE: Danger level is based upon engineering
  judgment
| :math:`\qquad` LOW DANGER ZONE: Almost any size adult is not seriously
  threatened by flood water

Children Hazard Map
~~~~~~~~~~~~~~~~~~~

| :math:`\qquad` HIGH DANGER ZONE: Almost any size child is in danger
  from flood water
| :math:`\qquad` JUDGMENT ZONE: Danger level is based upon engineering
  judgment
| :math:`\qquad` LOW DANGER ZONE: Almost any size child (excluding
  infants) is not seriously threatened by flood water

Pier Scour (HEC-18 CSU Method)
=============================

MapCrafter includes a pier scour mapping tool based on the Colorado State University (CSU) pier scour equation as documented in HEC-18. This method estimates local scour depth at bridge piers using hydraulic results from FLO-2D simulations and user-defined pier geometry parameters.

The pier scour tool is intended for engineering screening and comparative assessment and does not replace a full bridge scour design analysis.

---

Method Overview
---------------

The CSU equation estimates local pier scour depth as a function of flow depth, velocity, pier geometry, alignment, and bed material effects. MapCrafter applies the equation spatially using FLO-2D depth and velocity outputs to generate scour depth maps and pier-specific results.

Hydraulic variables are extracted from raster datasets and combined with pier attributes supplied by the user.

---

CSU Pier Scour Equation
----------------------

The local pier scour depth is computed using the HEC-18 CSU equation:

.. math::

   y_s = 2.0 \, K_1 \, K_2 \, K_3 \, K_4 \, a
   \left( \frac{y_1}{a} \right)^{0.35}
   F_r^{0.43}

where:

- :math:`y_s` = local pier scour depth
- :math:`y_1` = approach flow depth
- :math:`a` = pier width normal to flow
- :math:`F_r` = Froude number of the approach flow
- :math:`K_1` = pier shape factor
- :math:`K_2` = angle of attack factor
- :math:`K_3` = bed condition factor
- :math:`K_4` = bed armoring factor

All variables are evaluated at the pier location using FLO-2D model results and user-provided pier parameters.

---

Froude Number
-------------

The approach flow Froude number is computed as:

.. math::

   F_r = \frac{v}{\sqrt{g \, y_1}}

where:

- :math:`v` = approach velocity magnitude
- :math:`g` = gravitational acceleration
- :math:`y_1` = approach flow depth

Velocity and depth are extracted from FLO-2D output rasters.

---

Pier Geometry and Correction Factors
------------------------------------

Pier geometry and correction factors are supplied through the pier attribute table or MapCrafter interface.

Typical parameters include:

- Pier width
- Pier shape (for :math:`K_1`)
- Flow angle relative to pier axis (for :math:`K_2`)
- Bed condition (live bed or clear water, for :math:`K_3`)
- Armoring condition (for :math:`K_4`)

Correction factor values follow guidance provided in HEC-18.

---

Spatial Evaluation
------------------

Pier scour depth is computed at each pier location by sampling hydraulic variables from raster outputs. Evaluation methods include:

- Sampling at pier centroid points
- Sampling maximum values within a buffer zone
- Applying time-maximum depth and velocity results

The resulting scour depth values may be mapped spatially or reported per pier.

---

Example Project
---------------

**Scenario:** Flood event impacting a roadway bridge  
**Model Type:** FLO-2D overland flow simulation  
**Objective:** Estimate potential pier scour depths using HEC-18 methodology

### Input Data

- FLO-2D depth raster (maximum or time-specific)
- FLO-2D velocity raster
- Pier location vector layer with geometry attributes

### Workflow

1. Run FLO-2D simulation and generate depth and velocity outputs.
2. Load raster results into QGIS.
3. Open **MapCrafter → Pier Scour**.
4. Select:
   - Depth raster
   - Velocity raster
   - Pier layer
5. Define pier width, shape, and correction factors.
6. Execute pier scour calculation.

MapCrafter computes local scour depth at each pier using the CSU equation and generates a mapped output.

---

Outputs
-------

The pier scour tool produces:

- Pier-specific scour depth values
- Spatial scour depth maps
- Styled layers compatible with MapCrafter layouts
- Tabular outputs suitable for reporting

---

Limitations
-----------

- The CSU equation estimates **local pier scour only**.
- Contraction scour and long-term degradation are not included.
- Results are sensitive to flow depth, velocity, and pier alignment assumptions.
- Final design decisions should follow full HEC-18 guidance and site-specific studies.

---

Summary
-------

The MapCrafter pier scour tool implements the HEC-18 CSU equation directly using FLO-2D hydraulic results and user-defined pier parameters. This approach enables spatial visualization and comparative assessment of potential pier scour within a GIS-based post-processing workflow.
