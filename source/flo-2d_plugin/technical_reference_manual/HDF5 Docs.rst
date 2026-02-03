Appendix C: FLO-2D HDF5 Data Structure
======================================

Use this reference as a structural map of the `input.hdf5` file. Variables shown in **red** correspond to entries in 
the Data Input Manual, while those in **green** are internal cross-reference or ID fields used to link data across 
different tables.

.. note::

   HDF5 files are designed to store large amounts of data efficiently. Each table in an HDF5 file works best when 
   it contains only one type of data. 
   
   Examples include:

   - Floating-point (decimal) numbers
   - Integers (whole numbers)
   - Strings (text)

   If different types of data are mixed in one table, it can increase file size and make the data harder to work 
   with in code. To keep the structure simple and efficient, FLO-2D stores values like switches or grid numbers as 
   floating-point numbers. This is why you may see values such as 1.0 or 3254.0 in the HDF5 file, even though they 
   represent whole numbers.

.. contents:: Contents
   :local: 
   :depth: 1
   :backlinks: entry

Boundary Conditions
-------------------

Inflow
~~~~~~
Defines the location and time series for inflow hydrographs.

*Corresponds to:* `INFLOW.DAT`

.. image:: ./img/hdf5/FLO060.png

Reservoirs
~~~~~~~~~~
Specifies the reservoir nodes, elevations and a manning's n value corrector.

*Corresponds to:* `INFLOW.DAT`

.. image:: ./img/hdf5/FLO060A.png

Outflow
~~~~~~~

**Floodplain Normal Depth**

*Corresponds to:* `OUTFLOW.DAT`

Defines rating curve or normal depth outflow control for floodplain cells.

.. image:: ./img/hdf5/FLO085.png

**Channel Normal Depth**

Normal depth outflow control for channels.

.. image:: ./img/hdf5/FLO086.png

**Floodplain Time Stage**

Time-series stage boundary for floodplain grid cells.


.. image:: ./img/hdf5/FLO087.png

**Floodplain and Channel Time Stage**

Combined time-stage outflow control affecting both domains.

.. image:: ./img/hdf5/FLO088.png

**Channel Time Stage**

Time-stage boundary applied to channel outflows.

.. image:: ./img/hdf5/FLO089.png

**Floodplain and Channel Time Stage and Free**

Free outflow combined with a time-stage control.

.. image:: ./img/hdf5/FLO090.png

**Channel Time Stage and Normal**

Combines stage-based control with a normal depth fallback.

.. image:: ./img/hdf5/FLO091.png

**Channel Depth-Discharge Power Regression**

Defines outflow using regression coefficients.


.. image:: ./img/hdf5/FLO092.png

**Channel Depth-Discharge Table**

Tabulated depth-discharge pairs for outflow control.

.. image:: ./img/hdf5/FLO093.png

Channels
--------

Global
~~~~~~
All 1D channel data will have a control data and bank data.

*Corresponds to:* `CHAN.DAT`, `CHANBANK.DAT`

.. image:: ./img/hdf5/FLO063.png

Channel Natural
~~~~~~~~~~~~~~~
Channel cross reference and and cross section station elevation data.

*Corresponds to:* `CHAN.DAT`, `XSEC.DAT`

.. image:: ./img/hdf5/FLO065.png

Channel Trapezoidal
~~~~~~~~~~~~~~~~~~~
Defines trapezoidal cross sections using base width, depth, and side slope.

*Corresponds to:* `CHAN.DAT`

.. image:: ./img/hdf5/FLO083.png

Channel Rectangular
~~~~~~~~~~~~~~~~~~~
Defines rectangular cross sections using base width and depth.

*Corresponds to:* `CHAN.DAT`

.. image:: ./img/hdf5/FLO084.png

NoExchange / Confluence
~~~~~~~~~~~~~~~~~~~~~~~~
Reserved for special conditions like confluence or split flow and no exchange condition between the channel and floodplain.

*Corresponds to:* `CHAN.DAT` C lines and E lines.

.. image:: ./img/hdf5/FLO084a.png

Starting Water Elevation
~~~~~~~~~~~~~~~~~~~~~~~~
Reserved for special conditions where a channel needs a water surface elevation to be applied between two channel elements within the same
channel segment.  

*Corresponds to:* `CHAN.DAT` Lines 3a and 3b.

.. image:: ./img/hdf5/FLO084b.png


Control Parameters
------------------
Contains global control data and switches and numerical tolerances.

*Corresponds to:* `CONT.DAT`, `TOLER.DAT`

.. image:: ./img/hdf5/FLO067.png

Grid
----
Defines spatial layout and surface properties.

*Corresponds to:* `TOPO.DAT`, `MANNINGS_N.DAT`, `CADPTS.DAT`, `FPLAIN.DAT`, `NEIGHBORS.DAT`

.. image:: ./img/hdf5/FLO068.png

Floodplain Cross Section
-------------------------
Defines cross section grid elements that are reported to cross section output files.

*Corresponds to:* `FPXSEC.DAT`

.. image:: ./img/hdf5/FLO073.png

Gutter
------
Defines gutter parameters.

*Corresponds to:* `GUTTER.DAT`

.. image:: ./img/hdf5/FLO115.png

Hydraulic Structures
--------------------
Hdf5 data for hydraulic structures is organized into several tables, each corresponding to a specific structure type or function.

*Corresponds to:* `HYSTRUC.DAT`, `BRIDGE_XSEC.DAT`, `BRIDGE_COEFF.DAT`

Control tables and name tables.

.. image:: ./img/hdf5/FLO106.png

Depth Discharge Tables and Culvert Equation Tables.

.. image:: ./img/hdf5/FLO107.png

Rating curve and replacement curve tables.

.. image:: ./img/hdf5/FLO108.png

Bridge tables parameters and cross section data.

.. image:: ./img/hdf5/FLO111.png

.. image:: ./img/hdf5/FLO109.png

.. image:: ./img/hdf5/FLO110.png

Infiltration
------------
Infiltration data is organized into several tables, each corresponding to a specific infiltration method or parameter set.

*Corresponds to:* `INFIL.DAT`

Method
~~~~~~
Defines the selected infiltration method: Green-Ampt, SCS, or Horton.

Green Ampt
~~~~~~~~~~
Defines Green-Ampt infiltration parameters spatially or globally.

.. image:: ./img/hdf5/FLO076.png

.. _scs_hdf:

SCS Curve Number
~~~~~~~~~~~~~~~~
Defines SCS curve number infiltration parameters spatially or globally.

.. image:: ./img/hdf5/FLO077.png

.. _horton_hdf:

Horton
~~~~~~
Defines Horton infiltration parameters spatially or globally.

.. image:: ./img/hdf5/FLO078.png

Levee
-----
Defines levee parameters and levee and breach failure parameters.

*Corresponds to:* `LEVEE.DAT`

.. image:: ./img/hdf5/FLO071.png

Levee Failure Prescribed
~~~~~~~~~~~~~~~~~~~~~~~~
Prescribed levee failure using time of breach and prescribed vertical and horizontal levee failure rates.

.. image:: ./img/hdf5/FLO096.png

Levee Failure Breach Erosion
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Dynamic breach using Fread BREACH method.

*Corresponds to:* `BREACH.DAT`

.. image:: ./img/hdf5/FLO097a.png

.. image:: ./img/hdf5/FLO097.png

Levee Failure Curve
~~~~~~~~~~~~~~~~~~~
User-defined breach progression using curve data.

Rainfall
--------
Defines rainfall parameters.

Uniform Rainfall
~~~~~~~~~~~~~~~~
Applies rainfall uniformly across all grid cells.

*Corresponds to:* `RAIN.DAT`

.. image:: ./img/hdf5/FLO079.png

Spatial Rainfall
~~~~~~~~~~~~~~~~
Applies rainfall using spatial rainfall depth distribution.

*Corresponds to:* `RAIN.DAT`

.. image:: ./img/hdf5/FLO080.png

Realtime Rainfall
~~~~~~~~~~~~~~~~~
Uses real-time precipitation from gridded time series.

*Corresponds to:* `RAIN.DAT`, `RAINCELL.DAT`

Note: IRAINDUM table is organized by grid columns x time rows.

.. image:: ./img/hdf5/FLO081.png

Storm Drain
----------------
The storm drain data for HDF5 can be cross referenced to the storm drain files in the Data Input Manual.   All other data is saved to the SWMM.INP and
SWMM.INI files.  The storm drain data is saved to the HDF5 file in the following tables:

*Corresponds to:* `SWMMFLO.DAT`, `SWMMOUTF.DAT`, `SWMMRT.DAT`, `SWMMFLODROPBOX.DAT`, `SDCLOGGING.DAT`


.. image:: ./img/hdf5/FLO101.png

*Corresponds to:* `SWMMFLO.DAT`

.. image:: ./img/hdf5/FLO100.png

.. image:: ./img/hdf5/FLO102.png

.. image:: ./img/hdf5/FLO104.png

.. image:: ./img/hdf5/FLO103.png


Multiple Channel
----------------
The multiple channel data for HDF5 can be cross referenced to the multiple channel files in the Data Input Manual.

*Corresponds to:* `MULT.DAT`, `SIMPLE_MULT.DAT`

Multiple Channel Legacy Method

*Corresponds to:* `MULT.DAT`

.. image:: ./img/hdf5/FLO074a.png

Multiple channel simple method

*Corresponds to:* `SIMPLE_MULT.DAT`

.. image:: ./img/hdf5/FLO074b.png

Multiple channel combined method.

*Corresponds to:* `MULT.DAT`, `SIMPLE_MULT.DAT`

.. image:: ./img/hdf5/FLO074c.png


Reduction Factors
-----------------
Defines blocked cells for buildings and other obstructions.

*Corresponds to:* `ARF.DAT`

.. image:: ./img/hdf5/FLO075.png

QGIS
----
Modeller contact info and FLOPRO, Plugin, and QGIS version information.

.. image:: ./img/hdf5/FLO082.png

Tailings
--------
Defines tailings depth parameters, tailings depth and cv parameters, and tailings stack depth parameters. 

**TAILINGS**  
*Corresponds to:* `TAILINGS.DAT`

.. image:: ./img/hdf5/FLO112.png

**TAILINGS_CV**  
*Corresponds to:* `TAILINGS_CV.DAT`

.. image:: ./img/hdf5/FLO114.png

**TAILINGS_STACK_DEPTH**  
*Corresponds to:* `TAILINGS_STACK_DEPTH.DAT`

.. image:: ./img/hdf5/FLO113.png

Spatially Variable
-------------------
The 2D attributes for FLO-2D are stored in the Spatially Variable tables. The table name can be cross referenced to the corresponding \*.DAT file in the Data Input Manual.

**FPFROUDE**  
*Corresponds to:* `FPFROUDE.DAT`

**LID_VOLUME**  
*Corresponds to:* `LID_VOLUME.DAT`

**SHALLOWN_SPATIAL**  
*Corresponds to:* `SHALLOWN_SPATIAL.DAT`

**STEEPSLOPEN**  
*Corresponds to:* `STEEP_SLOPEN.DAT`

**TOLSPATIAL**  
*Corresponds to:* `TOLSPATIAL.DAT`

.. image:: ./img/hdf5/FLO094.png

