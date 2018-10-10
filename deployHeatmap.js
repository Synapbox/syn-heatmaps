var DataHeatMap;

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                DataHeatMap = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

}

var txtFile = "DataHeatMap.txt"
readTextFile(txtFile);

window.onload = function() {

    // minimal heatmap instance configuration
    var heatmapInstance = h337.create({
        // only container is required, the rest will be defaults
        container: document.querySelector('#heatmapContainer'),

        /*
        [0-0.1-1]
        low - transparent
        high - high color
        */
        maxOpacity: 0.5,
        radius: 10,
        /*
        [0-0.1-1]
        low - better circle
        high - fuzzed circle
        */
        blur: 0.5

        //radius: 38,
        //maxOpacity: .40,
        //blur: 1
    });

    // now generate some random data
    var points = (new Function("return [" + DataHeatMap + "];")());
    var max = 2;

    var data = {
        max: max,
        data: points
    };
    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    heatmapInstance.setData(data);

};