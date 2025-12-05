Install QGIS and the FLO-2D Plugin
============================================

QGIS is an open-source geographic information system software designed for spatial data analysis and visualization.
The FLO-2D Plugin uses QGIS tools to effectively prepare FLO-2D data,
providing an enhanced modeling experience within a user-friendly environment.

.. dropdown:: Option A: QGIS 3.34 LTR Installation (Local OSGeo4W Build)


   This section describes how to install QGIS 3.34 LTR using a local OSGeo4W
   package directory. This installation method allows fully offline setup and
   guarantees consistent software versions across all workstations.

   .. note::
      These instructions assume the OSGeo4W installer and package directory
      are available in a local folder, such as a USB drive or class materials
      directory.

   .. container:: h3 
      Step 1: Launch OSGeo4W Setup

   Run ``osgeo4w-setup.exe`` from the local installation folder.

   .. image:: /img/Instructions/qgislocal012.png
      :alt: OSGeo4W Setup - Choose Installation Type
      :width: 600px

   Select **Advanced Install** to enable installation from a local package directory.

   .. container:: h3
      Step 2: Choose Installation Method

   Choose an installation method.

   .. image:: /img/Instructions/qgislocal015.png
      :alt: OSGeo4W Setup - Choose Download Source
      :width: 600px

   Select **Install from Local Directory** and click **Next**.

   .. container:: h3
      Step 3: Choose the Local Package Directory

   Specify the folder containing the OSGeo4W packages.

   .. image:: /img/Instructions/qgislocal017.png
      :alt: OSGeo4W Setup - Select Local Package Directory
      :width: 600px

   Set **Local Package Directory** to the folder containing the downloaded
   packages (e.g., ``Local OSGeo4W Installer``).  
   The directory will be created if it does not already exist.

   .. container:: h3
      Step 4: Select Installation Directory

   Choose the root directory for OSGeo4W.

   .. image:: /img/Instructions/qgislocal016.png
      :alt: OSGeo4W Setup - Choose Installation Directory
      :width: 600px

   Recommended settings:

   - **Root Directory**: ``C:\OSGeo4W``
   - **Install For**: *Just Me* (unless admin access is available)
   - **Create icon on Desktop**: Enabled
   - **Add icon to Start Menu**: Enabled

   Click **Next** to continue.

   .. container:: h3
      Step 5: Proceed to Package Selection

   OSGeo4W will scan the local directory for available packages and continue
   to the package selection screen.

   .. image:: /img/Instructions/qgislocal014.png
      :alt: OSGeo4W Setup - Local Package Directory Confirmation
      :width: 600px

   Confirm the directory and click **Next**.

   .. container:: h3
      Step 6: Begin Installation

   Once package selection and dependencies are resolved, installation proceeds.

   .. image:: /img/Instructions/qgislocal013.png
      :alt: OSGeo4W Installation Complete
      :width: 600px

   A confirmation message indicates that installation is complete. Select
   **Finish** to close the installer.

   .. container:: h3
      Step 7: Select the Required Packages

   Use the package selection interface to install QGIS and supporting libraries.
   Ensure that **View** is set to ``Category`` and **Curr** is selected under
   the version options.

   .. container:: h4
      Step 7.1: Install HDF5

   Search for ``hdf5`` in the search bar.

   .. image:: /img/Instructions/qgislocal022.png
      :alt: Select HDF5 package
      :width: 600px

   Ensure that the ``hdf5`` runtime library is included.  
   OSGeo4W marks locally available packages as **Keep**, which is appropriate for
   an offline installation.

   .. container:: h4
      Step 7.2: Install QGIS 3.34 LTR

   Search for ``qgis``.

   .. image:: /img/Instructions/qgislocal018.png
      :alt: Select QGIS Desktop 3.34 LTR
      :width: 600px

   Select the following components:

   - ``qgis-ltr``: **QGIS Desktop (long term release)**
   - ``qgis-ltr-common``: Required shared libraries

   Ensure both items are set to **Keep**.

   .. container:: h4
      Step 7.3: Install h5py
   

   Search for ``h5py``.

   .. image:: /img/Instructions/qgislocal019.png
      :alt: Select h5py Python library
      :width: 600px

   Select:

   - ``python3-h5py``: Read/write capabilities for HDF5 files within Python

   .. container:: h4
      Step 7.4: Install GRASS GIS
   

   Search for ``grass``.

   .. image:: /img/Instructions/qgislocal020.png
      :alt: Select GRASS GIS package
      :width: 600px

   Select:

   - ``grass``: GRASS GIS 8.4, used by QGIS for advanced raster and vector tools

   .. container:: h4
      Step 7.5: Install PDAL
   
   Search for ``pdal``.

   .. image:: /img/Instructions/qgislocal021.png
      :alt: Select PDAL packages
      :width: 600px

   Select the following components:

   - ``pdal`` (executable)
   - ``pdal-devel`` (development headers)
   - ``pdal-libs`` (runtime)
   - ``python3-pdal`` (Python bindings)
   - ``python3-pdal-plugins`` (plugin set)

   Click **Next** to continue to dependency resolution.

   .. container:: h3
      Step 8: Review Dependency Selections
   

   The OSGeo4W installer will automatically determine any linked libraries
   required for the selected packages. Since installation is performed from a
   local directory, only packages already downloaded will be used.

   Confirm the selections and continue.

   .. container:: h3
      Step 9: Begin Installation
   
   The installer processes all selected components and places them in the chosen
   OSGeo4W root directory.

   A progress window appears while packages are extracted and configured.

   .. container:: h3
      Step 10: Complete Installation
   
   After installation finishes, the final screen confirms successful completion.

   .. image:: /img/Instructions/qgislocal013.png
      :alt: OSGeo4W Installation Complete
      :width: 600px

   Click **Finish** to close the installer.

   .. container:: h3
      Step 11: Launch QGIS 3.34 LTR

   Use the Start Menu or desktop icons created during installation. The following
   applications become available:

   - **QGIS Desktop 3.34 LTR**
   - **OSGeo4W Shell**
   - **GRASS GIS 8.4**
   - Additional tools installed through the OSGeo4W environment

   
.. dropdown:: Option B: QGIS Stand Alone Installation

   Follow these instructions to set up a simpler version of QGIS.  The images say 3.28 but the steps are the same for 3.34 LTR.

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

QGIS Server Installer Method
----------------------------

If you need to import or export hdf5 files, please use this method for installing QGIS.

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/I-Nk2kd2Ukw" frameborder="0" allowfullscreen></iframe>