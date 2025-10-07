Green Ampt
===================

FLO-2D uses three infiltration method.  Green_Ampt, SCS, and Horton infiltration data development is outlined in this
section.  The INFIL.DAT file contains the infiltration data.  The data can be global (uniform) or spatially variable
at the grid element resolution.  Global data is applied uniformly to all grid elements and spatially variable data allows
different parameters to be applied to individual cells or groups of cells.  The different methods for setting up the data
are defined below.

.. image:: ../../../img/Widgets/infiltration.png

Green-Ampt
----------

The Green-Ampt infiltration editor can add global or spatially variable infiltration data to the INFIL.DAT file.  The
FLO-2D plugin uses 4 tools for processing Green-Ampt data.

- Global Infiltration Editor
- Green-Ampt Polygon Schematize
- Green-Ampt Infiltration Calculator (FCDMC Method 1)
- Green-Ampt Log Average Infiltration Calculator (Full Green-Ampt Calculator)
- Green-Ampt SSURGO and OSM databases

Global Uniform Infiltration
----------------------------

Global infiltration parameters set a uniform infiltration for the grid system.

1. Global data is set
   up using the Global Infiltration button.

2. Click the button
   to open the editor dialog box.

.. image:: ../../../img/Infiltration-Editor/Infilt002.png

3. Check the Green-Ampt checkbox.

4. Fill the Green-Ampt with uniform infiltration parameters and click OK.

5. Tool tips have information related to the parameters.  Hover the mouse pointer over the variable name to show the
   tooltip.

.. image:: ../../../img/Infiltration-Editor/Infilt003.png

6. This option will set up uniform infiltration data for every grid element.

.. image:: ../../../img/Infiltration-Editor/Infilt004.png

Spatial Infiltration Areas User Layer
--------------------------------------

Simple polygon method
______________________

.. image:: ../../../img/Infiltration-Editor/Infilt004a.png

Spatially variable floodplain infiltration is set by digitizing infiltration polygons into the Infiltration Areas user
layer. Use the polygon editor to digitize spatially variable infiltration.

Create a polygon to represent an area of infiltration.

1. Click the create
   a polygon tool and digitize a polygon.

2. Name the
   infiltration polygon.

3. Fill the
   table for the infiltration data.

4. Click
   Save.

5. Fill the
   data in the widget for each new polygon.

.. image:: ../../../img/Infiltration-Editor/Infilt005.png


An alternate method to fill data to use the Attribute Table for the Infiltration User Layer.

1. Right click
   the layer and open the attribute table.

.. image:: ../../../img/Infiltration-Editor/Infilt006.png


2. Click the Edit Pencil and start editing the data.
   Save and close the window.

.. image:: ../../../img/Infiltration-Editor/Infilt007.png


3. The data will
   automatically update in the widget.

4. Click the Schematize
   button to commit the changes to the grid.

.. image:: ../../../img/Infiltration-Editor/Infilt008.png


The infiltration polygons outline areas of cells that have similar infiltration characteristics.
In the following image, the infiltration areas are different for urban, desert and desert drainage.

.. image:: ../../../img/Infiltration-Editor/Infilt009.png


Channel Infiltration
---------------------

To assign channel infiltration, use the channel infiltration editor.

1. Check the Channel
   Element group.

2. Set a global
   hydraulic conductivity for all channel elements.

.. image:: ../../../img/Infiltration-Editor/Infilt010.png


Green-Ampt Infiltration Calculator FCDMC Method 2023
------------------------------------------------------

To use the Flood Control District of Maricopa County (FCDMC) Green-Ampt calculator, the user must prepare or download soil,
landuse, and eff shapefiles.  The data maybe provided by the District.

.. note:: See the FCDMC hydrology manual for a more detailed
          discussion on modeling with the Green-Ampt method.  Review the FLO-2D Plugin Technical Reference Manual for information
          pertaining to the Green-Ampt calculators.  Review the FLO-2D Pro Reference Manual for information pertaining to the use
          of the Green-Ampt method by the FLO-2D engine.

1. Prepare the soil data shapefile as seen in the following figure.

    - ROCKOUT is the percentage of rock outcrop coverage.  0 to 100
    - XKSAT is the hydraulic conductivity for the soil group. in/hr or mm/hr
    - Soil Depth is the limiting infiltration depth. Once the infiltration reaches this depth, it will turn off.  ft or m
    - DTHETAdry is the soil moisture deficit for dry soil condition.  It ranges in value from zero to the effective porosity.
    - DTHETAnormal is the soil moisture deficit for normal soil condition.
    - PSIF is the wetting front capillary suction. in or mm

.. image:: ../../../img/Infiltration-Editor/infil001.png


2. Prepare the Landuse data shapefile as seen in the following figure.

    - Saturation is the initial saturation condition.  wet or saturated, dry, or normal
    - Initial Abstraction storage depth that must be reached before infiltration begins.  in or mm
    - Impervious area is the percentage of impermeability for a given polygon.  0 to 100
    - Vegetative cover is not used by FCDMC. Leave it unchecked.

.. image:: ../../../img/Infiltration-Editor/infil002.png


3. Prepare the EFF data shapefile as seen in the following figure.

    - Eff is the percent effectiveness of the impervious space.  It pertains more to HEC-1 calculations but can also be
      applied as an additional control or adjustment for a 2D grid.  If an EFF polygon is present, the calculator will
      multiply the RTIMPgrid * the EFF to determine a final RTIMP.  0 to 100

.. image:: ../../../img/Infiltration-Editor/infil003.png


4. To run the calculator,
   click the Calculate Green-Ampt button.

.. image:: ../../../img/Infiltration-Editor/Infilt014.png


5. Check if the User soil and landuse layer are selected, fill the form and
   click OK.

.. image:: ../../../img/Infiltration-Editor/Infilt041.png


6. The calculator uses the calculation methods outlined in the FLO-2D Plugin Technical Reference manual.

7. When the infiltration
   calculator is finished, the following message will appear.

.. image:: ../../../img/Infiltration-Editor/Infilt016.png


8. The INFIL.DAT file
   looks like this.  For a detailed explanation of these variables, see the FLO-2D Data Input Manual INFIL.DAT section.

.. image:: ../../../img/Infiltration-Editor/Infilt017.png

Green-Ampt SSURGO and OSM databases
-------------------------------------

The user can estimate Green-Ampt parameters by leveraging data from two
databases: the Soil Survey Geographic Database (SSURGO) and OpenStreetMap (OSM).
The SSURGO database contains comprehensive information on soil, gathered through the collaborative efforts
of the National Cooperative Soil Survey. Utilizing the NDOT Green and Ampt Rainfall Loss Parameters,
the Green-Ampt parameters for different soil types can be estimated. This document outlines the methods
and equations for developing Green and Ampt loss parameters for soils developed by Saxton and Rawls in 2006.

The OpenStreetMap (OSM) database, a freely accessible and continually updated geographic resource,
relies on contributions from volunteers worldwide. This database provides data on land use,
which serves as a component for estimating Green-Ampt parameters. In combination with the information
available on the Drainage Design Manual for Maricopa County, estimations for Vegetation Cover,
Initial Abstraction, and RTIMP can be determined for different land uses using the OSM dataset.

FLO-2D collects, organizes, and calculates the information from SSURGO and OSM databases.
By preparing this data in shapefiles, it becomes readily available for use within the Green-Ampt calculator.

1. Select the SSURGO data and press calculate. This process downloads the data from
   NRCS and fills the missing data. Care should be taken because data could be scarce in some areas.
   Engineering judgment is essencial in such situations.

.. image:: ../../../img/Infiltration-Editor/Infilt042.png


2. The soil layer and fields will be automatically updated once the process is finished.

.. image:: ../../../img/Infiltration-Editor/Infilt043.png


3. Select the OSM data and press calculate. This process downloads the data from
   OSM and generates the land use map. This process could take a long time for larger areas.
   This information is more precise in urban areas and less precise in rural areas.
   Engineering judgment is essencial for evaluating the data quality.

.. image:: ../../../img/Infiltration-Editor/Infilt044.png


4. The landuse layer and fields will be automatically updated.

.. image:: ../../../img/Infiltration-Editor/Infilt045.png

5. Check the form if the fields are correctly selected and click OK.

6. When the infiltration
   calculator is finished, the following message will appear.

.. image:: ../../../img/Infiltration-Editor/Infilt016.png


7. The INFIL.DAT file
   looks like this.  For a detailed explanation of these variables, see the FLO-2D Data Input Manual INFIL.DAT section.

.. image:: ../../../img/Infiltration-Editor/Infilt017.png

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
