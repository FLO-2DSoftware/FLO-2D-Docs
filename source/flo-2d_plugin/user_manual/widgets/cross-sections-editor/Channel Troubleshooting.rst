.. _channel-troubleshooting:

Channel Editor Troubleshooting
------------------------------

This section describes common errors and warnings associated
with channel schematization, interpolation, cross-section
geometry, and channel data.

Each error is assigned a unique CH-XXX identifier to help
identify the problem and its corrective action.

Channel Schematization
______________________

CH-001: Cross Section Does Not Intersect Both Banks
+++++++++++++++++++++++++++++++++++++++++++++++++++

**Problem:** A cross section does not intersect both the left
and right channel banks.

**Solution:**

1. Locate the affected cross section.
2. Verify that the cross section intersects both channel banks.
3. Extend or reposition the cross section as necessary.
4. Save the edits and run Schematize again.

.. image:: ../../img/User-Cross-Sections-Widget/user100.png


CH-002: Left Bank Intersects a Cross Section More Than Once
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

**Problem:** A left bank segment touches or intersects the same
cross-section line at more than one location.

**Solution:**

1. Locate the affected left bank segment and cross section.
2. Inspect the bank alignment for loops, sharp bends, or
   overlapping geometry.
3. Adjust the left bank so that it intersects the cross
   section only once.
4. Verify that the cross section still intersects both banks.
5. Save the edits and run Schematize again.

.. image:: ../../img/User-Cross-Sections-Widget/user101.png


CH-003: Incorrect Starting Cross-Section Alignment
++++++++++++++++++++++++++++++++++++++++++++++++++

**Problem:** The starting bank nodes and cross-section endpoints
are not located within the corresponding grid elements.

**Solution:**

1. Locate the first cross section of the channel segment.
2. Verify that the left bank node and corresponding
   cross-section endpoint are in the same grid element.
3. Repeat this check for the right bank node and endpoint.
4. Adjust the bank or cross-section alignment as necessary.
5. Save the edits and run Schematize again.

.. image:: ../../img/User-Cross-Sections-Widget/user102.png


Channel Interpolation
_____________________

CH-004: Insufficient Channel Width
++++++++++++++++++++++++++++++++++

**Problem:** The channel width is insufficient for
interpolation.

**Solution:**

1. Run the Channel Check tool.
2. Select the affected channel from the report.
3. Inspect the left and right bank alignment.
4. Move the banks farther apart where necessary.
5. Save the edits.
6. Run Schematize and Interpolate again.

.. image:: ../../img/User-Cross-Sections-Widget/user103.png

.. image:: ../../img/User-Cross-Sections-Widget/user104.png


CH-005: Missing Manning's n-Value
+++++++++++++++++++++++++++++++++

**Problem:** One or more channel cross sections are missing
Manning's roughness coefficients.

**Solution:**

1. Open the Cross Sections attribute table.
2. Inspect the Manning's n-value field.
3. Enter the required roughness coefficient for each
   affected cross section.
4. Save the changes and run Interpolate again.

.. image:: ../../img/User-Cross-Sections-Widget/user105.png


Schematized Channel Data
________________________

CH-006: Schematized Channel Segments Layer Is Empty
+++++++++++++++++++++++++++++++++++++++++++++++++++

**Problem:** The Schematized Channel Editor cannot find any
schematized channel segments.

**Solution:**

1. Verify that the left and right channel banks have
   been digitized.
2. Verify that the channel cross sections have been created.
3. Run the Schematize tool to generate the channel data.
4. Confirm that the Schematized Channel Segments layer
   contains channel features.
5. Reopen the Schematized Channel Editor.

.. image:: ../../img/User-Cross-Sections-Widget/user106.png


CH-007: Channel Segment Missing
+++++++++++++++++++++++++++++++

**Problem:** The selected channel segment cannot be found
in the schematized channel data.

**Solution:**

1. Verify that the channel segment exists in the model.
2. Inspect the Schematized Channel Segments layer.
3. Check whether the segment was deleted or modified.
4. Refresh the Channel Editor.
5. If necessary, correct the channel geometry and run
   Schematize again.

.. image:: ../../img/User-Cross-Sections-Widget/user107.png


CH-008: No Schematized Channel Cross Sections
+++++++++++++++++++++++++++++++++++++++++++++

**Problem:** No schematized channel cross sections were found
for the selected channel element or segment.

**Solution:**

1. Verify that the channel cross sections have been created.
2. Confirm that the cross sections intersect the channel banks.
3. Run the Schematize tool.
4. Inspect the schematized channel elements.
5. Reopen the Channel Geometry Editor.

.. image:: ../../img/User-Cross-Sections-Widget/user108.png


Cross-Section Geometry Data
___________________________

CH-009: Rectangular Cross Section Has No Data
+++++++++++++++++++++++++++++++++++++++++++++

**Problem:** A channel element is assigned a Rectangular (R)
cross-section type, but the corresponding geometry data
are missing.

**Solution:**

1. Open the Channel Geometry Editor.
2. Locate the affected channel element.
3. Verify that the cross-section type is Rectangular (R).
4. Inspect the left and right bank elevations, channel
   width, and thalweg depth.
5. Correct the missing geometry data.
6. Save the changes.

.. image:: ../../img/User-Cross-Sections-Widget/user109.png


CH-010: Variable Cross Section Has No Data
++++++++++++++++++++++++++++++++++++++++++

**Problem:** A channel element is assigned a Variable (V)
cross-section type, but the corresponding geometry data
are missing.

**Solution:**

1. Open the Channel Geometry Editor.
2. Locate the affected channel element.
3. Verify that the cross-section type is Variable (V).
4. Inspect the bank elevations, thalweg depth, and
   cross-section hydraulic geometry coefficients.
5. Correct the missing geometry data.
6. Save the changes.

.. image:: ../../img/User-Cross-Sections-Widget/user110.png


CH-011: Trapezoidal Cross Section Has No Data
+++++++++++++++++++++++++++++++++++++++++++++

**Problem:** A channel element is assigned a Trapezoidal (T)
cross-section type, but the corresponding geometry data
are missing.

**Solution:**

1. Open the Channel Geometry Editor.
2. Locate the affected channel element.
3. Verify that the cross-section type is Trapezoidal (T).
4. Inspect the bank elevations, channel width, thalweg
   depth, and left and right side slopes.
5. Correct the missing geometry data.
6. Save the changes.

.. image:: ../../img/User-Cross-Sections-Widget/user111.png


CH-012: Natural Cross Section Has No Data
+++++++++++++++++++++++++++++++++++++++++

**Problem:** A channel element is assigned a Natural (N)
cross-section type, but the corresponding cross-section
data are missing.

**Solution:**

1. Open the Cross Sections Editor.
2. Locate the affected natural cross section.
3. Verify that the cross-section geometry exists.
4. Inspect the station-elevation data.
5. Resample the cross-section elevations if necessary.
6. Run Schematize and Interpolate again.

.. image:: ../../img/User-Cross-Sections-Widget/user112.png


Do we need this
------------------

Troubleshooting cross sections
_______________________________

1. If a cross section data is bad, the interpolator will not run.  An error message may appear.

.. image:: ../../img/User-Cross-Sections-Widget/user060.png

2. Check to see if the channel width is correct by running the clicking the channel check button.

.. image:: ../../img/User-Cross-Sections-Widget/User013.png

3. If the channel is not wide enough, a dialog box will load that allows the user to load the channel that needs to be
   widened.

.. image:: ../../img/User-Cross-Sections-Widget/user059.png

4. Move the left or right bank further away from each other and run the schematize and interpolator again.

.. image:: ../../img/User-Cross-Sections-Widget/user061.png