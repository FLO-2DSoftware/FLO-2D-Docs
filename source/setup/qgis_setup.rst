Install QGIS and the FLO-2D Plugin
============================================

QGIS is an open-source geographic information system software designed for spatial data analysis and visualization.
The FLO-2D Plugin uses QGIS tools to effectively prepare FLO-2D data,
providing an enhanced modeling experience within a user-friendly environment.

Step 1: QGIS Installation
----------------------------
There are options for installing QGIS. Choose one of the following methods:

.. dropdown:: **Option A – QGIS Latest Long-Term Release (Network Installation)**
   :open:

   The following method uses the OSGeo4W Network Installer to install the current QGIS LTR version and prepares the environment for adding 
   Python modules such as ``h5py`` and ``netCDF4``.

   Download the OSGeo4W installer from:

   .. raw:: html

      <a href="https://trac.osgeo.org/osgeo4w/" target="_blank" rel="noopener noreferrer">OSGeo4W Installer</a>


   This option installs the latest QGIS Long-Term Release (LTR) using the OSGeo4W
   Network Installer. This method downloads current packages directly from OSGeo4W
   servers and ensures installation of the most current LTR version available.

   .. container:: h3

      1. Launch the OSGeo4W Network Installer

   Run ``osgeo4w-setup.exe`` and choose **Express Installation** from the main menu.

      .. container:: h3

      2. Select the download site.

   Choose a download site from the list provided. Any site can be used.
   
   .. container:: h3

      3. Select Packages to Install

   Enable the following items:

   * **QGIS** (optional)
   * **QGIS (LTR)**
   * **GDAL**
   * **GRASS GIS** (optional)

      .. container:: h3

      4. Accept the Dependencies
   
   Complete the installation.  
   The Python interpreter used by QGIS is installed under:

   .. container:: h3

      5. Install Additional Python Modules
   
   Run the OSGeo4W Setup program again and select **Advanced Install**.

   Click next until you reach the package selection screen.

   Search for and select the following packages:
   * h5py 
   * netCDF4

   Complete the installation including any Dependencies.

   .. container:: h3

      6. Verify Installation

   Run the following commands inside the OSGeo4W Shell:

   ::

      python -c "import h5py; print('h5py:', h5py.__version__)"
      python -c "import netCDF4; print('netCDF4:', netCDF4.__version__)"

   A version number indicates a successful installation.

   If an error is returned, OSGeo4W may not provide wheels for your Python version.

.. dropdown:: **Option B: QGIS Stand Alone Installation Older Versions**

   Follow these instructions to set up a older version of QGIS.  
   
   .. note:: The images reference QGIS verison 3.28 but the steps are the same for any stand alone version of QGIS.

   1. Double click the QGIS-OSGeo4W-3.28.11-1.msi file.

   2. Finish installing with the default settings.

   .. image:: ../img/Instructions/image8.png


   3. Open QGIS.

   .. image:: ../img/Instructions/Worksh002.png


   4. Click Settings/Options

   .. image:: ../img/Instructions/image13.png


   5. Click the CRS tab and set the options as shown below.  Use CRS from first layer added.  Use Project CRS.  Click OK to
      close the window.

   .. image:: ../img/Instructions/image14.png


Step 2: FLO-2D Plugin
----------------------
With QGIS installed it is time to add the FLO-2D plugin and a few other handy plugins.

1. Navigate to the plugin manager.

.. image:: ../img/Instructions/image10.png

2. Install the FLO-2D Plugin from a zip file.

3. Plugin Location C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\QGIS Plugins

.. image:: ../img/Instructions/image12a.png


Step 3: Additional Plugins
----------------------------

1. These are also some recommended plugins.  Install them using the All Menu.

- FLO-2D Rasterizor
- FLO-2D MapCrafter
- Quick Map Services
- Profile Tool
- Curve Number Generator

.. image:: ../img/Instructions/image11.png


2. Quick Map Services requires one more step.  Click Quick Map Services icon and click Settings.
   On the settings window, go to More Services and click Get Contributed pack.  On the Visibility window, uncheck the
   unwanted maps.  Watch this Gif to see the process.

.. image:: ../img/Instructions/image15.gif


This concludes the installation and setup.  The tutorial data is here:

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects\\QGIS Tutorials

.. image:: ../img/Instructions/image9.png

Step 4: Installing a Missing Python Module
------------------------------------------

Some QGIS installations may not include certain Python modules that FLO-2D
tools rely on, such as ``matplotlib``. If a script fails to run due to a
missing module, it can be installed using the OSGeo4W Shell.

Follow these steps:

1. Open the **OSGeo4W Shell** created during the QGIS installation.

2. Install the missing module using ``pip``.  
   For example, to install ``matplotlib``:

   .. code-block:: bat

      pip install matplotlib

3. Close and restart QGIS to activate the new module.

If additional modules are missing (such as ``numpy`` or ``pillow``),
install them using the same method.

