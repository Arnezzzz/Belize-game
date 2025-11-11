function highlightRegion(region) {
    // Hide all highlights
    document.querySelectorAll('.highlight').forEach(function(el) {
        el.classList.remove('highlight');
    });

    // Get the region's coordinates and highlight it
    const mapArea = getRegionCoordinates(region);
    const highlightArea = document.getElementById('highlighted-area');

    highlightArea.style.left = mapArea.left + 'px';
    highlightArea.style.top = mapArea.top + 'px';
    highlightArea.style.width = mapArea.width + 'px';
    highlightArea.style.height = mapArea.height + 'px';
    highlightArea.style.display = 'block';
}

// Define coordinates for each district
function getRegionCoordinates(region) {
    const regions = {
        "orange-walk": { left: 10, top: 10, width: 90, height: 90 },
        "cayo": { left: 110, top: 10, width: 90, height: 90 },
        "belize": { left: 210, top: 10, width: 90, height: 90 },
        "stann-creek": { left: 310, top: 10, width: 90, height: 90 },
        "toledo": { left: 410, top: 10, width: 90, height: 90 }
    };

    return regions[region] || { left: 0, top: 0, width: 0, height: 0 };
}
