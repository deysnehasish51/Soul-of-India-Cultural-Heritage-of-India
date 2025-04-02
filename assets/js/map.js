// here theme begins
am4core.useTheme(am4themes_animated);
// Themes end here

// creating map instance
let chart = am4core.create("chartdiv", am4maps.MapChart);

// setting definition of map
chart.geodata = am4geodata_india2019High;

// this is map polygon
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());


    function handleStateClick(event) {
      
        var stateName = event.target.dataItem.dataContext.name;
        console.log(stateName);

        var linkHref = "/statePage/" + stateName;
        window.open(linkHref, '_blank');
       
    }
    
    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;  
    

    // Create hover state and set an alternative fill color
    let hs = polygonTemplate.states.create("hover");

    hs.properties.fill = am4core.color("silver");

    polygonTemplate.events.on("hit", handleStateClick);

