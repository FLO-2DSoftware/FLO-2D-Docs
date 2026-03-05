.. version: Build 25
.. This is the documentation for Build 25

FLO-2D Pro Documentation – Build 25
====================================

.. raw:: html

   <div style="text-align:center">
     <img id="flo2dimg" src="_static/docshome.png" usemap="#flo2dmap" style="max-width:100%; height:auto;">
     <map name="flo2dmap">
       <!-- Installation -->
       <area shape="rect" coords="65,590,275,660" href="setup/index.html" alt="Installation">
       <!-- Reference Manuals -->
       <area shape="rect" coords="310,590,550,660" href="flo-2d_pro/index.html" alt="Reference Manuals">
       <!-- Plugin Docs -->
       <area shape="rect" coords="625,590,840,660" href="flo-2d_plugin/index.html" alt="Plugin Docs">
       <!-- Tutorials -->
       <area shape="rect" coords="920,590,1100,660" href="tutorials/index.html" alt="Tutorials">
     </map>

     <script>
     (function() {
       function initMap() {
         var img = document.getElementById('flo2dimg');
         if (!img) return;
         var areas = img.parentElement.querySelector('map').querySelectorAll('area');
         var origCoords = Array.from(areas).map(function(a) { return a.getAttribute('coords'); });
         var naturalW = 1200; // confirmed natural width of docshome.png

         function scaleCoords() {
           var scale = img.clientWidth / naturalW;
           areas.forEach(function(area, i) {
             var scaled = origCoords[i].split(',').map(function(n) {
               return Math.round(parseFloat(n) * scale);
             }).join(',');
             area.setAttribute('coords', scaled);
           });
         }

         if (img.complete && img.naturalWidth > 0) {
           scaleCoords();
         } else {
           img.addEventListener('load', scaleCoords);
         }
         window.addEventListener('resize', scaleCoords);
       }

       if (document.readyState === 'loading') {
         document.addEventListener('DOMContentLoaded', initMap);
       } else {
         initMap();
       }
     })();
     </script>
   </div>

Welcome to the Build 25 version of the FLO-2D Documentation.

.. toctree::
   :maxdepth: 1
   :caption: Contents:

   setup/index
   flo-2d_pro/index
   flo-2d_plugin/index
   flo-2d_mapcrafter/index
   flo-2d_florunner/index
   tutorials/index
