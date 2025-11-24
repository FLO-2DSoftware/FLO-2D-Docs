Storm Drain - Shapefile Development
====================================

**Overview**

This lesson will outline how to construct a storm drain network that is ready for FLO-2D Plugin to process.

Required Data

================== ==========================
**File**           **Content**
================== ==========================
Point shapefile    Inlets Junctions
Polyline shapefile Conduits
Point shapefile    Outfalls
================== ==========================

Path:  ...\\Coastal Training\\Project Data\\Storm Drain

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/9bmYrG-x1Mg" frameborder="0" allowfullscreen></iframe>


Step 1: Import shapefiles for storm drain features
________________________________________________________

1. Select the Storm Drain Group in the User Layer Group.

2. Drag the 3 Shapefiles onto the map space.

.. image:: ../img/Coastal/sd001.png

4. Check the Attribute Tables for the layers **Conduits, Inlets Junctions, and Outfalls**.
   To do this right click each layer and then Click Attributes Table.

.. image:: ../img/Coastal/sd002.png

.. image:: ../img/Coastal/sd003.png

5. The following data tables may be found in the shapefile attributes.  Some data is required and some data
   can be skipped.

.. image:: ../img/Advanced-Workshop/adv/conduits.png

.. image:: ../img/Advanced-Workshop/adv/inlets.png

.. image:: ../img/Advanced-Workshop/adv/outfalls.png

Step 2. Add missing columns to shapefiles
__________________________________________

1. Open the attributes for any storm drain shapefile.

2. Click the Edit pencil and the Add Field button.

.. image:: ../img/Coastal/sd004.png

3. Using the tables in Step 2, add a field or two to the shapefiles.

4. In this example a new field called Flap Gate is an integer with 1 length.

.. image:: ../img/Coastal/sd005.png

5. If a real number field is created, the Length and Precision variables can help keep the number precision in check.

.. image:: ../img/Coastal/sd006.png

6. This is the end of the lesson. Keep adding fields until the class continues.
   It’s OK to leave them blank because they won’t be used in the next module.

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/6qKJzeUFuCg" frameborder="0" allowfullscreen></iframe>
