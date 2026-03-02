Open Street Data OSM
==========================

Step 1: Download Street Centerlines
--------------------------------------------------------------

- Move all Manning's n Roughness related rasters into the Manning's Group.

|hydrow040a|

- Open **Plugins → Manage and Install Plugins** and install **QuickOSM** (or **OSM Downloader**) if it is not already enabled.

|hydrow042a|

- Open the tool:
- **Vector → QuickOSM → QuickOSM**

|hydrow042b|

- Use the **Map Preset** tab and select Urban for Streets and Buildings.
- Use the current map canvas extent so the download matches the project domain.
- Click Run Preset.

.. note:: if a timeout error occurs, run the preset again.

|hydrow042c|

- Select the streets that are inside the **Watershed Boundary**.
- Run the Select by location tool.
- Fill the fields as shown and click Run.

|hydrow042d|

- Invert the selection.

|hydrow042e|

- Toggle the editor.
- Delete the Selected Streets.
- Save the edits.
- Toggle the editor off.

|hydrow042f|


Step 2: Reproject and Export Street Layer
---------------------------------------------------

The street layer must be in the project coordinate system before buffering.  
If it remains in WGS84 (EPSG:4326), the buffer distance will be interpreted in degrees and will not produce correct results.

- Right-click the **Roads** layer.
- Select **Export → Save Features As**.

|hydrow043a|

- Set **Format** to:

  ``ESRI Shapefile``

- Set the **Coordinate Reference System (CRS)** to:

  ``EPSG:2222``

- Choose an appropriate file name and save location.
- Click **OK**.

|hydrow043a|

The street layer is now in projected units (feet), and buffer distances will be applied correctly in the next step.

Step 3: Create street layer buffer
---------------------------------------------------

- Run the **Buffer** tool from the **Processing Toolbox**.

|hydrow042|

- Load the **Street Network** in the editor and set the buffer distance to Edit Expression.

|hydrow043|

- Copy code into the **Expression Editor** to determine the buffer width by street type.

.. code-block:: text

   CASE
       WHEN "highway" = 'primary' THEN 40
       WHEN "highway" = 'secondary' THEN 30
       WHEN "highway" = 'tertiary' THEN 25
       WHEN "highway" = 'residential' THEN 20
       WHEN "highway" = 'service' THEN 15
       ELSE 15
   END / 2

|hydrow043c|

This results in a polygon layer that covers the streets.
If some streets are missing, it is easy to digitize them directly into the street network.


.. |hydrow029| image:: ../img/hydrowkshp/hydrow029.jpg

.. |hydrow029a| image:: ../img/hydrowkshp/hydrow029a.png

.. |hydrow030| image:: ../img/hydrowkshp/hydrow030.png

.. |hydrow030a| image:: ../img/hydrowkshp/hydrow030a.png

.. |hydrow031| image:: ../img/hydrowkshp/hydrow031.png

.. |hydrow031a| image:: ../img/hydrowkshp/hydrow031a.png

.. |hydrow031b| image:: ../img/hydrowkshp/hydrow031b.png

.. |hydrow031c| image:: ../img/hydrowkshp/hydrow031c.png  

.. |hydrow031d| image:: ../img/hydrowkshp/hydrow031d.png

.. |hydrow031e| image:: ../img/hydrowkshp/hydrow031e.png

.. |hydrow031f| image:: ../img/hydrowkshp/hydrow031f.png

.. |hydrow031g| image:: ../img/hydrowkshp/hydrow031g.png

.. |hydrow031h| image:: ../img/hydrowkshp/hydrow031h.png

.. |hydrow032| image:: ../img/hydrowkshp/hydrow032.png

.. |hydrow033| image:: ../img/hydrowkshp/hydrow033.jpg

.. |hydrow034| image:: ../img/hydrowkshp/hydrow034.jpg

.. |hydrow035| image:: ../img/hydrowkshp/hydrow035.png

.. |hydrow036| image:: ../img/hydrowkshp/hydrow036.jpg

.. |hydrow037| image:: ../img/hydrowkshp/hydrow037.png

.. |hydrow037a| image:: ../img/hydrowkshp/hydrow037a.png

.. |hydrow038| image:: ../img/hydrowkshp/hydrow038.png

.. |hydrow039| image:: ../img/hydrowkshp/hydrow039.png

.. |hydrow040| image:: ../img/hydrowkshp/hydrow040.png

.. |hydrow040a| image:: ../img/hydrowkshp/hydrow040a.png

.. |hydrow041| image:: ../img/hydrowkshp/hydrow041.jpg

.. |hydrow042| image:: ../img/hydrowkshp/hydrow042.jpg

.. |hydrow042a| image:: ../img/hydrowkshp/hydrow042a.png

.. |hydrow042b| image:: ../img/hydrowkshp/hydrow042b.png

.. |hydrow042c| image:: ../img/hydrowkshp/hydrow042c.png

.. |hydrow042d| image:: ../img/hydrowkshp/hydrow042d.png

.. |hydrow042e| image:: ../img/hydrowkshp/hydrow042e.png

.. |hydrow042f| image:: ../img/hydrowkshp/hydrow042f.gif

.. |hydrow043| image:: ../img/hydrowkshp/hydrow043.jpg

.. |hydrow043a| image:: ../img/hydrowkshp/hydrow043a.png

.. |hydrow043b| image:: ../img/hydrowkshp/hydrow043b.png

.. |hydrow043c| image:: ../img/hydrowkshp/hydrow043c.png

.. |hydrow044| image:: ../img/hydrowkshp/hydrow044.jpg

.. |hydrow049| image:: ../img/hydrowkshp/hydrow049.jpg

.. |hydrow050| image:: ../img/hydrowkshp/hydrow050.jpg

.. |hydrow051| image:: ../img/hydrowkshp/hydrow051.jpg