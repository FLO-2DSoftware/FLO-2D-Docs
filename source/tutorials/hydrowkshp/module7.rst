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



.. |hydrow026| image:: ../img/hydrowkshp/hydrow026.png

.. |hydrow027| image:: ../img/hydrowkshp/hydrow027.png

.. |hydrow028| image:: ../img/hydrowkshp/hydrow028.jpg

.. |hydrow045| image:: ../img/hydrowkshp/hydrow045.jpg

.. |hydrow046| image:: ../img/hydrowkshp/hydrow046.jpg

.. |hydrow047| image:: ../img/hydrowkshp/hydrow047.jpg

.. |hydrow048| image:: ../img/hydrowkshp/hydrow048.jpg