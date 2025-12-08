Storm Drain Setup
=================

Required Data

================== ==========================
**File**           **Content**
================== ==========================
Point shapefile    Inlets Junctions
Polyline shapefile Conduits
Point shapefile    Outfall
\*.txt             Type 4 Rating Tables
================== ==========================

Path:  ...\\Coastal Training\\Project Data\\Storm Drain

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/Jc8zF4Sn3IM" frameborder="0" allowfullscreen></iframe>


Step 1: Select components from shapefile
__________________________________________

1. Collapse the widgets, select the Storm Drain Editor.

2. Click the Select components from shapefile layer button.

.. image:: ../img/Coastal/sd007.png

3. Use the Editor to select the fields from 3 shapefiles.  Take care with the purple MaxDepthF.
   That is the final field.

.. image:: ../img/Coastal/sd008.png

.. image:: ../img/Coastal/sd009.png

.. image:: ../img/Coastal/sd010.png

4. Once all features are assigned, click on Assign Selected Inlets/Junctions, Outfalls and Conduits to create the data
   structures of the Storm Drain Components.

5. The following message will be displayed.
   Click OK.

.. image:: ../img/Coastal/sd011.png

Step 2: Calculate the conduit node connections
_______________________________________________

1. Click the Auto-assign conduits nodes button.
   This step will fill the upstream and downstream node connections between conduits.
   In order for this step to be successful, the conduits must be oriented from upstream to downstream.
   See the arrows on the conduits.

.. image:: ../img/Coastal/sd013.png

2. Click Yes and OK.

.. image:: ../img/Coastal/sd012.png

Step 3: Import rating tables
____________________________

1. Click the Import Rating Table button

.. image:: ../img/Coastal/sd015.png

2. Navigate to the I4 tables.  Select all of the files and click Open.

Path: ...\\Coastal Training\\Project Data\\Storm drain\\Type 4 Rating Tables

.. image:: ../img/Coastal/sd014.png

3. If an error message appears, the path was not rectified and the rating table check file was not written.
   Repeat opening the files and the path will be fixed.

.. image:: ../img/Coastal/sd016a.png

4. The table was imported and assigned to the correct inlet nodes.  Click OK to close the message.

.. image:: ../img/Coastal/sd016.png

Step 4: Schematize storm drain components
___________________________________________

1. Click on Schematize Storm Drain Components in the Storm Drain Editor widget.

.. image:: ../img/Coastal/sd017.png

2. Once the storm drain components are schematized, the following dialog will appear.
   Click OK to close.

.. image:: ../img/Coastal/sd018.png

3. The storm drain components are now part of the schematized layers in the project.

.. image:: ../img/Coastal/sd019.png

4. Individual Inlets, Junctions, Outfalls and Conduits can be viewed and edited in the various dialog boxes.

.. image:: ../img/Coastal/sd020a.png

5. The dialog boxes allow the user to select any node or link and review or edit it's variables.  The box also
   automatically pans the map to the node or link that is selected.

.. image:: ../img/Coastal/sd020.png

.. image:: ../img/Coastal/sd020b.png


Step 5: Export SWMM.INP file
____________________________

1. Click on Export SWMM.INP button in the Storm Drain Editor widget.

.. image:: ../img/Advanced-Workshop/adv/Module277.png

2. Browse to the Project Export Folder.  Create a new folder called Storm Drain Test

3. Save the SWMM.INP file.
   The \*.INP file should be named as ‘SWMM.INP’, no other names will be read by FLO-2D model.
   Click Save.

.. image:: ../img/Coastal/sd021.png

3. The Storm Drain Control Dialog is displayed.

4. The control parameters can be entered.

5. The time, date, flow units and other data are hardwired from the FLO-2D surface Control Dialog.

6. All gray out data in the control dialog is hardwired.

7. The data is default for FLO-2D.
   The report_step can be set to any desired value.

.. image:: ../img/Coastal/sd022.png

8. A dialog displays stating the features that were written to the \*.INP file.
   Click OK.

.. image:: ../img/Coastal/sd023.png

Step 6: Export the project
____________________________

1. Export the rest of the FLO-2D data files including the new storm drain files.

.. image:: ../img/Coastal/sd027.png
.. image:: ../img/Coastal/sd024.png
.. image:: ../img/Coastal/sd025.png

3. The remaining data files have been exported.

.. image:: ../img/Coastal/sd026.png

Step 7: Run the simulation
____________________________

1. Click the Run FLO-2D Icon.

.. image:: ../img/Coastal/chan054.png

2. Set the FLO-2D Folder.
   C:\\program files (x86)\\flo-2d pro

3. Set the Project Folder.

Path: ...\\Coastal Training\\Project Runs\\Storm Drain Test

4. Click OK.

.. image:: ../img/Coastal/sd028.png

5. This is a good point to save project.

.. image:: ../img/Coastal/chan053.png

Step 8: Create a backup file
____________________________

1. Close QGIS.

2. Open the project folder.  Select the Coastal Project.gpkg and Coastal Project.qgz files.  Right click them and
   click Sent to/Compressed (zipped) folder.

.. image:: ../img/Coastal/creategrid019.png

3. Name the zipped file.
   It is good to choose a name that identifies project progress.
   For Example: **SDOK.zip**

.. image:: ../img/Coastal/sd029.png

4. Open QGIS and reload the project.

.. image:: ../img/Coastal/creategrid021.png

5. Click yes to load the model.