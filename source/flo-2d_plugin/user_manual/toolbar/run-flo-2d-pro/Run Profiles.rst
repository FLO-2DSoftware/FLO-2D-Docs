Run Profiles
===================

Profiles is a pre-processor and a post-processor  program  for  graphic  displays
of  the  channel  bed  profile,  cross  sections  and  predicted  water
surface profiles.

.. note:: The project folder must have a CONT.DAT file to run Profiles.  A project wih a channel is needed.  It can be
          a channel that is ready to interpolate, ready to run, or completed simulation.

.. note:: The tools in Profiles are now available with the FLO-2D Plugin.  See them with
          `Channel Profile tools <../flo-2d-info-tool/FLO-2D%20Info%20Tool.html#channel-profiles>`__ and the
          `Channel Results tools <../flo-2d-info-tool/FLO-2D%20Results%20Tool.html#channel-results>`__.


Run Profiles
---------------

The Run Profiles button will load the Profiles executable in the Project Folder.

1. Click on the Run Profiles.

.. image:: ../../../img/Buttons/run005.png

2. The Profiles will open.

3. If the simulation is complete, the first button View Profiles is active.  Click it to load a channel segment.

4. Select the Maximum Water Surface elevation or the Peak Discharge.

5. Select a segment and click OK on th final window.

.. image:: ../../../img/Run-Profiles/runprofiles001.png

6. Here is a picture of the water surface profile.

.. image:: ../../../img/Run-Profiles/runprofiles002.png

7. Here is a picture of the peak discharge.  Note in this profile, the discharge increases in the downstream direction.
   This is due to the many components that feed the channel such as rain, storm drain, and hydraulic structures.

.. image:: ../../../img/Run-Profiles/runprofiles003.png

Interpolate Cross sections
------------------------------

1. The Interpolate cross section tool is an older method to interpolate cross section data for N or natural type channels.

.. note:: This method is now performed by the FLO-2D Plugin.

          See `Interpolate Natural Channel <../../widgets/cross-sections-editor/Cross%20Sections%20Editor.html#channel-n-value-interpolator>`__

2. It is still functional and will interpolate a channel if the chan.dat and xsec.dat files are configured correctly.

3. Chan.dat needs to have a cross section number assigned to any left bank element that intersects a cross section.

4. xsec.dat provides the station elevation data for the cross sections to be interpolated.

.. image:: ../../../img/Run-Profiles/profiles007.png

5. The interpolator tool will find chan.dat and xsec.dat and interpolate the data by segment.

.. image:: ../../../img/Run-Profiles/profiles004.png

Edit Channel
-----------------

1. The next tool in Profiles is a channel editor system.  To access it, click the View Segment Bed Slope button.

2. Select a segment and click ok.

3. Click View Local Reach to zoom in.

4. The up and down arrow keys move the zoom local upstream or downstream.

.. image:: ../../../img/Run-Profiles/runprofiles004.png

5. With the zoom view active, the cross channel bed editor is now available.  Click View/Edit Xsection Data.

6. The first window is used to edit the length and n value of a natural channel cross section.

.. image:: ../../../img/Run-Profiles/runprofiles005.png

7. The second window is used to edit cross section data, interpolate between cross sections, and scan the cross section
   width, area, and wetted perimeter.

.. image:: ../../../img/Run-Profiles/profiles006.png

Interpolate n-values
------------------------

1. The final tool is an n value interpolator.

.. note:: This method is now performed by the FLO-2D Plugin.

          See `Interpolate n-Value <../../widgets/cross-sections-editor/Cross%20Sections%20Editor.html#channel-n-value-interpolator>`__

.. image:: ../../../img/Run-Profiles/runprofiles006.png

