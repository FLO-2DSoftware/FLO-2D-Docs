Grid Ideas for Later
========================

Elevation
=============

Step x: Convert data to feet
-------------------------------------------------------

Use the FLO-2D **Pre-processing Tools** to convert the units of the raster.

|hydrow026|

Use the **Grid Tools** >> **Sample Elevation** to interpolate the elevation to the grid.

|hydrow027|

Set the Source Raster to the correct elevation layer and click OK.

|hydrow028|

Step x: Rougness
-------------------------------------------------------

|hydrow045|

Select the buffer polygons.
Copy the features using Ctrl-C.

|hydrow046|

- Find the Roughness Layer in the Areas Group.
- Edit the layer.
- Paste the features into the Roughness Layer.

|hydrow047|

- Open the Attribute Table Set the n value to 0.018.
- Set the field editor to n Update all.

|hydrow048|

Buildings
=============

Step 1. Save Buildings Layer
---------------------------------

- Select the buildings by location.
- Select Buildings that are within the Watershed Polygon.

|hydrow073|

- Export the Buildings layer.

|hydrow073a|

- Save the builidings as an ESRI Shapefile.

|hydrow073b|

- Remove the OSM Layers.

|hydrow073c|

- Add the exported layers to the Manning's Group.

|hydrow073d|

.. |hydrow026| image:: ../img/hydrowkshp/hydrow026.png

.. |hydrow027| image:: ../img/hydrowkshp/hydrow027.png

.. |hydrow028| image:: ../img/hydrowkshp/hydrow028.jpg

.. |hydrow045| image:: ../img/hydrowkshp/hydrow045.jpg

.. |hydrow046| image:: ../img/hydrowkshp/hydrow046.jpg

.. |hydrow047| image:: ../img/hydrowkshp/hydrow047.jpg

.. |hydrow048| image:: ../img/hydrowkshp/hydrow048.jpg

.. |hydrow073| image:: ../img/hydrowkshp/hydrow073.png

.. |hydrow073a| image:: ../img/hydrowkshp/hydrow073a.png

.. |hydrow073b| image:: ../img/hydrowkshp/hydrow073b.png

.. |hydrow073c| image:: ../img/hydrowkshp/hydrow073c.png

.. |hydrow073d| image:: ../img/hydrowkshp/hydrow073d.png

