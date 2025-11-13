Floodplain Cross Section Editor
================================

The floodplain cross section editor is used to set up the FPXSEC.DAT file.
This section will describe how to digitize and schematize the data.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/floodp005.png

Map Velocity
--------------

1. Run the model to produced results.

2. Use MapCrafter to map the velocity vectors before creating floodplain cross sections.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec001.png

3. Connect to the output data.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec002.png

4. Load the Velocity Vector Maps.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec003.png

5. If necessary, change the style of the velocity vectors.

6. Open the properties of the Vector map.

7. Click the SVG button.

8. Unlock the Aspect Ratio.

9. Set the width to 2 mm.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec004.png

10. If the vectors are too short, edit the height to Velocity times a factor.  This works well for Final Velocites.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec005.png

11. This editor can be used to set the vector lengthening factor.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec006.png

Create Cross Section
---------------------

Use the editor widget to create the cross section.

1. Click the add
   floodplain cross section button.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/floodp004.png

2. Use the velocity vector map to find a good spot to place a floodplain cross section.

3. The vectors should be mostly crossing the line.  Don't pick a spot where the vectors are parallel or backward.

4. Digitize the cross section and Click OK.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/floodp002.png

6. Click save to preserve the data. The user cross section is
   a green line.

5. A generic name is used if the name field is left NULL.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/floodp006.png

4. Set the flow direction for each cross section.

Floodplain XS-1

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec007.png

Floodplain XS-2

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec008.png

Floodplain XS-3

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec009.png

Floodplain XS-4

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec010.png

Floodplain XS-5

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec011.png

6. The final map looks like this:

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec014.png

7. Click Schematize to save the data.
   The schematized cross section is corrected to meet the FLO-2D criteria for Floodplain cross sections.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/floodp007.png

8. The final schematic layers look like this:

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec015.png

9. Export and run the model again so that the cross section results are written.

10. The results tool can be used to review the cross section results.

.. image:: ../../../img/Floodplain-Cross-Section-Editor/fpxsec016.png

Troubleshooting
---------------

1. Make sure the
   cross-section lines are within the grid system.

2. If copying cross
   section data into the layer, make sure the FID is numbered 1 to n number of cross sections.

3. Make sure the iflo is
   assigned to a number 1 – 8 that is a flow direction most perpendicular to the polyline.

4. Try to make the lines horizontal, vertical or diagonal to the grid elements.
   If the line is not very close to the grid alignment, the intersector may have trouble finding the correct alignment.

5. Use the Velocity Vectors from MapCrafter or the Mesh Time maps to help set up the line.
   Place the lines in a location where all flow crosses the line.
   Do not place the line where flow is parallel to the line.



