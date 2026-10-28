.. vim: syntax=rst

Chapter 2: Help and Resources
=============================

FLO-2D Tutorials
--------------------

**Tutorials**

There are several workshop lessons located in the FLO-2D Documentation subdirectory.

**QGIS/FLO-2D Plugin Lessons**

:ref:`Self-Help Kit Gila <self-help-kit-gila>`

   *QGIS Lesson 1 – Getting Started*

   - Part 1 of this lesson is setting up the grid and assigning elevation, roughness and saving the project.
   - Part 2 of this lesson shows the user how to build recovery and backup files.
   - Part 3 of this lesson shows the user how to add inflow nodes, assign rainfall and add infiltration.

   *QGIS Lesson 2 – Channels, Culverts*

   - This lesson outlines the process of setting up channels, hydraulic structures and in QGIS using the
     FLO-2D Plugin.

   *QGIS Lesson 3 – Storm Drain Urban*

   - This lesson outlines the process of converting a storm drain network from
     shapefile into a FLO-2D Storm Drain system in QGIS using the FLO-2D Plugin.

   *QGIS Lesson 4 – Buildings and Walls*

   - This lesson shows the user how to set up buildings and walls using QGIS and the FLO-2D Plugin.

   *QGIS Lesson 5 – Realtime Rainfall*

   - This lesson outlines the process of generating real-time rainfall data for each cell in QGIS using the
     FLO-2D Plugin.

   *QGIS Lesson 6 – Hydraulic Structures*

   - This lesson outlines the process to create culverts using rating tables in QGIS with the FLO-2D Plugin.

FLO-2D Example Flood Simulations
--------------------------------

.. _section-1:

A number of example projects are provided in the FLO-2D Documentation/Example Projects subdirectory.
Most of the example simulations are setup for the graphics mode and will take only a few minutes to run.
Run these projects using the Run for FLO-2D Project folder.

*Working with Geo-referenced Images – Goat Camp Creek, Gila County, Arizona (Goat subdirectory)*

   - This project provides an opportunity to work with the GDS editor components and capabilities.
     The aerial photos can be imported and used to edit the various model components such as channels,
     streets, ARF’s and WRF’s, and levees.
     This flood simulation includes channel overbank flow from a small river through an urban area.

*Large River Flooding – Rio Grande, New Mexico (Rio Grande subdirectory)*

   - Over 173 miles of the Middle Rio Grande is simulated using surveyed channel cross-section data.
     The river floodplain is confined by levees along most of its length.
     Use this flood simulation to review the data input in the XSEC.
     DAT and CHAN.DAT files and river-floodplain discharge exchange.

*Urban Watershed Flooding – Waikiki Beach, Oahu, Hawaii (Alawai subdirectory)*

   - This urban flooding example includes street flow and numerous buildings.
     Alawai Canal runs through the center of the project area and is open to the ocean.
     Excess rainfall runs off steep watersheds and enters channels that join the canal system in Waikiki beach.
     The Alawai Canal is nearly flat and is filled with water from the ocean at the start of the simulation.

*Urban Fan and Mudflow Simulation - Barnard Creek, Utah (BARN subdirectory)*

   - An example mudflow simulation is provided for an urbanized alluvial fan (Barnard Creek) near
     Centerville, Utah.
     This model simulates a mudflow debouching from a small watershed ravine onto a very steep alluvial fan
     with numerous streets and buildings.
     The mudflow enters the grid system at a debris basin, flows down a steep street and spreads out into the
     residential area.
     The mudflow is viewed overflowing the street, entering side streets and developed lots and becoming more
     fluid as the floodwave progresses downslope.
     Buildings have been simulated to account for the loss of storage and flow redirection.
     The mudflow simulation includes variable sediment concentration and the computation of viscosity
     and yield stresses.
     This flood simulation is a good example to review for mudflow, buildings and streets.

*Ocean Storm Surge/Tsunami Model in an Urban Area – Waikiki Beach, Oahu, Hawaii (Alawai-Tsunami subdirectory)*

   - By assigning stage-time relationships to the outflow elements along the Waikiki coast line, the Alawai
     watershed model is converted to an ocean storm surge or tsunami model.
     A high-water surface elevation is specified for the coastal elements for a short duration.
     This results in a rapid progression of the ocean storm surge over the urban area.
     The ocean surge enters streets and the Alawai Canal in the center of the city.
     The model demonstrates the application of the FLO-2D model to simulate the overland progression of
     hurricane storm surges or tsunami waves in urban areas.

*Urban Shallow Flooding - Urban Project Example*

   - Small isolated portion of a large urban study.
     This project has examples of trapezoidal channels, culvert, walls, buildings, urban n-values and a
     simple storm drain system.

*Sediment Transport - Sediment Transport Channel Example*

   - Example of sediment transport routing in a 1-D channel.

FLO-2D PowerPoint Presentation
------------------------------

These presentations discuss most of the FLO-2D components.
The files can be found in **FLO-2D Pro Documentation\\flo_help\\PowerPoint Presentations**.

Other Help Documents
--------------------

Several documents in the FLO-2D Handout folder provide advanced model guidance and discussion of specific
components and model techniques.
They can be found in **FLO-2D Pro Documentation\\flo_help\\Handouts**.

Metric Option
-------------

The user can choose either the English or Metric system of units (for the Metric system set METRIC = 1 in
the CONT.DAT file).
When using the Metric system, substitute the appropriate metric unit for the English unit in the data files.
The following basic units are used in the model:

*Table 2.1. FLO-2D Units of Measure Imperial/Metric.*

.. list-table::
   :widths: 25 25 25
   :header-rows: 1
   :class: longtable

   * - **Variable**
     - **English**
     - **Metric**
   * - discharge
     - ft\ :sup:`3`/s (cfs)
     - m\ :sup:`3`/s (cms)
   * - hydraulic conductivity
     - inches/hr
     - mm/hr
   * - rainfall abstraction
     - inches
     - mm
   * - soil suction
     - inches
     - mm
   * - velocity
     - ft/s (fps)
     - m/s (mps)
   * - volume
     - acre-ft
     - m\ :sup:`3` (cu-m)
   * - viscosity
     - dynes-s/cm\ :sup:`2`
     - dynes-s/cm\ :sup:`2`
   * - yield stress
     - dynes/cm\ :sup:`2`
     - dynes/cm\ :sup:`2`


Manning’s n-value is the same for both English and Metric units.
The conversion is part of the flood routing equation.