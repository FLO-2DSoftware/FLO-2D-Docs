Mudflow
=======

**Overview**

In this tutorial, a dam failure with mudflow is created. The dam
releases a mudflow that advances downstream. The affected area is known
as well as marks for the floodwave progression that are used in this
lesson to compare with FLO-2D Results.

**Required Data**

The required data is provided in the previous lesson.

.. Note:: Now we will add the tailings data to the model and run the prescribed breach failure again.

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/Wryeb0I_FdM?si=PHmCKQ8tkLbzpqOm"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Step 1: Organize layers
-----------------------

1. Good layer management is important. It keeps the project well
   organized and prevents layers from being lost. These images show some
   layer groups that make data management easier.

2. Group layers that are not used.

3. Group like data sets such as elevation, results, and external data.

.. image:: ../img/Tailings/tdmudflow/mudflow01.png

Step 2: Define mudflow properties
---------------------------------

1. Click on the Mud and Sediment Transport to set up the mudflow
   parameters.

.. image:: ../img/Tailings/tdmudflow/mudflow02.png

2. Select the Mud / Debris Transport to set up the mudflow parameters.

.. image:: ../img/Tailings/tdmudflow/mudflow03.png

3. Set the Hyperconcentrated Sediment Flow Parameters as follows and
   click ok:

.. image:: ../img/Tailings/tdmudflow/mudflow04.png

4. Open the Control Variables and set the parameters as follows. Click
   save.

.. image:: ../img/Tailings/tdmudflow/mudflow05.png

The bulking concentration is the volumetric concentration to bulk the
inflow discharge hydrograph.

Step 3. Run the mudflow simulation
----------------------------------

1. Click the main Save icon on the QGIS toolbar.

.. image:: ../img/Tailings/tdmudflow/mudflow06.png

2. Click the FLO-2D Data Export icon, create a folder named Export
   Mudflow and select this folder. The Project Folder on the Run
   Settings is automatically updated to the new Export Mudflow folder,
   and it does not need to be updated.

.. image:: ../img/Tailings/tdmudflow/mudflow07.png

.. image:: ../img/Tailings/tdmudflow/mudflow08.png

3. Click on the Run FLO-2D icon to run the simulation.

.. image:: ../img/Tailings/tdmudflow/mudflow09.png

4. Check the simulation summary. Close the window.

.. image:: ../img/Tailings/tdmudflow/mudflow010.png

Step 4. Check the results
-------------------------

1. Open MaxPlot or FLO-2D-Rasterizor to check the results.

2. **MaxPlot:** Select Floodplain Maximum Flow Depths – Mudflow

.. image:: ../img/Tailings/tdmudflow/mudflow011.png

.. image:: ../img/Tailings/tdmudflow/mudflow012.png

3. **Use FLO-2D-Rasterizor** to check the depth.out or finaldep.out

.. image:: ../img/Tailings/tdmudflow/mudflow013.png

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/siaD_sj7ugE?si=bluXvA7WqsqhNhzl"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>