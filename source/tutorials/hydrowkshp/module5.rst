Module 5 - Process Rainfall Data
======================================

.. warning:: The rainfall processing methods shown here are practical grid-based workflows. 
    Depending on project requirements or regulatory standards, alternative scientifically 
    validated approaches may be necessary.

Step 1: Uniform rain on grid
---------------------------------------------------

Real Storm Molina Canyon 9.09 inches in 5 days.
July 27, 2006, to July 31 2006.

.. raw:: html

   <a href="https://alertmap.rfcd.pima.gov/gmap/gmap.html"
      target="_blank"
      rel="noopener noreferrer">
      Data Source
   </a>

|hydrow052|

- Open the **Molina Canyon Rain Table.txt** file and copy the rain table.

|hydrow053|

- Find the rain editor in QGIS and ensure 9.09 inches are used in the uniform rainfall total.
- Add a new Time Series table and name it Molina 5 Day 2.

- If necessary, reselect the Molina 5 Day 2 pattern, as the plot may not update automatically.

|hydrow054|

- Select the first cell and Paste the Rainfall data into the table editor.
- If necessary, click auto range.

|hydrow055|

Step 2: Depth point reduction
---------------------------------------------------

- Find the Gage data in the Rain Group.

|hydrow056|

- Check the Spatial Variation and click the AR button.
- Fill the form and click OK.
- If the Raster is missing Check the Rain Group ON.

|hydrow057|

Step 3: Realtime Rainfall (ERA Copernicus)
---------------------------------------------------

.. note:: This step replaces the Uniform rainfall data with realtime data for the same storm.
    Future versions of this module will include processing NEXRAD Data.  

- Check the Realtime Rainfall box and click the Add Raster button.

|hydrow058|

- Load the July storm NetCDF file that contains the ERA Rainfall data from the Copernicus Reflectivity.

|hydrow059|

- The interpolator will process the realtime rainfall.
- Click the FLO-2D Info button on the FLO-2D tool bar.
- Zoom into the rainfall area that has 9 inches of rainfall.
- Click a grid element to see a sample of the Copernicus data.
- This is something like NEXRAD reflectivity but for the whole world.
- It can be easily downloaded and gage calibrated to a storm event with gages.

|hydrow060|

Step 4: Review the Copernicus Downloader
---------------------------------------------------

- Review these tasks instead of performing them.

.. raw:: html

   <a href="https://cds.climate.copernicus.eu/datasets/reanalysis-era5-land?tab=download " target="_blank" rel="noopener noreferrer">
       Open Link
   </a>

- An account is required to download this Open-Source data.
- Find the precipitation group.

|hydrow061|

- Select the storm year

|hydrow062|

- Select the month and days of the storm

|hydrow063|

- Select all times

|hydrow064|

- Set up the subregion

|hydrow065|

- Set the data and download format.

|hydrow066|

- Log-in to a free account to accept the terms and process the request.

|hydrow067|





.. |hydrow052| image:: ../img/hydrowkshp/hydrow052.jpg

.. |hydrow053| image:: ../img/hydrowkshp/hydrow053.jpg

.. |hydrow054| image:: ../img/hydrowkshp/hydrow054.jpg

.. |hydrow055| image:: ../img/hydrowkshp/hydrow055.jpg

.. |hydrow056| image:: ../img/hydrowkshp/hydrow056.jpg

.. |hydrow057| image:: ../img/hydrowkshp/hydrow057.jpg

.. |hydrow058| image:: ../img/hydrowkshp/hydrow058.jpg

.. |hydrow059| image:: ../img/hydrowkshp/hydrow059.jpg

.. |hydrow060| image:: ../img/hydrowkshp/hydrow060.jpg

.. |hydrow061| image:: ../img/hydrowkshp/hydrow061.jpg

.. |hydrow062| image:: ../img/hydrowkshp/hydrow062.jpg

.. |hydrow063| image:: ../img/hydrowkshp/hydrow063.jpg

.. |hydrow064| image:: ../img/hydrowkshp/hydrow064.jpg

.. |hydrow065| image:: ../img/hydrowkshp/hydrow065.jpg

.. |hydrow066| image:: ../img/hydrowkshp/hydrow066.jpg

.. |hydrow067| image:: ../img/hydrowkshp/hydrow067.jpg
