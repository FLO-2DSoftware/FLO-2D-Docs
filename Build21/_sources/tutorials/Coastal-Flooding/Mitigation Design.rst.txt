Mitigation Design
=================

**Overview**

Coastal flood mitigation practices include improving drainage, identifying critical infrastructure, protecting evacuation routes, protecting, and restoring natural flood barriers. This lesson cannot cover the topic fully but can help show how QGIS and FLO-2D can be used to study mitigation plans. Mitigation models can help determine if potential designs are successful. Mitigation methods can include:

-  Protect critical infrastructure
-  Raise structure, roadways, and seawalls
-  Improve culverts, tide gates, and pumps
-  Modify base flood elevation for new construction
-  Improve basin storage
-  Restore natural flood management
-  Improve drainage maintenance plans

**Required Data**

+---------------------------+------------------------------------------+
| File                      | Content                                  |
+===========================+==========================================+
| \*.shp                    | Highway Centerline                       |
+---------------------------+------------------------------------------+
| \*.shp                    | Mitigation Polygon                       |
+---------------------------+------------------------------------------+
| \*.tif                    | Elevation                                |
+---------------------------+------------------------------------------+

Path: ...\\Coastal Training\\Project Data\\Mitigation Design

Step 1. Load the data
---------------------

1. Collapse all Layers.

.. image:: ../img/Coastal/mitdz001.png

2. Click the External Data Group.

3. Drag the Mitigation and Highway shapefiles onto the map.

.. image:: ../img/Coastal/mitdz002.png

4. Change the symbology of the new layers to make them more visible.

.. image:: ../img/Coastal/mitdz003.png

.. image:: ../img/Coastal/mitdz004.png

Step 2. Load Open Street Map
----------------------------

1. Click Quick Map Services and load the Open Street Map Standard.

.. image:: ../img/Coastal/mitdz005.png

2. Organize the Map Layers.

3. Uncheck Aerial images and elevation.

.. image:: ../img/Coastal/mitdz006.png

.. note::
   Open Street Map is useful to help find important features as it has
   excellent symbology. This map source is a raster so it does not have
   selectable attributes like a vector layer. It is still helpful for
   map browsing.

Step 3. Run OSM Downloader
--------------------------

1. Right click the blank area at the bottom of the layers list.

2. Add a new group called OSM Download.

.. image:: ../img/Coastal/mitdz007.png

3. Click the new group and then Click the OSM Downloader icon.

4. Use the mouse to draw a rectangle around the project area.

.. image:: ../img/Coastal/mitdz008.png

5. The downloader will download vectorized map data from the OSM
   database.

6. Save the data as OSM Download.osm file in the Mitigation folder.

.. image:: ../img/Coastal/mitdz009.png

7. The Open Street Map layers are now vectorized into polygons, points,
   and polylines.

.. image:: ../img/Coastal/mitdz010.png

Step 4. Open data connection
----------------------------

.. note::
   ArcGIS Online services can be loaded into QGIS maps. This allows
   users to connect to data that is hosted on local, state, and federal
   government sites.

1. Click Layers >> Add Layer >> Add ArcGIS REST Server Layer.

.. image:: ../img/Coastal/mitdz011.png

2. Click the Load button and find the Open Data Connection.xml file in
   the Mitigation folder.

.. image:: ../img/Coastal/mitdz012.png

3. Click Select All and Import.

.. image:: ../img/Coastal/mitdz013.png

4. Any of these layers can be added to the map.

.. image:: ../img/Coastal/mitdz014.png

5. Here is an example of the Structures layer.

.. image:: ../img/Coastal/mitdz015.png

6. Any new REST connection can be created even if it requires
   authentication.

.. image:: ../img/Coastal/mitdz016.png

Step 5. Modify Highway 41
-------------------------

.. note::
   Now that some data loading methods have been identified, proceed with
   some simple mitigation changes.

.. warning::
   Any mitigation change can relieve flooding locally while increasing
   flooding in other areas. Always use a project area that is large
   enough to show potential flood changes downstream or away from the
   mitigation location.

1. Collapse the OSM Download group and uncheck it.

2. Click the Highway Centerline layer.

3. Click the Select button.

4. Use the select tool to select Highway 41 polyline.

.. image:: ../img/Coastal/mitdz017.png

5. Collapse the FLO-2D Widgets and open the Grid Tools Widget.

6. Select the Correct Grid Elevation button.

.. image:: ../img/Coastal/mitdz018.png

7. Fill the window as shown below and click OK.

.. image:: ../img/Coastal/mitdz019.png

.. note::
   This is a simple way to raise grid element elevation. It uses a
   correction tool to add or subtract elevation from a group of cells
   that are within buffer.

Step 6. Reset channel elevation
-------------------------------

1. Zoom to the end of the channel and click the Mitigation Polygon
   Layer.

2. Click the Select button.

3. Select the Polygon that covers the end of the channel.

.. image:: ../img/Coastal/mitdz020.png

4. Collapse the Widgets and open Grid Tools.

5. Click the Correct Grid Elevation button.

.. image:: ../img/Coastal/mitdz021.png

6. Fill the form as shown below and click OK.

.. image:: ../img/Coastal/mitdz022.png

7. Close the message when the grid elevation correction is complete.

.. image:: ../img/Coastal/mitdz023.png

.. note::
   This step can set or re-set the elevation of grid elements within a
   polygon. Use it to correct elevation for new grading or new basin
   design. Use it to correct elevation along a channel or at a headwall.
   It is a very versatile tool.

Step 7. Improve a culvert
-------------------------

1. Select culvert CU10.

2. Change the width to 5 ft and multiple barrels to 3.

3. Click the Schematize Culverts button.

.. image:: ../img/Coastal/mitdz024.png

Step 8. Coco1 pump
------------------

1. Select Coco1.

2. Add a pump to this system by modifying the rating table.

3. Assume the pump uses a steady flow of 100 cfs.

.. note::
   If a larger pump is used, any value can be applied to match the
   discharge of the pump plus the discharge of the flow through the
   gated weir.

4. Add 100 cfs to the depths above 5ft. This means the pump will turn on
   at 5 ft of depth.

.. image:: ../img/Coastal/mitdz025.png

.. important::
   Since step 6 and 7 did not change the position of a culvert, the
   Schematize button is not needed. The tables were automatically
   updated when the data was modified in the widget and table editor.

Step 9. Save and export
-----------------------

1. This is a good point to save project.

.. image:: ../img/Coastal/mitdz026.png

2. Export the data files to the Mitigation Test folder.

.. image:: ../img/Coastal/mitdz027.png

3. All data files will be created in the selected project folder.

.. image:: ../img/Coastal/mitdz028.png

.. image:: ../img/Coastal/mitdz029.png

4. It is not necessary to schematize the storm drain system since no
   work was added to the storm drain. Click Yes to continue.

.. image:: ../img/Coastal/mitdz030.png

5. No changes are needed for this project. Click OK to continue and
   close the next few messages.

.. image:: ../img/Coastal/mitdz031.png

.. image:: ../img/Coastal/mitdz032.png

.. image:: ../img/Coastal/mitdz033.png

6. The project has now been exported.
