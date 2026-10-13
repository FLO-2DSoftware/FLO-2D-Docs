FLORunner
=========

FLORunner allows you to batch run one or more FLO-2D projects in a controlled sequence.

#. Select the project folder.

   Click the **Folder** button and select the ``CONT.DAT`` file located in the FLO-2D project directory.

   .. figure:: img/select_cont.png
      :align: center

#. Select multiple project folders (optional).

   Click the **Multiple folders** button to select directories containing multiple FLO-2D projects.

   .. figure:: img/select_md.png
      :align: center

#. Review detected projects.

   FLORunner automatically detects all projects and displays their current status.

   .. figure:: img/selected_projects.png
      :align: center

   .. note::

      - Green check mark: project completed successfully.
      - Blue circle: project is on hold.
      - Red warning icon: project failed.

#. Set the execution order.

   .. figure:: img/selected_projects.png
      :align: center

   .. note::

      - Order numbers must be unique.
      - Projects with order ``0`` will not run.

#. **Run the simulations**

   Click the **Run** button to execute the simulations in the
   specified sequence.

   * FLORunner automatically tracks and displays the progress
     and status of each simulation.
   * Simulations run silently in batch mode, without requiring
     user interaction between runs.
   * Each simulation starts automatically when the preceding
     simulation is complete.

   .. figure:: img/florun003.png
      :align: center

   
