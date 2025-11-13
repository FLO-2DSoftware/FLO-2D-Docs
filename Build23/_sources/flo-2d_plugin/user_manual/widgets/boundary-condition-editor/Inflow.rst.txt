Inflow Editor
==================

Any number of inflow hydrographs to the FLO-2D model can be assigned to channel, floodplain or
even the 1-D street component. This represents a flood inflow to the flow domain from an off-site source.

.. image:: ../../../img/Boundary-Condition-Editor/newbc002.png

Create Inflow Data
-------------------

1. To create a point of inflow, click the Add Point BC button on the Boundary Condition
   Editor widget.

.. image:: ../../../img/Boundary-Condition-Editor/newbc004.png

2. Digitize the inflow node by left clicking the location of the inflow node on the map.
   In this example, the inflow node is a channel inflow node.
   It is not necessary to enter the fid.
   Click OK to create the feature.

.. image:: ../../../img/Boundary-Condition-Editor/newbc005.png

3. Click again the toggled Add Point BC button to save the feature.

.. image:: ../../../img/Boundary-Condition-Editor/newbc006.png

4. Click Yes to save the feature and
   to load the data into the editor.

.. image:: ../../../img/Boundary-Condition-Editor/newbc007.png

.. image:: ../../../img/Boundary-Condition-Editor/newbc008.png

.. note:: It is possible to add a line or a polygon inflow by using the Add Line BC or the Add Polygon BC buttons.

Load Inflow Data
-----------------

1. To load an INFLOW.DAT file, click on the Open INFLOW.DAT button.

.. image:: ../../../img/Boundary-Condition-Editor/newbc014.png

2. Navigate to the folder containing the INFLOW.DAT file and select it.

.. image:: ../../../img/Boundary-Condition-Editor/newbc015.png

3. A message on the QGIS toolbar will appear, indicating that the importing was successful.

.. image:: ../../../img/Boundary-Condition-Editor/newbc016.png

.. note:: Loading the INFLOW.DAT file into the project appends data to the Boundary Condition layers/table,
          updating cells if already defined with a Boundary Condition. Additionally, all data added using this
          tool will be included in the Boundary Conditions Points User Layer.

Assign Conditions to the Inflow Boundary Conditions
----------------------------------------------------

5. Assign the conditions to the inflow node as seen in the following image. This example the
   inflow node will have a steady hydrograph with 100 cfs assigned to Cave Creek inflow node.

.. image:: ../../../img/Boundary-Condition-Editor/newbc009.png

6. The time series inflow hydrograph is assigned in the table editor where time is in hours and discharge is cfs or cms.
   This is a clear water inflow hydrograph and no sediment concentration is assigned.

.. image:: ../../../img/Boundary-Condition-Editor/newbc010.png

7. Repeat the process to add additional inflow hydrographs.
   Use the Add data series/table for current BC button to create a new hydrograph.

.. image:: ../../../img/Boundary-Condition-Editor/newbc011.png

.. note:: Click on the lock into the selected inflow boundary condition button to highlight the selected inflow boundary condition on the Map Canvas when changing the Inflow Boundary Condition combobox.

    .. image:: ../../../img/Boundary-Condition-Editor/newbc017.png

Delete Selected Inflow Boundary Condition
-----------------------------------------

8. To delete an Inflow Boundary Condition, click on the Delete Inflow Boundary Condition button.

.. image:: ../../../img/Boundary-Condition-Editor/newbc018.png

.. note:: This button exclusively deletes the selected user Inflow Boundary Condition on the
          Boundary Condition Editor from the User Layers.

Schematize the data
---------------------

9. Use the Schematize button
   (shown below) to save the data to the Schematic Layers and click Yes to overwrite the layers.

.. image:: ../../../img/Boundary-Condition-Editor/newbc012.png


.. image:: ../../../img/Boundary-Condition-Editor/newbc013.png

Delete Schematized data
------------------------

8. To delete all schematized Inflow Boundary Conditions, click on the Delete Schematized Inflow Boundary Condition button
   and click Yes to delete all schematized Inflow Boundary Conditions.

.. image:: ../../../img/Boundary-Condition-Editor/newbc019.png

.. image:: ../../../img/Boundary-Condition-Editor/newbc020.png

.. note:: This button removes all schematized Inflow Boundary Conditions data, excluding the time series.


