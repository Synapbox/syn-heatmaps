## Elements

- **deployHeatmap.js**

JS that handle all the elements

- **heatmap.js**

[original library] (https://www.patrick-wied.at/static/heatmapjs/)

- **indexTest.html**

Front end web page

- **DataHeatMap.txt**

Example of data (x,y,value)
```
{ x : 305, y : 7, value : 1},
{ x : 305, y : 604, value : 1},
{ x : 307, y : 304, value : 1},
...
```
These information are retrieved by the getHeatMap SP in synapbox_core, the list of parameters are described below

| PARAMETER | VALUE |
| ------ | ------ |
| 3334,3335,3337 | list of task id |
| All-brand-flakes-D.mp4 | link of the video or image |
| 0 | second start |
| 10 | second end |
| 1200 | width of the image |
| 720 | height of the image |

***Example***

Four heatmaps, for the content "All-brand-flakes-A.mp4", in two task 3338 and 3346, in four distinct times: 0 to 3 seconds, 0 to 5 secons and 0 to 10 seconds, all resized to a fixed width of 1200 and 720 pixels. This size is determined by the image.

```
  CALL getHeatMap("3338,3346","All-brand-flakes-A.mp4",0,3,1200,720);
  CALL getHeatMap("3338,3346","All-brand-flakes-B.mp4",0,5,1200,720);
  CALL getHeatMap("3348,3346","All-brand-flakes-D.mp4",0,10,1200,720);
```

- **styleHeatMap.css**

The path of the image in the same folder
```
  background-image: url("Planograma.jpg");
```
Width and Height of the image
```
  width:1200px; 
  height:720px;
```
