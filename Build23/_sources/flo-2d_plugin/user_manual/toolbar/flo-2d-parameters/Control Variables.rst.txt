Set Control Parameters (CONT.DAT)
==================================

This button allows the user to set up the control variables.  The variable descriptions and instructions are available
in the Data Input Manual.

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\flo_help\\Manuals\\Data Input Manual PRO 2024.pdf

Control Parameters
-----------------------------

1. Click the
   Set Control Parameters (CONT.DAT) button.  This dialog box is used to set the control parameters for each simulation.

.. image:: ../../../img/Buttons/control001.png

Time Control and Plot Variables
__________________________________

1. Use this group of variables to define the simulation properties like simulation time and output interval.

2. Hover over any variable label to get a description in the tooltip.

.. image:: ../../../img/Setup-Control-Variables/cont001.png

Global Data Modification
__________________________

1. Global variables can be applied to all elements in the grid system.

.. Note:: The Global ARF = 1 Revision is written to the ARF.DAT file.

.. image:: ../../../img/Setup-Control-Variables/cont002.png

Switches
____________

1. Set up on off switches for modeling specific processes.  Don't turn on the switches until the data has been set up
   for each process.

.. image:: ../../../img/Setup-Control-Variables/cont003.png

Floodplain / Channel Display Options
______________________________________

1. The floodplain and channel switches will write more data to the base.out file when turned on.  The default is off (2).
   Keep them off unless troubleshooting specific processes or reviewing data on a timestep basis.

2. The Depress Depth (ft or m) is used to help find grid elements that have an elevation that is more than 3 ft lower
   lower than all of its neighbors.

3. The Depress Depth variable is also used to help find levees that have a crest elevation that is too close to the grid
   elevation.

4. Depress Depth used to be called super.out.  If trying to load a project in GDS, set this variable to 0 so GDS can l
   load it.

.. image:: ../../../img/Setup-Control-Variables/cont004.png

Time Lapse Output
______________________

1. Time lapse output will write data to several different output files like TIMDEP.OUT.  Review the Data Input manual
   for more information.

2. Uncheck the Use Time Interval checkbox if the full simulation is to be modeled.

.. image:: ../../../img/Setup-Control-Variables/cont005.png

Numerical Stability
---------------------

Numerical stability parameters are defined on the second tab.

1. Numerical stability parameters.

.. image:: ../../../img/Setup-Control-Variables/toler001.png

.. Note:: The wavemax variable has been removed from this version of the FLO-2D Plugin.  The variable hasn't been
   used in a long time but it was maintained as a place holder.  If you have a toler.dat with a wavemax > 0.00, you
   likely have a project that is FLO-2D v2007 or earlier.  Get tech support to help identify which build was used for your project.

   Contact-us_ to find the correct version of GDS or Installation.

   .. _Contact-Us:  https://flo-2d.com/contact/

2. Courant Numbers

.. image:: ../../../img/Setup-Control-Variables/toler002.png
