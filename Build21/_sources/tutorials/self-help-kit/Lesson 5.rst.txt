Lesson 5 – Realtime Rainfall Data
=================================

Overview
________

Lesson 5 outlines the process of setting up realtime rainfall data in the raincell.dat file.
It is important to perform this tutorial on a Lesson 1 skeleton project.
Finish Lesson 1 through Step 5 before performing the following steps.

This video shows the full process of this tutorial.

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/B1ujp_ODrKE" frameborder="0" allowfullscreen></iframe>


Required Data
_____________

The lesson makes use of QGIS Lesson 1 and rainfall data \*.ASC files in QGIS Lesson 5.

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - **File**
     - **Content**
     - **Location**

   * - \*.asc
     - ASCII Grid File
     - QGIS Lesson 5

   * - \*.rfc
     - Rainfall Catalog File
     -


Project Location C:\\Users\\Public\\Documents\\FLO-2D Pro Documentation\\Example Projects\\QGIS Tutorials

Check these folders to ensure the data is available before starting the lesson.

Step-by-Step Procedure
______________________

To build RAIN.DAT and RAINCELL.DAT following these steps.

1. Complete QGIS Lesson 1 to Step 5;

2. Set up the rain editor;

3. Import the rainfall data;

4. Export the project;

5. Transfer RAIN.DAT and RAINCELL.DAT files;

6. Run the simulation.

Step 1: Setup the project
_________________________

1. Set up a “Skeleton Project”.
   RAINCELL.DAT is a large file and it is not necessary to keep it in the regular project GeoPackage.
   It will slow the model down and the RAINCELL.DAT is not a file that needs to be regenerated.

2. Follow the QGIS Lesson 1 steps up to Step 5.

Step 2: Rain editor
___________________

1. Set up the Rain Editor widget by checking the Simulate Rainfall, Building Rain and Realtime Rainfall check boxes.

.. image:: ../img/Workshop/Worksh132.png


Step 3: Import rainfall data
____________________________

1. Click the Import Realtime Rainfall ASCII files button.

.. image:: ../img/Workshop/Worksh133.png


2. Select the folder to import the data.

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects\\QGIS Tutorials\\QGIS Lesson 5

1. The plugin will read the catalog file and the ASCII grid files and interpolate the realtime rainfall data to the grid.

2. The data processing takes time.
   Track the the progress by the processor by how many auxillary files exist.

.. image:: ../img/Workshop/Worksh134.png


3. Once the processing is complete, click OK to close the dialog box.

.. image:: ../img/Workshop/Worksh135.png


Step 4: Export the project
__________________________

1. This is a good point to save project.
   Refer to Step 9 in Lesson 1.

.. image:: ../img/Workshop/Worksh083.png


2. Export the data files to the Project Folder in QGIS Lesson 5.

.. image:: ../img/Workshop/Worksh021.png


C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects\\QGIS Tutorials\\QGIS Lesson 5\\Lesson 5 Export

3. All GDS data files will be created in the selected project folder, including RAIN.DAT and RAINCELL.DAT files.

.. image:: ../img/Workshop/Worksh136.png


Step 5: Transfer the RAIN.DAT and RAINCELL.DAT files
____________________________________________________

1. To use the new Rainfall data it needs to be transferred to a project folder.
   This project can be started by adding the FLOPRO.EXE Engine to the folder or by calling it from the Plugin.

2. Copy the RAIN.DAT and RAINCELL.DAT files to the Lesson 4 Export folder.

3. Replace the original RAIN.DAT file.

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects\\QGIS Tutorials\\QGIS Lesson 4\\QGIS Lesson 4 Export

.. image:: ../img/Workshop/Worksh137.png


Step 6: Run the simulation
__________________________

1. Click the Run FLO-2D Icon.

.. image:: ../img/Workshop/Worksh0052.png


2. Set the Project path and the FLO-2D Engine Path and click OK to start the simulation.

.. image:: ../img/Workshop/Worksh138.png

