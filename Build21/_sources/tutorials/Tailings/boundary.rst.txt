Boundary Conditions and Buildings
==================================

**Overview**

The last lesson demonstrated how to set up a hydrological project.
However, the water was accumulating at the downstream region of the
watershed. This lesson will outline how to add a floodplain outflow
boundary condition.

**Required Files**

This lesson does not require any external data.

.. important:: The lesson is missing Building application but the video shows the process.

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/1zLon_Z52nE?si=Gd_s3OC5aVvkqrCl"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Step 1: Outflow boundary
------------------------

1. Locate the downstream end of the watershed.

.. image:: ../img/Tailings/tdbound/tdboundary01.png

2. Expand the Boundary Condition Editor, select the BC type as outflow
   and click on Add Polygon BC.

.. image:: ../img/Tailings/tdbound/tdboundary02.png

3. Draw a polygon at the downstream end of the watershed. This polygon
   will add boundary conditions only to the cells at the limit of the
   watershed.

.. image:: ../img/Tailings/tdbound/tdboundary03.png

4. Right click anywhere on the map to finish editing this polygon.
   Select the type as Outflow.

.. image:: ../img/Tailings/tdbound/tdboundary04.png

5. Click on Save Current BC under Boundary Condition Editor.

.. image:: ../img/Tailings/tdbound/tdboundary05.png

6. Click OK to close the message.

.. image:: ../img/Tailings/tdbound/tdboundary06.png

7. Select the Outflow type as 1. Floodplain outflow (no hydrograph) and
   click on Schematize Boundary Conditions.

.. image:: ../img/Tailings/tdbound/tdboundary07.png

8. Click OK to close the message. The number of boundary conditions
   schematized may change depending on the size of the polygon drawn. It
   is OK if the number of outflows does not match this image.

.. image:: ../img/Tailings/tdbound/tdboundary08.png

Step 2: Add Buildings
---------------------

1. Open the 3. Boundary/data folder and drag the file Buildings.shp onto
   the map space.

.. image:: ../img/Tailings/tdbound/tdboundary09.png

2. These buildings were extracted from a plugin called OSM downloader.
   OSM downloader will download all polygons from Open Street Map. The
   MultiPolyons from OSM downloader must be extracted to a Buildings
   shapefile and saved with the correct Project CRS.

3. The new layer has all landuse polygons. The buildings are separated,
   and any non-building polygons must be deleted.

4. If a building is missing from the map, it can be added using the
   Shape Digitizing tool.

5. Edit the Buildings layer and add a Rectangular polygon to cover the
   buildings in the Aerial images.

.. image:: ../img/Tailings/tdbound/tdboundary010.png

6. Click the collapse button and then expand Grid Tools. Click the
   calculate ARF WRF button to add buildings to the grid. Set the
   Collapse, ARF, and WRF buttons and click OK.

7. The collapse field switch will allow the building to collapse if the
   flooding exceeds a certain depth on the building cell.

8. The ARF field tells the algorithm to apply the volume displacement
   for the building on the grid element.

9. The WRF field tells the algorithm to apply the flow redirection
   around the grid element if a building is on the edge of a grid
   element.

.. image:: ../img/Tailings/tdbound/tdboundary011.png

.. image:: ../img/Tailings/tdbound/tdboundary012.png

10. Turn on the ARF switch.

.. image:: ../img/Tailings/tdbound/tdboundary013.png

Step 3: Export and run
----------------------

1. Click the main Save icon on the QGIS toolbar.

.. image:: ../img/Tailings/tdbound/tdboundary014.png

2. Click the FLO-2D Data Export icon.

.. image:: ../img/Tailings/tdbound/tdboundary015.png

3. Make sure that the Outflow Elements is checked.

.. image:: ../img/Tailings/tdbound/tdboundary016.png

1. Set the export folder to Export Boundary Conditions. The Project
   Folder on the Run Settings is automatically updated to the new Export
   Boundary Conditions folder and it does not need to be updated.

2. Click on the Run FLO-2D icon to run the simulation.

.. image:: ../img/Tailings/tdbound/tdboundary017.png

3. Check the simulation summary for any errors.

.. image:: ../img/Tailings/tdbound/tdboundary018.png

Step 4: Load new results
------------------------

1. Create the new final depth map with Rasterizor.

.. image:: ../img/Tailings/tdbound/tdboundary019.png

2. Select the FINALDEP.OUT file in the Export Boundary Conditions
   folder. Name the layer Final Depth BC, select the Output Directory as
   the Export Boundary Conditions folder and select Depth as style.

.. image:: ../img/Tailings/tdbound/tdboundary020.png

.. image:: ../img/Tailings/tdbound/tdboundary021.png

3. Switch to the Compare Outputs tab and calculate the Hydrology Final
   Depth – Boundary Final Depth to calculate the difference between the
   rasters.

4. Close Rasterizor.

.. image:: ../img/Tailings/tdbound/tdboundary022.png

Step 5: Compare results
-----------------------

1. Compare the downstream results.

.. image:: ../img/Tailings/tdbound/tdboundary023.png

2. The water accumulates at the downstream end of the watershed when no
   outflow boundary condition is set. This is possible to visualize in
   the darker blue values on the left screenshot. When the outflow
   boundary condition is set, the water flows out the computational
   domain, showing whiter values. The boundary condition is normal
   depth.

Step 6: Organize the map layers
-------------------------------

1. Group the External Data and the Results and move the Aerials and
   Elevation maps to the bottom of the map.

.. image:: ../img/Tailings/tdbound/tdboundary024.png

2. Save and close QGIS because the next lesson uses a different project.

