.. vim: syntax=rst

**Introduction**
================

   The *FLO-2D* Grid Developer System (*GDS*) is a GIS integrated software tool used to facilitate the creation of all required data to run the *FLO-2D*
   model.
   GDS simplifies construction of the finite difference grid system and allows graphical editing of its attributes and components.
   The *GDS* will overlay the grid system on a digital terrain map or a Digital Terrain Model (DTM) set of points and will interpolate and assign
   elevations to the grid elements.
   It will establish geographical boundaries, import background images and photos, and it will automatically generate the data files required to run the
   model.

   *GDS* can also run the *FLO-2D* model once the data files have been created.
   One of primary functions of the *GDS* is to graphically edit grid elements attributes such as streets, flow obstructions, levees, rainfall,
   evaporation, infiltration, channels, hydraulic structures, sediment transport and mud flow parameters, detention basins, and n-values interactively
   using mouse point and click events.
   The data is validated to minimize common input errors.
   For GIS integration GDS makes extensive use of ESRI MapObjects© Version 2.4 GIS software controls.

1.1 GDS Functionality
---------------------

The *GDS* system can perform the following functions: **Interactive Data Entry**

    - Interactive graphical editing of channels, streets, multiple channels, levees and buildings and other grid element attributes.
    - Input detention basins parameters.
    - Assign attributes to group of user selected grid elements
    - Assign reservoir or pounded water elevation for an initial condition on a portion of the grid system.
    - Select Channel Confluences (channel elements sharing discharge).
      Including tributary elements that can be contiguous to either a left or right bank main channel element.
    - Assign spatially and temporally variable rainfall data.
    - Edit levee attributes using the Levee Express Editor.

**Import Data**

    - Import HEC-1 hydrographs.
    - Import DTM points in ASCII format.
    - Import Shape files.

**Data Processing**

    - Automatic generation of finite difference grid and selection of computation area from user defined polygons.
    - Compute spatially variable Green-Ampt infiltration parameters using soil and land use shape files.
    - Compute spatially variable Manning’s n-values using shape files.
    - Convert *HEC-RAS* cross section data to *FLO-2D* channel cross section data format.
    - Compute lengths for channel segments.
    - Create the files to run a *FLO-2D* simulation

.. raw:: html

    <pre>
        CONT.DAT        HYSTRUC.DAT
        TOLER.DAT       STREET.DAT
        INFLOW.DAT      ARF.DAT
        OUTFLOW.DAT     MULT.DAT
        RAIN.DAT        SED.DAT
        INFIL.DAT       LEVEE.DAT
        EVAPOR.DAT      FPXSEC.DAT
        CHAN.DAT        BREACH.DAT
        CHANBANK.DAT    FPLAIN.DAT
        XSEC.DAT        CADPTS.DAT.
        TOPO.DAT        M.DAT
        SWMMFLO.DAT     SUPPLEMENT.DAT
    <\pre>

**Data Display and Visualization**

- Display components.

- Show channel extension directions.

- Display interpolated elevation map.

- Display n-Manning’s map.

- Display street and levee profiles.

- Display grid element numbers, elevations and Manning’s n coefficients on the grid system.

- Zoom and pan.

**GIS integration**

- Import ESRI shape file format data such as land use, soil types, Manning roughness coefficients and FP Limiting Froude numbers.

- Import ESRI ArcInfo ASCII grid files containing terrain elevations and NOAA rainfall data.

- Import multiple geo-referenced aerial photos in various graphic formats such as TIFF, BMP, JPG, MrSID and others as background the grid system.

- Customize multiple layer display and layer properties.

1.2 New Tools and Enhancements
------------------------------

**Watershed Delineation**

- Calculate watershed courses.

- Find the watershed for a given cell.

- Drainage basin smoothing.

- Find lowest cell.

**Culvert Equations**

- Define culvert equations.

**Channels**

- Define channel confluences,

**Storm Drain Interface**

- Interface FLO-2D with Storm Drain at runtime.

- Define catch basins in GDS.

**Interpolation**

- Interpolate spatially variable limiting Froude numbers from shape files.

**Visualization**

- Polyline data drawn and recorded when channels, streets or levees are created.

- STORM DRAIN interface elements.

- Cross section numbers plotted.

- Lowest cells in the grid system plotted.

- Cells without cross sections plotted.

- Reservoir water elevations plotted.

- Grid element curve numbers displayed as text.

- Supplement.dat file restores images, shape files and polylines to project when opened.

..

   There are a number of *GDS* tutorials with examples to help you learn the various commands, features and tools.
   These tutorials are available on the *FLO-2D* installation.
   There are also example projects provided to work through with the tutorials.

1.3 Data Requirements
---------------------

   *GDS* data are introduced through Windows dialog boxes and are stored in files for later retrieval.
   User input data is validated to avoid out-of-range values.
   Default or recommended values are frequently displayed when the dialog boxes open.
   The *GDS* may require or use the following data:

- Terrain elevation data represented as random topographic points (DTM);

- Terrain elevation data in ASCII grid files;

- Study region limits (coordinates);

- Manning’s roughness (n-value) shape files;

- Soil shape files and tables;

- Land use shape files and tables;

- Image files in any of the following format: BMP, JPG, ArcInfo INFO Grid, GeoTIFF TIFF with a Geo header, Image Catalogs, JPEG, MrSID, TIFF, JPEG, BMP;

- Rainfall gage data in ASCII grid files;

- Flood inflow hydrographs.

**IMPORTANT NOTE:** *For the GDS system to function properly, the MS-Windows environment decimal symbol must be set to decimal point “.” And the digit
grouping symbol to comma”,”.
Set*

   *these options in the Control Panel/Regional and Language Options/Regional Options/Formats/Additional settings/Numbers// dialog box:*

   |GDS002|

**Mouse Button Commands**
~~~~~~~~~~~~~~~~~~~~~~~~~

**2.1 Left Button actions (one-click)**

   Zoom-in on the working region by selecting a rectangular area for a zoom view.
   Click the left mouse button to position the cursor on one the vertices of the desired area and drag the mouse to the opposite vertex.
   The rectangle appears to outline the selected zoom area.

   |GDS003|

   When the button is released, the selected rectangular area is magnified to the full screen.

|GDS004|

   Clicking on a street or channel segment will display a submenu that allows editing, modifying or deleting the segment.

|GDS005|

**2.2 Left Button actions (double-click)**

   After the grid system has been created and the grid element elevations assigned, double-click any grid element to display the following dialog box:

   |GDS006|

   This dialog box is used to edit elevation, n-value, limiting Froude number, and tolerance for any grid element.
   There are buttons to edit the grid element attributes such as levees, infiltration, streets, etc.

**2.3 Right Button actions**

   After the grid system has been created and the grid element elevations assigned, you can right-click a grid element to display the following short cut
   menu:

   |GDS007|

   Clicking In/Out Condition for Element … and the inflow/outflow dialog box is displayed.
   The input description for the FLO-2D inflow or outflow data is explained in chapter 5.

   |GDS008|

Click Create Reservoir Water Elevation for Element …

   |GDS009|

   This dialog box allows the user to define a reservoir.
   The reservoir is defined by clicking an element within the banks of the reservoir and setting a water surface elevation.
   At runtime, the FLO.EXE will find each element that is lower than the water surface elevation and fill it to that specified elevation.

**Toolbar and Menus**
~~~~~~~~~~~~~~~~~~~~~

This section describes the *GDS* commands in the information toolbar and main Menu.

**3.1 Toolbar**

|GDS010|

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - **ToolbarIcon**
     - **Function**

   * - |GDS011|
     - Start new project (define region)

   * - |GDS012|
     - Open existing FLO-2D project

   * - |GDS013|
     - Save FLO-2D data files

   * - |GDS014|
     - View extent of modeling region (100% view)

   * - |GDS015|
     - Zoom out to previous view

   * - |GDS016|
     - Pan view

   * - |GDS017|
     - Select

   * - |GDS018|
     - Insert elevation point

   * - |GDS019|
     - Select grid element by grid element

   * - |GDS020|
     - Select grid elements defined by polygon

   * - |GDS021|
     - Unselect all grid elements

   * - |GDS022|
     - Levee express editor

   * - |GDS023|
     - Toggle component view


**3.2 File Menu Commands:**

3.2.1 Define Working Region (File Menu)

   This command creates a new project.
   The user is prompted for the coordinates that define the project working region.

   **IMPORTANT NOTE:** *Only one project can open at a time in a single GDS execution.
   If there is a project open when this command is selected, the GDS will prompt you to save the current project.
   It is OK to open more than one GDS at a time.*

   The following table explains the required variables:

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - **OPTION**
     - **DESCRIPTION**

   * - X (Upper RightCorner)
     - The X coordinate of the upper right hand corner that defines the working region.

   * - Y (Upper RightCorner)
     - The Y coordinate of the upper right hand corner that defines the working region.

   * - X (Lower LeftCorner)
     - The X coordinate of the lower left hand corner that defines the working region.

   * - Y (Lower LeftCorner)
     - The Y coordinate of the lower left hand corner that defines the working region.


3.2.2 New Project/from DTM Elevation Points (File Menu)

|GDS024|

   A new project is created by importing the DTM elevation points from an existing file.
   To import the DTM (\*.PTS) file click this command in the *File* menu and chose the correct filename in your project subdirectory.
   The working region is automatically scaled from the minimum and maximum point coordinates.

3.2.3 New Project/from Existing ArcInfo ASCII Grid File...
(File Menu)

|GDS025|

   Using this command, a new project is created by importing the terrain elevation points from an existing ArcInfo ASCII grid file.
   The format of these files is as follows:

   ncols /\* Number of columns in the grid \*/ nrows /\* Number of rows in the grid \*/ xllcorner x /\* Lower left x coordinate of grid \*/ yllcorner y
   /\* Lower left x coordinate of grid \*/ cellsize size /\* Grid cell size \*/

   NODATRA_value NODATA /\* value of an empty grid cell \*/ z11 z12 z13 ...
   z1ncols /\* values of row 1 \*/ z21 z22 z23 ...
   z2ncols /\* values of row 2 \*/

   … …

   znrows1 znrows2 znrows3 ...
   znrowsncols /\* values of last row*/

   Rows are read from north to south.
   For example:

   ncols 388 nrows 461 xllcorner 674070.85270015 yllcorner 1000118.1562353

   cellsize 100

   NODATA_value -9999

   2477.259 2480.868 2486.877 2486.877 2487.308 2490.641 2493.438 2493.438 2493.438..
   .

   The project area is automatically scaled from the minimum and maximum point coordinates.
   To import the ArcInfo ASCII Grid File (\*.ASC) file click this command in the *File* menu and choose the correct filename in your project
   subdirectory.

3.2.4 New Project/from Existing Shapefile… (File Menu)

|GDS026|

   A new project can be created by importing an ESRI *PointZ* Shape file.
   The working region is automatically scaled from coordinate data in the shape file.

   **IMPORTANT NOTE:** *GDS is only able to extract data from PointZ shape files, not from polygon or line shape files.
   Polygon and Polyline shape files can be converted into PointZ shape files.*

3.2.5 New Project/from FLO-2D Project … (File Menu)

   |GDS027|

   A new project grid system can be created by importing an existing *FLO-2D* project.
   The working region and the *FLO-2D* grid are automatically scaled from the minimum and maximum coordinate points.
   To use this option, click this command in the *File* menu and chose the FPLAIN.DAT file in your project subdirectory.
   The CONT.DAT data file must exist in the subdirectory.
   An existing project may have various components that have already been developed such as channels, streets, levees, etc.
   The components that you want to import can be identified in the FLO-2D Components dialog box.

   |GDS028|

   Only existing components will be available, otherwise the corresponding check boxes will be grayed out.
   Existing component data (such as reduction factors or levees) can be graphically edited by simply clicking on the grid element with the left mouse
   button.
   A dialog box will appear so that you can select the component for editing.
   This editing procedure is different from the procedure creating new components such as streets or channels.

If the user unchecks the component or unchecks “View Components”, the component will not be loaded and cannot be edited or saved.
The save button will overwrite the unloaded component data file.

3.2.6 New Project/from Existing CAD File (File Menu)

|GDS029|

   This option provides a way to start a *GDS* project by importing a DXF or DWG CAD file.
   The working region and *FLO-2D* grid system are automatically scaled from the existing CAD file extents.

3.2.7 New Project/from Existing HEC-RAS .PRJ File (File Menu)

Use this option to import it to start a *FLO-2D* project when you have a Geo-referenced *HEC-RAS* project file (\*.prj) that includes channel reaches.
The working region and *FLO-2D* grid system are automatically scaled from the existing HEC\ *-RAS* project file extents.

|GDS030|

3.2.8 New Project/from Existing Levee File (File Menu)

|GDS031|

   The levee file consists of sequences of polylines points defined by their coordinates and elevation, separated by commas or spaces (with empty
   newlines between the polylines):

   364440 1186051 4765

   364817 1185937 4750

   365157 1185930 4742

   363190 1186215 4800

   363320 1185891 4789

   363710 1185875 4769

   367261.53 1185897.38 4705.00

   367274.59 1185885.00 4705.00

   367289.69 1185872.63 4705.00

   367304.13 1185866.50 4705.00

   367322.69 1185866.50 4705.00

   367339.16 1185865.75 4705.00

3.2.9 Open Existing FLO-2D Project … (File Menu)

   Use this command to load the existing FLO-2D project from the data files.
   The

   FPLAIN.DAT file is a reference file that the GDS and Mapper++ use to locate the .DAT and .OUT files.

   3.2.10 Save FLO-2D Files (File Menu)

|GDS032|

This command is used to save the *FLO-2D* data files for use with the *FLO-2D* model.

   **IMPORTANT NOTE:** *In order to save a project using this command, the Control Variables must be set.*

3.2.11 Run FLO-2D… (File Menu)

   |GDS033|

   Use this command to run the *FLO-2D* model from the *GDS*.
   Click Run *FLO-2D,* the following dialog box will be displayed:

|GDS034|

   In this dialog box, the control parameters can be selected for a *FLO-2D* simulation.
   To start a basic overland flood simulation, the user must input the project simulation time (SIMUL) and the output interval (TOUT) in the Time Control
   and Plot Variables frame.
   Also check *Detailed Graphics* to display flood graphics during the model run.
   To start the model, click the *Run FLO2D* button.
   To save the *FLO-2D* input files (.DAT files) without running the model click the *Save FLO-2D input files* button.

   Check the *Animate* Flow *within GDS* to plot animated flow depth while the model is running.
   This feature displays the animated flooding over background aerial photos.
   The *FLO-2D* simulation may be slowed down due to the graphic display of the aerial photo.
   If only simple animation is required without background images, unselect the check button (as shown above) and the model simulation will run faster.

3.2.12 Run Mapper (File Menu)

|GDS035|

   This command initiates the *Mapper PRO or Mapper++* post-processor programs to create flood post production mapping.
   Detailed instructions of the *Mapper* programs are presented in the separate manuals.

3.2.13 Run PROFILES (File Menu)

   Use this command to run the PROFILES program, used to interpolate channel cross sections and slopes.

|GDS036|

   3.2.14 Run RAIN (File Menu)

   Use this command to run the RAIN program.

|GDS037|

3.2.15 Create FPLAIN.DAT and CADPTS.DAT Files (File Menu)

|GDS038|

   This is an optional command to create only FPLAIN.DAT and CADPTS.DAT files required by *FLO-2D*.
   These two topographic files are then created separately without the other required *FLO-2D* files.
   This is procedure is appropriate when creating a grid system in segments for later compilation.

3.2.16 Create LEVEECRESTS.DAT (File Menu)

|GDS039|

   This file is used to verify levee length data.
   The command exports levee and WFR stations and calculates a length to the station for the levee segment along a polyline.

   An example of LEVEECRESTS.DAT:

Node Station Z X Y

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - 627 00.00
     - 69.638 2226721.750 13565007.000

   * - 582 35.59
     - 69.957 2226849.000 13565100.000

   * - 582 66.71
     - 70.142 2226976.250 13565153.000

   * - 582 97.76
     - 70.194 2227029.000 13565280.000


..

   First the levee polyline is imported ("File.
   Import Levees...") and the levees are created.
   Then the user selects the command: "File.
   Create LEVEECRESTS.DAT" and the station calculation compares the length of the polyline (Poly_Length) and the total length of the levees
   (Levees_Length) to determine a WRF value to match the lengths:

   WRF_value = 1 - Min(1, Poly_Length(i) / Levees_Length(i))

   The stations (second column in LEVEECRESTS.DAT are then calculated from the distance from one levee center to the next levee center by multiplying it
   by the WRF_value.

3.2.17 Create Grid Shapefile (File Menu)

|GDS040|

   This option will create a shape file of the computational domain.
   It will only include the numbered grid elements.
   The shapefile is saved in these three files.
   mgrid.shp, mgrid.shx and mgrid.dbf.

3.2.18 Import Image/Individual Image (File Menu)

   |GDS041|

   Use this command to import individual images such as aerial photos.
   Images are selected one by one or multiple images at a time Shift-clicking or Crtl-clicking the image files.

|GDS042|

   Import images that have been created in following formats:

.. list-table::
   :widths: 33 33 33
   :header-rows: 0


   * - **File Type**
     - **Description**
     - **Common Extensions**

   * - ARC/INFO Grid
     - ArcInfo GRID files
     - \*asc, \*.prj

   * - ADRG
     - Digitized Raster Graphic
     - \*.img, \*.ovr,\*.arc

   * - ASRP/USRP
     - DIGEST ASRP, A NATO Military format
     - \*.img, \*.ovr, \*.

   * - BIL
     - Band interleaved by line multiband images
     - \*.bil

   * - BIP
     - Band interleaved by pixel multiband images
     - \*.bip

   * - BMP
     - Windows bitmap
     - \*.bmp, \*.dib

   * - BSQ
     - Band sequential multiband images
     - \*.bsq

   * - CADRG
     - Compressed Arc Digitized Raster Graphics
     - \*.\*

   * - CIB
     - Controlled Image Base
     - \*.\*

   * - CRPERDAS/IMAGINE
     - Compressed Raster Product (Military GeoTIFF)
     - \*.tif

       \*.gis, \*.lan

   * - GeoTIFF
     - TIFF with a Geo header
     - \*.tif, \*.tff, \*.tiff

   * - GIF
     - Graphics Interchange Format
     - \*.gif

   * - ImageCatalogs
     - Image catalog (collection of images)
     - \*.\*

   * - IMPELL RLC
     - Run-length compressed files
     - \*.rlc

   * - JPEG
     - JPEG
     - \*.jpg, \*.jpeg

   * - MrSID
     - Multi-Resolution Seamless Image Database
     - \*.sid

   * - NITF
     - National Imagery Transfer Format
     - \*.ntf

   * - Sun rasterfile
     -
     - \*.rs, \*.ras; \*.sun

   * - SVF
     - Single Variable File
     - \*.svf

   * - TIFF
     - Tagged Image File Format
     - \*.tif, \*.tff, \*.tiff


..

   To correctly place the image or photo in a geo-referenced frame, it must be accompanied by a world file that contains geo-reference data.
   This world file has an extension depending on the image and file type and according to the table below.
   For example, an image with a file name *myimage.bmp*, must have a world file associated with it named *myimage.bmpw* or *myimage.bpw*

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - **File Extension**
     - **World File Extension**

   * - bmp
     - bmpw or bpw

   * - jpg; jpeg
     - jpgw or jgw

   * - tif; tff; tiff
     - tfw

   * - gis
     - gsw

   * - lan
     - lnw

   * - bil
     - blw

   * - bip
     - bpw

   * - bsq
     - bqw

   * - sid
     - sdw

   * - sun
     - snw

   * - rs; ras
     - rsw

   * - rlc
     - rcw


..

   The world file has the following general format:

   Line 1: This line has the dimension of a pixel in map units in the x-direction.
   Lines 2, 3: These lines are the rotation terms (Not used in this release).

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - Line 4:
     - This value is always negative because the image space is top-down whereas the map space is bottom-up.

   * - Line 5:
     - This line has the translation term; x-Origin (x-coordinate of the center of the upper left pixel).

   * - Line 6:
     - This line has the translation term; y-Origin (y-coordinate of the center of the upper left pixel).


..

   An example world file format is:

   20

   0

   0

   -20

   637510

   1032490

   3.2.19 Import Image/Group of Images (File Menu)

   |GDS043|

This command allows importing of several image files contained in a given subdirectory and part of an image catalog.
First draw a polygon on the working region and then select an image catalog file.

|GDS044|

   The catalog file may be in DBASE or ASCII format and has the following format:

.. list-table::
   :widths: 20 20 20 20 20
   :header-rows: 0


   * - Image
     - Xmin
     - Ymin
     - Xmax
     - Ymax

   * - C:\\Projects\\MaricopaCounty\\Data\\6401030-5.TIF
     - 640000
     - 1000000
     - 670000
     - 140000

          0

   * - C:\\ Projects\\MaricopaCounty\\Data\\6401035-5.TIF
     - 660000
     - 1300000
     - 770000
     - 150000

          0

   * - \\\\Agua\\IMF\\Publico IMF\\6401055-5.TIF
     - 630000
     - 1300000
     - 750000
     - 151000

          0


..

   The first column is the file name including its path and the following four columns are the image coordinate limits.
   The *GDS* will find all images from the catalog that are contained within or intersected by the user defined polygon and will retrieve the
   corresponding images.

3.2.20 Import Elevation Points/ DTM Points… (File Menu)

   |GDS045|

   This command imports DTM elevation points from an existing file.
   Several data files can be imported and the new points are appended to the existing data points.
   The user can also mix or combine DTM points with points from ArcInfo ASCII grid files.

3.2.21 Individual ArcInfo ASCII Grid File (File Menu)

|GDS046|

   Use this command to import ArcInfo ASCII grid files.
   The user may import several grid files.
   Any new points are added to the existing data.
   You may also mix or combine ArcInfo ASCII data with DTM points.

3.2.22 ArcInfo ASCII Grid File Catalog (File Menu)

|GDS047|

   With this command you can import several ArcInfo ASCII grid files stored in any subdirectory.
   First draw a polygon on the working region, then select a catalog file.
   The catalog file may be in DBASE or ASCII format and has the following format:

.. list-table::
   :widths: 20 20 20 20 20
   :header-rows: 0


   * - ASCII Grid File
     - Xmin
     - Ymin
     - Xmax
     - Ymax

   * - C:\\Projects\\MaricopaCounty\\Data\\grd2375-100.asc
     - 640000
     - 1000000
     - 670000
     - 1400000

   * - C:\\ Projects\\MaricopaCounty\\Data\\grd2376-100.asc
     - 500000
     - 1000000
     - 900000
     - 1500000

   * - \\\\Agua\\IMF\\Publico IMF\\grd2476-100.asc
     - 510000
     - 1000000
     - 740000
     - 1510000


..

   The first column is the file name including the path name.
   The following four columns are the coordinate data limits in each file.
   The *GDS* will automatically find all data files that are contained within or intersected by the user defined polygon and will retrieve/display the
   corresponding files.
   Grid files generally contain a large number of points and loading may take several minutes, but once loaded, the points are quickly displayed.
   If the display time becomes too long for a given large data point set, you can use the *Esc* key to stop the display process.

3.2.23 Import Shape File (File Menu)

|GDS048|

This command will import ESRI shape files.

   3.2.24 Import Rain ArcInfo ASCII Grid File (File Menu)

|GDS049|

   An ASCII grid file can be imported as a *FLO-2D* grid system or used to delineate other boundaries such as a rainfall gage grid system.

3.2.25 Import HEC-RAS Channels… (File Menu)

This command allows importing channel reaches from geo-referenced *HEC-RAS* project.

|GDS050|

   3.2.26 Import CAD Graphic … (File Menu)

   Use this command to import DXF or DWG CAD files.

|GDS051|

3.2.27 Import Levees...
(File Menu)

|GDS052|

|GDS053|

   Use this command to import levee polyline vertices in the form of xyz space or coma delimited text file.
   The file extension is \*.xyz.

3.2.28 Save Elevation Points (File Menu)

|GDS054|

   After deleting any DTM points or adding points from multiple files, this command will save the remaining points to a single file.

3.2.29 Export… (File Menu)

|GDS055|

   Use this command to export the current screen view to one of various image formats.
   Click the *Export Command* and the following dialog box appears:

|GDS056|

   Choose an image export format such as Bitmap, JPEG, etc and adjust the scale factor of the image to obtain better print quality.
   When you click the Export button, input the image file name and select the directory to save the image as shown in the following file dialog box:

|GDS057|

   3.2.30 Open Recent Projects (File Menu)

   |GDS058|

   This command allows the user to open recently opened projects.

   3.2.31 Exit (File Menu)

|GDS059|

   This command ends the *GDS* session.
   The *GDS* will prompt the user to save the current project.

**3.3 View Menu Commands:**

3.3.1 View All (View Menu)

|GDS060|

   Use the *View All command* or click the View All |GDS061| icon to return the working region to its original full size.
   To Zoom-in (increase the magnification), click in the working region and drag the mouse to outline the area of interest.

3.3.2 Zoom Out Previous View (View Menu)

|GDS062|

   Use the *Zoom Out* *Previous View* command or click the Zoom Out Previous View Button |GDS063| to return to the previous zoom extent

3.3.3 Zoom Out 10% (View Menu)

|GDS064|

   Use the Zoom Out 10% View command to reduce the current view 10% in size.

3.3.4 Pan (View Menu)

|GDS065|

Use the *Pan* command or use the *Pan* Toolbar icon |GDS066| to move around within the working region view.
Click and drag the mouse to pan around.
Use the *View All* command (or toolbar icon) to return to a full view of the working region or click the Select icon |GDS017| to exit the pan mode.

3.3.5 Layers List (View Menu)

|GDS067|

This command opens the Layer dialog box.

   |GDS068|

   Layers may be visible or invisible.
   Change the layer visible status by checking the *Visible* check box.
   In the example above there are two active layers.
   Use the icons to highlight and move between the various layers.
   Click the *Apply* button to accept the changes.
   Delete any layer by checking the *Delete* check box and then clicking the *Apply* button.
   After any modifications to the layers, click Apply prior to clicking OK.

and

   To enter the Layer Properties Dialog box double click an active layer.
   The following dialog appears:

|GDS069|

   This dialog box allows the user to modify layer colors, transparency, number of classes or divisions, add point captions, font styles, etc.
   Use the *Adv label* option to add labels to DTM points in the Elevation layer.

   Click the *Apply* button and then the *Close* button to accept the changes.

3.3.6 Track Elevation Points (View Menu)

|GDS070|

   This command queries individual terrain elevation points and displays the data for the selected point in the toolbar point elevation box.
   The mouse cursor changes to the inquiry mode to show that this option is active\ |GDS071|.

|GDS072|

3.3.7 Grid Element #’s, Elevations, and n-values and Curve Numbers (View Menu)

|GDS073|

   Use these commands to display grid element numbers, elevations, Manning’s n-values or Curve Numbers inside the grid elements.
   Each command can be toggled and used jointly to display three values.
   Note that if the grid system is large, the numbers may not fit into the elements.
   Zoom in to enlarge the view and to clearly see the element numbers.
   In each element, the first number is the grid element number, the second is the terrain elevation and the third the Manning’s n value.
   Manning's n-value and the SCS curve number are selected separately.

   |GDS074|

3.3.8 Grid...
(View Menu)

|GDS075|

This command customizes the grid display.

3.3.9 View Components (View Menu)

|GDS076|

   These commands enable the user to view or hide *FLO-2D* components.
   The component view can be toggled on or off in any combination.
   These are some example views of the different *FLO-2D* components as represented in *GDS*:

.. list-table::
   :widths: 25 25 25 25
   :header-rows: 0


   * - **Component**
     - **GDS Graphic Representation**
     - **Component**
     - **GDS Graphic Representation**

   * - Channels
     - |GDS077|
     - Channel Confluence
     - |GDS078|

   * - ReductionFactors
     - |GDS079|
     - Infiltration
     - |GDS080|

   * - Streets
     - |GDS081|
     - No Exchange

       nnel-Floodplain

       ments
     - |GDS082|

   * - OutflowElements
     - |GDS083|
     - Floodplain Cross Sections
     - |GDS084|

   * - InflowElements
     - |GDS085|
     - Hydraulic Structures
     - |GDS086|

   * - Levees
     - |GDS087|
     - Watersheds
     - |GDS088|

   * - DetentionBasins
     - |GDS089|
     - Multiple Channels
     - |GDS090|

   * - WatercourseDirections
     - |GDS091|
     - Storm Drain Inlet

       rm Drain ction and let
     - |GDS092|

       |GDS093|


3.3.10 View Elevation Points (View Menu)

|GDS094|

   Displays elevation points assigning colors as a function of elevation.

3.3.11 Non-Interpolated Grid Elements (View Menu)

   Displays non-interpolated grid elements.
   These elements remained un-interpolated they did not have DTM elevation points within the grid element space during interpolation.
   The user chose not to interpolate the elevation of grid elements that did not have any DTM points within the grid element space.

3.3.12 Manning’s n Values Rendering (View Menu)

Plots colored hatched pattern on the elements according to the Manning’s n value.

|GDS095|

3.3.13 Grid Element Elevation Rendering (View Menu)

   Plots colored solid or hatched grid elements according to the elevations.

3.3.14 Highlight Grid Element Number… (View Menu)

   Enter a grid element number in the following dialog box to locate it in the *FLO-2D* grid.
   When you click the *Highlight* button, the grid element will blink to identify it.
   Note that if the selected element number is not in the current view, you may have to zoom out to see it.

Use the “Zoom to” dropdown list to zoom in or zoom out.
Or the “+” and “-“ buttons.
3.3.15 Find the Lowest Cell in the Grid System (View Menu)

   This command colors the 4th lowest grid elements.

3.3.16 Cross Section Numbers… (View Menu)

   This command displays cross section numbers for Natural Channels.

3.3.17 Cells without Cross Section Numbers… (View Menu)

   This command displays natural channel grid elements that do not have any assigned cross section.
   The grid elements without cross sections assigned are highlighted in blue.

3.3.18 Levee Polyline (View Menu)

|GDS096|

   Use this command to view the polylines that were produced when the levee data was imported or created along a polyline.

3.3.19 Redraw (View Menu)

|GDS097|

   Use this command to redraw the visible objects in the working region.

   **3.4 Design Menu Commands:**

3.4.1 Elevation Points/Insert (Design Menu)

   |GDS098|

   Use this command (or the |GDS099| icon) to insert elevation data at selected points within the working region.
   To use this tool:

1. Select the *Elevation Points/Insert* command (Design menu) or the toolbar icon |GDS099| and click the left mouse button.

2. A dialog box appears for the elevation entry in feet or meters.
   Click *‘OK’* to accept the value.

..

   |GDS100|

3. Click a point within the working region to assign this elevation data.

4. Repeat step 3 as many times as needed.

3.4.2 Elevation Points/Create Elevation Points Layer (Design Menu)

   |GDS101|

   To optimize display times, *GDS* does not automatically create the Elevation points layer.
   Use this command to create the elevation point layer.

3.4.3 Elevation Points/Delete Elevation Points from Selected Area (Design Menu)

   |GDS102|

This command deletes elevation data points within the working region.
To use this tool:

1. Select the *Elevation Points/* *Delete Elevation Points from Selected Area* command (Design menu).

2. Click OK, draw the polygon and select yes to delete the points within the polygon.

3. To save the edited DTM points file, click the Save Elevation Points command (File Menu)

3.4.4 Elevation Points/Delete Elevation Points Outside Range (Design Menu)

   |GDS103|

   Deletes elevation data points outside a specified range.

3.4.5 Grid Element Text Style (Design Menu)

   Use these commands to edit the text styles for the grid element number, elevation, or Manning’s n-value.
   Set the relative position of the number in the square grid element (upper, middle or down positions).
   The Font Properties… button is used to change, font type, style, size, etc.

   |GDS104|.

3.4.6 Channel Style (Design Menu)

   Use this command will change the line width used to represent channels.
   The *GDS* displays this dialog box to set the line width.
   Click *Apply* and then ‘\ *OK’* to change to the selected channel line width display

3.4.7 Area Reduction Factor Style (Design Menu)

   To change the display of area reduction factor in a grid element chose from Solid, Hollow (with boundary display of different pen widths) or Hatched
   rendering with various hatching options.
   Click *Apply* and then ‘\ *OK’* to change to the selected style.

   **3.5 Grid Menu Commands:**

3.5.1 Create Grid (Grid Menu)

   |GDS105|

   Command to create the grid system template of square elements for the *FLO-2D* model.
   To use the *Create Grid* command:

1. Select the *Create Grid* command (Grid menu).

2. A dialog box appears requesting the square grid element size or side length (ft or m):

..

   |GDS106|

3. Select *‘OK’* to accept the value.

4. The *GDS* system will automatically overlay a grid template that is centered in the working region.
   The grid elements will be centered on each node.

3.5.2 Select/Grid Element (Grid Menu)

   |GDS107|

   Use this command (or the |GDS108| icon in the tool bar) to select one or more grid elements.
   With the *Assign Parameters to Selection* command, assign attribute values to the selected grid elements.
   To use the *Select / Grid element* command:

1. Choose the *Select/Grid element* command (Grid menu).

2. The cursor changes to a cross.

3. Click the grid element/s to select them.

4. Repeat step 3 for each selected element.

..

   To unselect previously selected elements, click them again.
   To select a group of elements, press the *Shift* key simultaneously with the left mouse button and drag the mouse pointer over the desired elements.
   To unselect a group of elements press the *Control* key and the left mouse button, then drag the mouse pointer over the elements you want to unselect.
   When dragging the mouse over the grid elements, they are painted to indicate your selection.
   After a grid element or group of elements is selected, use the *Assign Parameters to Selection* command to assign various attributes to the selected
   elements.

3.5.3 Select/Grid Elements Defined by Polygon (Grid Menu)

   This command (or the |GDS109| icon in the tool bar) will select all the grid elements within a user defined polygon.
   Attributes can then be assigned to the selected elements using the *Assign Parameters to Selection* command.
   It may be necessary to create a grid layer first.

3.5.4 Select/Grid Elements Intersected by Shapefile (Grid Menu)

   |GDS110|

   Use this command to allow the use an imported polylines shapefile to intersect the grid domain to select grid elements.
   The shapefile should have been previously imported using the command “File.
   Import Shapefile…”

3.5.5 Select/Inner Grid Elements (Grid Menu)

   |GDS111|

   This command will select all the grid elements within the computational domain and hatch them with diagonal lines.
   Use the *Assign Parameters to Selection* command to assign various attributes to the selected elements.

3.5.6 Select/Unselect All (Grid Menu)

|GDS112|

   This command will unselect all the elements previously selected with the *Select* command.
   The toolbar icon |GDS113| will also perform this function.

3.5.7 Assign Parameters to Selection/Elevations (Grid Menu)

   Assign an elevation to selected grid elements.
   Enter an elevation value or enter a distance to raise or lower the elevation.
   Use positive numbers to raise the elevation and negative numbers to lower the elevation.
   Click *‘OK’* to change the elevation to the selected elements.

3.5.8 Assign Parameters to Selection/Manning’s Coefficient (Grid Menu)

   A Manning’s roughness coefficient (n-value) is assigned to the grid elements previously selected with the *Select* command.
   A dialog box appears prompting you to enter the n-value:

3.5.9 Assign Parameters to Selection/Area and With Reduction Factors (Grid Menu)

   |GDS114|

   This command is used to assign area and width reduction attributes to the selected grid elements.
   A dialog box appears prompting the user to enter the Area Reduction Factor (ARF) and the Width Reduction (WRF) factors:

   |GDS115|

   After clicking *‘OK’*, the assigned ARF and WRF values will appear graphically as follows:

   |GDS116|

   The colored cells indicate varying levels of storage loss (ARF values).
   The colored lines reflect the varying levels of flow direction blockage (WRF values).
   Eight potential flow directions for each grid element can be assigned to identify complete blockage.
   It should be noted that each grid element can share discharge in eight directions.

   3.5.10 Assign Parameters to Selection/Levee (Grid Menu)

   |GDS117|

   Use this command to assign levee and levee failure parameters to the selected grid elements.
   A dialog box will appear with the grid element floodplain elevation across the levee in that flow direction for reference.
   Click a check box to set up a levee for each selected direction.
   A text box will appear just below each direction to input the levee crest elevation.
   Note that the levee crest must be higher than the grid element elevation and the elevation of the grid element in the cut off direction.
   Redundant levee cut off directions will not be accepted by the GDS or the FLO-2D model.
   This dialog box can also be used to edit the grid element elevation.

   |GDS118|

   Each data entry is described below:

Incremental increase in crest elevation for all the levee nodes (RAISLEV)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Global incremental increase in levee crest elevation (ft or m) for all the levee grid elements.

   *Global Failure Mode* provides two modes of failure:

   *Prescribed failure* used to provide predetermined breach data in the bottom part of the dialog or

   *Breach* *failure* where the model simulates the breach erosion from overtopping or piping.
   In this case, breach parameters should be entered clicking the Open Breach Dialog button.

Flow direction cutoff direction
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Check buttons to define the flow direction (of the 8 possible overland flow directions) that will be cutoff by a levee.

   *Levee Crest Elevation* (LEVELEV)

   Elevation (ft or m) of the top of the levee.

   *Assign to all* button |GDS119|

   Assigns the cutoff flow direction and levee crest elevation to all selected grid elements.

Levee failure for this direction |GDS120|
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Enables input parameters to be assigned for levee prescribed failure modeling for the selected direction.

Elevation of prescribed failure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Assign the maximum water surface elevation at failure (FAILEVEL) if is different than the levee crest (LEVELEV).
   This enables the levee to fail prior to being overtopped.
   Set the FAILEVEL variable to zero to simulate levee failure when it is overtopped.

Duration (hrs) for failure after failure level is exceeded (FAILTIME)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Duration in hours until levee failure after the FAILEVEL elevation is exceeded by the flow depth.
   Set this variable to zero if the level fails immediately when overtopped or when FAILEVEL is exceeded.

Base elevation of levee failure if different from floodplain elevation (LEVBASE)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   The final elevation of the levee after failure is completed.
   This enables the levee to fail to an elevation that is different from the floodplain elevation.
   Set this variable to zero if levee failure results in the complete levee failure to the floodplain elevation.

Initial levee breach width (FAILWIDTH)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   The initial flow width (ft or m) of levee failure.
   This flow width relates to one of the eight flow directions and should be less than the length of an octagon side (length of the side of a grid
   element x 0.4142).

   *Vertical rate of levee breach opening* (FAILRATE)

   The rate of vertical levee failure (ft/hr or m/hr).

Horizontal rate of levee breach opening (FAILWIDRATE)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   The rate at which the levee breach widens (ft/hr or m/hr).
   The breach stops increasing if the breach exceeds the grid element width for that direction.

   3.5.11 Assign Parameters to Selection/Multiple Channels (Grid Menu)

   |GDS121|

   This command is used to define multiple channels that simulate rill and gully flow on the floodplain.
   For this component, concentrated rill and gully flow (flow in rectangular channel) rather than overland sheet flow will be simulated to route the flow
   between designated floodplain grid elements.
   The following dialog box is used to input the multiple channel data:

   3.5.12 Assign Parameters to Selection/Inflow/Outflow Condition (Grid Menu)

   |GDS122|

   Use this command to define inflow and outflow elements in selected grid elements.
   The In/Out Condition dialog box allows editing these boundary conditions:

   |GDS123|

3.5.12.1 Setting inflow nodes
'''''''''''''''''''''''''''''

   Clicking the first radio button will assign an inflow hydrograph to a grid element.
   If there is a channel in the selected element, you can assign the hydrograph to either the channel or the floodplain.
   When the user selects the radio button *‘Inflow element with hydrograph’,* the ‘\ *Hydrograph’* data group is activated.
   The “\ *Read*\ ” button displays a dialog box to import a hydrograph with HEC-1, Tape21, HYD or ASCII files formats:

   |GDS124|

   The HEC-1 file option will display all the hydrographs at basin concentration points in a Corps of Engineers HEC-1 hydrologic model output file.
   The user can select an inflow hydrograph from the HEC-1 file:

   |GDS125|

   After selecting the HEC-1 hydrograph and clicking *‘OK’*, the hydrograph data are loaded into the

   *Hydrograph* group table in the above dialog box.
   \*.HYD files are ASCII files generated by the *GDS* to save the hydrograph data.
   They are created with the “\ *Save Table*\ ” button.
   The first line contains the initial and final time of the hydrograph selected with the “Select Time Interval” button.
   The time and discharge discretized hydrograph pairs follow in two columns of data.
   These files can be used to:

- Recover the hydrographs when a project is read from a TOP file;

- Redefine the project area when the INFLOW.DAT becomes obsolete because the grid element numbers change.
  The \*.HYD files enable the hydrographs to be recovered for assignment to new grid elements.

- \*.HYD files permanently store hydrographs that could be imported to other projects or grid elements in the same project.

..

   The “\ *Edit*\ ” button can be used to edit hydrograph values, insert rows, delete rows, or sort rows in ascending order (time column).
   This button a displays an editor dialog box:

|GDS126|

   The “\ *View Graph*\ ” button of the above *In/Out Condition* dialog box plots the hydrograph in the following window:

   |GDS127|

   The user may select the initial and final time for the inflow hydrograph.
   For example, selecting *Initial Time* = 10.0 hours and *Final Time* = 16.0 will redefine the hydrograph limits and in this eliminate a number of
   unnecessary zero values on the rising and falling limbs of the hydrograph.

   Inflow grid elements with assigned hydrographs are displayed in *GDS* with a distinct color for identification.
   When the user selects “\ *No Inflow/Outflow condition*\ ” and clicks *‘OK’*, the grid element recovers its original color to indicate the absence of
   an inflow or outflow node.
   Inflow nodes and the linked hydrographs will be written to the INFLOW.DAT file.
   Outflow nodes are assigned though the option “\ *Outflow element (no hydrograph)*\ ”.
   The list of outflow nodes will be written to the OUTFLOW.DAT file.

 Initial Assignment of Hydrographs
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The initial assignment of hydrographs to inflow nodes has three options:

1. *Project is created from FLO-2D project* (*GDS* command “\ *File.
   New Project from FLO-2D Project*\ ”).
   In this case INFLOW.DAT is used by the *GDS* system to assign hydrographs to pre-selected grid elements.

2. All other methods of creating a project.
   The user will be required to create the grid system and then later right-click the selected inflow nodes to assign hydrographs as described above.

..

   *3.5.12.2 Setting outflow nodes* These are the options for outflow nodes:

|GDS128|\ *3.5.12.3 Outflow element (no hydrograph):*

- Line ‘O’ for floodplain

- Line ‘K’ for Channel

- An element containing an outflow node must have a lower elevation than the contiguous upstream elements.
  o Floodplain element elevation will be reset to 0.1 ft lower than the lowest contiguous upstream element if the outflow node elevation is initially
  higher.
  This change occurs automatically at runtime.

  - Channel elements will generate an error in the GDS and when the engine is executed.
    An error report is written to the error.chk file and the channel bed elevation must be manually adjusted.

..

   For this outflow assignment, the outflow nodes discharge all the inflow to them off the grid system using an approximate normal depth flow condition.
   The outflow node is essentially a sink.

|GDS129|\ *3.5.12.4 Outflow element with hydrograph (diversion):*

- This diversion data is written to the INFLOW.DAT file.

- This option is for Channels only.

- The grayed-out appearance for FP and FP/Channel, indicating that those 2 commands are unavailable

- This option is used to account for irrigation or any other kind of diversion from a channel in a Time / Discharge (cfs or cms) relationship.

- If the discharge in the channel does not meet the level of the discharge in the diversion hydrograph, the element will divert all of the water it can
  take.

- Any water that exceeds the diversion hydrograph will continue downstream.

*3.5.12.5* Outflow element with stage-time relationship\ *:*

   |GDS130|\ This option is for Channel and Floodplain.

- The grayed-out appearance for FP/Channel, indicating that command is unavailable

- No ‘O’ or ‘K’ lines (type 1)

- Only ‘N’ lines for stage-time relationship.

- FP and channel elements will be different only on the third column of the ‘N’ lines, the identifier will be different:

  - N Grid Cell FP_ID=0 o N Grid Cell Channel_ID=1

- Use this type of outflow when the downstream stage will add water to the modeling surface as.
  o Tsunamis o Storm stage

  - Downstream flooding stage.
    i.e.
    Mississippi River

- The initial stage for each grid element should start at near ground elevation and ramp up to avoid volume conservation errors.

- If the stage is lower than the grid element elevation, it is reset to the grid element elevation at runtime until the time that it goes above the grid
  element elevation.

..

   |GDS131|

   Use this water surface control to simulate flooding from storm surges/tsunamis or any type of water surface elevation control such as tidal effects or
   time variable backwater conditions.
   For example, it is possible to model the flooding in a coastal area produced by storm surges generated by tropical storms, hurricanes or tsunamis
   where the ocean stage's rise and fall has a limited duration.
   This condition can be assigned to nodes along the coastal boundary to simulate ocean flooding in an urban area.
   The grid element with a stage-time relationship does not have to be along the red boundary.

*3.5.12.6 Outflow element with stage-time and free floodplain and channel:*

   This option is for Channel or Floodplain.

Redundant ‘O’ or ‘K’ lines are needed depending on if

the element is a FP cell or a channel cell.

‘N’ lines for stage

-

time relationship are needed.

FP and channel elements will be different on the third

column of ‘N’ Line, the identi

fier will be different:

N Grid Cell FP_ID=0

N Grid Cell Channel_ID=1

Use this configuration when a water surface elevation

along a boundary needs to be held like with Flood

Insurance Mapping.

The initial stage for each grid element should start at

near ground elevation and ramp up to avoid volume

conservation errors.

If the stage is lower than the grid element elevation, it is

reset to the grid element elevation at runtime until the

time that it goes above the grid element elevation.

- Grey out appearance for FP/Channel, indicating that command is unavailable

..

   •

   •

   •

- o

..

   •

   •

   •

   This outflow condition is a combination of the stage-time relationship and normal depth outflow node for the either the floodplain or channel.
   In this case, the water surface elevation is held along the boundary by the stage-time relationship.
   Anything higher than the stage leaves the system through the same outflow node.
   The main difference between this outflow condition and the previous one is that it will not add water to the upstream grid system.
   The water is held at the node.

|GDS132|\ *3.5.12.7 Channel outflow element (with stage-discharge):*

   This option is for channel outflow where a stage discharge relationship is known.

- Assign this outflow node to a gaged channel element at the end of a project or a bridge at the end of a project.

- Multiple curves can be used and a curve is valid up to the given depth.
  That is why it is called a Max Depth.

- ‘H’ lines for discharge curve relationship are needed.
  o Max Depth o Coefficient

..

   o Exponent

   Use this option to assign a stage-discharge relationship to the channel.
   In this case, the channel outflow discharge will be controlled by assigned stage discharge pairs to simulate a weir, culvert or other water surface
   hydraulic control.

|GDS133|\ *3.5.12.8 Channel outflow element (with depth-discharge):*

   This option does not work.
   I believe it was supposed to be used to fill in the time / discharge method for a channel element with a known time / discharge data set.
   If a user needs to use the Time Discharge method, it is best to review the Data Input Manual.

   Set it up in the OUTFLOW.DAT file as follows using a text editor.
   It is space delimited and all characters are capitalized.

   K 1007

   T 0.0 0.00

   T 3.0 50.35

   T 5.0 157.67

   T 10.0 366.58

|GDS134|\ *3.5.12.9 Outflow node Q reported to INFLOWx.DAT:*

   This option is used for capturing the discharge from an upstream model.

- See Lesson 13 for a tutorial on how to use this method.

- All flow captured by the outflow node will be written to a corresponding INFLOWx.DAT file.

- The two grid systems must overlap at the boundary to set the data up correctly.

..

   Use this option to assign a stage-discharge relationship to the channel.
   In this case, the channel outflow discharge will be controlled by assigned stage discharge pairs to simulate a weir, culvert or other water surface
   hydraulic control.

|GDS135|\ 3.5.12.10 No Outflow Condition
''''''''''''''''''''''''''''''''''''''''''

   Use this option to clear the In/Out condition from any element.
   Select the elements with either an inflow or outflow condition and click the radio button.
   Click OK to delete the data from the INFLOW.DAT and OUTFLOW.DAT files.

3.5.13 Parameters to Selection/Infiltration (Grid Menu)

   |GDS136|

   Use this option to assign infiltration data to the selected grid elements in the following dialog box:

   |GDS137|

3.5.14 Parameters to Selection/No Discharge Exchange (Grid Menu)

Identify channel elements that will not exchange discharge with the floodplain (e.g.

   channel culvert or enclosed channel where no floodplain inflow can occur).

   3.5.15 Assign Parameters to Selection/Time-Variant Groundwater Head (Grid Menu)

   |GDS138|

   Use this command when using the *MODFLOW* groundwater flow model link to impose a time series of groundwater head at the selected nodes.

3.5.16 Parameters to Selection/Rigid Bed Element (Grid Menu)

|GDS139|

   Setup elements that do not scour during the sediment transport simulation.

   3.5.17 Assign Parameters to Selection/Variable Sediment Size Fraction (Grid Menu)

This command requires the definition of transport equations.
See “Tools.
Mud and Sediment Transport”

   3.5.18 Assign Parameters to Selection/Limiting Froude Number (Grid Menu)

   Use this command to setup spatially variable limiting Froude numbers.
   3.5.19 Assign Parameters to Selection/Cell Elevation Adjustment (Grid Menu)

|GDS140|

Use this command to adjust elevations for the selected cells and their neighbors:

|GDS141|

   3.5.20 Assign Parameters to Selection/Cell Tolerance (Grid Menu)

   Assign cell tolerances to the selected cells.

   3.5.21 Interpolate Elevation Points (Grid Menu)

   Use this command to interpolate and assign all the grid element elevations in the computational domain.
   The interpolated elevations are based on the imported DTM points or the elevation points that are added to the working region.
   The interpolation options are selected in the *Options/Interpolation* command of the *Tools* menu.
   The following table describes the interpolation method.

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - **Option**
     - **Description**

   * - Minimum number of DTMpoints to consider in thevicinity of each gridelement
     - To calculate the interpolated elevation that will represent each grid element, the algorithm analyzes at least the minimum number of points closest to
       the grid element node.

   * - Radius of interpolation(proportional to gridelement size)
     - This radius defines a circle around each grid element node based on a multiple of the grid elements side.
       Only DTM or assigned elevation points inside this radius are considered in the interpolation process.
       If no elevations point exists, the circle is automatically enlarged until at least the minimum number of points is found.

   * - Inverse distanceweighting formulaexponent
     - This is “n” in the Inverse Distance Weighting Formula:

   * -
     - *NDTM* 1  *Z j*  \ *j*\ =1 *rijn*  *Z* :sup:`=` *NDTM* 1   *rn*  *j*\ =1 *ij*  Where Z¯ is the interpolated grid element elevation, Z\ :sub:`j` is
       the elevation of DTM point :sub:`j`, r\ :sub:`ij` is the distance from the DTM point :sub:`j` to center of grid element :sub:`i` and NDTM is the total
       number of DTM points.

   * - No filtering (High or LowElevations)
     - No filtering is performed on the elevation points.

   * - Maximum elevationdifference(High or Low Elevations)
     - For this option, the algorithm calculates a mean elevation using all the DTM and assigned elevation points within the interpolation radius.
       All those points that exceed the selected maximum elevation difference higher (or lower in the case of Low Elevation filter) than the mean are
       discarded and the mean elevation is recomputed and assigned to the grid element.

   * - Standard deviationdifference(High or Low Elevations)
     - The interpolation algorithm calculates the standard deviation of DTM point elevations and then neglects all those points whose elevations are higher
       (or lower in the case of the Low Elevation filter) than the standard deviation to determine the mean elevation to represent the grid element.


..

   3.5.22 Interpolate Elevation Points from Multiple Elevation Files...
   (Grid Menu)

   Use this command to interpolate and assign grid element elevations in the computational domain.
   The interpolated elevations are based on the imported LIDAR ASCII file.
   The interpolation options are selected in the *Options/Interpolation* command of the *Tools* menu.

   Previous versions of the FLO-2D Grid Developer System (GDS) provided a method to interpolate terrain elevations that required importing all points.
   The original procedure was not able to process more than about 15 million points due to limitations on the development tools used to create GDS.
   To circumvent this limitation and allow the processing of virtually unlimited number of elevation point data, FLO-2D Software has developed a new
   method that does not require importing the points and significantly extends the model interpolation capability.
   This section of the manual summarizes the functionality of the new tool and provides simple instructions how to use it.

.. _data-requirements-1:

Data requirements
^^^^^^^^^^^^^^^^^

   The new interpolation tool reads data files in any of the following data ASCII formats.

1. Space or comma delimited ASCII files, 3 data values per line.
   These files contain three values on each line as follows:

..

   X_Coordinate Y_Coordinate Elevation

   Example of space delimited file:

   369941.27 1183607.125 4654.71

   369946.27 1183608.125 4654.50

   369951.27 1183609.125 4654.29

   Example of comma delimited file:

   369941.27 , 1183607.125 , 4654.71

   369946.27 , 1183608.125 , 4654.50

   369951.27 , 1183609.125 , 4654.29

2. Space or comma delimited ASCII files, 5 data values per line.
   These files contain five values on each line as follows:

..

   ID X_Coordinate Y_Coordinate Elevation Value

   For this file format only the point coordinates and elevation value is used.
   The first column (ID) and last column (Value) are ignored.

   Example of space delimited file:

   X1 369941.27 1183607.125 4654.71 777

   X2 369946.27 1183608.125 4654.50 717

   X3 369951.27 1183609.125 4654.29 282

   Example of comma delimited file:

   X1,369941.27,1183607.125,4654.71,777

   X2,369946.27,1183608.125,4654.50,717

   X3,369951.27,1183609.125,4654.29, 282

   3. List of elevation data files ELEVFILES.DAT:

   This optional file contains the list of files including path and name.
   It needs to be created by the user with any text editor program and facilitates handling hundreds or thousands of files which may be difficult to
   select using a standard MS-Windows file handling dialog box.
   Users may mix any of the supported formats, i.e., some files may be 3 column space delimited, and others five columns comma delimited, etc.
   All files must have.TXT extension.

   Example of ELEVFILES.DAT file:

   C:\\Tracks\\PROJECTS\\FLO2D\\2009\\Goat2009\\dtm1.TXT

   C:\\Tracks\\PROJECTS\\FLO2D\\2009\\Goat2009\\dtm2.TXT

   C:\\Tracks\\PROJECTS\\FLO2D\\2009\\Goat2009\\dtm 5 columns1.TXT

   C:\\Tracks\\PROJECTS\\FLO2D\\2009\\Goat2009\\dtm 5 columns2.TXT

   NOTE: All elevation ASCII files, regardless of their format must have extension .TXT.

User instructions
^^^^^^^^^^^^^^^^^

   It is required that the user creates a FLO-2D grid and computational boundary prior to interpolation.
   To interpolate use the Interpolate from Multiple Elevation Files… from the GDS Grid menu.

|GDS142|

   That command will bring up a file selection dialog:

|GDS143|

   There are two options:

1. Users can select an ELEVFILES.DAT file, if available, and import the list of elevation files in the format discussed in the previous section or

2. Users can select the actual elevation data files.
   It is necessary to change the default file extension to .TXT to select a group of ASCII elevation files.

..

   For either option, clicking Open, displays the interpolation dialog box:

|GDS144|

   There are two LiDAR interpolation options to choose from.
   The default is *Use all available elevation points*, which will compute the interpolated elevations using all points within each grid element.
   Selecting the *Use this % of elevation points* will calculate the elevation using the assigned subset of points on each grid element.
   The % is a global value based on the average number of elevation points per grid element.

Interpolation method
^^^^^^^^^^^^^^^^^^^^

   If the user selects Use all available elevation points option, the GDS will compute the grid element elevation using the elevation average of all
   points on the element.
   The GDS does not import or display the elevation points, but instead reads one point at a time, determines the grid element where the point is located
   and computes the average elevation.
   A similar procedure is followed if the user selects a subset of points but GDS will calculate the elevation using the indicated percentage of points
   on the element.

   If no elevation points are found on an element or if the number of points is less than the specified percentage, a tag value of -9999 will be assigned
   to that element.
   Also the element will be highlighted in black as shown:

|GDS145|

   If there is at least one element without a calculated elevation, a dialog box will be displayed presenting three options to assign elevations to those
   grid elements:

|GDS146|

   The Interpolate from Nearest Grid Elements option will compute an elevation by assessing the elevation data in the neighboring 8 grid elements and
   averaging the point elevations (-9999 values are not used).
   The algorithm initiates from the periphery of a cluster of non-interpolated grid elements and proceeds to the interior of the cluster ensuring that at
   the end of the procedure all grid elements will be assigned an elevation.

   The user can assign a value to all -9999 grid elements using Assign this Value to all Noninterpolated Grid Elements.
   The third option will leave all un-interpolated elements with the 9999 tag.
   The user will need to double click and assign a desired elevation for each one.

   Important NOTE: *The GDS will initiate a FLO-2D model simulation if there are elements with the -9999 tag.
   The new Non-Interpolated Grid Elements*

   *command on the View menu turns on or off the black unassigned grid elements.*

   3.5.23 Compute Green-Ampt Parameters (Grid Menu)

   |GDS147|

   This command is the starting point for the Green-Ampt parameter calculations.
   There are several steps that have to be completed in a prescribed sequence.
   The final result is the creation of the INFIL.DAT file containing the Green-Ampt infiltration parameters.
   To initiate this procedure, you have to load a landuse shape file and a soil shape file and the corresponding soil and landuse tables must be
   available.
   In addition, the *FLO-2D* grid system data files must exist.
   The general procedure is as follows:

1. Load the land use shape file and table.

2. Load the soil shape file and table.

3. For each grid element compute hydraulic conductivity (*XKSAT)* average.

4. View the landuse and soil interface.

*XKSAT* = *ALOG*\ \ *A\ i* log(*XKSAT\ i* )\ :sup:``\ 

 *AGE* 

   Where:

   *XKSAT\ i* is obtained from the soil table and

   *A\ i* is subarea intercepted by the grid element from the 3\ :sup:`rd` column of the landuse table and *A\ GE* the grid element area.

5. For each grid element, compute wetting front capillary suction PSIF according to the following regressions as a function of *XKSAT* (Generated from
   Figure 4.3 of the Maricopa County Drainage Design Manual, Volume I).

.. _`xksat(in/hr)`:

xksat(in/hr):

PSIF (in)

.. _`0.01xksat1.2`:

0.01xksat1.2:

PSIF=EXP(0.9813-0.439*Ln(XKSAT)+0.0051(Ln(xksat))\ :sup:`2`\ +0.0060(Ln(XKSAT))\ :sup:`3`)


6. For each grid element, compute volumetric soil moisture deficiency *(DTHETA)* according to the following table.
   The specific table used for DTHETA depends on the *saturation* field of the soil table (6th column).

..

   Saturation = DRY

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - XKSAT (in/hr)
     - DTHETA DRY

   * - 0.01  XKSAT 0.15
     - DTHETA =EXP(-0.2394 + 0.3616 Ln(XKSAT))

   * - 0.15  XKSAT 0.25
     - DTHETA =EXP(-1.4122 - 0.2614 Ln(XKSAT))

   * - 0.25  XKSAT  1.2
     - DTHETA = 0.35


..

   Saturation = NORMAL

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - XKSAT (in/hr)
     - DTHETA NORMAL

   * - 0.01  XKSAT 0.02
     - DTHETA = EXP(1.6094 + Ln(XKSAT))

   * - 0.02  XKSAT 0.04
     - DTHETA = EXP(-0.0142 + 0.5850 Ln(XKSAT))

   * - 0.04  XKSAT  0.1
     - DTHETA = 0.15

   * - 0.1  XKSAT  0.15
     - DTHETA = EXP(1.0038 + 1.2599 Ln(XKSAT))

   * - 0.15  XKSAT  0.4
     - DTHETA = 0.25

   * - 0.4  XKSAT 1.2
     - DTHETA = EXP(-1.2342 + 0.1660 Ln(XKSAT))


..

   Saturation = WET or SATURATED

   DTHETA = 0 for all XKSAT

7. Adjust *XKSAT* (computed in step No.
   1) as a function of the vegetation cover VC from the 5th field of the landuse table when XSAT < 0.4 in/hr.
   This requires a computation of the ratio the hydraulic conductivity for the vegetative cover to the bare ground hydraulic conductivity (C\ :sub:`K`):

..

   *VCK* −10 1

   *CK* =+

   90

XKSATC = XKSAT P\ :sub:`k`\ *C\ k*

   *k*

   Where:

   P\ :sub:`k` is the percentage of the area within the grid element corresponding to C\ :sub:`k` and XKSATC for each grid element is written to the
   INFIL.DAT file.

8. For each grid element compute the initial abstraction *IABSTR*:

*IABSTR* =\ *A\ i* (*IA\ i* )\ :sup:``\ 

 *AGE* 

   Where:

   *IA\ i* is the initial abstraction in the subarea *A\ i* intercepted by the element and is based on the 3\ :sup:`rd` column of the landuse table;

   The intercepted subareas are computed using the land use shape file and *IABSTR* is added to the INFIL.DAT file for each element.

   Compute effective impervious area (%) for each grid element *(RTIMP)*.

*RTIMP*\ \_1=\ *A\ i* (*RTIMPS* \*\ *EFF*)\ :sup:`i `\ 

 *AGE* 

   Where:

   *Ai* is determined from the soil shape file;

   *A\ GE* is the grid element area, effective impervious area *EFF* is obtained from the 5\ :sup:`th` column of the soil table and

   *RIMPS* is the percent rock outcrop obtained from the 4\ :sup:`th` column of the soil table.

*RTIMP* = *RTIMP*\ \_1+\ *A\ i* (*RTIMPL*)\ :sup:`i `\ 

 *AGE* 

   Where:

   *Ai* is obtained from land use shape file and

   *A\ GE* is the grid element area and *RTIMPL* is obtained from the 4\ :sup:`th` column of the land use table.

   The steps to complete Green-Ampt parameter computation are as follows.
   Open the Compute Green Ampt Parameters Dialog box as it was shown above.

   Load the land use shape file and table and select the field as shown:

|GDS148|

|GDS149|

   Load the soil shape file and table and select the field as shown:

   |GDS150|

   Click *‘Compute Green-Ampt’* to compute.
   This procedure may take several minutes depending on the number of grid elements and the number of landuse polygons.

   |GDS151|

   Next you can view the polygon intersections.

|GDS152|

|GDS153|

3.5.24 Compute Manning Coefficients… (Grid Menu)

   |GDS154|

   This command will compute the Manning’s n-values based on the information in a roughness shape file.
   With a project open, first import a Manning’s n-value shape file using the *Import Shape File* command on the File menu.
   When you click the *Compute Manning Coefficients* command, the following dialog box appears:

|GDS155|

   Select the Manning shape file name (MANNING.SHP in this case) and the Manning coefficient field (N_VALUE in this case) and click *‘OK’* to calculate
   Manning coefficients for each grid element.
   Please note that the n-value data will be written to the FPNVALUE.DAT when the FLO2D files have been saved.

3.5.25 Compute SCS Curve Number … (Grid Menu)

   This command will compute the Curve Number for each grid element based on information contained in shape files.

   The SCS runoff curve number loss method is a function of the total rainfall depth and the empirical curve number parameter which ranges from 1 to 100
   and is a function of hydrologic soil type, land use and treatment, surface condition and antecedent moisture condition.
   The method was developed on 24 hour hydrograph data on mild slope eastern rural watersheds in the United States although runoff curve numbers have
   been calibrated or estimated for urban areas, agricultural lands and semi-arid range lands.
   The SCS CN method does not account for variation in rainfall intensity.
   The method was developed for predicting rainfall runoff from ungaged watersheds and its attractiveness lies in its simplicity.
   For large basins (especially semiarid basins), the method tends to over predict runoff using the standard curve number tables which has unique or
   variable infiltration characteristics such as channels (Ponce, 1989).

Assigning Curve Numbers to Grid Elements
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   The general procedure is to assign curve numbers in the *GDS* and then run the *FLO-2D* model with the infiltration component “turned on” and the
   infiltration switch set the SCS-CN option.
   The following options are available to assign curve numbers to grid elements:

1. Select area using a polygon and assigning a CN number.
   In this case the CN's are assumed known.

2. Import a CN polygon shape file and intercept the shape file polygons with the grid elements and interpolate the weighted average computed CN’s.
   In this case the CN numbers are known.

3. Import three polygon shape files for hydrologic soil group (HSG), land cover, and impervious cover and the *GDS* will incept, interpolate and compute
   the CN’s for

..

   each grid element based on the Pima County procedure.
   In this case the CN are not known

Determining CN’s Using the Pima County Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   *GDS* uses the Pima County Method to determine the CN’s using polygon shape files (SF) for soil, land cover and impervious cover.
   Using this shape file data with the accompany attribute tables, the polygon intersection with the grid element are determined to assign a hydrologic
   soil group, percent cover density and impervious area for each grid element.
   Then the CN’s are computed using various formulas depending on soil groups and the results are written to the *FLO-2D* INFIL.DAT file.
   The following procedure is applied:

1. Import soil, land cover and impervious cover shape files to the *GDS* graphical project environment.

2. Select the ID for the HSG from Soil shape file (landsoil.shp).
   The attribute may have both soil and group and the percentage for each group (e.g. B31%C69%Desert Brush).
   For each polygon the following attribute information is required:

   a. Cover type (e.g. Desert Brush)

   b. Soil group (e.g. B and C)

   c. Percentage of soil groups (B=35% and C = 69%).
      If only the group is given (e.g. B) then assume 100%.

3. Select ID for Cover density percentage from land cover shape file (land.shp).

4. Select ID for impervious areas from impervious cover shape file (imperv.shp)

5. Determine polygon intersections with each grid element for each SF (soil, land cover and impervious cover) and determine the area weighed average of
   each variable:

..

   *Var*\ =\ *A\ i\ Var\ i*

   *A\ GE* Where:

   *Var\ i* is the current variable from the shape file; *A\ i* is subarea intercepted by the grid element and

   *A\ GE* the grid element area.

   At the end of this process each grid element has been assigned:

a. HSG from Soil shape file.

b. Cover density percentage CD.

c. Impervious area.

6. Use formulas in Table 1 to determine CN using CD and the corresponding soil group (e.g. CN = (CN soil B \* (B%) + CN soil C \* (C%) + %impervious\*
   99)/100) where: CN for impervious area is 99 and areas for each soil group within a grid element need to be adjusted depending on the impervious area:
   B% = B%(in SF) \* (100-%impervious), etc.

7. Write CN results to the INFIL.DAT.

..

   To determine CN’s, functional relationships were derived from Figure D-1 of the Pima County Hydrology Procedures (Appendix D) reproduced here:

|GDS156|

   Figure D-1 of Pima County Hydrologic Procedures Relating CN to Hydrologic Soil Cover and Density

   These relationships are summarized in the following table.

   Table 1: Relationships for Evaluating the CN Based on Hydrologic Soil Cover and Cover Density

.. list-table::
   :widths: 12 12 12 12 12 12 12 12
   :header-rows: 0


   * - **HSC**
     -
     -
     - **Cover density (CD) Range**
     - **Formula**
     - **A**
     - **B**
     - **C**

   * - **DESERT BUSH**
     -
     -
     -
     -
     -
     -
     -

   * -
     -
     - **D**
     - 0-50
     - CN = A \* CD + B
     - -0.08
     - 93
     -

   * -
     -
     - **C**
     - 0-50
     - CN = A \* CD + B
     - -0.08
     - 90
     -

   * -
     -
     - **B**
     - 0-50
     - CN = A \* CD + B
     - -0.07
     - 84
     -

   * - **HERBACEOUS**
     -
     -
     -
     -
     -
     -
     -

   * -
     -
     - **D**
     - 0-80
     - CN = A \* CD + B
     - -0.0875
     - 93
     -

   * -
     -
     - **C**
     - 0-80
     - CN = A \* CD + B
     - -0.1875
     - 90
     -

   * -
     -
     - **B**
     - 0-80
     - CN = A \* CD + B
     - -0.2625
     - 84
     -

   * - **MONTAIN BRUSH**
     -
     -
     -
     -
     -
     -
     -

   * -
     -
     - **D**
     - 0-80
     - CN = A \* CD^2 + B \* CD + C
     - -0.0013
     - -0.1737
     - 95

   * -
     -
     - **C**
     - 0-80
     - CN = A \* CD^2 + B \* CD + C
     - -0.0014
     - -0.2942
     - 90

   * -
     -
     - **B**
     - 0-80
     - CN = A \* CD^2 + B \* CD + C
     - -0.0025
     - -0.3522
     - 83

   * - **JUNIPER-GRASS**
     -
     -
     -
     -
     -
     -
     -

   * -
     -
     - **D**
     - 0-80
     - CN = A \* CD + B
     - -0.1125
     - 93
     -

   * -
     -
     - **C**
     - 0-80
     - CN = A \* CD + B
     - -0.34375
     - 90.5
     -

   * -
     -
     - **B**
     - 0-80
     - CN = A \* CD + B
     - -0.525
     - 84
     -

   * -
     -
     -
     -
     -
     -
     -
     -

   * - **PONDEROSAPINE**
     -
     -
     -
     -
     -
     -
     -

   * -
     -
     - **C**
     - 0-10
     - CN = A \* CD^2 + B \* CD + C
     - 0.08
     - -1.9
     - 91

   * -
     -
     -
     - 10-80
     - CN = A \* CD + B
     - -0.242857
     - 82.42857
     -

   * -
     -
     - **B**
     - 0-10
     - CN = A \* CD^2 + B \* CD + C
     - 0.1
     - -2.4
     - 84

   * -
     -
     -
     - 10-80
     - CN = A \* CD + B
     - -0.3
     - 73
     -

   * -
     -
     -
     -
     -
     -
     -
     -

   * - **Legend**
     -
     -
     -
     -
     -
     -
     -

   * -
     - HSC
     - Hydrologic
     - Soil Cover
     -
     -
     -
     -

   * -
     - CN
     - Curve Numb
     - r
     -
     -
     -
     -

   * -
     - CD
     - Cover Dens
     - ty (%)
     -
     -
     -
     -

   * -
     - A, B
     - Constants
     -
     -
     -
     -
     -


..

   For each soil group, a different formula was developed that calculates CN from the Cover

   Density (CD).
   For straight line segments a linear equation was used to represent that soil cover.
   For curved segments of the Excel curve fitting routines to determine the best-fit coefficients to represent the soil cover.
   Errors were estimated for each formula.
   Table 2 summarizes the validation and errors for each soil group set of formulas:

   In the *GDS* *Grid* menu there is a new command titled: *Compute SCS Curve Number*.
   This has two options: From *Single Shape File…* and *From Multiple Shape Files*.

|GDS157|

Assignment of CN’s Based on a Single Shape File
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Using this option, the *GDS* will determine the CN for each grid element based on a user provided polygon shape file that contains a CN for each
   polygon.
   First import the shape file using the *Import Shape File…* command in the *GDS* *File* menu.

Then use the *Grid/Compute SCS Curve Number/From Single Shape File…* command

   In the dialog box, select the Curve Number Shape file (LANDSOIL.SHP in this example) and the Curve Number Field (CurveNum in this example):

|GDS158|

   *GDS* will intersect the shape file polygons with the grid elements and determine the area weighted average value for each grid element.

Computation of CN’s Base on a Multiple Shape Files
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   This option computes the CN’s based on the method explained in above sections.
   It is necessary to import three polygon shape files for HSG, Land cover, and Impervious cover.
   After these shape file have been imported using the *Import Shape File…* command in the *GDS* *File* menu, then use the *Grid/Compute SCS Curve
   Number/From Multiple Shape Files* command

   The following dialog box will be displayed:

|GDS159|

1. Select the Hydrologic Soil Group Shape File and soil group field (landsoil.shp and LandSoil respectively in this example).

2. Select the Land Cover Shape File and land cover attribute field (land.shp and cov_dens respectively in this example).

3. Select the Impervious Area Shape File and impervious ID filed (Imperv.shp and IMP respectively in this example).

4. Click OK.

..

   *GDS* will intersect the shape files polygons with the grid elements and determine the area weighted average value for each grid element, based on the
   derived formulas previously discussed.
   Double-clicking on any grid element the new Infiltration dialog box will display the CN calculated for that element.
   *GDS* will create the new INFIL.DAT data file with the new CN’s for all grid elements.

   *FLO-2D* Infiltration Computation Using the SCS Curve Number Method *GDS* will create the new INFIL.DAT data file with the CN for all grid elements.

   3.5.26 Compute Width and Area Reduction Factors … (Grid Menu)

|GDS160|

   This command will compute the ARF and WRF factors from a polygon shape file of the buildings.
   The correction factor is a percentage and each ARF or WRF variable that is computed will be reduced by a multiplicative percentage factor.

   GDS ARF-WRF assignment from Shape Files

   Loss of flood storage due to buildings and other urban features can be graphically assigned through the Grid Developer System (GDS) using individual
   or polygon grid element selection.
   A new GDS procedure permits the automatic assignment of Area Reduction Factors (ARF) and Width Reduction Factors (WRF) from a polygon Shape File.
   The GDS will compute ARFs and WRFs assuming the polygons fully block the grid element corresponding surface areas, but also allows for global
   adjustments of either ARFs or WRFs based on user defined blockage percentages (fractions).
   This document summarizes the functionality of the new tool and provides instructions how to use it.

   Data requirements

   The ARF-WRF assignment tool requires the following data:

1. FLO-2D data files for a basic overland flood simulation and

2. A polygon Shape File where each polygon represents a building or obstruction to the flow Computation Method

For each grid element (cell), the GDS finds all Shape File polygon intersections with the cell.
The following figure shows an example where three polygons (building polygons) intersect a cell defining three areas A, B and C:

|GDS161|

Area Reduction Factor
^^^^^^^^^^^^^^^^^^^^^

   To calculate the Area Reduction Factor for this cell GDS performs the following operations:

   Total_Intersected_Area = AreaA + AreaB + AreaC

Area_Reduction_Factor = Total_Intersected_Area /Cell_Area

   Where AreaA is the intersected area of polygon A with the cell, and AreaB and AreaC are defined accordingly.
   Cell_Area is the Grid Element area.

Width Reduction Factor
^^^^^^^^^^^^^^^^^^^^^^

   To calculate the Width Reduction Factor for this cell the GDS performs the following operations:

The grid element or cell is divided into 9 subcells.
Each subcell is intersected with the polygons on the cell.
For example in the following configuration the SE WRF is computed based on the yellow area of the polygon:

   The shaded AreaSE is used to calculate the SE WRF as follows:

   SE Width Reduction Factor = AreaSE / Area_of_SubCell

   This algorithm accounts for the effect of width reduction factor even when the building or polygon is not intersecting the actual SE element side.

   3.5.27 Compute Limiting Froude Numbers … (Grid Menu)

   This command will compute the limiting Froude number for each grid element based on information contained in shape files.

3.5.28 Compute Cell Tolerances… (Grid Menu)

   This command will compute cell tolerances for each selected grid element based on information contained in shape files.

3.5.29 Compute Horton Variables… (Grid Menu)

   This command will compute and assign Horton values to cells intersected by the shapefile polygons based on the information contained in the variables
   selected in the shapefiles.

   3.5.30 Define Boundary Grid Elements/Element by Element (Grid Menu)

|GDS162|

   Use this command to mark or edit the grid elements that will constitute the computational domain boundary.
   These boundary grid elements are not used in a *FLO-2D* model flood simulation and are not included in either the FPLAIN.DAT, TOPO.DAT or CADPTS.DAT
   files.
   To use the *Define Boundary Grid Elements* command:

1. Select the *Define Boundary Grid Elements* *(Element by Element)* command (Grid menu).
   The mouse pointer changes to a cross.

2. Select the boundary grid elements.
   The grid element color will change to red.

3. Repeat step 2 as many times as needed to select or edit boundary grid elements.

To undo this operation simply click again on a previously marked grid element.
To mark a group of grid elements press the **Shift** key and the left mouse button and then drag the mouse pointer over the desired grid elements.
To deselect any group of grid elements, press the **Ctrl** key and with the left mouse button depressed, drag the mouse pointer over the grid elements
you want to unmark.

   3.5.31 Define Boundary Grid Elements/ Draw Line (Grid Menu)

   The boundary grid elements can also be identified by drawing a line around the computation domain.
   This command automates the process of defining the boundary elements.
   After the boundary grid elements have been marked with the line, they can be edited with the *Define Boundary Grid Elements/Element by Element*
   command.

|GDS163|

   Select this command after the grid system has been generated.
   When you click *Draw Line*, the following dialog box appears:

   Click *‘OK’* and proceed to draw a polyline with a series of left mouse button clicks.
   Complete the polyline by doubling clicking on the final vertex and then click *‘Yes’* in the following dialog box to generate the boundary elements.

   3.5.32 Setup Computational Area/Click Inside Modeling Area (Grid Menu)

   |GDS164|

   Use this command to select the computational domain.
   Once the flow domain is outlined with a closed boundary, identify computational domain (potential flow surface).

1. Choose the *Setup Computational Area* command.
   The cursor changes to a cross.

2. Click any grid element inside the closed area of the computational domain.
   If the computational domain area is closed, an acceptance message appears.
   If the boundary elements do not completely enclose an area, you will be informed that the area is still open.
   Additional boundary grid elements must then be marked to completely close the computational domain.

..

   If the boundary is edited, the computational domain can be re-generated by clicking on an interior grid element within the domain using the *Click
   Inside Modeling Area* command.
   This command will erase any interpolated data.

   3.5.33 Setup Computational Area/ Define Modeling Boundary with Polygon (Grid Menu)

   The computational domain can be defined by drawing a polygon to identify the boundary cells.

   |GDS165|

3.5.34 Setup Computational Area/ Define Modeling Boundary from Shapefile…(Grid Menu)

|GDS166|

   A polygon from an imported shapefile can be used to define the boundary.

   3.5.35 Create Grid Layer (Grid Menu)

|GDS167|

   This command will create the grid layer.
   When loading an existing *FLO-2D* project the grid layer is not created.
   Some component editor functions require the grid layer and a message will prompt the user to create this layer.
   Use this command to create the grid layer and continue with grid element attribute editing.

   **3.6** **Tools Menu Commands:**

1. Options…/Interpolation… (Tools Menu)

..

   This command defines the various options that control the interpolation process.
   When command is selected, a dialog box appears to adjust the various interpolation parameters:

   Dialog Box Options:

.. _`option`:

option:

Description

.. _`minimumnumberofdtmpointstoconsiderinthevicinityofeachgridelement`:

minimumnumberofdtmpointstoconsiderinthevicinityofeachgridelement:

To calculate an interpolated elevation from random DTM points that will represent each grid element, the algorithm will use at least this minimum
number of DTM points closest to the grid element center.

.. _`radiusofinterpolation(proportionaltogridelementsize)`:

radiusofinterpolation(proportionaltogridelementsize):

The radius defines a circle around each grid element node that is multiple of the element size.
Only the DTM points inside the radius are interpolated.
If an insufficient number of elevation points are within the circle, it is expanded until at least the minimum number of points is found.

.. _`inversedistanceweightingformulaexponent`:

inversedistanceweightingformulaexponent:

This is “n” in the Inverse Distance Weighting Formula:  *NDTM* 1  \ *j*\ =1 *Z j rijn*  *Z* :sup:`=` *NDTM* 1  \ *j*\ =1 *rijn*

Where Z¯ is the interpolated grid element elevation, Z\ :sub:`j` is the elevation of DTM point :sub:`j`, r\ :sub:`ij` is the distance from the DTM
point :sub:`j` to center of grid element :sub:`i` and NDTM is the total number of DTM points.

.. _`nofiltering(highorlowelevations)`:

nofiltering(highorlowelevations):

No filtering is performed on the elevation points.

.. _`maximumelevationdifference(foreitherhighorlowelevations)`:

maximumelevationdifference(foreitherhighorlowelevations):

For this option, the algorithm calculates a mean elevation using all the DTM and any assigned elevation points within the interpolation radius.
All those points that exceed the selected maximum elevation difference either higher or lower than the mean are discarded and the mean elevation is
recomputed and assigned to the grid element.

.. _`standarddeviationdifference(foreitherhighorlowelevations)`:

standarddeviationdifference(foreitherhighorlowelevations):

The algorithm first calculates the DTM point elevation standard deviation and then neglects all those points whose elevations are higher (or lower)
than the standard deviation when recalculating grid element mean elevation.


2. Options…/Change Refresh Count (Tools Menu)

..

   Use this command to speed up the redraw (refresh) rate for large projects.
   The refresh rate specifies how often the screen is updated when drawing maps.
   If there are 1000 vertices to draw and the refresh rate is 500, then the screen will be refreshed twice.
   A higher refresh rate results in faster draw times while a lower rate results a smoother draw appearance.
   A dialog box will appear prompting you to input a value for the refresh rate of the map or image:

3. Options…/Directory Paths (Tools Menu)

|GDS168|

   This command may be used to edit the default directories used by the *FLO-2D* model.
   The following dialog box appears:

   |GDS169|

   Input the desired new directory paths and then click *Apply*.

4. Measure Distance along Line (Tools Menu)

..

   |GDS170| |GDS171|

   This tool computes the distance along a user-input polyline.
   After clicking on the *Measure Distance along Line Command,* draw a polyline using the mouse and double click at the end point of the polyline.
   *GDS* will display the length of the polyline as shown below:

5. Compute Average Point Rainfall Depth (Tools Menu)

|GDS172|

   Use this command to compute Total Point Rainfall Depth (RTT in RAIN.DAT file).
   *Note: It is required that a RAIN.DAT file exist in the project folder.* An ArcInfo ASCII grid file with rainfall data must be previously imported to
   the *GDS*.
   The format of this file is the standard ASCII grid with the values corresponding to rainfall depths.
   The points will be displayed on the screen.
   To compute the average of the grid rainfall depth, draw a polygon and then only the rainfall points inside the polygon will be used in the
   calculation.

|GDS173|

   The following figure displays a *FLO-2D* grid system boundary, the ASCII rainfall point depth grid and the drawn polygon to compute that average
   rainfall depth over the *FLO-2D* grid system.

   |GDS174|

   To compute the average rainfall depth, choose the appropriate ArcInfo grid file from the file list in the following dialog box:

|GDS175|

   The following message will identify the number of grid points used to compute the average rainfall depth RTT value.
   The RAIN.DAT file RTT value will be updated.

|GDS176|

|GDS177|

3.6.6 Interpolate Variable Rainfall (Tools Menu)

|GDS178|

   This command will interpolate temporal rainfall for each *FLO-2D* grid element, based on spatially varied rainfall data in an ArcInfo ASCII grid file
   format.
   A file must be prepared that contains the storm beginning and ending dates and times, time interval of the rainfall data files (in minutes), number of
   reporting storm time intervals (one rainfall data file per interval) and the file name and location.
   Each subsequent rainfall data file will list the rainfall depth at a rain gage grid location (i.e.
   rainfall grid not the *FLO-2D* grid system) at that specific time.
   For example:

15 72 6/12/2002 13:00 6/12/2002 14:00 60 2

C:\\Models\\FLO2D_2002\\Maricopa2002\\Raindata2\\rain13h.dat

C:\\Models\\FLO2D_2002\\Maricopa2002\\Raindata2\\rain14h.dat

   In this case, the beginning date of the storm is 6/12/2002 and the storm beginning time is 13:00 hours.
   The storm ending date and time is 6/12/2002 and 14:00 hours.
   The time interval between rainfall data files is 60 minutes and there are two rain grid files in the list.
   The rainfall file format is the standard ArcInfo ASCII grid with the values corresponding to rainfall depths.
   Each file corresponds to a rainfall depth at a specific time for the rainfall grid system.
   The rainfall grid file (e.g. NEXRAD data) is prepared outside the *FLO-2D* software system.
   This file may be based on the rainfall gage distribution.
   This rainfall distribution over the rainfall grid has to be transformed into spatially varied rainfall assigned to grid elements in the *FLO-2D* grid
   system.
   This is accomplished using the variable rainfall interpolation algorithm in the *GDS* program.
   Once the ArcInfo ASCII file is read, the following dialog box permits adjustment of rainfall grid interpolation parameters.

|GDS179|

.. _`option`:

option:

Description

.. _`minimumnumberofraingridpointstoconsiderinthevicinityofeachgridelement.`:

minimumnumberofraingridpointstoconsiderinthevicinityofeachgridelement.:

To calculate the interpolated rainfall depth for each *FLO-2D* grid element, the algorithm uses at least this minimum number of points closest to the
grid element.

.. _`radiusofinterpolation(proportionaltogridelementsize).`:

radiusofinterpolation(proportionaltogridelementsize).:

This radius defines a circle around each grid element based on a multiple of the grid elements size.
Only rainfall grid points inside this radius are considered in the interpolation process.
If the number of rainfall grid points is insufficient, then the circle is automatically enlarged until at least the minimum number of points is found.


..

   After the interpolation is complete, choose the RAINCELL.DAT file location to save results.
   The RAINCELL.DAT file is then used by the *FLO-2D* model to simulate the rainstorm.
   The IREALRAIN variable switch in the *FLO-2D* RAIN.DAT file has to be set to 1 ‘on’ to simulate a real-time storm using the RAINCELL.DAT file.

   |GDS180|

   The format of the RAINCELL.DAT is as follows:

   Line 1: Beginning date and time, ending date and time, time interval (in minutes) and number of time intervals.

   Line 2: Grid element number and the total rainfall depth at that time.
   This line is repeated for each *FLO-2D* grid element.

   Successive rainfall data for the entire grid system follows for the number of time-interval groups.
   For the example above, there would be two sets of rainfall data for the entire grid system.

   60 2 6/12/2002 1:00:00 PM 6/12/2002 2:00:00 PM

1. 1.8538

2. 1.8537

**.
.**

1234.
2.272

1235.
2.2709

1. 1.4794

2. 1.4791

**.
.**

1234.
1.6294

1235.
1.6286

..

   In this above example the beginning date is 6/12/2002 the beginning time 1:00 PM, the ending date 6/12/2002 and the ending time 2:00 PM.
   The time interval between files is 60 minutes, there are two time intervals and 1235 grid elements.
   The rainfall depth for grid element number 1 at time 1:00 PM is 1.8538 in.
   Successive grid element rainfall depths follow.
   For the second time interval, the rainfall depth for the first grid element is 1.4794 in and the rest of the grid elements follow.
   If the grid system has been prepared in International Units (meters), then the rainfall data file should be prepared in mm.

3.6.7 Levee Express Editor (Tools Menu)

|GDS181|

   The Levee Express Editor facilitates assigning levee attributes for individual grid elements.

   You can use the Levee Express Editor to create or edit a levee.
   This tool will help you to assign levee crest elevations directly from the DTM point data base, if the DTM points are dense enough to represent the
   levee crest.
   If a number of DTM points fall on the top of the levee, the average of the five highest DTM points can be used to represent the levee crest.

   When you click this command or on the toolbar icon |GDS182| for an existing levee the following floating dialog appears:

|GDS183|

   When you double click a grid element that has a levee, the dialog will show the Maximum Point elevation of the DTM points inside the element, the
   average of the highest 5 DTM points in the element and the surrounding grid element elevations.
   Use the text boxes and the *Assign to Element* button to assign the levee crest elevations.
   Compare the Maximum Point Elevation (Max.
   Pt.
   Elev.) and the Average of the Five Highest Points (Ave.
   High (5) Pts.) with the upstream and downstream assigned levee crest elevations to assign the levee crest elevation for the given grid element.

3.6.8 Floating Variables Express Editor (Tools Menu)

|GDS184|

   This command opens the Floating Variables Express Editor that allows interactive editing of Area and Width Reduction Factors (ARF,WRF), Infiltration
   parameters and Multiple Channel Data.
   While the dialog remains open, the user can double click any element so that the data corresponding to the active tab will be loaded and can be
   edited.

|GDS185|

3.6.9 Create Channel Segment with a Polyline (Tools Menu)

|GDS186|

   This command creates the channel network in an existing *FLO-2D* grid system using a polyline as described below:

1. On the Tool menu click Create Channel Segment with a Polyline
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

2. The mouse pointer changes to a cross.

3. Click the first (upstream) grid element of the segment and then just draw a polyline using clicks.
   Use a background image to locate the channel with respect to the grid system.
   Channel elements are joined by arrows to visualize the channel location:

|GDS187|

   Click apply to accept the new channel segment.

|GDS188|

|GDS189|

   To edit channel geometry parameters, click a channel segment.
   A submenu appears with several options:

|GDS190|

   Select *Edit Channel Segment Parameters* and to display the Channel Segment dialog box:

|GDS191|

   The channel data is governed by the following rules (refer to the CHAN.DAT file description in the *FLO-2D* Data Input Manual for more detailed
   discussion):

1. *Maximum Froude Number*: Set the channel roughness to a reasonable n-value and then set the FROUDC variable to an appropriate value (e.g. 0.95 to
   ensure subcritical flow).
   *FLO-2D* will adjust the roughness values according to the limiting Froude number criteria.

2. *Roughness adjustment coefficient*: This coefficient is used for depth variable Manning’s n-values.
   This value can range from 0.00 to 0.4.

3. *Compute scour/deposition with sediment transport routine*: This is a check box to compute sediment transport in the channel segment.
   Checked the box if sediment transport is to be computed.
   In addition, ISED must be turned “On” in CONT.DAT.

4. *Initial flow depth*: When the *initial flow depth for all channel nodes* is > 0, an initial depth is specified for all the channel elements in that
   segment.
   Checking the *Initial Flow* check box |GDS192| requires assigning starting and ending water surface elevations for the channel segment beginning
   with element *1\ st node* and ending with element *last node.*

..

   Interpolated water surface elevations are assigned to the channel elements in that segment based on the channel length.

5. Each row in the “Channel Geometry” table corresponds to a channel grid element.

6. The “Geometry Regression Relationships” data table is enabled only when a variable geometry channel element of type “V” is selected in the “Channel
   Geometry” table.

7. Depending on the channel element data base some columns may be disabled.

8. The editing of channel element data in each segment is achieved by pressing the “Edit” button.
   Interact with the table in the following dialog window to edit the channel element data (node, extension direction, roughness and length):

..

   Additional channel data instruction comments can be found in the CHAN.DAT file descriptions.
   A few comments are highlighted here:

- Dividing the channel into segments may simplify reviewing the results.
  Organize the channel segments and elements from upstream to downstream with the inflow grid element being the first grid element in the file or
  segment.

- The key to channel routing is to balance the relationship between the slope, flow area and roughness.
  Channel routing is more stable if surveyed cross section data is used.
  Review the PROFILES program instructions for cross section and channel bed slope interpolation.

- If channel geometry is being simulated with regression relationships (SHAPE = ‘V’), then the area (A) versus depth (d) power relationships (A = ad\
  :sup:`b`) coefficients (a) and exponents (b) must be specified.
  Similar relationships are required for wetted perimeter and top width.
  If two power relationships are used to represent a natural

..

   cross section, then the maximum depth (*Depth for 2\ nd relationship variable*) to which the first relationship applies must be specified.
   Some rules for applying the second variable area channel geometry relationships follow:

i.   The second regression applies when the flow depth is greater than *Depth for 2\ nd relationship variable*, but does not include the lower flow area.
   The two variable area cross section relationships are unique and separate.
   The total cross section flow area is the sum of the lower flow and upper (second relationship) flow areas.
   The channel top width is computed directly from the second relationship.
   The area, wetted perimeter and top width are evaluated using the upper flow depth given by: (total depth - *Depth for 2\ nd relationship variable*).
   To analyze the upper channel geometry using the XSEC program, only the cross section coordinates above the *Depth for 2\ nd relationship variable* are
   used.

ii.
Channel geometry relationships apply only to flow depths that are less than the channel depth (lower than the top of bank).
When the flow depth exceeds the top of bank, then the channel geometry above bank is evaluated as a rectangle.

iii.
Abrupt transitions between contiguous channel elements should be avoided unless they actually exist.

iv.
A preprocessor program XSEC is available in the *FLO-2D* subdirectory to determine the regression coefficient and exponents.

- Channel elements that are contiguous but do not share discharge (e.g. parallel channels) must be identified with the NOFLO1 and NOFLO2 variables.
  List each pair of contiguous channel elements only once.

- Channel elements that will not share discharge will the floodplain have to be identified by the NOEXCHANGE parameter.

- To improve the timing of the floodwave progress through the system, a depth variable roughness can be assigned on a reach basis.
  The basic equation for the channel element roughness n\ :sub:`d` as function of flow depth is:

n\ :sub:`d` = n\ :sub:`b` r\ :sub:`c` e-(r2 depth/dmax)

   where:

   n\ :sub:`b` = bankfull discharge roughness depth = flow depth dmax = bankfull flow depth

   r2 = roughness adjustment coefficient prescribed by the user (range:
   0. to 0.4) r\ :sub:`c` = 1./e\ :sup:`-r2`

   This equation prescribes that the variable depth channel roughness is equal to the bankfull roughness at bankfull discharge.
   If the user assigns a roughness adjustment coefficient r2 for a given reach, the roughness will increase with a decrease in flow depth.
   A higher coefficient increases the roughness.

   To modify the channel elements in the channel segment, select the *Modify Channel Segment* Command:

   |GDS193|

   To modify the channel, click and drag the mouse from the last element in the channel segment.

   To delete an entire selected channel segment, select the *Delete Channel Segment* command:

|GDS194|

   If the channel segment has assigned inflow hydrographs the following warning will appear:

|GDS195|

   If you select Yes, you will need to click the inflow node(s) that was assigned to the segment and reassigned to the floodplain instead.

|GDS196|

   Click to reverse the channel direction.

|GDS197|

|GDS198|

|GDS199|

100

% zoom

Pan

Edit

Channel

Add Point

x, y Coord.

Activate Zoom

Prev.
Zoom

   Realign left bank channel elements by clicking and dragging the blue dots.
   The zoom, pan and edit features are also available with this tool.

|GDS200|

   To Realign the right bank elements use the Realign Extensions tool.
   It has the same capabilities as the realign channel tool.

|GDS201|

|GDS202|

   To see a plot of the cross section associated with each channel element.
   Click the Plot Cross Section option.

   Use this tool to assign cross sections to specified channel elements.
   The prev and next button is used to select the channel element and the drop down box is used to select the cross section.

|GDS203|

|GDS204|

   Click 3-D Plot to see a 3-D graphic of the channel segment.
   This tool helps with cross section data quality control.

|GDS205|

   Click Clear Problematic Right Banks to delete right bank assignments that will cause an error in the model.
   The banks must be reassigned.

   3.6.10 Select Channel Confluences (Tools Menu)

   Instead of assigning those channel elements that are contiguous but do not share discharge (NOFLOC’s), FLO-2D Pro version model assigns channel
   connections that share discharge from upstream to downstream.

   Channel confluences are defined to share flow by assigning connections between cells and the selection of those connections should observe the
   following general rules:

- Confluences on a given channel element will be possible as an upstream, downstream or tributary/split connection

- A tributary/split channel element should be the last channel element listed on the particular channel segment and must be contiguous to the main
  channel.
  In cannot be separated by one or more floodplain elements from the main channel.

- The tributary element can also be contiguous to either a left or right bank main channel element, if that is the case the connection will be defined
  between the tributary/split channel element and the main channel right bank element (respectively).
  FLO-2D model will find the left bank channel element at model runtime.

..

   Connections for the channel confluences can be assigned opening the following dialog box that will list Tributary/Split Channel data entry field
   column and Main Channel data entry field column:

|GDS206|

   User can select, add, delete or modify channel confluence elements using the options available on the following dialog:

3.6.11 Create a Cross Section (Tools Menu)

|GDS207|

   Use this tool to cut a cross section from elevation data.
   Elevation data must be loaded.
   Click Tools/Channels/Create a Cross Section.
   Create an elevation layer if necessary and then click and draw a line to define a cross section.

   Then assign the cross section to the N – natural channel.
   The red arrows point out the cross section as seen by the small black dotted line.
   The green arrow shows the channel element the cross section is assigned to.
   Repeat the process along the channel where ever a cross section is needed.
   Depending on the data, the cross sections might need adjustments.

|GDS208|

   The following dialog allows the user to select a cross section number and name, determine the number of station / elevation pairs and to assign the
   write-to text file.

   All data is appended to the xsec.dat file.
   Start with a blank xsec.dat file.

3.6.12 Assign a HEC-RAS Cross Section to a Channel Element (Tools Menu)

|GDS209|

   Use the File menu to import a HEC-RAS cross section.
   To manually assign a HEC-RAS cross section to a channel element, select the tool menu feature.
   Then select a HEC-RAS cross section and a channel element.
   Repeat the process until complete.

3.6.13 Auto Assign HEC-RAS Cross Section to Channel Elements (Tools Menu)

|GDS210|

   This feature will automatically assign the cross sections from HEC-RAS to the FLO-2D Channel.

3.6.14 Convert HEC-RAS Xsec to FLO-2D (Tools Menu)

|GDS211|

   This feature will read cross section data available in *HEC-RAS* format, convert it to *FLO2D* format and save it to XSEC.DAT files.
   The *GDS* reads the *HEC-RAS* file, locates the cross section key words, extracts the x, y, z data from each cross section and reformat the cross
   section data for the XSEC.DAT file.
   When this process is completed, another file dialog box appears to let the user select the location of the output XSEC.DAT file.

3.6.15 Convert HEC-RAS Channels to FLO-2D Channel Segments (Tools Menu)

|GDS212|

This feature will convert the HEC-RAS reaches to FLO-2D channel segments.

3.6.16 Delete HEC-RAS Channels (Tools Menu)

|GDS213|

This feature is used to delete HEC-RAS channel from the grid system.

3.6.17 Delete HEC-RAS Cross Sections (Tools Menu)

|GDS214|

   Use this option to delete HEC-RAS cross sections that are not needed.

3.6.18 Create Street Segment (Tools Menu)

|GDS215|

   This command enables the creation of the streets in an existing *FLO-2D* grid system using point and click tools as described below:

1. On the *Tool menu* click *Create Street Segment.*

2. The mouse pointer changes to a cross.

3. To add a new grid element to the street, click first grid element of the street segment.
   Then while holding the left mouse button down, the system selects street elements as the user moves over the grid system.
   A background map or aerial photograph image can be used to locate the streets.
   The streets are identified by green elements and with a solid continuous line when been generated in the *GDS*.

|GDS216|

   As the street development progresses from one grid element to the next, only the eight adjacent elements can be accessed (see above figure).
   When the mouse pointer is located near the center of the next element to be selected, a solid line arrow will appear to indicate that the element will
   be added to the street.
   The user can backup the pointer over the segment to unselect street grid elements.
   No mouse clicks are necessary, it is only necessary to move the mouse pointer over the desired elements.
   To finish the street element selection, the user double-clicks with the left mouse button.

   The street data assignment is not complete until the user assigns the street flow direction, street widths and n-values in the street editor dialog
   box.
   When the user clicks on an existing street, the street line will be colored in red and the following options appear:

|GDS217|

   To edit the street data, select *Edit Street Parameters* to display the Street Parameters dialog box:

|GDS218|

   The Street Parameter dialog box can also be accessed by left mouse button click a grid element with streets and clicking on the *Street Element*
   button.
   The street flow directions in the lower left of the dialog box are required data and must be assigned after completing the Create Street Option above
   (Task 3 above).
   Instructions for entering street follow:

1.  *Global n-value for street flow* - Global n-value that is assigned to all the street elements.

2.  *Maximum Street Froude number -* When the computed Froude number for the street flow exceeds this limiting street Froude number, the n-value is
   increased by 0.001 for that street element.

3.  *Global street width* - Global assignment of street width (ft or m) for all street elements.
   This street width is superseded by individual street widths if the individual street width is greater than zero (see *Flow direction from center of
   node and street width* check boxes).

4.  *Global curb height* - Global street curb height (ft or m).
   If the street curb height is exceeded by the flow depth, overland flow will result in the grid element containing the street.
   This value is used to assign a street curb height globally to all street elements.

5.  *Inflow hydrograph will enter the streets rather than floodplain node* - Check this box to have the inflow hydrograph enter the street rather than
   the floodplain portion of the grid element.

6.  *Curb height* - Optional curb height (ft or m) for an individual street element that supersedes the *global curb height*.

7.  *Elevation* - Optional individual street element elevation (ft or m).
   This elevation will supersede the floodplain grid element elevation.
   If this value is zero, the model will assign the street elevation as grid element floodplain elevation minus the curb height.

8.  *N-value* - Optional street n-value for the individual street segments within a given grid element.
   This value supersedes the *Global n-value for street flow*.
   If individual street nvalue is zero, the global value will be assigned to the grid element street segment.

9.  *Street name* - Character name of the street.
   Up to 15 characters can be used.
   The street name is not used in the *FLO-2D* model.

10.
*Flow direction from center of node and street width* - Streets emanate from the center of the grid element in a star pattern of eight potential flow
directions as show below.

|GDS219|

   When a given flow direction box is checked, a text box appears direct below the *flow direction check box* to input the optional grid element street
   width for that street flow direction ISTDIR:

|GDS220|

   By setting the text box to zero, the *Global street width* will be assigned to that street segment.

   Additional street data instruction comments can be found in the STREET.DAT file descriptions later in the manual.
   A few comments are highlighted here.

- Drawing the street outline with the Create Street Option does not complete the data assignment.
  You must click the street and add the global street parameters, street flow directions and individual street element parameters if they are different
  from the global parameters.

- The street depth, width and n-values can be assigned globally for all the street grid elements.
  The street depth, width and elevation can also be assigned for individual grid elements in the street local data form by setting these values greater
  than zero.

- If the street elevation is different from the representative grid elevation assigned in the FPLAIN.DAT file, it should be specified in the Street
  Local Form otherwise the street elevation will be the floodplain elevation minus the curb height.
  These elevations are then used to determine the street slope.

- The street width should be less than the side of the grid element.
  The overall floodplain surface area of the grid minus the streets surface area must be at least 5% of the original surface area (grid element width
  squared).
  If the street surface area consumes the entire grid element surface area, consider leaving out the smaller, less significant streets, reducing the
  street widths or transferring one street to a neighboring grid element.

..

   The street is assumed to extend from the center of the grid element to the grid element boundary in the eight flow directions.
   A street that crosses the entire grid element is assigned two street sections and directions.

3.6.19 Create Street Segment with a Polyline (Tools Menu)

|GDS221|

   With this command you can create a street segment using simple mouse point and clicks.
   First click *Create Street Segment with a Polyline* command; the cursor will change to a cross and as you click the mouse, the street segment will be
   progressively created.
   To complete the segment, double-click.

3.6.20 Create Levee Segment with a Polyline (Tools Menu)

|GDS222|

   With this command you can create a levee segment using simple mouse point and clicks.
   First click *Create Levee Segment with a Polyline* command; the cursor will change to a cross and as you click the mouse, the levee segment will be
   progressively created.
   To complete the segment, double-click.

3.6.21 Create Detention Basin (Tools Menu)

   This command will help to design detention basins for flood mitigation.
   The detention basin is created by adjusting the grid element topography to reflect the detention basin depression.
   No special *FLO-2D* components or data are necessary to utilize the detention basin feature.

|GDS223|

   The procedure to create a detention basin depression in the grid system topography is as follows:

1. The user selects the *Create Detention Basin* Command.

2. The system displays the following message:

|GDS224|

3. The user draws the polygon that defines the detention basin perimeter.
   The polygon is closed by double clicking on the last vertex of the polygon.

4. The *GDS* will then request for the detention basin volume (ft\ :sup:`3` or m\ :sup:`3`):

..

   |GDS225|

5. Input the desired volume and click *‘OK’*.
   The system will subtract a uniform depth (*Detention basin height*) from all the elements included in the detention basin polygon until the detention
   basin volume is matched.
   The floodplain element elevations are lowered to account for the *Detention basin volume*.

..

   If the user clicks on the detention basin polygons, the following menu appears:

|GDS226|

   When you click *View Detention Basin* the following message is displayed:

|GDS227|

3.6.22 Mud and Sediment Transport (Tools Menu)

|GDS228|

   This command allows entering mud flow or sediment transport data using the following dialog box.

|GDS229|

3.6.23 Evaporation (Tools Menu)

3.6.24 MODFLO-2D Simulation (Tools Menu)

|GDS230|

   This command allows entering data to simulate surface and groundwater flow using the *MODFLOW* integration.
   There following tabbed dialog box provides input fields for a subset of *MODFLOW* data.
   A separate manual explain in full the capabilities of the *FLO-2D* *MODFLOW* link, also called *MODFLO*-2D.

|GDS231|

3.6.25 Hydraulic Structures (Tools Menu)

|GDS232|

   The Hydraulic Structures command allows entering data required to simulate culverts, bridges and any other hydraulic structure that can be represented
   with a rating table or rating curve.

   |GDS233|

3.6.26 Rain (Tools Menu)

The Rain command allows entering data to simulate rainfall input over the FLO-2D grid.

3.6.27 Breach (Tools Menu)

|GDS234|

This command is used to enter levee breach data for the computed breach option.

Global Breach Data
^^^^^^^^^^^^^^^^^^

   Global breach data is used to input the dam or levee geometry and soil data in order to simulate an NWS Breach erosion condition.
   The model uses the global data along points of a levee or dam that meet a specific depth or time to breach criteria.

   |GDS235|

Individual Breach Data
^^^^^^^^^^^^^^^^^^^^^^

   Individual breach data is used to input the dam or levee geometry and soil data in order to simulate an NWS Breach erosion condition at a
   predetermined location.
   The model uses the breach data assigned to a specific location to breach at a specified elevation or time.

|GDS236|

Levee Fragility Curve Data
^^^^^^^^^^^^^^^^^^^^^^^^^^

   Levee fragility curves are used to determine a levee breach location based on data entered spatially along a levee profile.
   The fragility data is based on the existing levee condition and will activate a failure via erosional breach or prescribed failure once a certain
   depth criteria is met.

|GDS237|

   3.6.28 Drainage Basin Tools (Tools Menu)

|GDS238|

|GDS239|

|GDS240|

   |GDS241|

   |GDS242|

   |GDS243|

   3.6.29 Create Floodplain Cross Sections (Tools Menu)

|GDS244|

   This command will enable selection of grid elements for a floodplain cross section so that the *FLO-2D* model will calculate a hydrograph and compile
   hydraulic results for the flow across the cross section.
   You can create the cross section in an existing *FLO-2D* grid using point and click tools as described below:

1. On the *Tool menu* click *Create Floodplain Cross Sections.*

2. The mouse pointer changes to a cross.

3. Locate and position the mouse over the first grid element in a line of grid elements that will constitute the cross section.
   Click his first grid element of the cross section and then while holding the left mouse button down select the cross section grid elements as you move
   the mouse over the grid system.
   Cross section elements are joined by lines to visualize the cross section location.
   As the cross section development progresses from one element to the next, only the eight adjacent elements can be accessed.
   When the mouse pointer is near the center of the next element to be selected, a solid arrow appears to indicate that that element is the next one in
   the segment.
   The user can backup the pointer over the segment to unselect channel grid elements.
   No clicks are necessary, the users only needs to sweep the pointer over the desired elements.
   The cross section is completed when the user double-clicks with the left mouse button.

|GDS245|

4. Cross sections must be consists of grid elements in a continuous straight line and can only be in the four directions as indicated below:

..

   |GDS246|

   To edit the floodplain cross section grid elements, click a cross section.
   A short-cut menu appears with three options as shown:

|GDS247|

   Select *Edit Floodplain Cross Section* to display the floodplain cross section dialog box:

|GDS248|

   In the left data table are the grid elements that form the cross section.
   In the right data table of the dialog box, select the direction for discharge calculation.
   The cross section discharge will be computed for the selected flow direction that is perpendicular to the line of cross section grid elements.
   The model will create three output files:

   CROSSQ.OUT - This file contains the element grid hydrographs for each of the floodplain elements in the cross section.
   The time and discharge are listed for each output interval.

   CROSSMAX.OUT - This file lists the maximum discharge, maximum flow depth and time of occurrence for each grid element specified in the cross section
   analysis.

   HYCROSS.OUT - The output interval time, top width, depth, velocity and discharge are listed for each cross section.
   The discharge passing the cross section of grid elements is compiled as a hydrograph.
   The cross section maximum discharge and the individual grid elements are written to the CROSSMAX.OUT file.

   3.6.30 Surface Elevations Profile (Tools Menu)

|GDS249|

3.6.31 Levee Profile (Tools Menu)

|GDS250|

   This tool will display levee crest elevation profile of a selected levee segment along with the corresponding grid element ground elevations.
   To activate this tool, click the command *Levee Profile* and then click one of the grid elements that contain a levee.
   *GDS* will determine the continuity of the levee and change the levee color to dark green to identify the selected elements as shown in the figure
   below.

|GDS251|

   Then *GDS* will display the levee profile as shown in the following plot:

|GDS252|

   Using this *Formatting* Menu on the tool bar, the *GDS* will display the following dialog box so that you can customize the plot including the minimum
   and maximum elevations (Y-axis), legend position and angle of labels.

|GDS253|

3.6.32 Street Profile (Tools Menu)

   This command will create a street and ground elevation profile.
   To access this tool, click the *Street Profile* Command and click any street element.
   The *GDS* will display the street profile as shown:

|GDS254|

   Similar to the *Levee Profile Command*, use the *Formatting* command on the tool bar to display the following dialog box to customize the plot
   including the minimum and maximum elevations (Y-axis), Legend position and angle of labels.

3.6.33 Create Storage Volume Rating Tables (Tools Menu)

   This tool will create storage volume rating tables to keep watershed depression storage defined by the DTM points data.
   The depression storage accuracy can be retained by generating a depth-volume storage rating table for each selected grid element.

   To activate this tool, click the command *Create Storage Volume Rating Tables* and then click on *Compute Rating Curves*.
   *GDS* will calculate the rating tables and generate an outrc.dat file that contains the potential storage for each cell.

   |GDS255|

   |GDS256|

3.6.34 Storm Drain (Tools Menu)

   FLO-2D will compute the surface water depth at prescribed grid elements with storm drains and will compute the discharge inflow to the storm drain
   based input storm drain geometry.
   The Storm Drain model 5.1 will then compute the pipe network flows and potential return flow to the surface water.
   To activate this tool, click the command *Storm Drain.
   GDS* will allow you to enter, modify and view the Inlets as well as run EPA SWMM GUI 5.0 using the following dialogs:

|GDS257|

|GDS258|

   This command will open the EPA SWMM 5.0 program.
   Create a .inp file and save it to the project folder.
   Then use the Control Panel to load make the SWMMFLO.DAT file.

 3.6.34.1 Run Storm Drain GUI… (Tools Menu/Storm Drain)
 ''''''''''''''''''''''''''''''''''''''''''''''''''''''

|GDS259|

   This option runs the EPA SWMM GUI 5.0.
   It the link is not working copy the Epaswmm5.exe file from the EPA SWMM 5.0 folder to the FLO-2D Pro folder.

 3.6.34.2 View Storm Drain Inlets Dialog (Tools Menu)
 ''''''''''''''''''''''''''''''''''''''''''''''''''''

   This option loads the contents of the SWMMFLO.DAT file to be edited.
   The inlets can be edited here and the max depths can be edited here or in the swmm.inp.

 3.6.34.3 View Outfall Nodes Dialog (Tools Menu/Storm Drain)
 '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

This option generates the data written to the SWMMOUTF.DAT file.

 3.6.34.4 Storm Drain Display Option (Tools Menu/Storm Drain)
 ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

|GDS260|

These options define how the storm drain system appears on the GDS display window.

 3.6.34.5 Storm Drain Discharge Display (Tools Menu/Storm Drain)
 '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

   This option allows the user to review the inlet discharge hydrographs or print them to \*.jpg image files.
   Choose from this project to display on screen or from external project to save all projects to file.

|GDS261|

 3.6.34.6 Grade Lines (Tools Menu/Storm Drain)
 '''''''''''''''''''''''''''''''''''''''''''''

This option allows the user to review the grade lines for the conduits.

|GDS262|

**4.7 Contents (Help Menu)**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   |GDS263|

   The Help Contents Command accesses a .pdf version of this manual.
   The FLO-2D Software links to the website and the About… opens the welcome message.
   The welcome message shows the activation status and alerts a user if the subscription needs to be renewed.

|GDS264|

.. |GDS002| image:: media\GDS002.jpg
   :width: 3.08542in
   :height: 3.79944in
.. |GDS003| image:: media\GDS003.jpg
   :width: 4.13333in
   :height: 3.61667in
.. |GDS004| image:: media\GDS004.jpg
   :width: 4.66667in
   :height: 2.80833in
.. |GDS005| image:: media\GDS005.png
   :width: 4.42778in
   :height: 3.35181in
.. |GDS006| image:: media\GDS006.jpg
   :width: 3.40708in
   :height: 2.61597in
.. |GDS007| image:: media\GDS007.jpg
   :width: 1.88333in
   :height: 0.29989in
.. |GDS008| image:: media\GDS008.jpg
   :width: 3.10611in
   :height: 5.19028in
.. |GDS009| image:: media\GDS009.png
   :width: 1.42292in
   :height: 1.19949in
.. |GDS010| image:: media\GDS010.jpg
   :width: 3.9625in
   :height: 0.79167in
.. |GDS011| image:: media\GDS011.jpg
   :width: 0.18333in
   :height: 0.18333in
.. |GDS012| image:: media\GDS012.jpg
   :width: 0.19167in
   :height: 0.18333in
.. |GDS013| image:: media\GDS013.jpg
   :width: 0.19097in
   :height: 0.18267in
.. |GDS014| image:: media\GDS014.jpg
   :width: 0.1909in
   :height: 0.17431in
.. |GDS015| image:: media\GDS015.jpg
   :width: 0.18333in
   :height: 0.175in
.. |GDS016| image:: media\GDS016.jpg
   :width: 0.18333in
   :height: 0.175in
.. |GDS017| image:: media\GDS017.jpg
   :width: 0.18333in
   :height: 0.175in
.. |GDS018| image:: media\GDS018.jpg
   :width: 0.19167in
   :height: 0.175in
.. |GDS019| image:: media\GDS019.jpg
   :width: 0.18333in
   :height: 0.175in
.. |GDS020| image:: media\GDS020.jpg
   :width: 0.18333in
   :height: 0.175in
.. |GDS021| image:: media\GDS021.jpg
   :width: 0.19167in
   :height: 0.175in
.. |GDS022| image:: media\GDS022.jpg
   :width: 0.19167in
   :height: 0.175in
.. |GDS023| image:: media\GDS023.jpg
   :width: 0.18333in
   :height: 0.175in
.. |GDS024| image:: media\GDS024.jpg
   :width: 4.38236in
   :height: 3.82292in
.. |GDS025| image:: media\GDS025.jpg
   :width: 4.29097in
   :height: 3.74514in
.. |GDS026| image:: media\GDS026.jpg
   :width: 4.77014in
   :height: 4.16722in
.. |GDS027| image:: media\GDS027.jpg
   :width: 4.43347in
   :height: 3.87778in
.. |GDS028| image:: media\GDS028.jpg
   :width: 2.00556in
   :height: 3.01361in
.. |GDS029| image:: media\GDS029.jpg
   :width: 4.70139in
   :height: 4.10333in
.. |GDS030| image:: media\GDS030.jpg
   :width: 4.24792in
   :height: 3.71597in
.. |GDS031| image:: media\GDS031.jpg
   :width: 4.48958in
   :height: 3.95333in
.. |GDS032| image:: media\GDS032.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS033| image:: media\GDS033.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS034| image:: media\GDS034.jpg
   :width: 4.81736in
   :height: 5.08958in
.. |GDS035| image:: media\GDS035.jpg
   :width: 4.21528in
   :height: 4.20694in
.. |GDS036| image:: media\GDS036.jpg
   :width: 2.47014in
   :height: 3.56208in
.. |GDS037| image:: media\GDS037.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS038| image:: media\GDS038.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS039| image:: media\GDS039.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS040| image:: media\GDS040.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS041| image:: media\GDS041.jpg
   :width: 3.78056in
   :height: 3.81181in
.. |GDS042| image:: media\GDS042.png
   :width: 5.99861in
   :height: 3.37417in
.. |GDS043| image:: media\GDS043.jpg
   :width: 3.77431in
   :height: 3.81806in
.. |GDS044| image:: media\GDS044.jpg
   :width: 5.05764in
   :height: 2.71319in
.. |GDS045| image:: media\GDS045.jpg
   :width: 3.89931in
   :height: 3.81806in
.. |GDS046| image:: media\GDS046.jpg
   :width: 5.49903in
   :height: 3.81181in
.. |GDS047| image:: media\GDS047.jpg
   :width: 5.48653in
   :height: 3.81181in
.. |GDS048| image:: media\GDS048.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS049| image:: media\GDS049.jpg
   :width: 2.44861in
   :height: 3.53111in
.. |GDS050| image:: media\GDS050.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS051| image:: media\GDS051.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS052| image:: media\GDS052.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS053| image:: media\GDS053.png
   :width: 5.51181in
   :height: 3.09972in
.. |GDS054| image:: media\GDS054.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS055| image:: media\GDS055.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS056| image:: media\GDS056.png
   :width: 3.22861in
   :height: 2.76319in
.. |GDS057| image:: media\GDS057.png
   :width: 4.65653in
   :height: 2.61875in
.. |GDS058| image:: media\GDS058.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS059| image:: media\GDS059.jpg
   :width: 2.64306in
   :height: 3.81153in
.. |GDS060| image:: media\GDS060.png
   :width: 1.72361in
   :height: 3.10139in
.. |GDS061| image:: media\GDS061.jpg
   :width: 0.25in
   :height: 0.23333in
.. |GDS062| image:: media\GDS062.png
   :width: 1.89097in
   :height: 3.39236in
.. |GDS063| image:: media\GDS063.jpg
   :width: 0.25069in
   :height: 0.22704in
.. |GDS064| image:: media\GDS064.png
   :width: 1.95417in
   :height: 3.5in
.. |GDS065| image:: media\GDS065.png
   :width: 1.84306in
   :height: 3.30097in
.. |GDS066| image:: media\GDS066.jpg
   :width: 0.24167in
   :height: 0.23333in
.. |GDS017| image:: media\GDS017.jpg
   :width: 0.22917in
   :height: 0.21875in
.. |GDS067| image:: media\GDS067.png
   :width: 1.93889in
   :height: 3.49931in
.. |GDS068| image:: media\GDS068.png
   :width: 2.88264in
   :height: 2.20903in
.. |GDS069| image:: media\GDS069.png
   :width: 2.78333in
   :height: 3.69986in
.. |GDS070| image:: media\GDS070.png
   :width: 1.94236in
   :height: 3.49972in
.. |GDS071| image:: media\GDS071.jpg
   :width: 0.29167in
   :height: 0.25in
.. |GDS072| image:: media\GDS072.jpg
   :width: 6in
   :height: 0.55694in
.. |GDS073| image:: media\GDS073.png
   :width: 2.12639in
   :height: 3.85736in
.. |GDS074| image:: media\GDS074.jpg
   :width: 3.48333in
   :height: 1.94167in
.. |GDS075| image:: media\GDS075.jpg
   :width: 3.13125in
   :height: 3.10556in
.. |GDS076| image:: media\GDS076.jpg
   :width: 3.24264in
   :height: 3.56389in
.. |GDS077| image:: media\GDS077.jpg
   :width: 0.5in
   :height: 0.45in
.. |GDS078| image:: media\GDS078.jpg
   :width: 0.46736in
   :height: 0.48918in
.. |GDS079| image:: media\GDS079.jpg
   :width: 0.5in
   :height: 0.5in
.. |GDS080| image:: media\GDS080.jpg
   :width: 0.71042in
   :height: 0.44653in
.. |GDS081| image:: media\GDS081.jpg
   :width: 0.55347in
   :height: 0.5in
.. |GDS082| image:: media\GDS082.jpg
   :width: 0.71042in
   :height: 0.44653in
.. |GDS083| image:: media\GDS083.jpg
   :width: 0.58001in
   :height: 0.59583in
.. |GDS084| image:: media\GDS084.jpg
   :width: 0.55347in
   :height: 0.44653in
.. |GDS085| image:: media\GDS085.jpg
   :width: 0.57462in
   :height: 0.56944in
.. |GDS086| image:: media\GDS086.jpg
   :width: 0.45in
   :height: 0.5in
.. |GDS087| image:: media\GDS087.jpg
   :width: 0.55347in
   :height: 0.5in
.. |GDS088| image:: media\GDS088.jpg
   :width: 0.45in
   :height: 0.44653in
.. |GDS089| image:: media\GDS089.jpg
   :width: 0.56319in
   :height: 0.43958in
.. |GDS090| image:: media\GDS090.jpg
   :width: 0.57361in
   :height: 0.34306in
.. |GDS091| image:: media\GDS091.jpg
   :width: 0.44653in
   :height: 0.44653in
.. |GDS092| image:: media\GDS092.jpg
   :width: 0.32975in
   :height: 0.34583in
.. |GDS093| image:: media\GDS093.jpg
   :width: 0.32936in
   :height: 0.34583in
.. |GDS094| image:: media\GDS094.png
   :width: 1.86806in
   :height: 3.39903in
.. |GDS095| image:: media\GDS095.png
   :width: 1.86806in
   :height: 3.39903in
.. |GDS096| image:: media\GDS096.png
   :width: 1.87708in
   :height: 3.39931in
.. |GDS097| image:: media\GDS097.png
   :width: 1.86806in
   :height: 3.39903in
.. |GDS098| image:: media\GDS098.jpg
   :width: 3.64167in
   :height: 0.79999in
.. |GDS099| image:: media\GDS099.jpg
   :width: 0.25833in
   :height: 0.25833in
.. |GDS099| image:: media\GDS099.jpg
   :width: 0.25833in
   :height: 0.25833in
.. |GDS100| image:: media\GDS100.png
   :width: 1.79931in
   :height: 0.99961in
.. |GDS101| image:: media\GDS101.jpg
   :width: 3.64514in
   :height: 0.7999in
.. |GDS102| image:: media\GDS102.jpg
   :width: 3.67986in
   :height: 0.79997in
.. |GDS103| image:: media\GDS103.png
   :width: 2.27056in
   :height: 0.82083in
.. |GDS104| image:: media\GDS104.png
   :width: 1.77778in
   :height: 1.92292in
.. |GDS105| image:: media\GDS105.jpg
   :width: 1.85486in
   :height: 2.27653in
.. |GDS106| image:: media\GDS106.png
   :width: 1.41944in
   :height: 0.89999in
.. |GDS107| image:: media\GDS107.jpg
   :width: 3.28819in
   :height: 2.16319in
.. |GDS108| image:: media\GDS108.jpg
   :width: 0.24167in
   :height: 0.21667in
.. |GDS109| image:: media\GDS109.jpg
   :width: 0.21667in
   :height: 0.20833in
.. |GDS110| image:: media\GDS110.jpg
   :width: 3.53403in
   :height: 2.34097in
.. |GDS111| image:: media\GDS111.jpg
   :width: 3.12778in
   :height: 2.05764in
.. |GDS112| image:: media\GDS112.jpg
   :width: 3.74792in
   :height: 2.47347in
.. |GDS113| image:: media\GDS113.jpg
   :width: 0.20833in
   :height: 0.21667in
.. |GDS114| image:: media\GDS114.jpg
   :width: 3.77972in
   :height: 2.58889in
.. |GDS115| image:: media\GDS115.jpg
   :width: 1.95278in
   :height: 2.75833in
.. |GDS116| image:: media\GDS116.jpg
   :width: 2.07639in
   :height: 1.29514in
.. |GDS117| image:: media\GDS117.jpg
   :width: 3.75736in
   :height: 2.57708in
.. |GDS118| image:: media\GDS118.jpg
   :width: 3.54306in
   :height: 4.66181in
.. |GDS119| image:: media\GDS119.jpg
   :width: 1.06915in
   :height: 0.19722in
.. |GDS120| image:: media\GDS120.jpg
   :width: 2.22611in
   :height: 0.15972in
.. |GDS121| image:: media\GDS121.jpg
   :width: 3.64486in
   :height: 2.53056in
.. |GDS122| image:: media\GDS122.png
   :width: 3.62375in
   :height: 1.99097in
.. |GDS123| image:: media\GDS123.jpg
   :width: 2.62431in
   :height: 4.335in
.. |GDS124| image:: media\GDS124.png
   :width: 1.74514in
   :height: 1.79972in
.. |GDS125| image:: media\GDS125.png
   :width: 1.88333in
   :height: 0.88539in
.. |GDS126| image:: media\GDS126.png
   :width: 4.595in
   :height: 4.16944in
.. |GDS127| image:: media\GDS127.png
   :width: 3.95139in
   :height: 3.75097in
.. |GDS128| image:: media\GDS128.jpg
   :width: 2.42083in
   :height: 4in
.. |GDS129| image:: media\GDS129.jpg
   :width: 2.42083in
   :height: 4in
.. |GDS130| image:: media\GDS130.jpg
   :width: 2.42083in
   :height: 3.99889in
.. |GDS131| image:: media\GDS131.png
   :width: 3.45556in
   :height: 1.54139in
.. |GDS132| image:: media\GDS132.jpg
   :width: 2.42083in
   :height: 3.99889in
.. |GDS133| image:: media\GDS133.jpg
   :width: 2.42083in
   :height: 3.99889in
.. |GDS134| image:: media\GDS134.jpg
   :width: 2.42083in
   :height: 3.99889in
.. |GDS135| image:: media\GDS135.jpg
   :width: 2.42083in
   :height: 3.99889in
.. |GDS136| image:: media\GDS136.jpg
   :width: 3.71306in
   :height: 2.57292in
.. |GDS137| image:: media\GDS137.jpg
   :width: 2.96042in
   :height: 4.75139in
.. |GDS138| image:: media\GDS138.jpg
   :width: 3.46153in
   :height: 2.42431in
.. |GDS139| image:: media\GDS139.jpg
   :width: 3.86097in
   :height: 2.68056in
.. |GDS140| image:: media\GDS140.jpg
   :width: 3.61181in
   :height: 2.50278in
.. |GDS141| image:: media\GDS141.jpg
   :width: 3.91875in
   :height: 4.62639in
.. |GDS142| image:: media\GDS142.jpg
   :width: 2.11653in
   :height: 2.66389in
.. |GDS143| image:: media\GDS143.jpg
   :width: 4.76764in
   :height: 2.68125in
.. |GDS144| image:: media\GDS144.jpg
   :width: 2.35208in
   :height: 4.33153in
.. |GDS145| image:: media\GDS145.jpg
   :width: 1.92889in
   :height: 1.79931in
.. |GDS146| image:: media\GDS146.jpg
   :width: 2.55in
   :height: 1.38125in
.. |GDS147| image:: media\GDS147.jpg
   :width: 3.79222in
   :height: 2.58889in
.. |GDS148| image:: media\GDS148.jpg
   :width: 5.46431in
   :height: 4.30972in
.. |GDS149| image:: media\GDS149.jpg
   :width: 4.1in
   :height: 2.5625in
.. |GDS150| image:: media\GDS150.jpg
   :width: 5.99972in
   :height: 4.73194in
.. |GDS151| image:: media\GDS151.jpg
   :width: 3.73889in
   :height: 2.33681in
.. |GDS152| image:: media\GDS152.jpg
   :width: 3.20208in
   :height: 2.18403in
.. |GDS153| image:: media\GDS153.jpg
   :width: 2.88333in
   :height: 3.56667in
.. |GDS154| image:: media\GDS154.jpg
   :width: 1.86083in
   :height: 2.34375in
.. |GDS155| image:: media\GDS155.png
   :width: 2.22639in
   :height: 1.10394in
.. |GDS156| image:: media\GDS156.jpg
   :width: 5.525in
   :height: 6.85833in
.. |GDS157| image:: media\GDS157.jpg
   :width: 3.43833in
   :height: 2.57083in
.. |GDS158| image:: media\GDS158.png
   :width: 2.25889in
   :height: 1.11944in
.. |GDS159| image:: media\GDS159.png
   :width: 2.60972in
   :height: 2.84972in
.. |GDS160| image:: media\GDS160.png
   :width: 2.25889in
   :height: 1.11944in
.. |GDS161| image:: media\GDS161.png
   :width: 1.80208in
   :height: 1.20833in
.. |GDS162| image:: media\GDS162.jpg
   :width: 2.91097in
   :height: 2.31667in
.. |GDS163| image:: media\GDS163.jpg
   :width: 2.97778in
   :height: 2.36917in
.. |GDS164| image:: media\GDS164.jpg
   :width: 3.57083in
   :height: 2.36319in
.. |GDS165| image:: media\GDS165.jpg
   :width: 3.6925in
   :height: 2.44375in
.. |GDS166| image:: media\GDS166.jpg
   :width: 3.44028in
   :height: 2.2825in
.. |GDS167| image:: media\GDS167.jpg
   :width: 2.05in
   :height: 2.56222in
.. |GDS168| image:: media\GDS168.jpg
   :width: 3.32056in
   :height: 4.15556in
.. |GDS169| image:: media\GDS169.png
   :width: 3.67153in
   :height: 1.56597in
.. |GDS170| image:: media\GDS170.jpg
   :width: 1.99694in
   :height: 4.275in
.. |GDS171| image:: media\GDS171.png
   :width: 1.45417in
   :height: 1.25107in
.. |GDS172| image:: media\GDS172.jpg
   :width: 2.02639in
   :height: 4.29208in
.. |GDS173| image:: media\GDS173.png
   :width: 2.81069in
   :height: 1.06806in
.. |GDS174| image:: media\GDS174.jpg
   :width: 3.5in
   :height: 1.98333in
.. |GDS175| image:: media\GDS175.png
   :width: 2.25486in
   :height: 1.11806in
.. |GDS176| image:: media\GDS176.png
   :width: 2.72333in
   :height: 1.14931in
.. |GDS177| image:: media\GDS177.png
   :width: 4.26778in
   :height: 2.99931in
.. |GDS178| image:: media\GDS178.jpg
   :width: 2.42292in
   :height: 5.12694in
.. |GDS179| image:: media\GDS179.jpg
   :width: 2.375in
   :height: 1.38333in
.. |GDS180| image:: media\GDS180.jpg
   :width: 3.71667in
   :height: 0.73333in
.. |GDS181| image:: media\GDS181.jpg
   :width: 2.13819in
   :height: 4.55889in
.. |GDS182| image:: media\GDS182.jpg
   :width: 0.24167in
   :height: 0.23333in
.. |GDS183| image:: media\GDS183.jpg
   :width: 3.29167in
   :height: 3.575in
.. |GDS184| image:: media\GDS184.jpg
   :width: 2.00417in
   :height: 4.22069in
.. |GDS185| image:: media\GDS185.jpg
   :width: 2.49306in
   :height: 2.95694in
.. |GDS186| image:: media\GDS186.jpg
   :width: 4.96319in
   :height: 4.46986in
.. |GDS187| image:: media\GDS187.jpg
   :width: 5.175in
   :height: 1.65833in
.. |GDS188| image:: media\GDS188.jpg
   :width: 1.29167in
   :height: 0.40833in
.. |GDS189| image:: media\GDS189.png
   :width: 1.82639in
   :height: 0.87192in
.. |GDS190| image:: media\GDS190.jpg
   :width: 1.50764in
   :height: 1.26667in
.. |GDS191| image:: media\GDS191.png
   :width: 4.025in
   :height: 3.79764in
.. |GDS192| image:: media\GDS192.jpg
   :width: 0.75651in
   :height: 0.13472in
.. |GDS193| image:: media\GDS193.jpg
   :width: 1.50764in
   :height: 1.26667in
.. |GDS194| image:: media\GDS194.jpg
   :width: 1.50764in
   :height: 1.26667in
.. |GDS195| image:: media\GDS195.png
   :width: 1.97569in
   :height: 2.27083in
.. |GDS196| image:: media\GDS196.jpg
   :width: 1.29937in
   :height: 1.09167in
.. |GDS197| image:: media\GDS197.jpg
   :width: 1.50764in
   :height: 1.26667in
.. |GDS198| image:: media\GDS198.jpg
   :width: 1.06904in
   :height: 0.30972in
.. |GDS199| image:: media\GDS199.jpg
   :width: 2.475in
   :height: 0.8in
.. |GDS200| image:: media\GDS200.jpg
   :width: 1.06904in
   :height: 0.30972in
.. |GDS201| image:: media\GDS201.jpg
   :width: 1.29937in
   :height: 1.09167in
.. |GDS202| image:: media\GDS202.png
   :width: 4.53931in
   :height: 2.92431in
.. |GDS203| image:: media\GDS203.jpg
   :width: 1.50764in
   :height: 1.26667in
.. |GDS204| image:: media\GDS204.png
   :width: 5.14014in
   :height: 2.78125in
.. |GDS205| image:: media\GDS205.jpg
   :width: 1.50764in
   :height: 1.26667in
.. |GDS206| image:: media\GDS206.jpg
   :width: 4.81597in
   :height: 4.33278in
.. |GDS207| image:: media\GDS207.jpg
   :width: 4.47542in
   :height: 4.02639in
.. |GDS208| image:: media\GDS208.jpg
   :width: 3.91889in
   :height: 1.53958in
.. |GDS209| image:: media\GDS209.jpg
   :width: 4.19653in
   :height: 3.77556in
.. |GDS210| image:: media\GDS210.jpg
   :width: 4.325in
   :height: 3.89514in
.. |GDS211| image:: media\GDS211.jpg
   :width: 4.56639in
   :height: 4.08611in
.. |GDS212| image:: media\GDS212.jpg
   :width: 4.64153in
   :height: 4.18542in
.. |GDS213| image:: media\GDS213.jpg
   :width: 4.93236in
   :height: 4.44722in
.. |GDS214| image:: media\GDS214.jpg
   :width: 4.44931in
   :height: 4.02in
.. |GDS215| image:: media\GDS215.jpg
   :width: 2.37278in
   :height: 5.01667in
.. |GDS216| image:: media\GDS216.jpg
   :width: 1.10347in
   :height: 1.29693in
.. |GDS217| image:: media\GDS217.jpg
   :width: 1.00712in
   :height: 0.46181in
.. |GDS218| image:: media\GDS218.png
   :width: 4.76319in
   :height: 3.50347in
.. |GDS219| image:: media\GDS219.jpg
   :width: 0.85833in
   :height: 0.84167in
.. |GDS220| image:: media\GDS220.jpg
   :width: 1.66278in
   :height: 1.05972in
.. |GDS221| image:: media\GDS221.jpg
   :width: 2.09167in
   :height: 4.425in
.. |GDS222| image:: media\GDS222.jpg
   :width: 2.40278in
   :height: 5.03611in
.. |GDS223| image:: media\GDS223.jpg
   :width: 2.08472in
   :height: 4.38542in
.. |GDS224| image:: media\GDS224.png
   :width: 2.36403in
   :height: 0.9125in
.. |GDS225| image:: media\GDS225.png
   :width: 1.67917in
   :height: 0.83958in
.. |GDS226| image:: media\GDS226.jpg
   :width: 1.03049in
   :height: 0.24653in
.. |GDS227| image:: media\GDS227.png
   :width: 1.15972in
   :height: 0.85961in
.. |GDS228| image:: media\GDS228.jpg
   :width: 2.24167in
   :height: 4.72972in
.. |GDS229| image:: media\GDS229.jpg
   :width: 6.01597in
   :height: 4.51028in
.. |GDS230| image:: media\GDS230.jpg
   :width: 1.89514in
   :height: 3.99125in
.. |GDS231| image:: media\GDS231.png
   :width: 4.49819in
   :height: 3.45278in
.. |GDS232| image:: media\GDS232.jpg
   :width: 3.89722in
   :height: 3.99958in
.. |GDS233| image:: media\GDS233.jpg
   :width: 3.41611in
   :height: 3.60347in
.. |GDS234| image:: media\GDS234.jpg
   :width: 1.90972in
   :height: 4.00625in
.. |GDS235| image:: media\GDS235.png
   :width: 3.73333in
   :height: 4.63167in
.. |GDS236| image:: media\GDS236.png
   :width: 3.78611in
   :height: 4.69722in
.. |GDS237| image:: media\GDS237.png
   :width: 3.92778in
   :height: 4.87292in
.. |GDS238| image:: media\GDS238.jpg
   :width: 3.94778in
   :height: 4.16389in
.. |GDS239| image:: media\GDS239.jpg
   :width: 2.76306in
   :height: 0.32431in
.. |GDS240| image:: media\GDS240.jpg
   :width: 5.70625in
   :height: 2.38944in
.. |GDS241| image:: media\GDS241.jpg
   :width: 4.14917in
   :height: 4.39722in
.. |GDS242| image:: media\GDS242.jpg
   :width: 4.12611in
   :height: 4.38472in
.. |GDS243| image:: media\GDS243.png
   :width: 1.47917in
   :height: 1.18681in
.. |GDS244| image:: media\GDS244.jpg
   :width: 2.08875in
   :height: 4.42431in
.. |GDS245| image:: media\GDS245.jpg
   :width: 2.66667in
   :height: 1.55833in
.. |GDS246| image:: media\GDS246.jpg
   :width: 3.56667in
   :height: 0.90833in
.. |GDS247| image:: media\GDS247.jpg
   :width: 1.27631in
   :height: 0.35208in
.. |GDS248| image:: media\GDS248.png
   :width: 1.85764in
   :height: 1.76806in
.. |GDS249| image:: media\GDS249.jpg
   :width: 2.18403in
   :height: 4.60347in
.. |GDS250| image:: media\GDS250.jpg
   :width: 2.12208in
   :height: 4.50694in
.. |GDS251| image:: media\GDS251.jpg
   :width: 5.725in
   :height: 2.075in
.. |GDS252| image:: media\GDS252.png
   :width: 6in
   :height: 4.55833in
.. |GDS253| image:: media\GDS253.png
   :width: 2.53292in
   :height: 1.56944in
.. |GDS254| image:: media\GDS254.jpg
   :width: 6in
   :height: 1.42153in
.. |GDS255| image:: media\GDS255.jpg
   :width: 1.62917in
   :height: 3.44778in
.. |GDS256| image:: media\GDS256.png
   :width: 2.44653in
   :height: 0.69985in
.. |GDS257| image:: media\GDS257.jpg
   :width: 6.11944in
   :height: 5.35361in
.. |GDS258| image:: media\GDS258.jpg
   :width: 5.34639in
   :height: 3.90833in
.. |GDS259| image:: media\GDS259.jpg
   :width: 1.865in
   :height: 1.35208in
.. |GDS260| image:: media\GDS260.jpg
   :width: 1.865in
   :height: 1.35208in
.. |GDS261| image:: media\GDS261.png
   :width: 5.99944in
   :height: 3.42917in
.. |GDS262| image:: media\GDS262.jpg
   :width: 6.22014in
   :height: 3in
.. |GDS263| image:: media\GDS263.jpg
   :width: 1.98125in
   :height: 0.96496in
.. |GDS264| image:: media\GDS264.jpg
   :width: 6in
   :height: 4.65556in
