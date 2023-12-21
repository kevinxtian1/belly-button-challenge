function tables(response){
    let sample_values1 = response.samples
    let names = response.names
    let m = response.metadata
    let md = document.getElementById("sample-metadata")
    var newElement = document.createElement('div'); 
    newElement.setAttribute('id', 'n'); 
    document.body.appendChild(newElement); 
    var mydiv = document.createElement('div'); 
    mydiv.setAttribute('id', 'a'); 
    document.body.appendChild(mydiv); 
    const elem = document.createElement('div');
    const elem2 = document.createElement('div');
    const elem3 = document.createElement('div');
    const elem4= document.createElement('div');
    const elem5 = document.createElement('div');
    const elem6 = document.createElement('div');
    const elem7 = document.createElement('div');
    elem.innerHTML = `ID: ${m[0].id}`
    md.appendChild(elem)
    elem2.innerHTML = `Ethnicity: ${m[0].ethnicity}`
    md.appendChild(elem2)
    elem3.innerHTML = `Gender: ${m[0].gender}`
    md.appendChild(elem3)
    elem4.innerHTML = `Age: ${m[0].age}`
    md.appendChild(elem4)
    elem5.innerHTML = `Location: ${m[0].location}`
    md.appendChild(elem5)
    elem6.innerHTML = `bbtype: ${m[0].bbtype}`
    md.appendChild(elem6)
    elem7.innerHTML = `wfreq: ${m[0].wfreq}`
    md.appendChild(elem7)
    var select = document.getElementById("selDataset")
    for(i = 0; i < names.length; i++){
        var option = document.createElement('option');
        option.text = names[i];
        select.add(option, 0)
    }
    var trace1 = {
        x: sample_values1[0].otu_ids,
        y: sample_values1[0].sample_values,
        mode: 'markers',
        marker: {
          color: sample_values1[0].otu_ids,
          size: sample_values1[0].sample_values
        },
        text: [sample_values1[0].otu_labels]
      };
    var data = trace1
    var layout = {
        title: 'belly',
        height: 1600,
        width: 1600,
    }
    Plotly.newPlot(newElement, [data], layout);
    var sortedData = sample_values1[0].sample_values
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
    var data2 = [{
        type: 'bar',
        x: sortedData,
        text: sample_values1[0].otu_ids,
        orientation: 'h'
      }];
      
      Plotly.newPlot(mydiv, data2);
    document.getElementById("selDataset").addEventListener("change", myfunction)
function myfunction(){
        elem.innerHTML = ''
        elem2.innerHTML = ''
        elem3.innerHTML = ''
        elem4.innerHTML = ''
        elem5.innerHTML = ''
        elem6.innerHTML = ''
        elem7.innerHTML = ''
    for(i = 0; i < m.length; i++){
       if(m[i].id == select.value){
            elem.innerHTML = `ID: ${m[i].id}`
            elem2.innerHTML = `Ethnicity: ${m[i].ethnicity}`
            elem3.innerHTML = `Gender: ${m[i].gender}`
            elem4.innerHTML = `Age: ${m[i].age}`
            elem5.innerHTML = `Location: ${m[i].location}`
            elem6.innerHTML = `bbtype: ${m[i].bbtype}`
            elem7.innerHTML = `wfreq: ${m[i].wfreq}`
            md.appendChild(elem)
            md.appendChild(elem2)
            md.appendChild(elem4)
            md.appendChild(elem5)
            md.appendChild(elem6)
            md.appendChild(elem7)
            break;
       }
    }
       for(i = 0; i < sample_values1.length; i++){
        console.log(sample_values1[i].otu_ids)
        if(sample_values1[i].id == select.value){
            var trace1 = {
                x: sample_values1[i].otu_ids,
                y: sample_values1[i].sample_values,
                mode: 'markers',
                marker: {
                  color: sample_values1[i].otu_ids,
                  size: sample_values1[i].sample_values
                },
                text: [sample_values1[i].otu_labels]
              };
            var data = trace1
            var layout = {
                title: 'belly',
                height: 1600,
                width: 1600,
            }
            var sortedData = sample_values1[i].sample_values
            .sort((a, b) => b.value - a.value)
            .slice(0, 10);
            var data2 = [{
            type: 'bar',
            x: sortedData,
            text: sample_values1[i].otu_ids,
            orientation: 'h'
      }];
      
      Plotly.newPlot(mydiv, data2);
            Plotly.newPlot(newElement, [data], layout);
            break;

        }
    }
    }
}





















d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(tables)
