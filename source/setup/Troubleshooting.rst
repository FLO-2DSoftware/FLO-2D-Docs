Troubleshooting
================

This short troubleshooting guide might help resolve some issues but if you are stuck please reach out via our contact form.

|Contact-Form|

Installation Test
-------------------

1. Test FLO-2D engine by running a model from a project folder.  Copy the Run for Project files from

   C:\\Program Files (x86)\\FLO-2D PRO\\Run for Project Folder

.. image:: ../img/Instructions/installtest01.png

2. Paste the files into any project folder with \*.DAT files like Barn.

   C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\Example Projects\\Example Projects\\Barn Mudflow

.. image:: ../img/Instructions/installtest02.png

3. Double click FLOPRO.EXE to start a test run.

4. If the computer is activated with the professional version, this message will appear.

.. image:: ../img/Instructions/installtest03.png

5. If the computer isn't activated, this message will appear.

.. image:: ../img/Instructions/installtest04.png

6. Any other message might need some troubleshooting.  Find the related issue below.

FLO-2D Pro Troubleshooting
-----------------------------

If something isn't working, do not uninstall FLO-2D.  That is rarely a correct way to fix the installation.
email FLO-2D via the |Contact-Form| for support.

.. |Contact-Form| raw:: html

   <a href="https://flo-2d.com/contact/" target="_blank">Contact Form</a>

Data Errors
__________________________

Most FLO-2D errors stem from data errors in the \*.dat or \*.hdf5.  These files contain the data used by the engine
during a simulation.  Error messages are typically written to the FLO-2D \*.chk files.  These ascii files can be read
using any text editor but FLO-2D Software recommends NotePad++ or any program that has column editing mode.

The check files are:
 - ERROR.CHK
 - STORMDRAIN_ERROR.CHK
 - ARF_ADJUSTMENT.CHK
 - CHANBANKEL.CHK
 - CHANNEL.CHK
 - UndergOUTFALLS.CHK


Check files contain:
 - Notes
 - Warnings
 - Errors

If the simulation stops with an error message, review the check files for errors.  Notes and warnings will not stop a
simulation.

Troubleshooting Help:
 - FLO-2D Data Input Manual Chapter 7
 - Storm Drain Guidelines
 - FLO-2D Plugin Technical Reference Manual

Fortran Errors
__________________________

Fortran error messages appear when the FLO-2D engine (flopro.exe) gets a data format or character that is not
recognized. The error messages contain references that point to the file causing the problems.


**Example 1**

In the following image, vc2005con.dll and swmm_startif.f90 are listed in the error message.
This indicates that the error is in the storm drain files.

.. image:: ../img/Instructions/fortran.png\

**Example 2**

In the following image, hydrst.f90 is listed in the error message.
This indicates that the error is in the hydraulic structure system.

.. image:: ../img/Instructions/fortran2.png

Check the data in the files for errors that could disrupt flopro.exe.

Drive Errors
_________________

**OneDrive**

Running a model on a drive that is using OneDrive sync can disrupt the processing.
Do not run long models on directories using OneDrive sync.

**External Drives**

Running a model on an external drive might slow a model down or be disrupted by a drive related issue such as
maintenance or connection disruptions.  Do not run long models on an external drive.

**Virtual Machines**

Running a model on a Virtual Machine is a good practice.  Windows OS is required.  Install and activate FLO-2D on the
VM.  Visual studio redistributable packages must be installed.  VMs may be slower than running on a good computer.


FLO-2D Plugin and QGIS Errors
--------------------------------

Error messages related to the FLO-2D Plugin may appear as Python Errors, or an error messages reported by the FLO-2D
plugin.

FLO-2D Plugin Error
_____________________

FLO-2D Plugin errors messages appear in error message windows.  If the error message isn't helpful,
more troubleshooting ideas are sometimes available in the individual sections of the user manual.  For example, if
an error message appeared during Create Grid, see the Troubleshooting section of Create a Grid.

.. image:: ../img/Instructions/trouble002.png

Plugin error messages are also listed in the FLO-2D Plugin Technical Reference manual.  Find it here:

C:\\Users\\Public\\Documents\\FLO-2D PRO Documentation\\flo_help\\Manuals

Python Error
______________

Python error messages have clues about the location of the error.

In this case, the error points to a problem with the FLO-2D Plugin.  Use the contact form to send a request to fix the
but.

Some error messages are related incorrect data in the QGIS vector or raster layers.  In those cases, use Chat GPT or the
Stack Exchange to get ideas on how to fix a layer.

.. image:: ../img/Instructions/trouble001.png

GDS and Mapper Troubleshooting
-------------------------------

GDS and Mapper are written in Visual Basic code.  Visual basic has been obsolete code for more than a decade.
Because of SysWOW (System Windows on Windows), old programs can be used but are challenging to install.
Some computers won't have any issues and others simply will not run GDS and Mapper because things like
Microsoft Data Access (MDAC) and Data Access Objects (DAO) will not load or be recognized by the computer.

FLO-2D solved this issue by upgrading to QGIS and the FLO-2D Plugin.  If you still want to
use GDS or Mapper and you get missing dll failures or struggle to use GDS processors, this section may help.

1. GDS might not be connected to it's MapObjects dlls.  These are the objects that do things like load images, load
   tables, intersect shapefiles, and create the grid.  The fault will look like this:

.. image:: ../img/Instructions/gdsfault01.png

2. If this fault shows up, delete the contents of this folder and run the FLO-2D Pro Setup Installer - MapObjects section again.

   C:\\Program Files(x86)\\Common Files\\ESRI

   Don't worry, these old files are not used by ArcGIS Desktop or ArcGIS Pro.

3. GDS might give an error message when the user tries to set up a new project using Define Working Region....
   A path correction will fix this fault.  When a new project doesn't have a project path, it tries to write data
   to the C:\\Program Filex(x86)\\FLO-2D Pro path.  This path is protected by Admin Rights.

.. image:: ../img/Instructions/gdsfault03.png

4. The error message that appears states something about admin rights or permissions.  Correct it by applying a project
   path in GDS\\Tools\\Options\\Directory Paths

.. image:: ../img/Instructions/gdsfault04.png

5. GDS and Mapper may have overflow or out of memory error messages.  This is not a correctable fault.
   They are both 32-bit programs and have limitations related to the memory they can use.  This varies by computer
   and by screen size so if you get this fault on one computer, it may not show up on an older computer.

.. image:: ../img/Instructions/gdsfault05.png


5. GDS and Mapper default settings are for computers in the USA.  It may be necessary to adjust the number separator.
   If an error message appears about the number separator, use the Control Panel\\Clock and Region\\Additional Settings
   to set the decimal separator to a ".".  International users might want to use QGIS so this is not necessary.

.. image:: ../img/Instructions/gdsfault06.png

6. Sometimes the Microsoft Data Access program doesn't install correctly and GDS cannot find the MDAC dlls.
   It may be possible to reinstall the MDAC setup program.
   |GDSPatch|

.. |GDSPatch| raw:: html

   <a href="https://flo-2d.sharefile.com/d-sca2c917fcb9d424091e9faa8272b29b8" target="_blank">Download GDS Patch.</a>

7. GDS Tutorials are no longer part of the FLO-2D Pro Setup.  To get the GDS and Mapper Tutorials, Run this installer:
   |GDStutorials|

.. |GDStutorials| raw:: html

   <a href="https://flo-2d.sharefile.com/d-s6907dafe3ebc4abab8aa6ad4df386a2c" target="_blank">Download GDS Tutorials.</a>



Testing Sandbox
-----------------

Windows Sandbox Test Environment Setup for QGIS Standalone and FLO-2D Plugin

(Manual script execution version — most reliable setup)

1. Create the Sandbox Project Folder on the Host

Create:

C:\Sandbox\QGIS_Test\


Inside it:

C:\Sandbox\QGIS_Test\
    ├─ QGIS_Installer\
    │       QGIS-OSGeo4W-3.34.xx.msi
    │
    ├─ Plugin\
    │       flo2d\   (entire plugin folder)
    │
    ├─ Startup\
    │       install_qgis.cmd
    │       copy_plugin.cmd
    │
    └─ QGIS_Test_Container.wsb


Place your QGIS Standalone MSI in the QGIS_Installer folder.

Place your FLO-2D plugin folder (including embedded_python if you have one) in:

C:\Sandbox\QGIS_Test\Plugin\flo2d\

2. Create the Startup Scripts

These will be run manually inside the Sandbox session.

2.1 install_qgis.cmd

Path:

C:\Sandbox\QGIS_Test\Startup\install_qgis.cmd


Contents:

```

@echo off
echo Installing QGIS Standalone...

msiexec /i "C:\Users\WDAGUtilityAccount\Desktop\QGIS_Test\QGIS_Installer\QGIS-OSGeo4W-3.34.15-1.msi" /qn /norestart

echo QGIS installation complete.
exit /b
```

2.2 copy_plugin.cmd

Path:

`C:\Sandbox\QGIS_Test\Startup\copy_plugin.cmd


Contents:

```

@echo off

set TARGET=C:\Users\WDAGUtilityAccount\AppData\Roaming\QGIS\QGIS3\profiles\default\python\plugins\flo2d

echo Creating FLO-2D plugin folder...
mkdir "%TARGET%" 2>nul

echo Copying plugin...
xcopy "C:\Users\WDAGUtilityAccount\Desktop\QGIS_Test\Plugin\flo2d" "%TARGET%" /E /I /Y

echo Plugin copy complete.
exit /b

```

3. Create the Windows Sandbox Configuration File (NO auto scripts)

Create:

`C:\Sandbox\QGIS_Test\QGIS_Test_Container.wsb


Use this simplified XML configuration:

<Configuration>
  <MappedFolders>
    <MappedFolder>
      <HostFolder>C:\Sandbox\QGIS_Test</HostFolder>
      <SandboxFolder>C:\Users\WDAGUtilityAccount\Desktop\QGIS_Test</SandboxFolder>
      <ReadOnly>false</ReadOnly>
    </MappedFolder>
  </MappedFolders>
</Configuration>

✔ What this does

Maps your entire setup folder onto the Sandbox desktop

Allows you to run the scripts manually

Avoids all parsing issues from <LogonCommand>

Works 100% reliably on all Windows 10/11 Pro machines

4. Launch the Sandbox

Run:

`C:\Sandbox\QGIS_Test\QGIS_Test_Container.wsb`


When the Sandbox loads, you will see this folder on the Sandbox Desktop:

QGIS_Test


Open it → open the Startup folder.

5. Install QGIS and Load the FLO-2D Plugin (Manual Steps)
Step 1 — Install QGIS

Inside Sandbox:

Desktop → QGIS_Test → Startup → install_qgis.cmd


QGIS installs silently (20–40 seconds).

Step 2 — Copy the Plugin

Run:

Desktop → QGIS_Test → Startup → copy_plugin.cmd


This places the plugin into:

C:\Users\WDAGUtilityAccount\AppData\Roaming\QGIS\QGIS3\profiles\default\python\plugins\flo2d

Step 3 — Launch QGIS
Start Menu → QGIS → QGIS 3.34.x


Verify plugin appears under:

Plugins → Manage and Install Plugins → flo2d

6. Verify h5py (or other modules) inside QGIS

Open:

Plugins → Python Console


Test:

import h5py
print(h5py.__version__)
print(h5py.__file__)


You should see:

...flo2d\embedded_python\Lib\site-packages\h5py\__init__.py

7. Summary

This setup gives you:

A safe, disposable Windows environment

Guaranteed QGIS Standalone installation

Guaranteed plugin installation

Clean configuration without LogonCommand errors

Full access to embedded Python modules inside the plugin (h5py, pyqtgraph, etc.)

Identical reproducibility across any workstation