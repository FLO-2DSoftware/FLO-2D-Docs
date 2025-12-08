Lesson 6 – Hydraulic Structures
==================================

Part 1 - Culverts with Rating Tables
--------------------------------------

**Overview**

Lesson 6 Part 1 outlines the process of creating hydraulic structures with rating tables and generalized culvert equations.
This lesson needs a channel so please use the data from QGIS Lesson 2, 3, or 4 to run through this tutorial.


This video shows the full process of this tutorial.

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/H02oR4bySw4" frameborder="0" allowfullscreen></iframe>


Required Data
_____________

The lesson can start from QGIS Lesson 2, 3, or 4 and hydraulic structure shapefile and structure data files in QGIS Lesson 6.

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - **File**
     - **Content**
     - **Location**

   * - \*.shp
     - Hydraulic Structures
     - QGIS Lesson 6

   * - \*.txt
     - Culvert Tables
     - QGIS Lesson 6\\Culvert Tables



Project Location C:\\Users\\Public\\Documents\\FLO-2D Pro Documentation\\Example Projects\\QGIS Tutorials

Check these folders to ensure the data is available before starting the lesson.

Step-by-Step Procedure
_______________________

To build HYSTRUC.DAT following these steps.

1. Open Lesson 2, 3, or 4 qgz file;

2. Import the Hydraulic Structures shapefile;

3. Build the structures into the User Layers;

4. Assign the structure attributes;

5. Assign the rating tables;

6. Schematize the data;

7. Export and project;

8. Run the simulation.

Step 1: Open QGIS and Load the Project
__________________________________________

1. Search the start menu and run the “QGIS Desktop” program.

.. image:: ../img/Advanced-Workshop/culverts/culv001.png

2. Load QGIS Lesson 1

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects\\QGIS Tutorials\\QGIS Lesson 1\\Lesson 1.qgz

.. image:: ../img/Advanced-Workshop/culverts/clvt0001.png

.. important:: This lesson can be started after Lesson 2 is complete.

Step 2: Import data
____________________

1. Start by cleaning up the map space so the next layer will be easy to see.

2. Uncheck the User Left Bank Lines, Right Bank Lines, and Cross Sections layers;

3. Uncheck the Blocked Areas;

4. Uncheck the Storm Drain User Layers;

5. Click the User Boundary Conditions Layer to activate this layer;

6. Drag the Hydraulic Structures onto the map space.

.. note:: If the image is blurry, use Firefox or open the image in a new tab.


.. image:: ../img/Advanced-Workshop/culverts/clvt002.png


Step 3: Format the data layers
______________________________

1. Open the Attributes Table on the Hydraulic Structures Layer.

.. image:: ../img/Advanced-Workshop/culverts/clvt003.png


2. Select structure 130, and 131 and click Zoom map to selected rows button.
   This will zoom the map to these two structures.

.. image:: ../img/Advanced-Workshop/culverts/clvt004.png


**Label the Hydraulic Structures layer.**

3. Double click the Hydraulic Structures layer

4. Set the Labels like the following image.

5. This shows which culvert is being reviewed.

.. image:: ../img/Advanced-Workshop/culverts/clvt005.png


**Change the layer Symbology**

6. Change the tab to Symbology

7. Set the Symbol Layer Type to Arrow

8. Uncheck Curved Arrows

9. This shows the flow direction of each structure.

.. image:: ../img/Advanced-Workshop/culverts/clvt006.png


Step 4: Build the culverts into the User Layers Structure Lines
________________________________________________________________

1. Use the Structure Editor to add all of the new structures.

2. Digitize all of the structures.

3. Click the Save icon to confirm that close the digitizing tool and load the data.

.. image:: ../img/Advanced-Workshop/culverts/clvt007.png


**Digitizing process:**

  - Left click the inlet node (upstream node)

  - Left click the outlet node (downstream node)

  - Right Click to finish the polyine.

  - Click OK to finish the feature.

.. image:: ../img/Advanced-Workshop/culverts/clvt008.png


4. Click Save in the Structures Widget to load the data into the dialog box.

.. image:: ../img/Advanced-Workshop/culverts/clvt009.png


Step 5: Assign the structure attributes
_______________________________________

**Complete the Structure Fields**

1. Load the Hydraulic Structures Attribute table.
   The attributes will help fill out each structure table.

2. Check the center button.

3. Select the first structure.

4. Rename the Structure with the “A” button.

5. Fill the Type and Rating fields

6. Move to the next structure and repeat the process.

.. image:: ../img/Advanced-Workshop/culverts/clvt010.png


7. Schematize the structure data.

.. image:: ../img/Advanced-Workshop/culverts/clvt011.png


Step 6: Assign the rating tables
_________________________________

1. Click the Import Rating Tables button

.. image:: ../img/Advanced-Workshop/culverts/clvt012.png


2. Select the rating tables from the project folder.

3. Click open.

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects\\QGIS Tutorials\\QGIS Lesson 6\\Culverts Tables

.. image:: ../img/Advanced-Workshop/culverts/clvt013.png


4. The data has been imported.  Switch to another structure in the list if the table and plot does not update.

.. image:: ../img/Advanced-Workshop/culverts/clvt014.png


Step 7: Schematize the data
___________________________

Schematize the structure data and click Yes to replace the data.

.. image:: ../img/Advanced-Workshop/culverts/clvt015.png


.. image:: ../img/Advanced-Workshop/culverts/clvt016.png


Part 2 – Culverts with Culvert Equations
-------------------------------------------

This tutorial will illustrate how to use QGIS table editor and the FLO-2D plugin to manage and edit culvert data.

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/5XFkNQ6z8Oc" frameborder="0" allowfullscreen></iframe>

.. note:: The accompanying YouTube video shows several more advanced ideas for modeling culverts.  The tutorial focus is
          on the generalized culvert equation.

          - Advanced channel culvert modeling
          - Simple storm drain
          - When to use tailwater switches.
          - How to use the head reference elevation.

Step 1: Setup the project
__________________________

Get the data: https://flo-2d.sharefile.com/d-s05913b9b6c0149c1a93cec4fe52d7bb5

1. Download and extract the data from the link above.

Step 2: Review culvert 009
____________________________________

1. Zoom to the northeast basin as shown by the yellow box.

2. Find the culvert.

.. image:: ../img/Advanced-Workshop/culverts/clvt023.png


3. Turn on the Elevation layer and set the elevation style to hillshade.  If the elevation layer is missing, load it
   from lesson 1.

.. image:: ../img/Advanced-Workshop/culverts/culv001.png


4. Notice the blue polygon.  It covers the centroid of the grid.  The gif shows how to build one.  This polygon is used
   identify the grid that needs an elevation correction.  It can be more than one but in this case 1 is sufficient.

.. image:: ../img/Advanced-Workshop/culverts/culv002.gif


5. The elevation correction will be applied in a later step.  Step 2.4 sets shows how to set up the correction.

6. Click the measure tool and measure the length of the culvert.

.. image:: ../img/Advanced-Workshop/culverts/culv003.png

7. Review the culvert geometry.

   - Circular pipe culvert
   - 48" diameter
   - 3 barrels
   - Square headwall

.. image:: ../img/Advanced-Workshop/culverts/culv004.png

Step 3: Complete the structure data
___________________________________________________

1. Select CULV_009 in the structure editor.

   - Rating = Culvert equation
   - Length = 252ft
   - Diameter = 4ft

.. image:: ../img/Advanced-Workshop/culverts/culv005.png


2. TYPEC = 2 circular pipe.

.. image:: ../img/Advanced-Workshop/culverts/clvt024.png


3. TYPEEN = 1 square edge with headwall.

4. CULVERTN = 0.018

5. KE = 0.50

.. image:: ../img/Advanced-Workshop/culverts/culv006.png

source: Hydraulic Design of Highway Culverts - HDS-5-Third Edition


6. CUBASE = 0ft

7. MULTBARRELS = 3

.. image:: ../img/Advanced-Workshop/culverts/culv007.png


Step 4: Review culvert 122
____________________________________

1. Check the Center box and change the structure to CULV_122.

.. image:: ../img/Advanced-Workshop/culverts/culv008.png

2. The map is centered on the CULV_122.

3. In this culvert, the elevation polygon was applied to the whole basin.

4. Note how the blue polygon covers the centroid of the cells that will be modified.  This correction is applied to the
   attenuation basin and the stilling basin.

.. image:: ../img/Advanced-Workshop/culverts/culv009.png


5. The culvert has a stilling basin just upstream with a levee applied to control the water surface.  The grid element
   elevation is set to min by the blue polygon and the levee elevation is set to the crest of the weir.  The water will
   flow over the levee and fill the stilling basin before it flows through the culvert.

6. The levee elevation is 1396.48ft.

7. The culvert length 100ft.

.. image:: ../img/Advanced-Workshop/culverts/culv010.png

8. The entrance type is box culvert with wingwalls 30 to 70 degrees.

.. image:: ../img/Advanced-Workshop/culverts/culv011a.png

Step 5: Complete the structure data
___________________________________________________

1. Select CULV_122.

   - Rating = Culvert equation
   - Length = 100ft
   - Diameter = 5ft

.. image:: ../img/Advanced-Workshop/culverts/culv008a.png

7. The culvert dimensions

   - TYPEC = 1 Box culvert
   - TYPEEN = 1 Wingwall 30 to 70 Square Head at Crown
   - CULVERTN = 0.018
   - KE = 0.4
   - CUBASE = 8ft
   - MULTBARRELS = 1

.. image:: ../img/Advanced-Workshop/culverts/culv012.png


Step 6: Save, export, and run
______________________________

.. note:: The accompanying YouTube video shows several more advanced ideas for modeling culverts.

            - Advanced channel culvert modeling
            - Simple storm drain
            - When to use tailwater switches.
            - How to use the head reference elevation.

1. Save the project.

.. image:: ../img/Advanced-Workshop/culverts/clvt025.png


2. Export the data files to the Advanced Class Folder Module 2 Export.

.. image:: ../img/Advanced-Workshop/culverts/clvt026.png


.. image:: ../img/Advanced-Workshop/culverts/clvt027.png


.. image:: ../img/Advanced-Workshop/culverts/clvt028.png


.. image:: ../img/Advanced-Workshop/culverts/clvt029.png


2. Click the Run FLO-2D Icon.

.. image:: ../img/Advanced-Workshop/culverts/clvt030.png


3. Click OK to start the simulation.

.. image:: ../img/Advanced-Workshop/culverts/clvt031.png

.. note:: The end of the YouTube video will cover hydraulic structure review.
