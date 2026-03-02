Module 4 - Process Manning’s Roughness Data
===============================================

.. _step-1-load-data-1:

.. dropdown:: NLCD Method

  .. container:: h3
    
    Step 1: Load land cover data (NLCD)
  
  **Curve Number Generator Method**

  - Load the **Curve Number Generator** from the **Processing** toolbox.

  |hydrow029|

  - Set the Extent to **Watershed** Layer.
  - Set the name and path.
  - Uncheck the other items.
  - Click Run

  |hydrow030|

  .. container:: h3

    Step 2: Download the USGS data
  
  - Connect to the NLCD Land Cover data.

  |hydrow031a|

  - Repair the data Source

  |hydrow031b|

  - Select the layer and click OK.

  |hydrow031c|

  - Right click the Land Cover layer and click Export.

  |hydrow031f|

  - Fill the form and click OK.

  |hydrow031|

  - Move the Land Cover layers to the **Manning's** group.

  |hydrow031e|

  - Copy the Style from the NLCD Layer.

  |hydrow031g|

  - Paste the Style to the Downloaded Layer.

  |hydrow031h|

  - Note the difference between the Curve Number Generator 2021 and the Land Cover NLCD Server 2024 data.

  |hydrow031d|

  .. container:: h3

    Step 3: Review look-up tables
  
  Land cover lookup table.
  The full table is in the Excel Spreadsheet.

  - Modify these table per local **Flood Control Specifications.**

  |hydrow032|

  - Mannings roughness for shallow overland flow developed for FLO-2D. (source: FCDMC)

  |hydrow033|

  .. container:: h3

    Step 4: Run NLCD Land Cover Roughness processor 
  
  - Open the **Processing Toolbox**.

  |hydrow034|

  - Open the Existing Processor Model.

  |hydrow035|

  - Double click the Reclassify module.

  |hydrow036|

  - This table may be modified to reflect local Manning’s n value standards. 

  .. note:: Every raster value must be explicitly assigned a corresponding Manning’s n value. 
    If one value is omitted, the processor may fail during roughness surface generation.

  |hydrow037|

  .. hint:: Processor models are script-based. Editing the table in a plain text editor is often 
    faster than using the graphical interface.

  |hydrow037a|

  - Run the processor model to reclassify the landuse data as roughness data.

  |hydrow038|

.. dropdown:: ESA Method

  .. container:: h3

    Step 5: Load Land Cover data (ESA World)
  

  Curve Number Generator ESA

  - Load the Curve Number Generator from the Processing toolbox.

  |hydrow029a|

  - Set the Extent to Grid.
  - Set the name and path.
  - Uncheck the other items.
  - Click Run

  |hydrow030a|

  .. container:: h3

    Step 6: Run ESA Land Cover Roughness processor
  
  This processor works on World Data.
  For Example, use it on the **US Mexico boundary.**

  - Open the **Processing Toolbox**.

  |hydrow034|

  - Open the Existing Processor Model.

  |hydrow039|

  - Double click the Reclassify module.

  |hydrow036|

  - This table can be modified to reflect **Local Manning’s n value standards**.

  |hydrow040|

  - Run the processor model to reclassify the landuse data as roughness data.

  |hydrow041|

  - Move all Manning's n Roughness related rasters into the Manning's Group.

|hydrow040a|

Step 7: Download Street Centerlines
--------------------------------------------------------------

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

Step 8: Reproject and Export Street Layer
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

Step 9: Create street layer buffer
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