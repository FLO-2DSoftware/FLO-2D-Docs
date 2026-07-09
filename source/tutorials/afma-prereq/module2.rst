Module 2 - Setup HEC-RAS 6.0
====================================================

Step 1: Get the Software
---------------------------------------------------

1. Open a web browser and navigate to the HEC-RAS download page.

   https://www.hec.usace.army.mil/software/hec-ras/download.aspx

2. Download the HEC-RAS 6.0 installation package.

3. Save the installer to a location that is easy to find, such as your
   Downloads folder.

HEC-RAS is developed and distributed free of charge by the U.S. Army
Corps of Engineers Hydrologic Engineering Center (HEC). :contentReference[oaicite:0]{index=0}


Step 2: Verify System Requirements
---------------------------------------------------

Before installing HEC-RAS, verify that your computer meets the minimum
requirements.

* Windows 64-bit operating system
* Administrative privileges to install software
* Sufficient disk space for the software and project files

HEC-RAS Version 6.0 and newer require a 64-bit Windows operating system. :contentReference[oaicite:1]{index=1}


Step 3: Run the Installer
---------------------------------------------------

1. Locate the downloaded installation file.
2. Right-click the installer and select **Run as Administrator**.
3. If prompted by Windows User Account Control (UAC), click **Yes**.
4. Follow the installation wizard and accept the default settings unless
   your organization requires a different installation location.
5. Click **Install** and wait for the installation to complete.
6. Click **Finish** when the installation is complete.


Step 4: Launch HEC-RAS
---------------------------------------------------

1. Open the Windows Start Menu.
2. Search for **HEC-RAS 6.0**.
3. Launch the application.

The HEC-RAS main window should open and display the standard menu and
toolbar interface.


Step 5: Confirm the Installation
---------------------------------------------------

1. From the HEC-RAS menu, select:

   **Help > About HEC-RAS**

2. Verify that the software version is listed as **6.0**.

If HEC-RAS opens successfully and the version number is displayed, the
installation is complete.


Step 6: Create a Working Directory
---------------------------------------------------

Create a folder structure for the workshop files before beginning any
model development.

Example:

::

   C:\HEC-RAS_Workshop\
   ├── Data
   ├── Terrain
   ├── Geometry
   ├── Results
   └── Backup

Keeping project files organized will make it easier to manage terrain,
geometry, flow data, and simulation results throughout the workshop.


Step 7: Download the Workshop Files
---------------------------------------------------

1. Download the workshop dataset provided by the instructor.
2. Extract the files to the ``HEC-RAS_Workshop`` directory.
3. Verify that all project files are accessible before proceeding to the
   next module.

At the end of this module, HEC-RAS should be installed, functioning
properly, and ready for model development.