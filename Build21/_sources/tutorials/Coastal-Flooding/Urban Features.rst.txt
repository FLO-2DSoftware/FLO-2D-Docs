Urban Features
==============

Required Data

============= =====================
**File**      **Content**
============= =====================
\*.shp         Building Polygons
============= =====================

Data Location: \\Coastal Training\\Project Data\\Buildings

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/ef-xygMwiSs" frameborder="0" allowfullscreen></iframe>


Step 1: Load buildings
_______________________

1. Click the Project Data Group.

2. Drag the Building Polygons shapefile onto the map space.

.. image:: ../img/Coastal/bldg001.png

The Building shapefile requires 3 Attributes.

-  Collapse field;   0 = no collapse, 1 = collapse; (see Data Input Manual)

-  ARF field; 1 = assign area reduction

-  WRF field; 0 = no width reduction, 1 = assign width reduction

Step 2: Prepare the map
____________________________

1. Uncheck the Grid layer.

2. Uncheck the Elevation layer.

3. Check the Google image.

4. Uncheck the Outfalls, Inlet Junctions, and Conduits in the User Layers group.

Step 3: Digitize missing buildings
____________________________________________

1. Click the Building Polygon layer.

2. Right click the layer and click the Edit Pencil.

.. image:: ../img/Coastal/bldg006.png

3. Zoom in to the lower east side of the grid.

.. image:: ../img/Coastal/bldg005.png

4. Right click the top of QGIS near the Tool Bars and Click the Shape Digitizing Toolbar.

.. image:: ../img/Coastal/bldg007.png

5. Click the Add Rectangle button.

.. image:: ../img/Coastal/bldg008.png

6. Center the map on the missing buildings and use the cursor to cover them with a polygon.

- Left click one corner of the building.

- Move the cursor to the opposite corner and right click to close the polygon.

- Fill the 3 required attributes and click OK.  0 collapse, 1 ARF, 0 WRF

.. image:: ../img/Coastal/addbldg.gif

7. To digitize a building that is disoriented, use the 3 Point option.

.. image:: ../img/Coastal/bldg009.png

- Click one corner of the building.

- Click the adjacent corner.

- Move the cursor to the opposite side of the building and right click to close the polygon.

.. image:: ../img/Coastal/addbldg2.gif

8. To digitize a non-rectangular structure, use the regular Add Polygon button.

.. image:: ../img/Coastal/bldg010.png

.. image:: ../img/Coastal/addbldg3.gif

9. It is faster to digitize all buildings and then fill in the missing data using the Attributes Table.

.. image:: ../img/Coastal/bldg013.png

10. Make a mistake?

- Delete key will delete the last vertex.

- ESC key will delete the current polygon.

- CTRL-Z will undo the last completed task.

11. Leave a buffer between any building and the edge of the grid.

12. Covered parking structures and pools do to change the flow direction or displace volume.

.. image:: ../img/Coastal/bldg011.png

13. Sort the buildings by FEAT_TYPE.  Select the GARAGE and POOL features using the line  numbers.  Delete them.

.. image:: ../img/Coastal/bldg012.png

Step 3: Assign buildings
____________________________

1. Collapse the widgets and select the Grid Tools.

2. Click the Evaluate Reduction Factors (ARF and WRF) button.

.. image:: ../img/Coastal/bldg002.png

2. Set up the parameters and click OK

.. image:: ../img/Coastal/bldg003.png

3. Close OK the window.

.. image:: ../img/Coastal/bldg004.png