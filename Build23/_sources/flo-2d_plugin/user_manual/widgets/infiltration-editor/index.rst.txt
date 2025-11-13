Infiltration Editor
===================

FLO-2D uses three infiltration method.  Green_Ampt, SCS, and Horton infiltration data development is outlined in this
section.  The INFIL.DAT file contains the infiltration data.  The data can be global (uniform) or spatially variable
at the grid element resolution.  Global data is applied uniformly to all grid elements and spatially variable data allows
different parameters to be applied to individual cells or groups of cells.  The different methods for setting up the data
are defined below.

.. image:: ../../../img/Widgets/infiltration.png

.. toctree::
   :hidden:
   :maxdepth: 4

   GreenAmpt
   SCS
   Horton