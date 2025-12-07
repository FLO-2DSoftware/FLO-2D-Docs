Install QGIS and the FLO-2D Plugin
============================================

QGIS is an open-source geographic information system software designed for spatial data analysis and visualization.
The FLO-2D Plugin uses QGIS tools to effectively prepare FLO-2D data,
providing an enhanced modeling experience within a user-friendly environment.

Step 1: QGIS Installation
----------------------------
Choose one of the following methods:

.. dropdown:: **Option A – QGIS Latest Long-Term Release (Recommended)**

   The following method uses the OSGeo4W Network Installer to install the current QGIS LTR version and
   adds Python modules such as ``h5py`` and ``netCDF4``.

   .. container:: h3

      1. Download the OSGeo4W Installer

   .. raw:: html

      <a href="https://qgis.org/download/" target="_blank" rel="noopener noreferrer">OSGeo4W Installer</a>

   Choose the **OSGeo4W Network Installer** for 64-bit Windows.

   .. container:: h3

      2. Launch the Installer

   Run ``osgeo4w-setup.exe`` and choose **Express Installation** from the main menu.

   .. image:: ../img/Instructions/qgisnetwork001.png
      :width: 600px
      :style: border:3px solid #000;

   .. container:: h3

      3. Select the download site

   Choose a download site from the list provided.

   .. image:: ../img/Instructions/qgisnetwork006.png
      :width: 600px
      :style: border:3px solid #000;

   .. container:: h3

      4. Select Packages to Install

   Enable the following items:

   * **QGIS** (optional)
   * **QGIS (LTR)**
   * **GDAL**
   * **GRASS GIS** (optional)

   .. image:: ../img/Instructions/qgisnetwork023.png
      :width: 600px
      :style: border:3px;

   .. container:: h3

      5. Accept the Dependencies

   Install the dependencies when prompted.

   .. image:: ../img/Instructions/qgisnetwork017.png
      :width: 600px
      :style: border:3px solid #000;

   .. container:: h3

      6. Accept the License Agreements

   Accept the license agreements to continue.

   .. image:: ../img/Instructions/qgisnetwork018.png
      :width: 600px
      :style: border:3px solid #000;

   The installation should start. This may take some time depending on your internet connection.

   .. image:: ../img/Instructions/qgisnetwork019.png
      :width: 600px
      :style: border:3px solid #000;

   Click the **Finish** button when the installation is complete.

   .. image:: ../img/Instructions/qgisnetwork020.png
      :width: 600px
      :style: border:3px solid #000;

   .. container:: h3

      7. Install Additional Python Modules

   Run the OSGeo4W Setup program again and select **Advanced Install**.

   Click Next until reaching the package selection screen.

   Filter the package list by typing **h5py** in the search box.  
   Click the *Skip* text to select the latest version for installation.

   .. image:: ../img/Instructions/qgisnetwork011.png
      :width: 600px
      :style: border:3px solid #000;

   Repeat the process for **netCDF4**.

   .. image:: ../img/Instructions/qgisnetwork013.png
      :width: 600px
      :style: border:3px solid #000;

   Accept any dependencies.

   .. image:: ../img/Instructions/qgisnetwork024.png
      :width: 600px
      :style: border:3px solid #000;

   Click Next and Finish to complete the installation.

   .. container:: h3

      8. Verify Installation

   Search for and select the following packages:

   * ``h5py``
   * ``netCDF4``

   Run the **OSGeo4W Shell** from the Start Menu.

   .. image:: ../img/Instructions/qgisnetwork026.png
      :width: 600px
      :style: border:3px solid #000;

   Run the following commands inside the OSGeo4W Shell:

   ::

      python -c "import h5py; print('h5py:', h5py.__version__)"
      python -c "import netCDF4; print('netCDF4:', netCDF4.__version__)"

   A version number indicates a successful installation.

   .. image:: ../img/Instructions/qgisnetwork025.png
      :width: 600px
      :style: border:3px solid #000;


.. dropdown:: **Option B - QGIS Stand Alone Older Versions**

   Follow these instructions to set up an older version of QGIS.  
   
   .. note:: The images reference QGIS version 3.28 but the steps are the same for any stand alone version of QGIS.

   1. Double click the QGIS installer.

   2. Finish installing with the default settings.

   .. image:: ../img/Instructions/image8.png
      :width: 600px
      :style: border:3px solid #000;

   3. Open QGIS.

   .. image:: ../img/Instructions/Worksh002.png
      :width: 600px
      :style: border:3px solid #000;

   4. Click **Settings → Options**.

   .. image:: ../img/Instructions/image13.png
      :width: 600px
      :style: border:3px solid #000;

   5. Click the CRS tab and set the options shown below.

   .. image:: ../img/Instructions/image14.png
      :width: 600px
      :style: border:3px solid #000;


Step 2: FLO-2D Plugin
----------------------

With QGIS installed it is time to add the FLO-2D plugin and a few other helpful plugins.

1. Navigate to the Plugin Manager.

.. image:: ../img/Instructions/image10.png
   :width: 600px
   :style: border:3px solid #000;

2. Install the FLO-2D Plugin from a ZIP file.

3. Plugin Location: ``C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\QGIS Plugins``

.. image:: ../img/Instructions/image12a.png
   :width: 600px
   :style: border:3px solid #000;


Step 3: Additional Plugins
----------------------------

1. These recommended plugins can be installed from the **All Plugins** menu:

   - FLO-2D Rasterizor  
   - FLO-2D MapCrafter  
   - Quick Map Services  
   - Profile Tool  
   - Curve Number Generator  

.. image:: ../img/Instructions/image11.png
   :width: 600px
   :style: border:3px solid #000;

2. Quick Map Services requires an additional step.

   Click the QMS icon → Settings → More Services → **Get Contributed Pack**.

.. image:: ../img/Instructions/image15.gif
   :width: 600px
   :style: border:3px solid #000;


This concludes the installation and setup.  
Tutorial data is located here:

``C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects\\QGIS Tutorials``

.. image:: ../img/Instructions/image9.png
   :width: 600px
   :style: border:3px solid #000;
