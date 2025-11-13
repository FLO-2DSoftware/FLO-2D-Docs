10. Limiting Froude Spatial
=================================

.. image:: ../../../img/gridtools/Spatial-Limiting-Froude/spatia003.png

The Spatial Limiting Froude layer is used to set a limiting Froude number for individual FLO-2D grid elements.
For example, overland flow on a gentle slope will is likely subcritical so a limiting Froude value of 0.9 or 0.99
can be assigned.  If the limiting Froude is exceeded, due to local slope and roughness assignments,
the grid element n-value is incrementally increased and maintains
numerical stability that might occur for severe supercritical flow.

The limiting Froude is a way to calibrate n-values for the overland grid.

.. note:: For further discussion on the limiting Froude numbers refer to the FLO-2D Data Input Manual and the
          FLO-2D Reference Manual.

Digitize or Copy Data
---------------------

1. Select the Froude Areas
   layer and click Toggle Editing.

2. Create or copy the polygons that
   represent the Froude areas to the layer and save them.

.. image:: ../../../img/gridtools/Spatial-Limiting-Froude/spatia002.png

.. image:: ../../../img/gridtools/Spatial-Limiting-Froude/spatia002a.png


Sample Data
-----------

1. Click the Sampling Limiting Froude Numbers.

.. image:: ../../../img/gridtools/Spatial-Limiting-Froude/spatia003.png

2. Once the process is
   complete OK to close it.

.. image:: ../../../img/gridtools/Spatial-Limiting-Froude/spatia004.png

Troubleshooting
---------------

1. Create the limiting Froude
   polygons if they are missing from the Froude Areas layer.

2. If the Grid layer is empty,
   create a grid system and try again.

3. If a Python appears during the sampling process, the attribute table may be missing.
   Save and reload the project into QGIS and try again.
