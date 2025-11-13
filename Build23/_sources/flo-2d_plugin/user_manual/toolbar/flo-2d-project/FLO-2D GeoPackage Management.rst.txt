FLO-2D GeoPackage Management
=============================

The FLO-2D GeoPackage Management tool allows users to delete layers added to the GeoPackage.
Whether a layer is too heavy or was added mistakenly, this tool facilitates efficient maintenance of a
well-structured GeoPackage.

GeoPackage Management
-----------------------------

1. Click on the FLO-2D GeoPackage Management button.

.. image:: ../../../img/Buttons/open003.png

2.The FLO-2D GeoPackage Management dialog will appear.

.. image:: ../../../img/Flo-2D-Project/flo2dgeomanag001.png

3. Select the layers that will be deleted by checking them on the FLO-2D GeoPackage Management.

.. image:: ../../../img/Flo-2D-Project/flo2dgeomanag002.png

4. If the layer was correctly deleted, the following message will appear on the QGIS message toolbar.

.. image:: ../../../img/Flo-2D-Project/flo2dgeomanag003.png

.. note::  The layers that can be deleted are layers that were added by the user. The layers required by
           FLO-2D are not allowed to be deleted and, therefore, are not shown on the FLO-2D GeoPackage Management
           window.

GeoPackage Structure
-------------------------------------------

.. warning:: Do not delete layers that are part of the native GeoPackage structure.  This will break the project.
   Perform a backup prior to modifying a geopackage with sqlite tools.  Sqlite is a powerful and easy way to perform
   database modification.  Just be careful.

1. View a GeoPackage Structure using the QGIS Browser panel.

.. image:: ../../../img/Flo-2D-Project/gpkgbrow001.png

2. Connect to a GeoPackage to load it into the Browser panel.

.. image:: ../../../img/Flo-2D-Project/gpkgbrow002.png

3. Expand the panel and click any table to see some options.

.. image:: ../../../img/Flo-2D-Project/gpkgbrow003.png

4. A geopackage can also be viewed and modified in a program called DataBase Browser.

|DbBrowser|

.. |DbBrowser| raw:: html

   <a href="https://sqlitebrowser.org/" target="_blank">Database Browser</a>


