Module 1 - Workshop Setup 
==============================

This workshop uses QGIS v3.40 and the FLO-2D Gila Plugin v2.0.0.  :ref:`Install Instructions <setup_qgis_flo2d_plugin>`

**Required Data**

The required data can be downloaded here:

.. raw:: html

   <a href="https://flo-2d.sharefile.com/d-s47f576b807f94c17b85f7668fbd2c31e" target="_blank">Data Installer</a>
   <p></p>


Step 1: Install class data
-----------------------------------------

- Double click the  Workshop Installer.exe.
- Install using **default** settings.
- Close the installer when the Completed message is listed in the Install Window.

|hydrow002|

Step 2: Set up the quick access folder
-----------------------------------------

- Find the training folder.

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects

- Drag the Workshop Folder into the Quick Access Area.
- It can be removed after the class is over.

|hydrow003|

Step 3: Load QGIS
-----------------------------------------

- Open QGIS

|hydrow004|

- Open the plugin manager and load the Installed Tab.

|hydrow005|

- If you are missing any of these plugins please follow the :ref:`Install Instructions <setup_qgis_flo2d_plugin>`.

|hydrow006|

- Open the Settings>>Options menu.

|hydrow007|

- Find the CRS tab and select the **Use Project CRS** button.

|hydrow008|

- QGIS Layout Overview

|hydrow009|

- QGIS Toolbar Layout Overview

|hydrow010|

Module 1 - Connect Data 
-----------------------------------------------------

Use the following steps to connect to U.S. government or international data servers. If a local agency provides a server connection URL, 
QGIS can connect to it using the same workflow. Servers that require authentication can be configured through the QGIS connection settings.

Step 1: 3DEP elevation server connection
---------------------------------------------------

- Load the Data Manager by clicking the colorful icon below.
- Set the tab to WCS.
- Click New and enter a name and paste the URL.

URL: https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WCSServer

|hydrow011|

Step 2: Land cover NLCD server connection
---------------------------------------------------

- Load the Data Manager by clicking the colorful icon below.
- Set the tab to WCS.
- Click New and enter a name and paste the URL.

URL: https://dmsdata.cr.usgs.gov/geoserver/mrlc_Land-Cover-Native_conus_year_data/wcs

|hydrow012|

Step 3: Hydrography NHD server connection
---------------------------------------------------

- Load the Data Manager by clicking the colorful icon below.
- Set the tab to ArcGIS REST Server.
- Click New and enter a name and paste the URL.

URL: https://hydro.nationalmap.gov/arcgis/rest/services/NHDPlus_HR/MapServer

|hydrow013|

Step 4: FEMA Effective Server
---------------------------------------------------

- Load the Data Manager by clicking the colorful icon below.
- Set the tab to ArcGIS REST Server.
- Click New and enter a name and paste the URL.

URL: https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer

|hydrow014|

Step 5: Levee Database
---------------------------------------------------

- Load the Data Manager by clicking the colorful icon below.
- Set the tab to ArcGIS REST Server.
- Click New and enter a name and paste the URL.

URL: https://geospatial.sec.usace.army.mil/dls/rest/services/NLD/Public/FeatureServer

|hydrow013a|

.. Important:: Close and Reload QGIS to **save the User Profile**. If QGIS crashes before the profile is saved, the **setup** step will need to be repeated.

Step 6: Load FLO-2D Project
---------------------------------------------------

- Click the Open FLO-2D Project button.

|hydrow015|

- Navigate to the Workshop folder and open the Workshop Project 1.gpkg file.

|hydrow015a|

- The project should look like this:

|hydrow015b|

.. |hydrow002| image:: ../img/hydrowkshp/hydrow002.png

.. |hydrow003| image:: ../img/hydrowkshp/hydrow003.png

.. |hydrow004| image:: ../img/hydrowkshp/hydrow004.jpg

.. |hydrow005| image:: ../img/hydrowkshp/hydrow005.jpg

.. |hydrow006| image:: ../img/hydrowkshp/hydrow006.png

.. |hydrow007| image:: ../img/hydrowkshp/hydrow007.jpg

.. |hydrow008| image:: ../img/hydrowkshp/hydrow008.png

.. |hydrow009| image:: ../img/hydrowkshp/hydrow009.jpg

.. |hydrow010| image:: ../img/hydrowkshp/hydrow010.jpg

.. |hydrow011| image:: ../img/hydrowkshp/hydrow011.jpg

.. |hydrow012| image:: ../img/hydrowkshp/hydrow012.jpg

.. |hydrow013| image:: ../img/hydrowkshp/hydrow013.jpg

.. |hydrow013a| image:: ../img/hydrowkshp/hydrow013a.png

.. |hydrow014| image:: ../img/hydrowkshp/hydrow014.jpg

.. |hydrow015| image:: ../img/hydrowkshp/hydrow015.jpg

.. |hydrow015a| image:: ../img/hydrowkshp/hydrow015a.png

.. |hydrow015b| image:: ../img/hydrowkshp/hydrow015b.png