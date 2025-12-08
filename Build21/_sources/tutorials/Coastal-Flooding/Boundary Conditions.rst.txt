Boundary Conditions
====================

**Overview**

This module will outline how to add a storm tide to the boundary of the project.

**Required Data**

The required data is in project data folder.

============= ===================
**File**      **Content**
============= ===================
\*.txt        Tide table
============= ===================

Path:  ...\\Coastal 2D Training\\Project Data\\Boundary Conditions

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/JsD6c7VjuCQ" frameborder="0" allowfullscreen></iframe>

Step 1: Prepare the map
__________________________

1. Uncheck the following layers:

   - Soil Training
   - LandUse Training

2. Check Elevation Raster

3. Double click the Elevation Raster layer.  Set the symbology to Hillshade and click OK.

.. image:: ../img/Coastal/bc001.png


Step 2: Set up the boundary polygon
____________________________________

1. Use the mouse wheel to zoom to the west side of the project where the water leaves the grid.
   Roll the mouse wheel in and out to zoom.  Click the mouse wheel to drag the map.

.. image:: ../img/Coastal/bc002.png


2. Collapse the FLO-2D widgets and click Boundary Condition Editor.

.. image:: ../img/Coastal/hydrology013.png


3. Click the polygon button and draw a polygon across the Cocohatchee outlet.

4. Right click to close the polygon.  Set the type to Outflow and click OK.

.. image:: ../img/Coastal/bc003.png


5. Click the Boundary Condition Editor Save button.  Set the BC type to Outflow.  Set the Outflow type to 5.

.. image:: ../img/Coastal/bc004.png


6. In the project folder, open the storm tide text file in NotePad.

Path: ...\\Coastal 2D Training\\Project Data\\Boundary Conditions\\Simple Tide Table.txt

7. Ctrl-A will select all of the data.

8. Ctrl-C will copy the data.

9. Press Ctrl-W will close the file.

.. image:: ../img/Coastal/copytide.gif


10. Click on the first cell of the FLO-2D Table Editor and click the Paste Button.

11. Set the first stage to -3.5ft.  This will allow the boundary to fill slowly and help prevent instability.

.. image:: ../img/Coastal/pastetidestage.gif


12. Name the time series and click the Schematize button.

.. image:: ../img/Coastal/bc005.png


13. The boundary should look like this:

.. image:: ../img/Coastal/bc006.png

14. This data will be saved to the OUTFLOW.DAT file.

Step 3. Save, export, and run
______________________________

1. This is a good point to save project.

.. image:: ../img/Advanced-Workshop/adv/Module046.png


2. It is not necessary to set Control Variables for Boundary Conditions.

3. If the project is still running, close it.

.. image:: ../img/Coastal/bc011.png


4. Export the data files.

.. image:: ../img/Advanced-Workshop/adv/Module089.png


.. image:: ../img/Coastal/bc008.png


5. Save the data to the Project Folder and click OK to close the message.

.. image:: ../img/Coastal/bc009.png


6. Run the model.  It isn't necessary to apply Run Settings this time.  The Export button updated the settings.

.. image:: ../img/Coastal/runengine.png


7. Let the project run and continue on to the next step.

Step 4: Create a backup file
______________________________

1. Close QGIS.

2. Open the project folder.  Select the Coastal Project.gpkg and Coastal Project.qgz files.  Right click them and
   click Sent to/Compressed (zipped) folder.

.. image:: ../img/Coastal/creategrid019.png


3. Name the zipped file.
   It is good to choose a name that identifies project progress.
   For Example: **BCOK.zip**

.. image:: ../img/Coastal/bc010.png


4. Open QGIS and reload the project.

.. image:: ../img/Coastal/creategrid021.png


5. Click yes to load the model.

.. image:: ../img/Coastal/creategrid022.png

