Module 5 - Process Rainfall Data
======================================

Step 1: Uniform rain on grid
---------------------------------------------------

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
---------------------------------------------------

Find the Gage data in the Rain Group.

|hydrow056|

Check the Spatial Variation and click the AR button.

Fill the form and click OK.

If the Raster is missing Check the Rain Group ON.

|hydrow057|

Step 3: Realtime Rainfall (ERA Copernicus)
---------------------------------------------------

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
---------------------------------------------------

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
