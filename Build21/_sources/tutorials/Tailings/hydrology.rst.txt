Hydrology
=========

**Overview**

This lesson will outline the process for setting up a rainfall runoff
model using a 24-hour Probable Maximum Precipitation (PMP) and spatially
variable infiltration data.

**Required Files**

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example
Projects\\Tailings Dam Workshop

+-------------------+-----------------------------+-------------------+
| File              | Content                     | Location          |
+===================+=============================+===================+
| Rainfall          | Rainfall distribution curve | ..\\3.            |
| Distribution.DAT  |                             | Hydrology\\data   |
+-------------------+-----------------------------+-------------------+
| Land Use TD.shp   | Shapefile for land use      | ..\\2. Project    |
|                   |                             | Setup\\data       |
+-------------------+-----------------------------+-------------------+
| Aerial            | Aerial image pre-disaster   | ..\\3.            |
| Pre-Disaster.tif  |                             | Hydrology\\data   |
+-------------------+-----------------------------+-------------------+

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/SvdYiiFeNTE?si=ScmUAt5EMmA0GhF2"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Step 1: Load google aerial image
--------------------------------

1. Use Quick Map Services Plugin with the Contributed Pack to load
   aerial images into the layer. This image is relatively current.

.. image:: ../img/Tailings/tdhydro/tdhydro01.png

2. Select the Google layer and drag the Aerial – Pre Disaster.tif onto
   the Map.

.. image:: ../img/Tailings/tdhydro/tdhydro02.png

Step 2: Set up rainfall
-----------------------

1. Collapse all FLO-2D Widgets and Expand the Rain Editor.

.. image:: ../img/Tailings/tdhydro/tdhydro03.png

2. Check Simulate rainfall and add 421 mm to the total storm rainfall.

3. Click the Import icon and load Rainfall Distribution.DAT

4. The file is in 3. Hydrology/Data

.. image:: ../img/Tailings/tdhydro/tdhydro04.png

.. image:: ../img/Tailings/tdhydro/tdhydro05.png

5. The rainfall data is imported into the FLO-2D Table Editor.

.. image:: ../img/Tailings/tdhydro/tdhydro06.png

6. This method assigns uniform rainfall to every grid element. The
   rainfall is added to the grid as a depth over time. The depth is
   interpolated linearly for every timestep that falls between data
   points in the Rainfall time series table. The data is saved to
   RAIN.DAT file when the project is exported.

Step 3: Set up infiltration
---------------------------

1. Click the Collapse all button to shrink all widgets.

.. image:: ../img/Tailings/tdhydro/tdhydro07.png

2. To assign infiltration data, expand the Infiltration Editor and click
   the Global Infiltration icon.

.. image:: ../img/Tailings/tdhydro/tdhydro08.png

3. Check the Global SCS switch and fill the global variables. The Global
   variables will be used for any cell that is not defined by the S
   lines in the spatially variable data assigned to INFIL.DAT.

.. image:: ../img/Tailings/tdhydro/tdhydro09.png

4. On the Infiltration Editor click Calculate SCS CN.

.. image:: ../img/Tailings/tdhydro/tdhydro010.png

5. Specify the attributes as shown in the following image and click OK.

.. image:: ../img/Tailings/tdhydro/tdhydro011.png

.. image:: ../img/Tailings/tdhydro/tdhydro012.png

Step 4: Control variables
-------------------------

1. Click the Control Parameters Icon. Make sure the Rain and
   Infiltration switches are turned on. Click Save to Close.

.. image:: ../img/Tailings/tdhydro/tdhydro013.png

.. image:: ../img/Tailings/tdhydro/tdhydro014.png

Step 5: Export and run the model
--------------------------------

1. Click the main Save icon on the QGIS toolbar.

.. image:: ../img/Tailings/tdhydro/tdhydro015.png

2. Click the FLO-2D Data Export icon.

.. image:: ../img/Tailings/tdhydro/tdhydro016.png

3. Review the image and Click OK

.. image:: ../img/Tailings/tdhydro/tdhydro017.png

4. Create a folder named Export Hydrology and export the project. Once
   the project is exported click OK to close the export message.

.. image:: ../img/Tailings/tdhydro/tdhydro018.png

5. Before running FLO-2D for the first time, the Run Settings must be
   configured. Click on the drop-down arrow at the right of Run
   Simulation and click on Run Settings.

.. image:: ../img/Tailings/tdhydro/tdhydro019.png

6. The Run Settings is used to configure the FLO-2D executable path and
   the export folder where the FLO-2D required input files are saved.
   Set the FLO-2D Folder to the FLO-2D PRO folder: C:\\Program Files
   (x86)\\FLO-2D PRO and the Project Folder to the Export Hydrology
   folder. Click OK to close the message.

.. image:: ../img/Tailings/tdhydro/tdhydro020.png

.. image:: ../img/Tailings/tdhydro/tdhydro021.png

The Project Folder is automatically updated to the export folder every
time data is exported. If the user wants to run FLO-2D from another
export folder, the Project Folder on the Run Settings must be
configured.

7. Click on the Run FLO-2D icon to run the simulation.

.. image:: ../img/Tailings/tdhydro/tdhydro022.png

8. The model runs in Text Mode. When it is finished, check the
   simulation summary data for possible errors and click close.

.. image:: ../img/Tailings/tdhydro/tdhydro023.png

.. image:: ../img/Tailings/tdhydro/tdhydro024.png

Step 6: Load results
--------------------

1. To visualize the results, open the FLO-2D-Rasterizor plugin.

.. image:: ../img/Tailings/tdhydro/tdhydro025.png

2. Select the FINALDEP.OUT file in the Export Hydrology folder. The app
   will select the project CRS. Name the layer as Final Depth Hydrology,
   select the Output Directory as the Export Hydrology folder and set
   the style to Depth.

.. image:: ../img/Tailings/tdhydro/tdhydro026.png

.. image:: ../img/Tailings/tdhydro/tdhydro027.png

Rasterizor can be used on other \*.out files. It is limited to files
with GE X Y N format. Those are Grid element number, xcoord, ycoord, and
n is the reported variable. Output file descriptions are available in
the Data Input Manual Chapter 5.

