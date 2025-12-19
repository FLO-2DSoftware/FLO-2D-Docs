.. vim: syntax=rst

Chapter 7: Debugging and Trouble Shooting the Data Files
========================================================

**Troubleshooting Guidelines**

**Data Errors**

Data input errors may result in the automatic termination of a simulation run along with a Fortran error message.
The error message will report a ‘Unit’ number that is associated with the FLO-2D file that contains the error.
The files are listed in Table 4.1, Table 7.1, and Table 7.2.

**Table 7.1 List of Misc Files and Unit Numbers**

.. list-table::
   :widths: 25 25 25 25
   :header-rows: 0

   * - **Unit No.**
     - **File Name**
     - **Unit No.**
     - **File Name**

   * - 47
     - ARF.BAC
     - 398
     - MANNINGS_N.BAC

   * - 260
     - BREACH.BAC
     - 2902
     - MANNINGS_N_RES.BAC

   * - 387
     - BUILDING_COLLAPSE.BAC
     - 48
     - MULT.BAC

   * - 46
     - CHAN.BAC
     - 51
     - OUTFLOW.BAC

   * - 40
     - CONT.BAC
     - 42
     - RAIN.BAC

   * - 35
     - EVAPOR.BAC
     - 1569
     - SDCLOGGING.BAC

   * - 41
     - FPLAIN.BAC
     - 49
     - SED.BAC

   * - 121
     - FPXSEC.BAC
     - 53
     - STREET.BAC

   * - 1610
     - GUTTER.BAC
     - 1567
     - SWMMFLO.BAC

   * - 69
     - HYSTRUC.BAC
     - 1564
     - SWMMOUTF.BAC

   * - 43
     - INFIL.BAC
     - 29
     - TOLER.BAC

   * - 44
     - INFLOW.BAC
     - 397
     - TOPO.BAC

   * - 58
     - LEVEE.BAC
     - 2901
     - TOPO_RES.BAC

**Troubleshooting: Is the flood simulation running OK?**

There are several indicators to help you identify modeling problems.
The most important one is volume conservation.
The FLO-2D results should be reviewed for volume conservation, surging, timestep decrements, and roughness adjustments with limiting Froude numbers.

*Volume Conservation*

   Any hydraulics model that does not report on volume conservation should be suspected of generating or losing volume.
   A review of the SUMMARY.
   OUT file will identify any volume conservation problems.
   This file will display the time when the volume conservation error began to appear during the simulation.
   Typically a volume conservation error greater 0.001 percent is an indication that the model could be improved.
   The file CHVOLUME.
   OUT will indicate if the volume conservation error occurred in the channel routing instead of the overland flow component.
   Components should be switched ‘off’ one at a time and the model simulation run again until the volume conservation problem disappears.
   This will identify which component is causing the difficulty.
   Some volume conservation problems may be eliminated by slowing the model down (decreasing the timesteps) using the numerical stability criteria.
   Most volume conservation problems are an indication of data errors.

*Surging*

   It is possible for volume to be conserved during a flood simulation and still have numerical surging.
   Numerical surging is the result of a mismatch between flow area, slope and roughness.
   It can cause an over-steepening of the floodwave identified by spikes in the output hydrographs.
   Channel surging can be identified by discharge spikes in the CHANMAX.OUT file or in the HYDROG program plotted hydrographs.
   Predicted high maximum velocities indicate surging.
   To identify floodplain surging, review the maximum velocities in the MAXPLOT or Mapper post-processor program.
   You can also review the VELTIMEC.OUT (channel) or VELTIMEFP.OUT (floodplain) files for unreasonable maximum velocities.
   Surging can be reduced or eliminated by adjusting (lowering) the stability criteria (COURANT or DEPTOLFP in TOLER.DAT) thus decreasing the timesteps.
   If decreasing the timesteps fails to eliminate the surging, then individual grid element topography, slope or roughness should be adjusted.
   This can be accomplished in the FLO-2D Plugin for floodplain flow.
   For channel flow, the PROFILES program can be used to make adjustments.
   Increasing the flow roughness will generally reduce or eliminate flow surging.
   For channel surging, abrupt transitions in flow areas between contiguous channel elements should be avoided.
   Setting a lower limiting Froude number for a channel reach may also help to identify the problem.

*Sticky Grid Elements*

   When the flood simulation is running slowly, the TIME.OUT file can be reviewed to determine which grid elements are causing the most timestep
   decreases (‘sticky elements’).
   TIME.OUT lists the top twenty floodplain, channel or street elements that caused the model to slow down.
   The file also lists whether the timestep decreases occur with the percent change in depth, Courant criteria or dynamic wave stability criteria.
   Adjustments can be made in the stability criteria to more equably distribute the timestep decreases.
   The model is designed to advance and decrement timesteps, so there have to be grid elements listed in the TIME.OUT file.
   If one or two grid elements have significantly more timestep decreases than the other elements listed in the file, the attributes of the ‘sticky’ grid
   elements such as topography, slope or roughness should be adjusted.
   The goal is to make the model run as fast as possible while avoiding numerical surging.

   If a floodplain element is causing most of the timestep decreases, check the SURFAREA.OUT file to determine how much surface area is left in the
   floodplain element for flood storage.
   If the floodplain element contains a channel bank, there may be very little surface area left for flood storage.
   This will cause the model run slowly with exchanges the flow between the channel and floodplain.
   To fix this problem:

    - Remove other components from the channel bank element including streets or ARF values.
    - Shorten the channel length (XLEN in CHAN.DAT).
      This will increase the surface area in the channel bank floodplain elements.
    - Decrease the channel cross-section width in the PROFILES program.


*Limiting Froude Numbers*

   There is a unique relationship between floodwave celerity and average flow velocity described by the Froude number that should not be violated during
   numerical flood routing.
   This is a physical relationship between the kinematic and gravitation forces.
   To use the limiting Froude number, estimate a reasonaclsble maximum Froude number for your flood simulation and assign the value to either FROUDL
   (floodplain), FROUDC (channels) or STRFNO (streets) variables.
   When the computed Froude number exceeds the limiting Froude number, the n-value is increased by a small value (~ 0.001) for the next timestep.
   This change in grid element n-value helps to create a better match between the slope, flow area and n-value during the simulation.
   When the limiting Froude number is no longer exceeded, the n-value is gradually decreased to the original value.
   The changes in the n-values during the simulation are reported in the ROUGH.OUT file.
   For the next FLO-2D simulation, grid element n-value adjustments can be made using the n-values reported in ROUGH.OUT.
   The maximum n-values are also reported in MANNINGS_M.RGH, CHAN.RGH and STREET.RGH files that are created at the end of a simulation.
   These (\*.RGH) files can then be renamed to data input files (\*.DAT) for the next flood simulation (e.g. MANNINGS_N.RGH = MANNINGS_N.DAT).

*Reviewing the results*

   FLO-2D results include the maximum area of inundation as displayed by the maximum flow depth, temporal and spatial hydraulic results, channel or
   floodplain cross-section hydrographs and peak discharges.
   The Mapper++ program can used to review maximum flow depths, water surface elevations or velocities.
   The results can be plotted as either line contours or shaded contours in Mapper++.
   Look for any maximum velocities or flow depths that are unreasonable.
   This may be an indication of numerical surging.

   The FLO-2D flood simulation can be terminated at any time during the run by clicking Exit on the toolbar.
   The simulation will terminate after the current output interval is completed and the output files are generated and saved.
   This enables the user to check if the flood simulation is running poorly (e.g. too slow or not conserving volume) and the simulation can be stopped
   without losing the opportunity to review the output data.

**Make some adjustments**

    The following data file adjustments may improve the simulation and speed up the model:

    *Spatial Variation of n-values*

       The most common cause of numerical surging is underestimated n-values.
       Typical n-values represent steady, uniform flow.
       Spatial variation of n-values will affect the floodwave progression (travel time) and reduce surging, but may not significantly impact the area of
       inundation (especially for longer flood durations).
       Focus on the critical part of the project area when adjusting n-values and review TIME.OUT and ROUGH.OUT to complete the n-value revisions.

    *Edit Topography*

       The interpolation of DTM points to assign elevations to grid elements is not perfect even when the FLO-2D Plugin filters are applied.
       It may be necessary to adjust some floodplain grid element elevations when you review the results.
       MAXPLOT and Mapper++ can be used to locate grid elements with unreasonable flow depths that may constitute inappropriate depressions.
       Floodplain depressions can sometimes occur along a river channel if too many floodplain DTM points located within the channel.

    *Floodplain Surface Area Reduction*

       The distribution of flood storage on the grid system can be influenced by assigning area reduction factors (ARF’s) to represent loss of storage (i.e.
       buildings).
       For large flood events, the assignment of individual grid element ARF values will usually have minor impact on the area of inundation.
       For local flooding detail, individual grid element ARF assignments may be justified.

    *Channel Cross-Section Adjustments*

       Typically a surveyed cross-section will represent five to ten channel elements.
       Selecting a cross-section to represent transitions between wide and narrow cross-sections requires engineering judgment.
       Use the PROFILES program to interpolate the transition between surveyed cross-sections.

    *Channel Slope Adjustments*

       Adverse channel slopes can be simulated by FLO-2D.
       Smoothing out an irregular slope condition over several channel elements to represent reach average slope conditions may speed up the simulation.
       Cross-sections with scour holes can result in local adverse slopes that misrepresent the average reach conditions.
       Review the channel slope in PROFILES.

    *Street Flow*

       High street velocities may cause numerical surging and slow the simulation down.
       Assign reasonable limiting street Froude numbers to adjust the street n-values.

**Model Calibration and Replication of Flood Events**

Estimating flood hydrology (both rainfall and flood hydrographs) can be difficult when replicating historical floods.
To match measured flood stages, high water marks or channel discharges, first determine a reasonable estimate of the flood volume, then concentrate on
the model details such as n-values, ARF’s and street flow.
Flood volume is more important to flood routing than the peak discharge.

**Trouble Shooting Technique**

When undertaking a new FLO-2D flood simulation, start simple and progressively build in model component detail.
After the required data files have been prepared, run a basic overland flood simulation.
Review the results.
If any issues arise consult the troubleshooting tips found in this chapter.
Table 7.2 lists some common data errors.

To debug the data files after a FLO-2D simulation, begin by reviewing the ERROR.CHK file.
All the data errors recognized by the model are reported in this file.
FLO-2D has an extensive data error and warning message system and the messages are reported in ERROR.CHK as data inconsistencies are encountered.
One of the most common errors is missing data that will invoke an end-of-file error statement to the screen.
This error occurs when the model is searching for more data than is in the data file.
Another common error is to activate a component or process switch without preparing the required data file.
For example, an error will occur if the component switch ICHANNEL = 1 in the CONT.DAT file, but the data file CHAN.DAT is not available.

One data error that is difficult to locate is the array allocation violation where the array index number becomes zero or larger than the assigned
value.
For example, there may be missing sediment concentrations in INFLOW.DAT for a mudflow simulation.
This made a code error where a variable is not initialized to zero.
When this type of error is encountered, the FLO-2D model is terminated with a FORTRAN error message without indicating the file location or line
entry of the error.
To locate the data error, simplify the simulation and turn off all of the components and turn them back on one at time until the error occurs again.
Reset simulation time to the model time just after the error occurred to reduce time to debug the model.
If attempts to debug an error are ineffective, send a zipped copy of the data files to FLO-2D via this |Contact-Form| along with brief description of the
problem.

.. |Contact-Form| raw:: html

   <a href="https://flo-2d.com/contact/" target="_blank">Contact Form</a>

The user can create a set of backup data files to debug the model.
Set IBACKUP = 1 in the CONT.DAT file.
These backup files replicate the data files and will indicate if the computer is reading the data files correctly.
The backup file should be identical to the original data file except for spacing.
If the program terminates before reaching the first output interval timestep, there is probably an error in the data files.
Start by checking the \*.BAC files one by one.
If one of the files is not complete, this may be the location of the data error.

Review the following files to analyze volume conservation problems: SUMMARY.
OUT, CHVOLUME.OUT, CHANMAX.OUT, TIME.OUT, BASE.OUT, ROUGH.OUT, CHANNEL.CHK, and SURFAREA.OUT.
See the ‘Pocket Guide’ for further troubleshooting tips involving volume conservation, sticky grid elements listed in the TIME.OUT file, and numerical surging.
The instructional comments at the end of each data file description in this manual contains a number of guidelines to assist the user in creating or
checking the data files.

**List of Common Data Errors**

A list of the most common errors associated with running FLO-2D is presented below and a table for troubleshooting runtime errors follows the list.
Whenever an error is encountered, refer to the ERROR.CHK file first.
All of the \*.CHK files are listed in Table 7.3.
The file descriptions can be referenced in Chapter 5.

**Table 7.2 List of Common Data Errors**

.. list-table::
   :widths: 100
   :header-rows: 0

   * - **Table 7. 2 List of Common Data Errors**

   * - 1. Missing data entries. Insufficient data was provided to the model.

   * - 2. Switches were activated without the corresponding data or files(for ex- ample, see MUD, ISED, etc., in the CONT.DAT file).

   * - 3. There was missing or additional lines in a data file when switch is activated. Observe the \**\* Notes: \**\* in the file descriptions.

   * - 4. Percentages were expressed as a number instead of a decimal. See the description of XCONC in CONT.DAT or the HP(I,J,3) variable in INFLOW.DAT.

   * - 5. The IDEPLT grid element was improperly assigned in INFLOW.DAT for the graphics mode.

   * - 6. Channel infiltration switch INFCHAN was not ‘turned on’ in the INFIL.DAT file.

   * - 7. Either one or both of channel and floodplain outflow elements were not assigned for a given grid element.

   * - 8. The street width exceeded the grid element width.

   * - 9. The array size limitation for a variable was exceeded.

   * - 10. The available floodplain surface area was exceeded by assigning channels, streets, ARF’s and/or multiple channels with too much surface area.

           Review the SURFAREA.OUT.

   * - 11. The rainfall variable R_DISTRIB data was entered as total cumulative rainfall instead of the percentage of the total rainfall (range0.0 to 1.0).

   * - 12. The ISEDN switch for channel sediment transport was not ‘turned on’ in the CHAN.DAT file for the channel segment.


**Runtime Errors**

If the simulation stops before reaching the prescribed simulation time, review the output files for diagnostic information:

    - If the program ends with a Fortran Error, screenshot the error message.
      It may reveal the file location where the error occurred.
    - Review the \*.CHK files for potential data errors.
    - Review the channel check files for potential errors.

Volume Conservation Errors
~~~~~~~~~~~~~~~~~~~~~~~~~~

Most volume conservation and numerical stability problems are associated with channel flow.
When constructing a channel system, it is often necessary to fabricate cross-section geometry, estimate roughness or adjust channel bed slopes.
Mismatched channel morphology parameters with an appropriate roughness are the primary source of numerical stability problems.
To compute smoother hydraulics between two channel grid elements, adjust the bed slope, cross-section flow area or roughness values.
Try to avoid abrupt changes in cross-sections geometry from one channel element to another.
The channel flow area for a natural channel (not a concrete rectangular or trapezoidal channel geometry) should make a gradual transition from a wide,
shallow cross-section to a narrow deep cross-section.
An actual cross-section transition may occur over several channel grid elements.
Adjust the channel geometry so that the maximum change in flow area between channel elements is less than 25%.
To address channel problems, consider the following measures:

    - Increase the roughness in wide, shallow cross-sections and decrease the roughness in narrow deep channel grid elements.
    - Reduce the difference between the cross-section areas.
      Avoid abrupt cross-section transitions between channel elements.
      Adjust the channel cross-section geometry in the PROFILES.
      Use PROFILES to re-interpolate between surveyed cross-sections.
    - Review and adjust the bed slope with the PROFILES program.
      Adverse bed slopes are OK but adverse spikes and dips are not.
    - Select a longer channel length within the channel grid element.

One Drive Sync
~~~~~~~~~~~~~~~

Running simulations on projects that are stored on a directory that is synced to One Drive may result in a simulation crash.
Small projects that run quickly and do not have long intervals between data output might be OK but it is a poor modeling practice to run projects on
paths like the Desktop or Documents folder that will always sync to Microsoft One Drive.
Not only does this practice risk a simulation crash, it also results in overall sluggish computational behavior.
Forcing a memory analysis and sync places a unnecessary burden on computer processors.
If simulations take more than 12 hours, consider moving projects to a directory that is not syncing to One Drive.

Anti-Virus Software
~~~~~~~~~~~~~~~~~~~~~~~~~

This program are important but allowing them to continually scan for viruses or malware will add a processing burden to the computer.
If a simulation takes more than 12 hours, consider running it on a computer that is dedicated to modeling that can be isolated with a firewall that
limits web traffic so that anti-virus software scans can be limited or turned off while the simulation is running.

External Drives
~~~~~~~~~~~~~~~~~~~~~

Running simulations on external drives may result in a crash due to drive connectivity errors.
It will also slow simulations since the data transfer at runtime is happening over the network path that connects the computer to the drive.
External drives may also have protections so that executables cannot write data to the drive.
It is better to run simulations on the local computer.

Servers and Virtual Computers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Running simulations on servers or virtual computers is relatively straight forward and easy.
For a Virtual Computer, simply set up the computer the same way a normal installation is performed.
FLO-2D and QGIS can be installed on a Virtual Computer.
Use it just like a regular computer.

Servers can be set up for running FLO-2D models but it is not necessary to install FLO-2D in order to run simulations.
A program like Docker can be used to build, deploy, and optimize server configurations.
Get help from an IT professional and FLO-2D staff to explore this option.
It should be noted that for FLO-2D no server system can outperform a high performance desktop computer running AMD high performance processors.

**Table 7.3 List of \*.CHK Files and Unit Numbers**

.. list-table::
   :widths: 25 25 25 25
   :header-rows: 0

   * - **Unit No.**
     - **File Name**
     - **Unit No.**
     - **File Name**

   * - 7
     - ERROR.CHK
     - 1234
     - MODFLOW_ERROR.CHK

   * - 56
     - CHANNEL.CHK
     - 1577
     - UNDERGROUNDOUTFALLS.CHK

   * - 86
     - CHANBANKEL.CHK
     - 1578
     - RainCell.CHK

   * - 194
     - BATCH.CHK
     - 1580
     - HDF5_Error.CHK

   * - 333
     - NOSHOW.CHK
     - 1590
     - RainOneCell.CHK

   * - 1571
     - STORMDRAIN_ERROR.CHK
     - 8871
     - ARF_ADJUSTMENT.CHK

   * - 991
     - DEBUG.CHK
     - 6669
     - HYDRAULIC STRUCTURE_SHALLOW FLOW WARNING.CHK

   * - 6670
     - 6670 HYDRAULIC STRUCTURE_TAILWATER WARNING.CHK
     - 6671
     - HYDRAULIC STRUCTURE_HEADWATER WARNING.CHK

   * - 6673
     - HYDRAULIC STRUCTURE\_ HEADWATER WARNING.CHK
-
     -


**Debugging Errors**

In addition to the following troubleshooting guide, refer to the ‘Getting Started Guidelines’ at the begin of this manual and the Pocket Guide to
assist in debugging runtime errors.

Program will not run:

    - Data errors: Turn off the component switches until the model runs.
    - The executable program was damaged: Reload the program or contact technical support.
    - The model is not properly licensed: Contact technical support.

Program stops

   The model run is terminated before the first timestep or after a few timesteps with data file error indicated on the screen or in ERROR.CHK:

    - Review the ERROR.CHK file or the data file identified by the program error message.
    - Review the backup file (\*.BAC).
    - Review the List of Common Data Errors.

Program stops

   The model run is terminated after several timesteps indicating a numerical stability error.
   The grid element causing the stability error is listed on the screen instability dialog box or at the end of the BASE.OUT file.

Stability criteria were not met.

   Review and revise the elevation and roughness data for the indicated grid element.
   The ROUGH.OUT and TIME.OUT files will help to locate the problem grid element.
   Check the contiguous grid elements to the problem element in the 8 directions as the problem may be with the neighbor element.

Volume conservation

   The volume conservation may indicate either a loss or gain of volume.
   A review of the SUMMARY.OUT and CHVOLUME.OUT will reveal if the volume conservation error is in the channel or on the floodplain.
   Volume conservation problems are indication of data error.

Discharge surging

   Numerical surging, which involves alternating low and high discharges, is typically associated with channel flow.
   Floodplain surging can also occur but is less common.
   Maximum floodplain velocities should be reviewed in the MAXPLOT, VELTIMEC.OUT, and VELTIMEFP.OUT files.
   Any unreasonable maximum velocities identified should be addressed.

   Other files that may indicate numerical surging include CHANMAX.
   OUT, HYCHAN.OUT, CHANSTABILITY.OUT, TIME.OUT, and ROUGH.OUT.

   Hydrograph plots generated in the HYDROG program may show spikes that suggest surging.
   It is important to note that surging can occur even when overall volume conservation remains acceptable.

Supercritical flow

   Supercritical flow is not necessary a problem, but its occurrence should be limited to conditions where it is expected such as in streets, concrete
   channels or steep bedrock watersheds.
   Supercritical flow on alluvial surfaces should be avoided.

Numerical Instability:

   The channel surging may be related to numerical instability, abrupt changes in channel geometry, inappropriate slopes, supercritical flow or variable
   mudflow sediment concentrations.
   Mismatched slope, flow area and n-values are the most common causes of channel instability.
   A combination of revisions may improve numerical instability.

    - Abrupt changes in slope or severe adverse slope may cause instability.
      Use the PROFILES program to fix irregular bed slope conditions.
    - Review the cross-section flow areas over several channel elements in PROFILES.
      Eliminate any abrupt changes in cross-section areas between channel elements.
      If the surging occurs at low flows, review only the bottom portion of the cross-section not the bankfull conditions.
    - Decrease the channel Courant number in the TOLER.DAT file.
      Decrease the Courant number in 0.1 increments until a reasonable lower limit of 0.2 is reached.
    - Insufficient floodplain area.
      Small floodplain surface areas can exacerbate unsteady flow.
      Review SURFAREA.OUT and increase the available grid element surface area for flood storage.
    - Increase the n-values for the grid elements in the vicinity of the surging flow.
    - Adjust the floodplain grid element elevations around the problem element.
    - Increase the channel length within the grid element.
    - The hydraulic structure discharge rating curve or table may be poorly matched with the upstream or downstream channel hydraulics.
      Review the hydraulic structure rating curve or table and compare the discharge values to those found in the HYCHAN.OUT file for that particular
      channel element or the next one upstream.

Unexpected supercritical flow on alluvial surfaces:

    - Adjust the limiting Froude number using the FROUDL variable in the CONT.DAT file or the FROUDC variable in the CHAN.DAT.
    - Increase the floodplain or channel roughness values.
    - Modify the slope.
      The grid elevations assigned by the FLO-2D Plugin may not be representative of the field condition.
      Change the grid element elevations to make the channel or floodplain slope more uniform.

Variable mudflow sediment concentration:

    - Review the sediment concentration in the inflow hydrographs in the INFLOW.DAT file.
    - The relationships for viscosity and yield stress should fall with the research data presented in the reference manual.

FLO-2D simulation runs slow

   Review the TIME.OUT file to identify the elements that have caused most of the timestep reductions.
   Small timesteps are the result of the model continually exceeding the numerical stability criteria for a small group of grid elements.
   The change in flow depth for a timestep may be too large.
   One of primary reasons for a slow flood simulation is that the relationship between the discharge flux and grid element surface area is poor.
   The rate of change in the discharge may be too high for the selected grid element size.
   Increasing the grid element size is the best way to fix a very slow model.

   Other solutions may include:

        - Adjust the channel geometry in transition reaches.
        - Create a more uniform channel or floodplain slope.
        - Revise the roughness values or limit the supercritical flow.
        - Reduce the channel width, street width, ARF values or other parameters to increase the floodplain surface area.
          Review the SURFAREA.OUT file.
        - Check for updates.
          FLOPRO.EXE updates.
        - Increase the grid element size (a last resort).

The inflow hydrograph does not plot in the graphics display

    - No hydrograph is associated with the IDEPLT variable.
    - The hydrograph duration is too long.
      Reduce the hydrograph length.
    - The rainfall duration is too long.
      Reduce the rainfall time.
    - Inappropriate peak discharge or total rainfall values distort the scale for hydrograph plot.

Program stops. Excessive flow depths

    If flow depths are excessive, then ponding or surging may be occurring.

        - Identify the problem element in MAXPLOT or in the end of the BASE.OUT file.
        - Check TIME.OUT to determine if the problem element is also causing the model to run slowly.
        - Check the elevation of the problem grid element in the TOPO.
          DAT or in the FLO-2D Plugin.
        - If the depressed element is a gravel pit or some other feature, increase the n-value to decrease the velocity (vertical overfall velocity) into the
          pit.

Erratic discharge in the channel elements.

   A review of plotted hydrographs in HYDROG or an examination of the CHANMAX.OUT or HYCHAN.OUT files will reveal if the flow discharge between
   contiguous channel elements is surging with spikes when a consistent rise or fall of the downstream discharge is expected.

   Channel surging can be natural phenomena.
   Rivers can rise and fall over a few tenths of a foot in matter of seconds in reaches that are expanding and contracting causing rapidly variable
   storage.
   During high flow in a large river, the variation in discharge associated with stage change on the order of ~ 0.2 ft can be 1,000 cfs or more.
   Review the numerical surging troubleshooting.
   If the channel surging is severe, the two conditions to review are:

        - Review the channel confluence and make the confluence pairs are properly assigned.
          See the CONFLUENCE.OUT file.
        - The channel grid elements in the CHAN.DAT file may be mis- identified.

Erratic flow in the floodplain grid elements.

   Erratic flow in the floodplain grid elements is usually the result of errors in the TOPO.DAT file.
   This type of error generally occurs when the user edits the TOPO.DAT file manually and adds, subtracts or moves grid elements around.
   Virtually all erratic flow conditions on the floodplain can be corrected by revisions either to n-values or elevations in the FLO-2D Plugin.

Channel extends through another channel element.

   The right channel bank assignments are automated in the FLO-2D Plugin.
   Multiple left bank elements can be assigned to the same right bank on a river bend.
   If a channel extends through a right bank element, the model will generate an error message reported in ERROR.CHK file.

   The channel bank elements can be viewed in the FLO-2D Plugin.
   If there is a problem with the channel bank alignment, simply revised the right bank element.
   The right bank element can be any grid element if it does not cross another connecting channel bank line.

Program stops; identifying one or more grid elements with too little floodplain surface.

   The model will generate a message in ERROR.CHK if the channel right bank has is too little surface storage area on the floodplain portion of the
   element.
   If this problem occurs and the floodplain surface is less than 5%, then there are several solutions:

        - Reduce the ARF value, multiple channel area or street area.
        - The channel area can be reduced by decreasing the XLEN variable or top width, which is a function of the channel in the natural channels, the side
          slopes, or the bottom width in the trapezoidal cross-section or the width in the rectangular cross-section.
        - As a last resort the grid element size can be increased, but this requires the re-generation of the grid system.

CADPTS.DAT error

   If errors are reported in this file, delete CADPTS.DAT, FPLAIN.DAT, and NEIGHBORS.DAT run the model again.
   The FLOPRO.EXE will rewrite this file.

**Debug Output Tables**

The DEBUG.OUT file is created when the user runs the model in Debug model via the QGIS Plugin.
The error codes in Tables 7.4, 7.5, and 7.6 are the codes used in the Debug system.
They help identify data errors and data conflicts.
These files are generated as part of the preliminary data checks.
These error checks do not include any simulation results.
Table 7.5 and 7.6 offer basic corrective actions for the errors.

**Table 7.4 ERROR CODE CATEGORIES**

.. list-table::
   :widths: 50 50
   :header-rows: 0


   * - Error Code
     - Error Category

   * - 100
     - Switches, Control Variables, Version

   * - 200
     - Boundary, Coordinate, Floodplain, Elevation

   * - 300
     - Stability Criteria

   * - 400
     - TOL

   * - 500
     - Roughness

   * - 600
     - Rainfall

   * - 700
     - Infiltration

   * - 800
     - Inflow, Outflow

   * - 1000
     - Channel

   * - 2000
     - Hydraulic Structures

   * - 3000
     - Streets, ARF/WRF

   * - 4000
     - Storm Drain

   * - 5000
     - Cross-Sections

   * - 6000
     - Sediment, Mud

   * - 7000
     - Levees

   * - 8000
     - Multiple Channels


**Table 7.5 BASIC ERROR CODES**

.. list-table::
   :widths: 33 33 34
   :header-rows: 0

   * - **Code**
     - **Reason**
     - **Solution**

   * - 100
     - Versions of the FLO-2D Pro and Storm Drain are Different.

       Please Check FLO-2D Build and Update Vc2005-Con.Dll
     - Review engine file dates and flopro.exe and vc2005con.dll.

       Make sure the file dates correspond to builds that are the same.

       This may require Technical Support.

   * - 100
     - Floodway Switch = 1,Set Encroach in CONT.DAT
     - To run a floodway simulation, set Floodway Switch = 1 and set the

       Encroach variable in CONT.DAT. NOPRTC is a switch.

       The positions are 0, 1 or 2.

   * - 100
     - Set NOPRTC to Only 0, 1, or 2 in CONT.DAT
     - NOPRTC is a switch.  The positions are 0, 1 or 2.

   * - 100
     - For Graphical Display (Lgplot=2),Graptim must be Greater Than 0
     - The variable Graphtim is missing in CONT.DAT.

   * - 100
     - Variable Xconc Exceeds 1
     - The sediment concentration cannot be greater than 1.

   * - 100
     - Variable Xarf is Less Than 0 or Greater Than 1
     - The Xarf variable must be a value between 0 and 1.

   * - 100
     - Variable Froudl Greater Than 9
     - The Froudl variable should not be greater than 1.

   * - 100
     - Variable Noprtfp is a Switch,Use Only 0,1,2 or 3
     - NOPRTFP is a switch.  The positions are 0, 1 or 2.

   * - 100
     - Mudflow (Mud=1) and Conventional Sediment Transport (Ised=1)

       Cannot Be Modeled in the Same Simulation. Review CONT.DAT File
     - Set either MUD or ISED to 0.

   * - 100
     - Grid Element 1 Has No Neighbor Grid Elements,Check the CADPTS.DAT File
     - If grid element number 1 does not have a neighbor, it is dangling

       or the coordinates are wrong in TOPO.DAT.  Check the location of the cell.

       Correct it by realigning the grid to the computational domain.

   * - 100
     - If Displaying the Flood Graphics - Lgplot = 2 in CONT.DAT - Then

       Ideplt must be Greater Than Zero in INFLOW.DAT
     - Set ideplt to an inflow grid element number in inflow.dat.
   * - 100
     - If Only Writing Text Output to Screen - No Flood Graphics

       Lgplot = 0 in CONT.DAT - Set Ideplt = 0 in INFLOW.DAT
     - For text mode, set lgplot = 0 and ideplt = 0.

   * - 100
     - Ideplt (INFLOW.DAT) must be an Inflow Node and the CONT.DAT

       Variable Lgplot must be Set to 1
     - Make sure Ideplt is a grid element listed in inflow.dat.

   * - 100
     - Total Simulation Time of the Model Exceeds the Hydrograph Duration
     - If the hydrograph ends before the simulation, make sure it is set to zero

       or the last discharge in the hydrograph will continue as steady flow.

   * - 100
     - If Ideplt is Listed As Inflow Node in the INFLOW.DAT File,

       Then Lgplot must be 0 or 1
     - Turn on the Lgplot and Graphtim to use Display Mode.

   * - 200
     - Grid Element Coordinates Exceed 1000000000. Reduce the

       Coordinate Values Before Proceeding
     - Check the coordinates in topo.dat.

   * - 200
     - Hydraulic Structure Channel Inflow must be a Channel Element
     - Reposition the structure node onto a left bank node.

   * - 200
     - Time-Stage Elements Have a Stage Assigned that Was Less Than

       the Floodplain or Channel Bed Elevation.

       Stage Was Reset to the Bed Elevation
     - Check the invert elevation of the structure, the grid element elevation

       or the head reference elevation.

   * - 200
     - If Ideplt is 0 in INFLOW.DAT and Irain is 0 in CONT.DAT,

       There is No Inflow to Be Plotted.
     - Either Set Lgplot = 0, Assign Ideplt an Inflow Hydrograph in INFLOW.DAT,

       Or Set Irain = 1 in CONT.DAT and Assign the RAIN.DAT File

   * - 300
     - A Channel/Street Courant Number is Required in TOLER.DAT
     - Set the correct Courant number.

   * - 300
     - If Istrflo in STREET.DAT is Set to 1,Then at Least One Inflow

       Node Must Have a Street in It
     - Check the STREET.DAT file.

   * - 400
     - Variable Tol Has an Inappropriate Value
     - Check the TOL value. It must be in a correct range.

   * - 400
     - Please Review If Tol = 0.05 Ft or 0.015 M With the Rainfall Abstraction
     - Check the TOL variable and the Initial Abstraction variable.

       The initial abstraction may be too high. See INFIL.DAT.

   * - 500
     - MANNINGS_N.DAT File Has a Mismatched Grid Element Number...

       Check the End of this File
     - The MANNINGS_N.DAT file might not be complete.

   * - 500
     - MANNINGS_N.DAT Files Does Not Exist.

       Create the File Before Proceeding
     - Export MANINGS_N.DAT again.

   * - 500
     - The Spatially Variable Shallown Value is Outside the Range 0.010 to 0.99
     - Check the SPATIALSHALLOWN.DAT file.

   * - 500
     - N-Value is Less Than 0 or Greater Than 1
     - Check the CONT.DAT file.

   * - 600
     - Line 2 in RAIN.DAT File Has to Be Reviewed For Spatially Variable

       Real Rainfall Adjustments (Irainarf=1) With Rainarf Values
     - Spatially variable data is missing.
       Check RAIN.DAT.

   * - 600
     - Rtt must be Greater Than 0
     - Check RAIN.DAT.

   * - 600
     - First Pair of the Rainfall Distribution Should Be 0.0.
     - Correct the first data pair of the rainfall distribution curve.

       Set the first data pair to 0.0 0.0.

   * - 600
     - Date and Time in Raincell.Dat Must Have this

       Format: 06-15-2003 14:00:00
     - Check RAINCELL.DAT.

   * - 700
     - Variable Infmethod Line 1 in the INFIL.DAT is Either Missing

       or Not Correctly Assigned
     - Check INFIL.DAT.

   * - 700
     - To Use the SCS Curve Number Method For Infiltration You

       Must Have Rainfall, Irain = 1 in CONT.DAT and RAIN.DAT File
     - Check RAIN.DAT.

   * - 700:
     - Variable Poros is Greater Than 1
     - Check INFIL.DAT.

   * - 700
     - Variable Sati or Satf is Greater Than 1
     - Check INFIL.DAT.

   * - 700
     - Variable Rtimpf Exceeds 1.0.
       Do Not Enter As a Percent Use a Fraction
     - Check INFIL.DAT.

   * - 700
     - Abstraction Exceeds the Total Rainfall (Impossible)

       For at Least One Grid Element and May Result in Volume

       Conservation Error
     - Check spatial abstraction variable in INFIL.DAT.

   * - 700
     - Initial Abstraction > Tol (Depression Storage).

       Consider (Not Required) Lowering the Tol Value or

       Adjusting the Ia Value
     - The TOL variable and IA variable can be summed to account for the

       initial abstraction.

   * - 800
     - There are Two Inflow Conditions Imposed at the Same Cell
     - A cell is listed twice in INFLOW.DAT.
       Check the file and remove one

       of the hydrographs.

   * - 800
     - This Grid Cell Has an Inflow and a Full ARF
     - Reposition the inflow node.

   * - 800
     - This Grid Cell Has an Inflow and a Partial ARF
     - Consider repositioning the inflow node.

   * - 800
     - The Following Cell Has an Inflow and a Hs
     - Reposition the inflow node or the hydraulic structure inlet node.

   * - 800
     - The Following Cell Has an Inflow Fp on a Channel Left Bank Element
     - Consider changing the inflow to channel inflow.

   * - 800
     - The Following Cell Has an Inflow Fp on a Channel Right Bank Element
     - Consider moving the inflow node to the left bank and changing

       it to a channel node.

   * - 800
     - There are an Inflow Conditions Imposed on a Levee Element
     - Check the levee Inflow condition.

       Make sure the inflow is on the correct side of the levee

       and make sure the cell elevation is set correctly.

   * - 800
     - This Grid Cell Has an Inflow on a Multiple Ch Element
     - Reposition the inflow node.

   * - 800
     - This Grid Cell Has an Inflow on a Multiple Ch Element
     - Reposition the inflow node.

   * - 800
     - There are Two Inflow Conditions Imposed at the Same Cell
     - A cell is listed twice in INFLOW.DAT.

       Check the file and remove one of the hydrographs.

   * - 800
     - The Following Cell Has an Inflow Ch on a Channel Right Bank Element
     - Move the inflow node to the left bank.

   * - 800
     - There are an Inflow Conditions Imposed on a Levee Element
     - Check the levee Inflow condition.

       Make sure the inflow is on the correct side of the levee

       and make sure the cell elevation is set correctly.

   * - 800
     - There are Two Outflow Conditions Imposed at the Same Cell
     - Remove the extra line in OUTFLOW.DAT.

   * - 800
     - The Following Cell Has a Channel Outflow on a Channel

       Right Bank Element
     - Move the outflow node left bank.

   * - 800
     - There are an Outflow Conditions Imposed on a Levee Element
     - Make sure the outflow node is on the correct side of the levee.

   * - 800
     - There are Two Outflow Conditions Imposed at the Same Cell
     - Move the outflow node left bank.

   * - 800
     - The Following Cell Has an Outflow (Fp) on a Channel

       Left Bank or Right Bank Element
     - It's OK for n FP outflow node to be on a left bank but not a right bank.

   * - 800
     - There is an Outflow Conditions Imposed on a Levee Element
     - Make sure the outflow node is on the correct side of the levee.

   * - 800
     - There are Two Stage Time Relationships Imposed at the Same Cell
     - Remove one of the duplicate stage time conditions from OUTFLOW.DAT.

   * - 800
     - The Following Cell Has Stage Time Relationship on a

       Channel Right Bank Element:
     - Remove the outflow from the right bank.

   * - 800
     - There are a Stage Time Outflow Condition Imposed on a Levee Element
     - Make sure the outflow node is on the correct side of the levee.

   * - 800
     - There are a Stage Time Relationship Imposed on an Outflow Cell
     - \

   * - 800
     - There are a Floodplain Outflow and a Stage Time

       Relationship at the Same Cell
     - \

   * - 800
     - There are Two Outflow Conditions Imposed at the Same Cell
     - Delete one of the outflow nodes in OUTFLOW.DAT.

   * - 800
     - This Grid Cell Has an Outflow and a Full ARF
     - Delete the outflow node or the ARF.

   * - 800
     - This Grid Cell Has an Outflow and a Partial ARF
     - Delete the ARF.

   * - 800
     - The Following Cell Has an Outflow and a WRF
     - Delete the WRF.

   * - 800
     - This Grid Cell Has a Stage Time Relationship and a Full ARF
     - Delete the outflow node or the ARF.

   * - 800
     - This Grid Cell Has a Stage Time Relationship and a Partial ARF
     - Delete the ARF.

   * - 800
     - The Following Cell Has an Outflow and a WRF:
     - Delete the WRF.

   * - 800
     - This Grid Cell Has an Outflow and a Full ARF
     - Delete the outflow node or the ARF.

   * - 800
     - This Grid Cell Has an Outflow and a Partial ARF
     - Delete the ARF.

   * - 800
     - The Following Cell Has an Outflow and a WRF
     - Delete the WRF.

   * - 800
     - An Inflow Hydrograph Has Been Assigned to a Channel

       Element (C-Line in INFLOW.DAT) and There is No

       Channel Component (Ichannel = 0 in CONT.DAT)
     - Turn the channel switch on or reset the inflow node to floodplain.

   * - 800
     - First Pair of the Floodplain Hydrograph Should Be 0.0.

       to Interpolate the First Timestep
     - Set the first data pair to 0.0 0.0 in the INFLOW.DAT.

   * - 800
     - No Inflow Discharge Specified For the Inflow Element
     - Check INFLOW.DAT.

   * - 800
     - INFLOW.DAT Variable Ideplt must be an Inflow Node

       and an Inflow Node  - Khin - Variable in INFLOW.DAT must be

       specified, CONT.DAT Variable  Inplot must be Set to 1
     - \


**Table 7.6 ADVANCED ERROR CODES**

.. list-table::
   :widths: 33 33 34
   :header-rows: 0

   * - **Code**
     - **Reason**
     - **Solution**

   * - 1000
     - Inflow Fp on a Ch Interior Element
     - To run in display mode, set the graphics mode in CONT.DAT

       and the plotting hydrograph in INFLOW.DAT.

   * - 1000
     - Inflow Ch on a Ch Interior Element
     - Move inflow node or realign channel.

   * - 1000
     - Outflow Ch on a Ch Interior Element
     - Move inflow node or realign channel.

   * - 1000
     - Outflow Fp on a Ch Interior Element
     - Move outflow node or realign channel.

   * - 1000
     - Stage Time Relationship on a Ch Interior Element
     - Move outflow node or realign channel.

   * - 1000
     - Full ARF on a Ch Interior Element
     - Move outflow node or realign channel.

   * - 1000
     - Partial ARF on a Ch Interior Element
     - Delete ARF or realign channel.

   * - 1000
     - WRF on a Ch Interior Element
     - Delete ARF or realign channel.

   * - 1000
     - Hs inlet on a Ch Interior Element
     - Delete WRF or realign channel.

   * - 1000
     - Hs outlet on a Ch Interior Element
     - Move hydraulic structure or realign channel.

   * - 1000
     - Levee on a Ch Interior Element
     - Move hydraulic structure of realigning channel.

   * - 1000
     - Multiple Channel on a Channel Interior Element
     - Realign levee or realign channel.

   * - 1000
     - Channel Width is Greater Than the Element Width.

       Channel Left and Right Bank Elements Should Be Separated
     - Realign multiple channel.
       See reference manual.

   * - 1000
     - Channel Grid Element Will Require Separate Left

       and Right Bank Elements
     - Realign right bank.

       Extend right bank way from left bank.

   * - 1000
     - Channel Extension Exceeds the Grid System Boundary
     - Realign right bank.

   * - 1000
     - Channel Element Extends Into Interior of the Channel

       Element Instead Extend the Channel Into Another Bank Element
     - Realign right bank.

   * - 1000
     - Channel Element is Repeated in the CHAN.DAT File.

       Each Channel Element Should Only Be Listed Once
     - Eliminate one of the repeated channel elements.

       Tributary and Split flows should connect along adjacent banks.

   * - 1000
     - Channel Right Bank Elements Need Some Adjustment

       Due to the Channel Width.

       Set Right Bank Either Closer or Farther Away from

       the Left Bank Element
     - Realign right bank.

   * - 1000
     - Remaining Floodplain Surface Area on the Channel

       Bank Elements Needs to Be Larger For Left Bank Element
     - Extend right bank away from left bank.

   * - 1000
     - Data Error...Check the Channel Elements in the CHAN.DAT Files
     - Review CHAN.DAT.

       Load project in PROFILES.EXE to troubleshoot.

   * - 1000
     - Channel Extension For Grid Element Extends Into Another

       Channel Element
     - Realign right bank.

   * - 1000
     - Channel Confluence Element Does Not Have Enough Connections,

       or a Channel Segment is Beginning or Ending at a Main

       Channel Confluence Element
     - Review confluence elements.

       The tributary or split channel may not be close enough

       to the main channel banks.

   * - 1000
     - Channel Extends Past the Levee System, Please Review the CHANNEL.

       CHK File and Make the Necessary Corrections
     - Realign the channel or the levee.

   * - 1000
     - Inflow Channel Element is not a Channel Element in CHAN.DAT

     - Move inflow node to a left bank or reset the node to

       floodplain or turn the channel switch on.

   * - 1000
     - Channel Outflow Node Must Have a Lower Bed Elevation Than

       the Contiguous Upstream Channel Element to Compute a Normal

       Depth Outflow Condition
     - Review the channel invert elevation and make the necessary

       correction so that the outflow node can calculate normal depth.

       The outflow invert elevation must be lower than that of the

       upstream node.

   * - 1000
     - Channel Outflow Variable - Kout - in the OUTFLOW.DAT File must

       be a Channel Element in the CHAN.DAT File
     - Move the outflow node to a left bank, reset the node to

       floodplain or turn the channel switch on.

   * - 2000
     - This Grid Cell Has a Hs Inlet and a Full ARF
     - Move the hydraulic structure node.

   * - 2000
     - This Grid Cell Has a Hs Outlet and a Full ARF
     - Move the hydraulic structure node.

   * - 2000
     - This Grid Cell Has a Hs Inlet and a Partial ARF
     - Move the hydraulic structure node or reset the ARF to zero.

   * - 2000
     - This Grid Cell Has a Hs Outlet and a Partial ARF
     - Move the hydraulic structure node or reset the ARF to zero.

   * - 2000
     - This Grid Cell Has a Hs on a Channel Rb Element
     - Move the hydraulic structure to the left bank or change

       it to a floodplain structure.

   * - 2000
     - Inlet on a Full ARF Element
     - Move Inlet

   * - 2000
     - Hydraulic Structure Has an Adverse Bed Slope.

       Outlet Invert is Higher Than the Inlet Invert.

       Please Check to Ensure this is Correct
     - Review invert elevations.

       Apply elevation corrections if necessary.

       Validate structure direction.

   * - 2000
     - Hydraulic Structure Has a Reference Elevation

       that is Lower Than the Inlet Node Bed Elevation
     - Correct invert elevation or correct head reference

       elevation or set head reference elevation to zero.

   * - 2000
     - Hydraulic Structure Has an Inflow or Outflow Element

       that is Not a Channel
     - Move inlet node to the channel bank or change it to

       a floodplain structure.

   * - 2000
     - Hydraulic Structure Has a Name Length Longer Than 30 Characters.
     - Shorten the Name to Less Than 30 Characters

   * - 2000
     - A Hydraulic Structure Has Been Assigned to a Channel Element.
       Channel is turned off.
     - (Ifporchan > 0 line S in HYSTRUC.DAT) and there is no

       channel component (Ichannel = 0 in CONT.DAT).

       Turn on channel switch.

   * - 2000
     - Hydraulic Structure Rating Curve, Rating Table, Or

       Generalized Culvert Switch (Icurvtable) Does Not Match the

       Assigned Data
     - Review HYSTRUC.DAT and set the switch to the correct

       position to match the as- signed data.

   * - 2000
     - Hydraulic Structure must have a Culvert Area Coefficient

       and Exponent For Routing in a Long Culvert.
     - The clength and cdiameter was assigned, assign the culvert

       area coefficient and exponent so FLO-2D can simulate the

       culvert volume and travel time.

   * - 2000
     - Make Sure that the "Atable" Variable on Line 4 of

       the HYSTRUC.DAT File is Included
     - This table is required if clength and cdiameter are

       used in a Rating Table structure.

   * - 2000
     - First Data Pair of a Hydraulic Structure Rating Table

       Should Be 0.0. to Interpolate the Next Data Pair
     - Reset first row of table data to 0.00 0.00.

   * - 2000
     - Hydraulic Structure Rating Curve Stage Must

       Increase With Increasing Discharge
     - The rating curve data has an error.

       Check the data so the discharge increases with increasing stage.

   * - 2000
     - Rate of Change in the Following Hydraulic Structure

       Rating Tables May Be

       Unreasonable - Rate of Change = 10 Times Previous Stage

       Rate of Change
     - Check the rating table.

       It may require more data pairs or it may be incorrect.

   * - 2000
     - If the Generalized Culvert Equations are Being Used.

       The Inoutcont Tailwater Control is Not Necessary.

       Set Inoutcont = 0

     - Set inoutcont to 0.

   * - 2000
     - Culvert Length Must Assign in the S-Line of the

       HYSTRUC.DAT If the Generalized Culvert Equations are Being Used
     - Assign culvert length and depth in the S line.

   * - 2000
     - Hydraulic Structure Inflow Node is Repeated More Than Once
     - Review HYSTRUC.DAT.

       Make sure each inflow node is only listed once.

       If two nodes are near each other, separate them by a grid element.

   * - 2000
     - Hydraulic Structure Outflow Node is Repeated

       More Than Once Without Assigning a D-Line

       Conveyance Capacity Limitation.
     - Review HYSTRUC.DAT.

       Make sure each outflow node is only listed once.

       If two nodes are near each other, separate them by a grid element.

   * - 2000
     - Hydraulic Structure Has a Reference Elevation that

       is Lower Than the Inflow Node Bed Elevation
     - Correct invert elevation or correct head reference

       elevation or set head reference elevation to zero.

   * - 2000
     - Hydraulic Structure Channel Outflow must be a Channel Element
     - Check the position of the outlet element or

       make sure the channel switch is on in CONT.DAT.

   * - 2000
     - Hydraulic Structure Has a Reference Elevation

       that is Lower Than the Inflow Node Bed Elevation
     - Correct invert elevation or correct head reference

       elevation or set head reference elevation to zero.

   * - 2000
     - Hydraulic Structure Channel Inflow Element must

       be a Channel Element
     - Check the position of the outlet element or make

       sure the channel switch is on in CONT.DAT.

   * - 2000
     - Hydraulic Structure Inflow Element Cannot Be

       a Grid System Outflow Element
     - Correct invert elevation or correct head reference

       elevation or set head reference elevation to zero.

   * - 2000
     - Hydraulic Structure Outflow Element Cannot Be

       a Grid System Outflow Element
     - Move the outlet element to a node that is

       adjacent to the outflow node.

   * - 3000
     - The Following Cell Has a Full ARF on a Channel

       Left or Right Bank Element
     - Realign the channel or eliminate the ARF.

   * - 3000
     - The Following Cell Has a Partial ARF on a

       Channel Left or Right Bank Element
     - Delete the ARF.

   * - 3000
     - Street on an Outfall Element
     - I don't know how to fix this.

   * - 3000
     - Full ARF on a 1D Street
     - Realign street or delete ARF.

   * - 3000
     - Partial ARF on a 1D Street
     - Delete ARF.

   * - 3000
     - Hs Inlet on a 1D Street
     - Move hydraulic structure or realign street.

   * - 3000
     - Hs Outlet on a 1D Street
     - Move hydraulic structure or realign street.

   * - 3000
     - Multiple Channel on a 1D Street
     - Reposition multiple channel nodes or realign street.

   * - 3000
     - Gutter on a 1D Street
     - Delete gutter or delete street.

   * - 3000
     - Variable Strman is Less Than 0 or Greater Than 1
     - Assign street Manning’s N correctly.

   * - 3000
     - Variable Istrflo is a Switch, Use Only 0 or 1
     - Apply variable correctly.

   * - 3000
     - Variable Depx must be Greater Than 0
     - Assign street depth.

   * - 3000
     - Variable Widst must be Greater Than 0
     - Assign street width.

   * - 3000
     - Variable Igridn must be Greater Than 0
     - Assign correct Manning’s n value.

   * - 3000
     - Grid Elements are Defined More Than Once (Street.Dat)

       For a Street Intersection Within a Grid Element
     - Delete one of the misassigned street elements.

   * - 3000
     - Street Elements (Street.Dat) are Missing

       Line "W" in the Street.Dat File
     - W lines are necessary to define the street

       direction in the cell.

       Assign them as shown in Lesson 11.

   * - 3000
     - Variable Istdir must be Greater Than 0 and

       Less Than or Equal to 8
     - Add correct street direction.

   * - 3000
     - Variable Widr must be Greater Than 0
     - Correct street width.

   * - 3000
     - Grid Element ARF Values Were Adjusted
     - See ARF.DAT for automatic correction list.

       ARFs were reassigned 1.0 to Eliminate the Potential

       For Instability Related to Small Surface Area.

       These are Reported to the ARF_Adjustment.Chk File

   * - 3000
     - Impervious Area Represented By the Rtimp Percentage

       is Less Than the ARF Value For at Least One Grid Element
     - Impervious area should represent the building blockage

       and any other potential impervious area.

       It should be at least the same as the ARF value.

   * - 3000
     - A Channel Element Has One or More Street Segments.

       Remove the Street Segments from this Element
     - Realign the street or channel.

       Review aerial images to assign channel or street alignment.

   * - 4000
     - Inlet on a Full ARF Element
     - Move Inlet.

   * - 4000
     - Inlet on a Partial ARF Element
     - Move Inlet.

   * - 4000
     - Outfall on a Full ARF Element
     - Move Outfall or delete ARF.

   * - 4000
     - Outfall on a Partial ARF Element
     - Move Outfall or delete ARF.

   * - 4000
     - Outfall on a Levee Element
     - Review outfall position.

       Make sure it is on the correct side of the levee.

       Review elevation.

   * - 4000
     - Inlet on a Levee Element
     - Make sure the inlet is on the correct side of the levee.

       Check the elevation of the cell so that it matches the rim

       elevation of the inlet or

       the invert elevation of the type 4.

   * - 4000
     - Duplicate Inlet on SWMMFLO.DAT
     - Delete the repeated inlet.

   * - 4000
     - Inlet on an Outfall
     - Reposition the inlet or the outfall.

   * - 4000
     - Outfall on an Outfall
     - Reposition one of the outfall nodes.

   * - 4000
     - Channel Rb on a Inlet Element
     - Move the inlet to the left bank.

   * - 4000
     - Channel Rb on an Outfall Element
     - Move the outfall to the left bank.

   * - 4000
     - Multiple Channel on a Inlet Element
     - Reposition the inlet or the multiple channel.

   * - 4000
     - Multiple Channel on an Outfall Element
     - Reposition the outfall or the multiple channel.

   * - 4000
     - There is a Levee and a Storm Drain Inlet Assigned to Grid Cell
     - Make sure the inlet is on the correct side of the levee.

       Check the elevation of the cell so that it matches

       the rim elevation of the inlet or

       the invert elevation of the type 4.

   * - 4000
     - There is a Storm Drain Inlet Assigned to

       Completely Blocked Grid Cell
     - Move the inlet or delete the ARF.

   * - 4000
     - There is a Storm Drain Outfall Assigned to

       Completely Blocked Grid Cell
     - Move the outfall or delete the ARF.

   * - 4000
     - There is a Hydraulic Structure and a Storm Drain

       Inlet Assigned to Grid Cell
     - Reposition the hydraulic structure or the inlet.

   * - 4000
     - Storm Drain Inlet Has Invert Elevation Errors.

       Please Check Invert Elevation and Rim Elevation For Node
     - Do you mean Max Depth?

   * - 4000
     - Curb Opening Height must be Greater Than Zero.

       Please Revise SWMMFLO.DAT File
     - Review SWMMFLOW.DAT.

   * - 4000
     - Length must be Greater Than Zero
     - Review SWMMFLOW.DAT.

   * - 4000
     - Height must be Greater Than Zero
     - Review SWMMFLOW.DAT.

   * - 4000
     - Typical Weir Drain Coefficient: Range 2.8 to 3.2
     - Review SWMMFLOW.DAT.

   * - 4000
     - Width or Height must be Greater Than Zero
     - Review SWMMFLOW.DAT.

   * - 4000
     - Typical Weir Drain Coefficient: 2.3
     - Review SWMMFLOW.DAT.

   * - 4000
     - Perimeter must be Greater Than Zero
     - Review SWMMFLOW.DAT.

   * - 4000
     - Area must be Greater Than Zero
     - Review SWMMFLOW.DAT.

   * - 4000
     - Surcharge Depth must be Greater Than Zero
     - Review SWMMFLOW.DAT.

   * - 4000
     - There is a Conflict Between Inlets in the

       SWMMFLO.DAT File and Sub-catchments in the SWMM.INP,

       Features in Both Lists Need to Be in the Same Order
     - Check the order of the inlets and the subcatchments.

   * - 4000
     - Inlets in the SWMMFLO.DAT File must be Identical

       to the Listed Inlets Junction Table of SWMM.INP File
     - Check the order of the inlets in SWMMFLOW.DAT

       and SWMM.INP.

   * - 4000
     - Multiple Inlets Assigned to One Grid Cell
     - Reposition the inlet or delete it if it is a repeated line.

   * - 4000
     - There is a Type 4 Inlet (Review SWMMFLO.DAT File) that

       is Missing the Rating Table in the SWMMFLORT.DAT File
     - Add the table to SWMMFLOWRT.DAT.

   * - 4000
     - There is an Inflow Node and a Storm Drain Inlet

       Assigned to Grid Cell
     - Reposition the inflow node or the inlet.

   * - 4000
     - There is an Inflow Node and a Storm Drain Outfall

       Assigned to Grid Cell
     - Reposition the inflow node or the outfall.

   * - 4000
     - There is an Outflow Node and a Storm Drain Inlet

       Assigned to Grid Cell
     - Reposition the inlet.

   * - 4000
     - There is an Outflow Node and a Storm Drain Outfall

       Assigned to Grid Cell
     - Reposition the outfall or delete the outlet.

   * - 4000
     - Storm Drain Outfall Nodes are in Channel Interior

       Elements, Re-Assign to the Channel Elements in CHAN.DAT
     - Reposition the nodes to the left bank or reassign

       then grid element in SWMMFLO.DAT.

   * - 5000
     - Cross-Section Element Can Only Be Assigned Once

       in the FPXSEC.DAT File.
     - Remove repeated grid elements in FPXSEC.DAT.

       If the Cross-Section Includes the Channel Use

       Only the Left Bank Channel Element in CHAN.DAT

   * - 6000
     - Variable Xconc Should Not Be Assigned If Mudflow With

       a Sediment Concentration is Assigned to the Inflow Hydrograph
     - Do not assign Xconc in CONT.DAT.

   * - 6000
     - No Sediment Data in the SED.DAT File
     - Check the SED.DAT file.

   * - 6000
     - Error in Line 1 (M-Line) of the SED.DAT File
     - Check the SED.DAT file for missing or incorrect mudflow data.

   * - 6000
     - Dry Weight of Sediment is Zero in the SED.DAT File

       and Thus the Porosity is Also Zero
     - Set the Dry Weight variable in SED.DAT.

   * - 6000
     - Sediment Size Exceeds the Recommended Value For

       the Application of the Yang Equation
     - Check the sediment size fractions in SED.DAT.

   * - 6000
     - Error in Line 2 (S-Line) of the SED.DAT File
     - Check the sediment transport data in SED.DAT.

   * - 6000
     - Error in Z-Line of the SED.DAT File
     - Check the sediment transport equation,

       bed thickness or volumetric concentration.

   * - 6000
     - Error in P-Line of the SED.DAT File
     - Check the sediment diameter and percentage.

   * - 6000
     - Error in D-Line of the SED.DAT File
     - Check the debris basin volume and the

       debris grid element number.

   * - 6000
     - Scourdep Variable in SED.DAT Line E Should Be Positive (>0.)
     - Check the scour depth.

   * - 6000
     - Error in E-Line of the SED.DAT File
     - Check the grid element numbers or position in the rigid bed cells.

   * - 6000
     - Error in R-Line of the SED.DAT File
     - Check the sediment supply coefficient and exponent.

   * - 6000
     - Error in S-Line of the SED.DAT File
     - Check the size distribution for sediment supply.

   * - 6000
     - Error in N-Line of the SED.DAT File
     - \

   * - 6000
     - Isedn variable is incorrect.
     - Isedn Variable Must Equal One of the Sediment Size

       Fraction Groups in SED.DAT that is Associated

       With a Sediment Transport Equation.

       Do Not Assign Isedn to a Sediment Transport Equation Number

   * - 7000
     - There are a Levee Element on a Complete Blocked Element
     - Isedn Variable Must Equal One of the Sediment

       Size Fraction Groups in SED.DAT that is Associated

       With a Sediment Transport Equation.

       Consider repositioning or deleting the levee.

   * - 7000
     - There are a Levee Element on a Partial Blocked Element
     - Isedn Variable Must Equal One of the Sediment Size

       Fraction Groups in SED.DAT that is Associated With a

       Sediment Transport Equation.

       Make sure the levee is on the correct side of the cell.

   * - 7000
     - There are a Levee Element With a WRF
     - Isedn Variable Must Equal One of the Sediment

       Size Fraction Groups in SED.DAT that is Associated

       With a Sediment Transport Equation.

       Make sure the levee and WRF relationship is correct.

   * - 7000
     - This Grid Cell Has a Hs Inlet on a Levee Element
     - Make sure the hydraulic structure is on the correct

       side of the levee.

       Review the grid element elevation so that the water

       can get to and from the structure inlet and outlet nodes.

   * - 7000
     - This Grid Cell Has a Hs Outlet on a Levee Element
     - Make sure the hydraulic structure is on the

       correct side of the levee.

       Review the grid element elevation so that the

       water can get to and from the structure inlet

       and outlet nodes.

   * - 7000
     - This Grid Cell Has Two Levees
     - Delete the repeated levee.

   * - 8000
     - This Grid Cell Has an Inflow on a Multiple Ch Element
     - Move the inflow node.

   * - 8000
     - This Grid Cell Has an Inflow on a Multiple Ch Element
     - Move the inflow node.

   * - 8000
     - This Grid Cell Has an Inflow on a Multiple Ch Element
     - Move the inflow node.

   * - 8000
     - This Grid Cell Has a Full/Partial ARF or WRF on a Multiple Ch Element
     - Remove the ARF/WRF.

   * - 8000
     - This Grid Cell Has a Full/Partial ARF or WRF on a Multiple Ch Element
     - Remove the ARF/WRF.

   * - 8000
     - This Grid Cell Has a Full/Partial ARF or WRF on a Multiple Ch Element
     - Remove the ARF/WRF.

   * - 8000
     - Channel Lb Rb on a Multiple Channel Element
     - A multiple channel cannot be assigned to a bank element.

       See reference manual.

   * - 8000
     - Channel Lb Rb on a Multiple Channel Element
     - A multiple channel cannot be assigned to a bank element.

       See reference manual.

   * - 8000
     - Levee on a Multiple Channel Element
     - Make sure the multiple channel is on the correct side of the levee.

   * - 8000
     - Multiple Channel Element on a Multiple Channel Element
     - Delete one of the repeated lines in MULT.DAT.

   * - 8000
     - Levee on a Multiple Channel Element
     - Make sure the multiple channel is on the correct side of the levee.

   * - 8000
     - Multiple Channel Element on a Multiple Channel Element
     - A multiple channel cannot be assigned to a bank element.

       See reference manual.