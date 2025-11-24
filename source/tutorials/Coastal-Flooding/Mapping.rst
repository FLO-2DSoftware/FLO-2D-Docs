Mapping Results
===============

Required Data

================== ==========================
**File**           **Content**
================== ==========================
\*.out             FLO-2D output files
\*.out             TIMDEP time series output
================== ==========================

Path: ...\\Coastal Training\\Project Data\\Project Export Folder

Step 1. Simplify map
_____________________

1. Uncheck unnecessary layers like Grid and Elevation, and Google Hybrid.

2. Set up the layers.

- Collapse all layers

- Click the Layers Styling button.

- Right click the Layers area and create a
  new Group called Results.

.. image:: ../img/Coastal/managelayers2.gif


Step 5. Import a map with Rasterizor
_____________________________________

1. Review files that can be loaded

2. Load a file

3. Load an alternate file

4. Create a difference map

Step 6. MapCrafter
____________________

Todo:

Load Maps

Load Review if available

Load Layout

9. Click the export PDF Button

.. image:: ../img/Coastal/map012.png


10. Save the PDF.

.. image:: ../img/Coastal/map013.png


11. Set the following parameters:

.. image:: ../img/Coastal/map014.png


12. Load the pdf to review it.

.. image:: ../img/Coastal/map016.png


13.  The map detail is very solid and the resolution is good.

.. image:: ../img/Coastal/map015.png

Step 2. Import results from mesh tool
______________________________________

1. Click the Data Management button.

.. image:: ../img/Coastal/map002.png


2. Select the Mesh option.

3. Navigate to the FLO-2D Project folder and select the DEPTH.OUT file.

4. Click Add and select the 2D layer and click OK.

.. image:: ../img/Coastal/datamanagermesh.gif


5. Drag the New Layer and drop it into the Results Group.

Step 3. Load the Layer Style panel
____________________________________

1. Dock the layer styling panel with the FLO-2D widgets.

2. Select the Depth layer in the Results Group.

3. Drag the edge of the Layer Styling Panel slightly to the left to make it
   wider.

4. Click the multi-colored block next to Depth to load Depth from
   the mesh layer.

Update image

.. image:: ../img/Coastal/map003.png


Step 4. Animate the flooding - Update
________________________________________

1. Update.

2. Change the min depth to 0.25ft.

3. Change the color ramp to Blues.

4. Move down and change the Mode to Equal Interval.

5. Change the number of classes to 5.

6. Check Clip out of Range Values.

.. image:: ../img/Coastal/map004.png