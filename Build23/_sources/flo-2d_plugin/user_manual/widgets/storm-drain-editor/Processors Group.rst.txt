Processors Group
==================

The processors buttons perform specific functions to help develop storm drain data.

Schematize Button
-------------------

1. The schematize storm drain button will convert user data to schematized data.

.. image:: ../../../img/Storm-Drain/storm002a.png

2. This mainly entails intersecting nodes to the grid elements and assigning the FLO-2D data.  The FLO-2D data files
   SWMMFLO.DAT, SWMMFLORT.DAT, SWMMOUTF.DAT,
   SDCLOGGING.DAT, and SWMMFLODROPBOX.DAT.

3. The button may also trigger storm drain data table algorithms to complete storm drain tables.

.. image:: ../../../img/Storm-Drain/storm002b.png

4. If you run the processor, the following message will appear on the bar if no errors were reported.

.. image:: ../../../img/Storm-Drain/storm002c.png

Select Components from Shapefile Button
-------------------------------------------

.. important:: For more comprehensive instructions visit the
               `Create Storm Drain <../storm-drain-editor/Create%20Storm%20Drain.html>`__ page.

1. The select component button helps connect the storm drain point and polyline attributes to the FLO-2D storm drain
   system.

.. image:: ../../../img/Storm-Drain/storm002d.png

2. Click the button to open the dialog box used to assign storm drain fields.

3. Information about this dialog window is available in the `Create Storm Drain <../storm-drain-editor/Create%20Storm%20Drain.html>`__ page.

.. image:: ../../../img/Storm-Drain/proc001.png

Auto Assign Link Nodes Button
-------------------------------------------

1. Use this button to assign the nodes that connect conduits, pumps, orifices, and weirs.

.. image:: ../../../img/Storm-Drain/Storm002e.png

2. The tool works with a spatial join between the node layer and the polyline layer end points.  So if a node is within
   the buffer distance, it will be assigned.

.. image:: ../../../img/Storm-Drain/Storm020b.png

3. If a node cannot be found, a "?" a dialog box with a list of links is shown.

.. image:: ../../../img/Storm-Drain/storm002f.png

4. If the node is outside the buffer, use the snapping tool to snap the node to the conduit ends.  The snapping tool
   will find the endpoint of the polyline and snap the node to it so that the buffer will not be exceeded.

.. image:: ../../../img/Storm-Drain/storm002g.png

Assign Maximum Depth
-------------------------------------------

1. Use this button to assign maximum depth to the nodes.

.. image:: ../../../img/Storm-Drain/Storm002j.png

2. The tool calculates the maximum depth for all nodes that do not have a Max Depth assigned.
   Users can choose to run this tool for all nodes in the system or only the selected ones.
   The maximum depth is calculated as the Grid Elevation minus the Invert Elevation.

.. image:: ../../../img/Storm-Drain/Storm002k.png

.. note:: The maximum depth is calculated ONLY for nodes where the Max Depth is 0 or NULL.

3. Once the process finishes, the following message will appear on the bar.

.. image:: ../../../img/Storm-Drain/Storm002l.png

4. Check the updated Maximum Depth.

.. image:: ../../../img/Storm-Drain/Storm002m.png

.. important:: It is important to highlight that this tool is designed to aid in the development of the Storm Drain system,
               and care should be taken when using it. It is strongly recommended to check the Storm Drain profile for any potential errors.


Storm Drain Control Variables
-------------------------------------------

.. Important:: In previous versions of the plugin, this data was assigned when the project was exported.  Now it is
   mainained by this window and its own table in the GeoPackage.

1. Use this button to assign the control variables for a storm drain model.

.. image:: ../../../img/Storm-Drain/storm002h.png

2. Check the Advanced options to show more options.  If an option is Greyed out, it is hardwired in the FLO-2D storm
   drain engine.

.. image:: ../../../img/Storm-Drain/storm002i.png

Help
-------------------------------------------

1. Click on the Help Button to open the Storm Drain Editor help.

.. image:: ../../../img/Storm-Drain/Storm047.png

