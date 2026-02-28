Module 6 - Process Infiltration Data
==============================================

Green-Ampt method
---------------------------------------------------

These agencies use Green-Ampt infiltration data with FLO-2D.

   FCDMC, AZDOT, NVDOT, PCRFCD

Step 1: Run the Green Ampt Processor
---------------------------------------------------

Open the Infiltration Global button and check Green-Ampt and SCS CN.
Click OK

|hydrow068|

Click Calculate Green Ampt button and set the radio buttons to SSURGO and OSM and use the Calculate buttons to get data.
Cancel the final process so the data QC is performed first.

|hydrow069|

Step 2: Review the LandUse data
---------------------------------------------------

Open the attribute table of the LandUse layer.

Some polygons are categorized as Medium Density Residential with a 30 RTIMP.

Change these areas to Desert Landscape with 0 RTIMP.
Select the polygons with the polygon selector.

|hydrow070|

SCS curve number method
---------------------------------------------------

Many agencies and clients use SCS curve number, but Pima County has the robust and documented methodology for the South Western US.

Step 1: Run the Curve Number Generator
---------------------------------------------------

Load the **Curve number generator** from the **Processor Toolbox**.

Download the data only.
The final process is complete after the lookup table is modified.

|hydrow071|

Step 2: Review the CN lookup table
---------------------------------------------------

The lookup table can be modified per Local standards.

The processing code can be modified to connect to local servers.

The plugin developer seems to be very responsive to requests for development.

|hydrow072|

.. |hydrow068| image:: ../img/hydrowkshp/hydrow068.jpg

.. |hydrow069| image:: ../img/hydrowkshp/hydrow069.png

.. |hydrow070| image:: ../img/hydrowkshp/hydrow070.jpg

.. |hydrow071| image:: ../img/hydrowkshp/hydrow071.jpg

.. |hydrow072| image:: ../img/hydrowkshp/hydrow072.jpg


Step 4: Convert data to feet
-------------------------------------------------------

Use the FLO-2D **Pre-processing Tools** to convert the units of the raster.

|hydrow026|

Use the **Grid Tools** >> **Sample Elevation** to interpolate the elevation to the grid.

|hydrow027|

Set the Source Raster to the correct elevation layer and click OK.

|hydrow028|

.. |hydrow026| image:: ../img/hydrowkshp/hydrow026.png

.. |hydrow027| image:: ../img/hydrowkshp/hydrow027.png

.. |hydrow028| image:: ../img/hydrowkshp/hydrow028.jpg
