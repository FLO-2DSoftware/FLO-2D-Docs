Module 4 - Process Manning’s Roughness Data
===============================================

.. _step-1-load-data-1:

Step 1: Load land cover data (NLCD)
---------------------------------------------------

**Curve Number Generator Method**

- Load the **Curve Number Generator** from the **Processing** toolbox.

|hydrow029|

- Set the Extent to **Watershed** Layer.
- Set the name and path.
- Uncheck the other items.
- Click Run

|hydrow030|

Step 2: Download the USGS data
---------------------------------------------------

.. note:: **Curve Number Generator** seems much faster than this download method.
   Skip or cancel this download if it’s taking too long.

   Curve Number Generator is limited to an allowable size limit.
   For large projects download in batches or use the USGS method.

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

- Note the difference between the Curve Number Generator and the NLCD Current data.

|hydrow031d|

Step 3: Review look-up tables
---------------------------------------------------

Land cover lookup table.
The full table is in the Excel Spreadsheet.

- Modify these table per local **Flood Control Specifications.**

|hydrow032|

- Mannings roughness for shallow overland flow developed for FLO-2D. Example Table.

|hydrow033|

Step 4: Run NLCD landuse roughness processor
---------------------------------------------------

- Open the **Processing Toolbox**.

|hydrow034|

- Open the Existing Processor Model.

|hydrow035|

- Double click the Reclassify module.

|hydrow036|

- This table can be modified to reflect **Local Manning’s n value standards**.

|hydrow037|

- Run the processor model to reclassify the landuse data as roughness data.

|hydrow038|

Step 5: Load land cover data (ESA World)
---------------------------------------------------

Curve Number Generator Method.

- Load the Curve Number Generator from the Processing toolbox.

|hydrow029|

- Set the Extent to Grid.
- Set the name and path.
- Uncheck the other items.
- Click Run

|hydrow030|


Step 6: Run ESA landuse roughness processor
---------------------------------------------------

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

Step 7: Create street layer buffer
---------------------------------------------------

- Run the **Buffer** tool from the **Processing Toolbox**.

|hydrow042|

- Load the **Street Network** in the editor and set the buffer distance to Edit Expression.

|hydrow043|

- Set the Expression to “Width ft” /2 to use the street width divided by 2 as the buffer radius.

|hydrow044|

This results in a polygon layer that covers the streets.
If some streets are missing, it is easy to digitize them directly into the street network or download them from OSM.

|hydrow045|

Select the buffer polygons that intersect the **GRID** layer.
Copy the features using Ctrl-C.

|hydrow046|

- Find the Roughness Layer in the Areas Group.
- Edit the layer.
- Paste the features into the Roughness Layer.

|hydrow047|

- Open the Attribute Table Set the n value to 0.018.
- Set the field editor to n Update all.

|hydrow048|

Step 8: Interpolate to the Grid
---------------------------------------------------

- Start by interpolating the Mannings n raster to the grid.

|hydrow049|

- Next run the polygon interpolator on the User Roughness polygons.

|hydrow050|

- The grid roughness can be checked with the renderer.

|hydrow051|

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

.. |hydrow035| image:: ../img/hydrowkshp/hydrow035.jpg

.. |hydrow036| image:: ../img/hydrowkshp/hydrow036.jpg

.. |hydrow037| image:: ../img/hydrowkshp/hydrow037.png

.. |hydrow038| image:: ../img/hydrowkshp/hydrow038.png

.. |hydrow039| image:: ../img/hydrowkshp/hydrow039.jpg

.. |hydrow040| image:: ../img/hydrowkshp/hydrow040.jpg

.. |hydrow041| image:: ../img/hydrowkshp/hydrow041.jpg

.. |hydrow042| image:: ../img/hydrowkshp/hydrow042.jpg

.. |hydrow043| image:: ../img/hydrowkshp/hydrow043.jpg

.. |hydrow044| image:: ../img/hydrowkshp/hydrow044.jpg

.. |hydrow045| image:: ../img/hydrowkshp/hydrow045.jpg

.. |hydrow046| image:: ../img/hydrowkshp/hydrow046.jpg

.. |hydrow047| image:: ../img/hydrowkshp/hydrow047.jpg

.. |hydrow048| image:: ../img/hydrowkshp/hydrow048.jpg

.. |hydrow049| image:: ../img/hydrowkshp/hydrow049.jpg

.. |hydrow050| image:: ../img/hydrowkshp/hydrow050.jpg

.. |hydrow051| image:: ../img/hydrowkshp/hydrow051.jpg