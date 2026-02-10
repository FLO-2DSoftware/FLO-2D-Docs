Hydrologic Mapping and Data Access
=====================================

Objectives
-----------------

Participants will:

- Connect to online databases and download hydrologic data.

- Transform raw datasets into ready-to-use inputs for FLO-2D modeling.

- Process Manning’s n values and infiltration parameters (Green-Ampt, SCS, Horton).

- Access new rainfall mapping tools, including ERA5 reanalysis, NEXRAD, and gridded precipitation datasets.

- Practice workflows for floodplain and stormwater projects.

Workshop Setup
-----------------

This workshop uses QGIS v3.40 and the FLO-2D Gila Plugin.  :ref:`Install Instructions <setup_qgis_flo2d_plugin>`

**Required Data**

The required data can be downloaded here:

raw:: html

   <a href="https://flo-2d.sharefile.com/d-s5c66fd7ec29e451facfcef7c56fac84e" target="_blank">Download Data Installer</a>

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - **File**
     - **Content**

   * - \*.exe
     - Data Installer

   * - \*.zip
     - FLO-2D Plugin xxx.zip

   * - \*.pptx
     - Presentation Files


Step 1: Find the data
+++++++++++++++++++++++++++++++++++++++++

   1. Open the Flash Drive or use the link to get the data.

.. list-table::
   :widths: 100
   :header-rows: 0


   * - Note:

   * - Can’t use the flash drive? Get the data here:https://flo-2d.sharefile.com/d-s833f3121de6149288b5beecf1d239a63


Step 2: Install class data
+++++++++++++++++++++++++++++++++++++++++

1. Double click the AFMA Workshop Installer.exe.

2. Install using **default** settings.

3. Close the installer when the Completed message is listed in the Install Window.

|hydrow002|

Step 3: Set up the quick access folder
+++++++++++++++++++++++++++++++++++++++++

1. Find the training folder.

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects

2. Drag the Workshop Folder into the Quick Access Area.

3. It can be removed after the class is over.

|hydrow003|

Step 4: Load QGIS and Install Plugins
+++++++++++++++++++++++++++++++++++++++++

Open QGIS

|hydrow004|

Open the plugin manager and load the All Tab.

|hydrow005|

Click the **All** tab.
Use the **Search** bar to find and install these plugins:

a. FLO-2D MapCrafter

b. FLO-2D Rasterizor

c. Profile Tool

d. Curve Number Generator

e. Manning’s Roughness Generator

f. Street View

Switch the tab to **Install from ZIP** and Navigate to the FLO-2D Gila plugin.

The final list of **Installed** plugins looks similar to the following image.
It doesn’t have to match exactly.

|hydrow006|

Open the Setting/Options menu.

|hydrow007|

Find the CRS tab and check the Use Project CRS button.

|hydrow008|

QGIS Layout Overview

|hydrow009|

QGIS Toolbar Layout Overview

|hydrow010|

Close and Reload QGIS.
Close it now to save the user profile.
If the program crashes, the **setup** step will need to be repeated.

Setup Server Connections
----------------------------------

These steps to connect to US or International servers are the same for local data.
If a local agency has a server connection URL, QGIS can be connected to is using the same methods.
If the server requires a login, that can be set up in the connectors.

Step 1: 3DEP elevation server connection
+++++++++++++++++++++++++++++++++++++++++++++++++++

Load the Data Manager by clicking the colorful icon below.

Set the tab to WCS.

Click New and enter a name and paste the URL.

URL: https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WCSServer

|hydrow011|

Step 2: Land cover NLCD server connection
+++++++++++++++++++++++++++++++++++++++++++++++++++

Load the Data Manager by clicking the colorful icon below.

Set the tab to WCS.

Click New and enter a name and paste the URL.

URL: https://dmsdata.cr.usgs.gov/geoserver/mrlc_Land-Cover-Native_conus_year_data/wcs

|hydrow012|

Step 3: Hydrography NHD server connection
+++++++++++++++++++++++++++++++++++++++++++++++++++

Load the Data Manager by clicking the colorful icon below.

Set the tab to ArcGIS REST Server.

Click New and enter a name and paste the URL.

URL: https://hydro.nationalmap.gov/arcgis/rest/services/NHDPlus_HR/MapServer

|hydrow013|

Step 4: FEMA Effective Server
+++++++++++++++++++++++++++++++++++++++++++++++++++

Load the Data Manager by clicking the colorful icon below.

Set the tab to ArcGIS REST Server.

Click New and enter a name and paste the URL.

URL: https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer

|hydrow014|

Step 5: Levee Database
+++++++++++++++++++++++++++++++++++++++++++++++++++

Load the Data Manager by clicking the colorful icon below.

Set the tab to ArcGIS REST Server.

Click New and enter a name and paste the URL.

URL: https://geospatial.sec.usace.army.mil/dls/rest/services/NLD/Public/FeatureServer

|hydrow013|

Step 6: Load FLO-2D Project
+++++++++++++++++++++++++++++++++++++++++++++++++++

Click the Open FLO-2D Project button.

|hydrow015|

Navigate to the Workshop folder and open the Workshop Project1.gpkg file.

Delineate a Watershed
-----------------------

Step 1: Load data
+++++++++++++++++++++++++++++++++++++++++++++++++++

WARNING: The workshop internet connection may not support this process.
If that is the case, data is already downloaded for this area.

Open the Data Source Manager and find the WCS tab.

Connect the National Hydrography data server.

Select the WBDHU12 Polygon layer.
Click Add.

|hydrow016|

Step 2: Isolate one or more watersheds
+++++++++++++++++++++++++++++++++++++++++++++++++++

If this takes too long, uncheck the **WBDHU12** layer and check the **Watershed Boundary** polygon in the **External layers** group.

Zoom to the Soldier Canyon Watershed.

Wait for the watershed polygons to load.

Use the Select tool to select a watershed polygon.

|hydrow017|

Step 3: Watershed export
+++++++++++++++++++++++++++++++++++++++++++++++++++

It is easy to export a single watershed polygon or a group of watershed polygons as a Project Domain.
These can be used for FLO-2D or HEC-RAS 2D or any other 2D model.

Right click the **WBDHU12** layer and click **Export Data>>Save Features As**.

|hydrow018|

Fill the form and export the **Project Domain**.

|hydrow019|

Process Elevation Data
---------------------------

Step 1: Zoom to boundary
+++++++++++++++++++++++++++++++++++++++++++++++++++

Find the Small Boundary layer in External Layer Group.

Right click the Small Boundary and click Zoom to Layer.

|hydrow020|

Step 2: Load elevation data
+++++++++++++++++++++++++++++++++++++++++++++++++++

.. note:: If the process is taking too long, be sure to double check the Extent.

Cancel the connection by unchecking **unchecking** the DEP3 layer Cancel the download by clicking the **progress bar** and clicking cancel.

Local Agency data may be of better quality than 3DEP data.

Open the Data Source Manager and find the WCS tab.

Connect the elevation data.

Select the first layer.

Set the coordinate system to 3857.
(USGS data uses Metric units.) Add the layer.

Close the Data Source Manager.

|hydrow021|

Uncheck the layer because it has a heavy connection.
Right click the layer and select Repair Data Source.

|hydrow022|

Expand the WCS group

Expand the 3DEP group Select the first layer and click OK.

|hydrow023|

Step 3: Download elevation
+++++++++++++++++++++++++++++++++++++++++++++++++++

WARNING: **Skip** This step if the internet connection is slow.

Right click the DEP3Elevation layer and Export a small bit of elevation data.

|hydrow024|

Set the file path.
Make sure the CRS is 3857.

Limit the Extent to Grid Layer or Map Canvas if zoomed into the project area.

|hydrow025|

Step 4: Convert data to feet and interpolate to grid
+++++++++++++++++++++++++++++++++++++++++++++++++++++++

Use the FLO-2D **Pre-processing Tools** to convert the units of the raster.

|hydrow026|

Use the **Grid Tools** >> **Sample Elevation** to interpolate the elevation to the grid.

|hydrow027|

Set the Source Raster to the correct elevation layer and click OK.

|hydrow028|

Process Manning’s Roughness Data
------------------------------------

.. _step-1-load-data-1:

Step 1: Load data
+++++++++++++++++++++++++++++++++++++++++++++++++++

**WARNING**: The internet connection might be too slow for this step.
If that is the case, **Skip** this step.

Cancel the connection by unchecking **unchecking** the Land Cover layer Cancel the download by clicking the **progress bar** and clicking cancel.

Curve Number Generator Method.

Load the Curve Number Generator from the Processing toolbox.

|hydrow029|

Set the Extent to Grid.

Set the name and path.

Uncheck the other items.

Click Run

|hydrow030|

Step 2: Download the USGS data
+++++++++++++++++++++++++++++++++++++++++++++++++++

**Curve Number Generator** seems much faster than this download method.
Skip or cancel this download if it’s taking too long.

Curve Number Generator is limited to an allowable size limit.
For large projects download in batches or use the USGS method.

Right click the USGS Land Cover layer and click Export.
Fill the form and click OK.

|hydrow031|

Step 3: Review look-up tables
+++++++++++++++++++++++++++++++++++++++++++++++++++

Land cover lookup table.
The full table is in the Excel Spreadsheet.

Modify these table per local **Flood Control Specifications.**

|hydrow032|

Mannings roughness for shallow overland flow developed for FLO-2D.
Example Table.

|hydrow033|

Step 4: Run NLCD landuse roughness processor
+++++++++++++++++++++++++++++++++++++++++++++++++++

Open the **Processing Toolbox**.

|hydrow034|

Open the Existing Processor Model.

|hydrow035|

Double click the Reclassify module.

|hydrow036|

This table can be modified to reflect **Local Manning’s n value standards**.

|hydrow037|

Run the processor model to reclassify the landuse data as roughness data.

|hydrow038|

Step 5: Run ESA landuse roughness processor
+++++++++++++++++++++++++++++++++++++++++++++++++++

This processor works on World Data.
For Example, use it on the **US Mexico boundary.**

Open the **Processing Toolbox**.

|hydrow034|

Open the Existing Processor Model.

|hydrow039|

Double click the Reclassify module.

|hydrow036|

This table can be modified to reflect **Local Manning’s n value standards**.

|hydrow040|

Run the processor model to reclassify the landuse data as roughness data.

|hydrow041|

Step 6: Create street layer buffer
+++++++++++++++++++++++++++++++++++++++++++++++++++

Run the **Buffer** tool from the **Processing Toolbox**.

|hydrow042|

Load the **Street Network** in the editor and set the buffer distance to Edit Expression.

|hydrow043|

Set the Expression to “Width ft” /2 to use the street width divided by 2 as the buffer radius.

|hydrow044|

This results in a polygon layer that covers the streets.
If some streets are missing, it is easy to digitize them directly into the street network or download them from OSM.

|hydrow045|

Select the buffer polygons that intersect the **GRID** layer.
Copy the features using Ctrl-C.

|hydrow046|

Find the Roughness Layer in the Areas Group.

Edit the layer.

Paste the features into the Roughness Layer.

|hydrow047|

Open the Attribute Table Set the n value to 0.018.
Set the field editor to n Update all.

|hydrow048|

Step 7: Interpolate to the Grid
+++++++++++++++++++++++++++++++++++++++++++++++++++

Start by interpolating the Mannings n raster to the grid.

|hydrow049|

Next run the polygon interpolator on the User Roughness polygons.

|hydrow050|

The grid roughness can be checked with the renderer.

|hydrow051|

Process Rainfall Data
--------------------------

Step 1: Uniform rain on grid
+++++++++++++++++++++++++++++++++++++++++++++++++++

Real Storm Molina Canyon 9.09 inches in 5 days.
July 27, 2006, to July 31 2006.

|hydrow052|

Open the **Molina Canyon Rain Table.txt** file and copy the rain table.

|hydrow053|

Find the rain editor in QGIS and ensure 9.09 inches are used in the uniform rainfall total.

Add a new Time Series table and name it Molina 5 Day 2.

If necessary, select the Molina 5 Day 2 pattern again.
It may not automatically select it the correct pattern.

|hydrow054|

Select the first cell and Paste the Rainfall data into the table editor.
If necessary, click auto range.

|hydrow055|

Step 2: Depth point reduction
+++++++++++++++++++++++++++++++++++++++++++++++++++

Find the Gage data in the Rain Group.

|hydrow056|

Check the Spatial Variation and click the AR button.

Fill the form and click OK.

If the Raster is missing Check the Rain Group ON.

|hydrow057|

Step 3: Realtime Rainfall (ERA Copernicus)
+++++++++++++++++++++++++++++++++++++++++++++++++++

Check the Realtime Rainfall box and click the Add Raster button.

|hydrow058|

Load the July storm NetCDF file that contains the ERA Rainfall data from the Copernicus Reflectivity.

|hydrow059|

The interpolator will process the realtime rainfall.

Click the FLO-2D Info button on the FLO-2D tool bar.

Zoom into the rainfall area that has 9 inches of rainfall.

Click a grid element to see a sample of the Copernicus data.

This is something like NEXRAD reflectivity but for the whole world.

It can be easily downloaded and gage calibrated to a storm event with gages.

|hydrow060|

Step 4: Review the Copernicus Downloader
+++++++++++++++++++++++++++++++++++++++++++++++++++

Review these tasks instead of performing them.
https://cds.climate.copernicus.eu/datasets/reanalysis-era5-land?tab=download An account is required to download this Open-Source data.

Find the precipitation group.

|hydrow061|

Select the storm year

|hydrow062|

Select the month and days of the storm

|hydrow063|

Select all times

|hydrow064|

Set up the subregion

|hydrow065|

Set the data and download format.

|hydrow066|

Log-in to a free account to accept the terms and process the request.

|hydrow067|

Process Infiltration Data
------------------------------

Green-Ampt method
+++++++++++++++++++++++++++++++++++++++++++++++++++

These agencies use Green-Ampt infiltration data with FLO-2D.

   FCDMC, AZDOT, NVDOT, PCRFCD

Step 1: Run the Green Ampt Processor
+++++++++++++++++++++++++++++++++++++++++++++++++++

Open the Infiltration Global button and check Green-Ampt and SCS CN.
Click OK

|hydrow068|

Click Calculate Green Ampt button and set the radio buttons to SSURGO and OSM and use the Calculate buttons to get data.
Cancel the final process so the data QC is performed first.

|hydrow069|

Step 2: Review the LandUse data
+++++++++++++++++++++++++++++++++++++++++++++++++++

Open the attribute table of the LandUse layer.

Some polygons are categorized as Medium Density Residential with a 30 RTIMP.

Change these areas to Desert Landscape with 0 RTIMP.
Select the polygons with the polygon selector.

|hydrow070|

SCS curve number method
+++++++++++++++++++++++++++++++++++++++++++++++++++

Many agencies and clients use SCS curve number, but Pima County has the robust and documented methodology for the South Western US.

Step 1: Run the Curve Number Generator
+++++++++++++++++++++++++++++++++++++++++++++++++++

Load the **Curve number generator** from the **Processor Toolbox**.

Download the data only.
The final process is complete after the lookup table is modified.

|hydrow071|

Step 2: Review the CN lookup table
+++++++++++++++++++++++++++++++++++++++++++++++++++

The lookup table can be modified per Local standards.

The processing code can be modified to connect to local servers.

The plugin developer seems to be very responsive to requests for development.

|hydrow072|

.. |hydrow002| image:: ../img/hydrowkshp/hydrow002.jpg
   :width: 5.18403in
   :height: 3.38514in
.. |hydrow003| image:: ../img/hydrowkshp/hydrow003.jpg
   :width: 6.79653in
   :height: 2.14569in
.. |hydrow004| image:: ../img/hydrowkshp/hydrow004.jpg
   :width: 6.76389in
   :height: 2.47569in
.. |hydrow005| image:: ../img/hydrowkshp/hydrow005.jpg
   :width: 3.02083in
   :height: 1.59375in
.. |hydrow006| image:: ../img/hydrowkshp/hydrow006.jpg
   :width: 6.76389in
   :height: 4.06458in
.. |hydrow007| image:: ../img/hydrowkshp/hydrow007.jpg
   :width: 3.35278in
   :height: 1.59653in
.. |hydrow008| image:: ../img/hydrowkshp/hydrow008.jpg
   :width: 3.76597in
   :height: 2.89556in
.. |hydrow009| image:: ../img/hydrowkshp/hydrow009.jpg
   :width: 6.16042in
   :height: 3.13194in
.. |hydrow010| image:: ../img/hydrowkshp/hydrow010.jpg
   :width: 6.49986in
   :height: 2.19583in
.. |hydrow011| image:: ../img/hydrowkshp/hydrow011.jpg
   :width: 6.76333in
   :height: 5.13542in
.. |hydrow012| image:: ../img/hydrowkshp/hydrow012.jpg
   :width: 6.76389in
   :height: 5.13611in
.. |hydrow013| image:: ../img/hydrowkshp/hydrow013.jpg
   :width: 6.76333in
   :height: 5.13542in
.. |hydrow014| image:: ../img/hydrowkshp/hydrow014.jpg
   :width: 6.76319in
   :height: 5.13542in
.. |hydrow015| image:: ../img/hydrowkshp/hydrow015.jpg
   :width: 3.71667in
   :height: 3.425in
.. |hydrow016| image:: ../img/hydrowkshp/hydrow016.jpg
   :width: 6.76389in
   :height: 6.80625in
.. |hydrow017| image:: ../img/hydrowkshp/hydrow017.jpg
   :width: 4.99958in
   :height: 6.37778in
.. |hydrow018| image:: ../img/hydrowkshp/hydrow018.jpg
   :width: 4.99917in
   :height: 3.88333in
.. |hydrow019| image:: ../img/hydrowkshp/hydrow019.jpg
   :width: 5.99861in
   :height: 4.30194in
.. |hydrow020| image:: ../img/hydrowkshp/hydrow020.jpg
   :width: 5.34264in
   :height: 6.55069in
.. |hydrow021| image:: ../img/hydrowkshp/hydrow021.jpg
   :width: 5in
   :height: 5.03125in
.. |hydrow022| image:: ../img/hydrowkshp/hydrow022.jpg
   :width: 4.99917in
   :height: 4.16597in
.. |hydrow023| image:: ../img/hydrowkshp/hydrow023.jpg
   :width: 4.99931in
   :height: 4.12361in
.. |hydrow024| image:: ../img/hydrowkshp/hydrow024.jpg
   :width: 4.99958in
   :height: 3.67222in
.. |hydrow025| image:: ../img/hydrowkshp/hydrow025.jpg
   :width: 4.99931in
   :height: 4.32069in
.. |hydrow026| image:: ../img/hydrowkshp/hydrow026.png
   :width: 4.99972in
   :height: 3.6125in
.. |hydrow027| image:: ../img/hydrowkshp/hydrow027.png
   :width: 4.99944in
   :height: 2.50903in
.. |hydrow028| image:: ../img/hydrowkshp/hydrow028.jpg
   :width: 4.68597in
   :height: 2.13472in
.. |hydrow029| image:: ../img/hydrowkshp/hydrow029.jpg
   :width: 4.99986in
   :height: 3.24722in
.. |hydrow030| image:: ../img/hydrowkshp/hydrow030.jpg
   :width: 4.99986in
   :height: 3.3125in
.. |hydrow031| image:: ../img/hydrowkshp/hydrow031.jpg
   :width: 4.92639in
   :height: 4.25764in
.. |hydrow032| image:: ../img/hydrowkshp/hydrow032.png
   :width: 6.76389in
   :height: 3.89514in
.. |hydrow033| image:: ../img/hydrowkshp/hydrow033.jpg
   :width: 6.76389in
   :height: 3.62292in
.. |hydrow034| image:: ../img/hydrowkshp/hydrow034.jpg
   :width: 4.99986in
   :height: 2.69861in
.. |hydrow035| image:: ../img/hydrowkshp/hydrow035.jpg
   :width: 4.99986in
   :height: 3.13542in
.. |hydrow036| image:: ../img/hydrowkshp/hydrow036.jpg
   :width: 4.99931in
   :height: 2.35403in
.. |hydrow037| image:: ../img/hydrowkshp/hydrow037.png
   :width: 6.76389in
   :height: 3.44861in
.. |hydrow038| image:: ../img/hydrowkshp/hydrow038.png
   :width: 6.76389in
   :height: 3.45417in
.. |hydrow039| image:: ../img/hydrowkshp/hydrow039.jpg
   :width: 4.99931in
   :height: 3.13514in
.. |hydrow040| image:: ../img/hydrowkshp/hydrow040.jpg
   :width: 4.99944in
   :height: 2.5875in
.. |hydrow041| image:: ../img/hydrowkshp/hydrow041.jpg
   :width: 6.45347in
   :height: 3.45403in
.. |hydrow042| image:: ../img/hydrowkshp/hydrow042.jpg
   :width: 4.99958in
   :height: 2.36736in
.. |hydrow043| image:: ../img/hydrowkshp/hydrow043.jpg
   :width: 5in
   :height: 2.77778in
.. |hydrow044| image:: ../img/hydrowkshp/hydrow044.jpg
   :width: 4.99917in
   :height: 2.02431in
.. |hydrow045| image:: ../img/hydrowkshp/hydrow045.jpg
   :width: 5.33333in
   :height: 5.24167in
.. |hydrow046| image:: ../img/hydrowkshp/hydrow046.jpg
   :width: 4.99917in
   :height: 2.91736in
.. |hydrow047| image:: ../img/hydrowkshp/hydrow047.jpg
   :width: 4.99903in
   :height: 3.71389in
.. |hydrow048| image:: ../img/hydrowkshp/hydrow048.jpg
   :width: 6.38333in
   :height: 3.75in
.. |hydrow049| image:: ../img/hydrowkshp/hydrow049.jpg
   :width: 6.76389in
   :height: 2.87986in
.. |hydrow050| image:: ../img/hydrowkshp/hydrow050.jpg
   :width: 4.99806in
   :height: 1.53125in
.. |hydrow051| image:: ../img/hydrowkshp/hydrow051.jpg
   :width: 4.99806in
   :height: 1.53125in
.. |hydrow052| image:: ../img/hydrowkshp/hydrow052.jpg
   :width: 6.76389in
   :height: 3.91528in
.. |hydrow053| image:: ../img/hydrowkshp/hydrow053.jpg
   :width: 1.64028in
   :height: 3.99986in
.. |hydrow054| image:: ../img/hydrowkshp/hydrow054.jpg
   :width: 3.99167in
   :height: 4.04167in
.. |hydrow055| image:: ../img/hydrowkshp/hydrow055.jpg
   :width: 6.76389in
   :height: 2.52986in
.. |hydrow056| image:: ../img/hydrowkshp/hydrow056.jpg
   :width: 6.76278in
   :height: 3.26806in
.. |hydrow057| image:: ../img/hydrowkshp/hydrow057.jpg
   :width: 4.68333in
   :height: 2.48333in
.. |hydrow058| image:: ../img/hydrowkshp/hydrow058.jpg
   :width: 3.8in
   :height: 4.08333in
.. |hydrow059| image:: ../img/hydrowkshp/hydrow059.jpg
   :width: 4.99986in
   :height: 3.13542in
.. |hydrow060| image:: ../img/hydrowkshp/hydrow060.jpg
   :width: 4.99972in
   :height: 3.12153in
.. |hydrow061| image:: ../img/hydrowkshp/hydrow061.jpg
   :width: 5.19417in
   :height: 1.31667in
.. |hydrow062| image:: ../img/hydrowkshp/hydrow062.jpg
   :width: 4.23542in
   :height: 2.29861in
.. |hydrow063| image:: ../img/hydrowkshp/hydrow063.jpg
   :width: 4.99917in
   :height: 2.65in
.. |hydrow064| image:: ../img/hydrowkshp/hydrow064.jpg
   :width: 4.99986in
   :height: 1.45069in
.. |hydrow065| image:: ../img/hydrowkshp/hydrow065.jpg
   :width: 2.88875in
   :height: 2.22847in
.. |hydrow066| image:: ../img/hydrowkshp/hydrow066.jpg
   :width: 4.37431in
   :height: 1.93028in
.. |hydrow067| image:: ../img/hydrowkshp/hydrow067.jpg
   :width: 4.99944in
   :height: 4.59028in
.. |hydrow068| image:: ../img/hydrowkshp/hydrow068.jpg
   :width: 4.62403in
   :height: 2.93611in
.. |hydrow069| image:: ../img/hydrowkshp/hydrow069.png
   :width: 5.45625in
   :height: 3.49167in
.. |hydrow070| image:: ../img/hydrowkshp/hydrow070.jpg
   :width: 6.49167in
   :height: 4.13056in
.. |hydrow071| image:: ../img/hydrowkshp/hydrow071.jpg
   :width: 6.76389in
   :height: 5.12361in
.. |hydrow072| image:: ../img/hydrowkshp/hydrow072.jpg
   :width: 6.76389in
   :height: 3.59375in
