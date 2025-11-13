Horton
===================

FLO-2D uses three infiltration method.  Green_Ampt, SCS, and Horton infiltration data development is outlined in this
section.  The INFIL.DAT file contains the infiltration data.  The data can be global (uniform) or spatially variable
at the grid element resolution.  Global data is applied uniformly to all grid elements and spatially variable data allows
different parameters to be applied to individual cells or groups of cells.  The different methods for setting up the data
are defined below.

.. image:: ../../../img/Widgets/infiltration.png

Global Uniform Infiltration
---------------------------

The Horton infiltration editor can add global or spatially variable infiltration data to the INFIL.DAT file for.

1. Set up the Global Infiltration first.
   Click Global Infiltration.

.. image:: ../../../img/Infiltration-Editor/Infilt018.png

2. Fill the Global
   Infiltration dialog box.

.. image:: ../../../img/Infiltration-Editor/Infilt034.png

Uniform Horton infiltration is assigned as follows in the INFIL.DAT file:

.. image:: ../../../img/Infiltration-Editor/Infilt035.png

Horton Spatially Variable Method
--------------------------------

Spatially variable Horton infiltration is created by digitizing infiltration polygons.
Use the polygon editor to digitize spatially variable infiltration.
Create a polygon to represent an area of infiltration.

1. Click the create a
   polygon tool and digitize a polygon.

.. image:: ../../../img/Infiltration-Editor/Infilt036.png

2. Click
   Save.

.. image:: ../../../img/Infiltration-Editor/Infilt037.png

3. Right Click the Infiltration Areas layer (User Layers) and open the Attributes Table.
   Click the Editor Pencil button.

4. Name the infiltration
   polygons and fill out the data for fhorti, fhori, and deca.

5. Click the Save button
   and Editor Pencil button.

6. Click
   Schematize.

.. image:: ../../../img/Infiltration-Editor/Infilt038.png

.. image:: ../../../img/Infiltration-Editor/Infilt039.png

7. The spatially
   variable Horton looks like this in the INFIL.DAT file.

.. image:: ../../../img/Infiltration-Editor/Infilt040.png

Troubleshooting
---------------

1. Infiltration calculators all use intersection tools.
   This can cause problems if the shapefiles are not set up correctly.
   Specifically, land use and soils shapefiles that may have been converted from raster data.
   If errors persist, try “fix geometry”, “simplify”, and “dissolve” on the source shapefiles.
   These tools are part of the QGIS Processing Toolbox.
   They can also be corrected in ArcGIS if the datasets are very large.

2. Make sure the shapefiles completely cover the grid.
   If a grid element is outside the coverage of the infiltration, QGIS will show an error.

3. Make sure the shapefile fields have a correctly defined number type.
   The shapefiles that are supplied with the QGIS Lessons will help define the Field Variable Format such as string,
   whole number or decimal number.
