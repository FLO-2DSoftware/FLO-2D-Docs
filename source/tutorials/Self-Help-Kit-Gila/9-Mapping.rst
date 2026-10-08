Project Review and Mapping
==========================

Load Results and Maps
---------------------

.. note:: Placeholder video. Final version not ready.

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/ebIFoGUuQcI?si=XMiARpQIkzIPD5Es"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Use FLO-2D MapCrafter to create results maps and configure the project for reviewing simulation output.

Run FLO-2D MapCrafter
~~~~~~~~~~~~~~~~~~~~~

#. Open FLO-2D MapCrafter and select the completed model run folder.
#. Review the simulation summary, including model statistics, simulation time, and available results.
#. Select the results maps to generate, such as maximum flow depth, maximum water surface elevation, and maximum velocity.
#. Generate the maps and confirm they are added to the QGIS Layers panel.
#. Move the MapCrafter layer group to an appropriate location in the Layers panel.
#. Turn individual results layers on and off to review the spatial distribution of flooding.

Set Up Results Folder
~~~~~~~~~~~~~~~~~~~~~

#. Open the FLO-2D Results folder selection tool.
#. Select the folder containing the completed simulation output files.
#. Verify that the folder path is valid and the required results files are available.
#. Identify the hydraulic results files, including ``HYCROSS.OUT``, ``HYCHAN.OUT``, and ``HYSTRUCT.OUT``.
#. Locate the channel profile and channel results files.
#. Identify the time-dependent results used to generate hydrographs and other plots.
#. Locate storm drain results and profile data, if storm drains are included in the model.

Review a Project Run
--------------------

.. note:: Placeholder video. Final version not ready.

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/ebIFoGUuQcI?si=XMiARpQIkzIPD5Es"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Use the FLO-2D results tools to examine hydraulic conditions at selected locations and evaluate model performance.

Results Tool
~~~~~~~~~~~~

#. Open the FLO-2D Results Tool.
#. Select a grid element to review the simulated hydraulic results.
#. Plot available time-dependent results, including flow depth, water surface elevation, and velocity.
#. Examine hydrographs at selected locations to identify peak values and their timing.
#. Review channel, hydraulic structure, and cross-section results where applicable.
#. Compare results at different locations to understand how floodwater moves through the model domain.

Profile Tool
~~~~~~~~~~~~

#. Open the Profile Tool and select the appropriate profile or channel feature.
#. Generate a longitudinal profile to examine ground elevations and simulated water surface elevations.
#. Review changes in water surface elevation along the selected profile.
#. Identify potential flow restrictions, backwater conditions, and abrupt changes in hydraulic grade.
#. Examine channel profiles and hydraulic structure locations where applicable.

Review Scenarios
----------------

.. note:: Placeholder video. Final version not ready.

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/ebIFoGUuQcI?si=XMiARpQIkzIPD5Es"
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Compare model scenarios to evaluate how changes in terrain, hydraulic structures, or other model parameters affect flooding.

Compare Model Results
~~~~~~~~~~~~~~~~~~~~~

#. Load the results from the scenarios being evaluated.
#. Confirm that the scenarios use compatible coordinate systems, grid geometry, and hydrologic conditions.
#. Display the maximum depth, water surface elevation, and velocity maps for each scenario.
#. Compare flood extents and identify areas where hydraulic conditions have changed.
#. Evaluate changes in peak discharge, water surface elevation, and hydrograph timing at selected locations.
#. Document significant differences between scenarios and identify locations requiring additional review.
