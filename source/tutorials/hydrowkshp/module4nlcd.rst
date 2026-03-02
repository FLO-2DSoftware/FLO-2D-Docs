National Land Cover Data (NLCD)
======================================

Step 1: Curve Number Generator method
-----------------------------------------

- Load the **Curve Number Generator** from the **Processing** toolbox.

|hydrow029|

- Set the Extent to **Watershed** Layer.
- Set the name and path.
- Uncheck the other items.
- Click Run

|hydrow030|

Step 2: Download the USGS data
---------------------------------------------------

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

Step 3: Review look-up tables
---------------------------------------------------

Land cover lookup table.
The full table is in the Excel Spreadsheet.

- Modify these table per local **Flood Control Specifications.**

|hydrow032|

- Mannings roughness for shallow overland flow developed for FLO-2D. (source: FCDMC)

|hydrow033|

Step 4: Run NLCD Land Cover Roughness processor 
---------------------------------------------------

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

.. _step-5-load-data:

.. |hydrow029| image:: ../img/hydrowkshp/hydrow029.jpg

.. |hydrow030| image:: ../img/hydrowkshp/hydrow030.png

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

