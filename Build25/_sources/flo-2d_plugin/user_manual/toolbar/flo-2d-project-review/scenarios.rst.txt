.. _scenarios:

Project Scenarios
=============================

Review scenarios lets users set up folder to compare model runs in a single instance.

.. image:: ../../img/Buttons/review001a.png

Set the project up by processing the results into a single hdf5 file. 
The tool will access data in this file only so it must be rebuilt each time the runs are finished.

.. image:: ../../img/scenarios/scen001.png

Once the Scenarios are set up, use the results tool to compare the results from various features.

Restrictions
----------------

- Simulation time must be identical for all runs.
- `TIMDEP.HDF5` must be present to use Time-Dependent Grid data. If the file is missing, disable the Time Dependent option.
- Grid size and grid layout must match.


Grid Elements
-----------------

The grid element results come from TIMDEP.OUT.

.. image:: ../../img/scenarios/scen002.png

Hydraulic Structures
----------------------

The hydraulic structure results come from HYDROSTRUCT.OUT.

.. image:: ../../img/scenarios/scen003.png

Channels
------------

The channel profiles and cross section results come from CHAN.DAT, XSEC.DAT, CHANMAX.OUT, and HYCHAN.OUT.

.. image:: ../../img/scenarios/scen004.png

.. image:: ../../img/scenarios/scen004a.png

Floodplain Cross Sections
----------------------------

The floodplain cross section data comes from HYCROSS.OUT.

.. image:: ../../img/scenarios/scen005.png

Storm Drain
---------------

The storm drain results come from swmm.rpt, SWMMOUTFIN.OUT, SWMMQIN.OUT.  

.. image:: ../../img/scenarios/scen006.png

.. image:: ../../img/scenarios/scen006a.png

.. image:: ../../img/scenarios/scen006b.png

