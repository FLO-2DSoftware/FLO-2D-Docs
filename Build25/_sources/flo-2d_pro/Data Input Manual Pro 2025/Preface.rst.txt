Preface
========

FLO-2D Input Data Overview
--------------------------

This manual describes the FLO-2D Pro Model data input parameters and their format.The FLO-2D data base consists
of a series of ASCII files organized by model components. A flood model starts with routing a hydrograph over
an unconfined floodplain surface. This model can then be expanded with channel flow, levee or dam breach or
other components. Flood simulation detail can be enhanced by adding rainfall, infiltration, hydraulic structures,
levees, mudflows, sediment transport, rills and gullies, storm drains, buildings and flow obstructions. These
components are initiated through on-off switches found in the control data file (CONT.DAT). If the component
options are “turned on”, then the appropriate data files must be created.

To conduct a basic FLO-2D flood simulation, eight data files must be created. These files can be generated using
the FLO-2D Plugin for QGIS. The six required files for basic overland flow simulation are:

    - TOPO.DAT
    - MANNINGS_N.DAT
    - FPLAIN.DAT
    - CADPTS.DAT
    - CONT.DAT
    - TOLER.DAT
    - INFLOW.DAT
    - OUTFLOW.DAT

There are two new data files in the Pro model to assist with GIS and CADD program integration: TOPO.DAT
(coordinate data and elevation) and MANNINGS_N.DAT (cell and roughness n-value). These files can be used in
lieu of the FPLAIN.DAT and CADPTS.DAT files. The user is encouraged to start simple with a basic overland
flow simulation and build the flood detail into the model one component at a time to observe the effects of
each feature. Pre-processor programs such as the QGIS/FLO-2D Plugin, Grid Developer System (GDS), and PROFILES
facilitate developing and graphically editing the data files.

There are several ways to edit the FLO-2D data files. Since the data files are written in ASCII format, they
can be edited in any ASCII editor such as Microsoft NotePad®, TextPad®, UltraEdit®, and others. The FLO-2D
Plugin enables multiple selections of grid elements to edit spatially variable data with mouse point and click
commands. The PROFILES program can be used to edit channel and cross-section data.

There are two ways to run a FLO-2D simulation once the data files are constructed:

    1. The Pro model can be initiated from the FLO-2D Plugin.
    2. FLO-2D flood simulation can be started by copying the FLOPRO.EXE file and its respective .dlls into a
       project folder and double-clicking on the executable.

When the model is running the user has the option of graphically viewing the flood progression over the
grid system. An inflow hydrograph and the rainfall temporally distribution is also displayed. Upon completion
of the flood simulation, there are post-processor programs (FLO-2D MapCrafter, MAPPER, MAXPLOT, PROFILES,
The QGIS Mesh tool, and HYDROG) that will assist in reviewing the results.

This Data Input Manual includes descriptions of the processor programs, data variables and file format, and
output files. Each data file description contains a list of variables, variable definitions and instructional
comments. The instruction comments at the end of each file description provide hints for data organization,
range of data values and data limitations. For a discussion of the physical processes being simulated please
refer to the FLO-2D Reference Manual.