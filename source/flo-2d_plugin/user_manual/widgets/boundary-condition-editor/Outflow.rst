Outflow Editor
===============================

Boundary outflow conditions include:

-  Normal Depth Control
-  Time Stage Control
-  Discharge Stage Control
-  Multiple Domain Exchange

These conditions define how the channel or floodplain discharge enters or leaves the FLO-2D model domain.

.. image:: ../../../img/Boundary-Condition-Editor/newbc003.png

Normal
------------

Outflow Floodplain
____________________

Normal depth boundary


This is an outflow condition where the flow leaves the domain without effecting the upstream water surface elevation,
select the outflow nodes along the downstream boundary or along the edge of a grid system.

1. Click the
   Add Polygon BC button

.. image:: ../../../img/Boundary-Condition-Editor/newbc022.png

2. Digitize a polygon that covers the desired boundary extent.
   Right click the last vertex to close the polygon.

3. Set the type to
   Outflow and click OK.

.. image:: ../../../img/Boundary-Condition-Editor/newbc024.png

4. Click again the toggled Add Polygon BC button to save the feature and activate the editor.

.. image:: ../../../img/Boundary-Condition-Editor/newbc023.png

5. Name the boundary and set the outflow type to 1.
   Floodplain outflow (no hydrograph).

.. image:: ../../../img/Boundary-Condition-Editor/newbc025.png

6. Click the Schematize button (shown below) to complete the boundary.

.. image:: ../../../img/Boundary-Condition-Editor/newbc026.png

7. The Add Polygon BC button will identify cells at the grid boundary and designate them as outflow cells.

.. image:: ../../../img/Boundary-Condition-Editor/newbc027.png

.. tip::

    It is possible to set the Outflow Boundary Conditions to the whole grid boundary cells faster using the
    Add Outflow Boundary Condition to the whole grid boundary cells button.

    .. image:: ../../../img/Boundary-Condition-Editor/newbc028.png

    The algorithm in this button is more efficient than the Add Polygon BC. However, This boundary method applies a
    normal depth boundary to every grid element on the outer edge of the computational domain.

    A line is added to the center of the cells on the boundary of the grid.

    .. image:: ../../../img/Boundary-Condition-Editor/newbc029.png

    Modification of the line is possible as needed.

    .. image:: ../../../img/Boundary-Condition-Editor/newbc021.png

    When the schematize button is clicked,
    the whole boundary grid cells are defined as normal depth.

Outflow Channel
____________________

For channel outflow at a normal depth condition, use the channel outflow node on the downstream boundary
or channel segment terminus.

1. Click add a
   point boundary

.. image:: ../../../img/Boundary-Condition-Editor/newbc030.png

2. Click the last left bank channel node.

.. image:: ../../../img/Boundary-Condition-Editor/newbc031.png

3. Click again the toggled Add Point BC button to save the feature and activate the editor.

.. image:: ../../../img/Boundary-Condition-Editor/newbc032.png

4. Name the
   feature and set the outflow condition
   for the channel to 3. Floodplain and channel outflow (no hydrograph).

.. image:: ../../../img/Boundary-Condition-Editor/newbc033.png

.. note:: One point is required.

5. Click the Schematize button.

.. image:: ../../../img/Boundary-Condition-Editor/newbc034.png

Time Stage Control
----------------------


Outflow with Time – Stage Hydrograph for Floodplain
___________________________________________________________

To represent variable time-stage boundary conditions such as:

-  Tides
-  Storm surge
-  Tsunamis
-  Flooding from a large river

The time–stage relationship can be synchronized with rainfall and upstream watershed flooding.
Select the outflow nodes along the downstream boundary with a polygon.

1. Click
   the Add Polygon BC button.

.. image:: ../../../img/Boundary-Condition-Editor/newbc022.png

2. Digitize the
   polygon across the boundary.

3. Click again the toggled Add Point BC button to save the feature and activate the editor.

4. Name the boundary, set the boundary conditions, name and fill the
   Time Series table.

.. image:: ../../../img/Boundary-Condition-Editor/newbc037.png

.. image:: ../../../img/Boundary-Condition-Editor/newbc038.png

6. In the figure below,
   there are two sets of outflow nodes. The Normal Depth nodes allow water that exceeds the
   Stage to cross the outflow boundary.
   This allows rainfall accumulation or inflow hydrograph accumulation to leave the boundary. The Stage –
   Time nodes apply a water surface elevation.
   This water can fill the downstream area up to the stage.

.. image:: ../../../img/Boundary-Condition-Editor/newbc039.png

Outflow with Time – Stage Hydrograph for Channel
_______________________________________________________

Like the time-stage condition for the floodplain select this option to represent ocean tide, storm surge,
tsunamis, or flooding from a large river
control in a channel terminus.
The time – stage relationship can be synchronized to rainfall and watershed flooding.

1. Select the standard
   outflow node at the end of the channel.

2. Set the time-stage
   node one element upstream.

3. Click again the toggled Add Point BC button to save the feature and activate the editor.

4. Name the boundary
   and set the boundary conditions.

5. Name and
   fill the Time Series table.

.. image:: ../../../img/Boundary-Condition-Editor/newbc040.png

.. image:: ../../../img/Boundary-Condition-Editor/bounda017.png

Time-Stage for Floodplain and Free Floodplain and Channel
_____________________________________________________________

Use this option to set the stage of a downstream elevation control.
This node will allow water to collect on the boundary until it can exceed the stage at the boundary.
It can be used for two purposes.

Anytime there is a control on the boundary that releases water at a known stage.

Set the elevation for matching the water surface elevation of an existing FEMA map.

1. Set this up with the
   same method described in the previous two sections.

.. image:: ../../../img/Boundary-Condition-Editor/newbc041.png

Time-Stage for Channel and Free Floodplain and Channel
______________________________________________________________

This option is the same as option 7 with the condition that the stage – time table is assigned to the channel instead of the floodplain.

1. Set this up with
   the same method described in the previous two sections.

.. image:: ../../../img/Boundary-Condition-Editor/newbc042.png

Discharge Stage Control
---------------------------

Channel Stage-Discharge Parameters
_______________________________________

This outflow option defines the discharge from a channel based on the stage using rating curve.
Several rating curves can be assigned for multiple limiting depths.
This system is used when there is a control or a gage at the channel with a known stage-discharge relationship.

1. Select the
   stage-discharge node at the end of a channel segment.

2. Click again the toggled Add Point BC button to save the feature and activate the editor

3. Name the boundary
   and set the boundary conditions.

4. Name and fill the
   Q(h) parameters table.

.. image:: ../../../img/Boundary-Condition-Editor/newbc043.png

.. image:: ../../../img/Boundary-Condition-Editor/newbc044.png

Channel Stage-Discharge (Q(h) table)
___________________________________________

The final outflow option is used to define the downstream boundary with a stage-discharge table.

1. Select the stage-discharge
   node at the channel terminus.

2. Click again the toggled Add Point BC button to save the feature and activate the editor

3. Name the boundary and set
   the boundary conditions.

4. Name and fill the Q(h)
   table.

.. image:: ../../../img/Boundary-Condition-Editor/newbc045.png

.. image:: ../../../img/Boundary-Condition-Editor/newbc046.png

Multiple Domain System
--------------------------

Use this option with any floodplain boundary that will transfer flow between two domains.

.. note:: See `Multiple Domain Interfacing Training Package <https://flo-2d.com/product/multiple-domain-interfacing/>`__.

1. Click the Add Polygon BC button.

.. image:: ../../../img/Boundary-Condition-Editor/newbc022.png

2. Draw a polygonn through the desired outflow nodes.

.. image:: ../../../img/Boundary-Condition-Editor/newbc024.png

3. Click again the toggled Add Point BC button to save the feature and activate the editor.

4. Name the boundary condition
   and set the boundary Outflow type conditions as Outflow with Hydrograph.

.. image:: ../../../img/Boundary-Condition-Editor/newbc035.png

5. Click the Schematize button.

.. image:: ../../../img/Boundary-Condition-Editor/newbc036.png

Troubleshooting
----------------

1. The most common problems
   with creating outflow.dat data is caused by
   creating conflicts by putting other components in the outflow grid elements.

2. The schematic layers and tables will reset each time the Schematize tool is used.
   This could cause overwriting of imported data.
   Convert the Boundary Conditions to User Layers for projects that are imported into QGIS before performing the schematization process.

3. If the data does not export correctly, check the tables.
   The tables can be edited directly or can be copied into an OUTFLOW.DAT file.

4. Saving and restarting might
   resolve some issues with the GeoPackage but check the layers attributes prior to restarting QGIS.

5. If a Python Table Update error appears,
   Delete the QGIS folder from AppData/Roaming and rebuild the QGIS Profile.

.. image:: ../../../img/Boundary-Condition-Editor/Bounda022.png
