.. container:: dropdown

    .. container:: header

        OSGeo4W Installation and Python Module Setup

    .. container:: content

        ### Overview
        ^^^^^^^^^^^^

        This guide describes how to install QGIS using the OSGeo4W Network Installer and how to add the optional Python modules ``h5py`` and ``netCDF4``. The OSGeo4W environment includes its own Python installation, so additional steps are required when installing scientific packages.

        ### OSGeo4W Express Installation
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        Follow these steps to install QGIS using the OSGeo4W Network Installer:

        1. Download the installer from:

           https://qgis.org/download

        2. Select **OSGeo4W Network Installer** (64-bit).

        3. Choose **Express Installation**.

        4. Select the following packages:

           * **QGIS Desktop**
           * **QGIS Desktop (LTR)**
           * **Python 3** (included automatically)
           * **GDAL**
           * **GRASS** (optional)
           * **SAGA** (optional)

        5. Complete the installation.

        The QGIS Python environment is located in:

        ``C:\OSGeo4W\apps\Python39``  
        or  
        ``C:\Program Files\QGIS 3.xx\apps\Python39``

        depending on the installation target.

        ### Opening the OSGeo4W Shell
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        Use the OSGeo4W Shell to install Python modules. Do not use PowerShell or Command Prompt.

        Steps:

        1. Open the **Start Menu**.
        2. Launch:

           **OSGeo4W Shell**

        3. Verify the active Python environment:

        ::

            python -V

        ### Installing h5py and netCDF4
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        Some Python packages require compiled binaries. OSGeo4W Python may not support every module through standard ``pip`` installation, but binary wheels can be installed when available.

        1. Upgrade ``pip``:

        ::

            python -m pip install --upgrade pip

        2. Install ``numpy``:

        ::

            python -m pip install numpy

        3. Install ``h5py``:

        ::

            python -m pip install h5py --only-binary=:all:

        4. Install ``netCDF4``:

        ::

            python -m pip install netCDF4 --only-binary=:all:

        These commands prevent source builds, which are unsupported in most OSGeo4W setups.

        ### Verification
        ^^^^^^^^^^^^^^^^

        Confirm the installation:

        ::

            python -c "import h5py; print('h5py:', h5py.__version__)"
            python -c "import netCDF4; print('netCDF4:', netCDF4.__version__)"

        ### Notes
        ^^^^^^^^^

        * Installation may fail if wheels do not match the OSGeo4W Python version.
        * OSGeo4W Python is isolated from the system Python and Anaconda.
        * Installing packages from outside the OSGeo4W Shell will not affect QGIS.

        ### Alternatives
        ^^^^^^^^^^^^^^^^

        If modules cannot be installed inside OSGeo4W:

        * Use QGIS Standalone, which bundles additional scientific libraries.
        * Embed a local Python virtual environment inside a QGIS plugin.
        * Use external Python environments for preprocessing tasks.
