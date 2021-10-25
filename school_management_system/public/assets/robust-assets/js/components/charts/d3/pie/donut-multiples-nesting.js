$(window).on("load",function(){function a(){d=b.node().getBoundingClientRect().width-c.left-c.right,container.attr("width",d+c.left+c.right),svg.attr("width",d+c.left+c.right),x.range([0,d]),svg.selectAll(".d3-xaxis").call(xAxis),svg.selectAll(".d3-line").attr("d",line)}var b=d3.select("#nested-donut"),c={top:20,right:10,bottom:20,left:10},d=300,e=300;radius=(Math.min(d,e)-2*c.top)/2;var f=d3.scale.ordinal().range(["#99B898","#FECEA8","#FF847C","#E84A5F","#F8B195","#F67280","#C06C84"]);d3.csv("robust-assets/demo-data/d3/pie/flights.csv",function(a){function d(a){var b=90*(a.startAngle+a.endAngle)/Math.PI-90;return b>90?b-180:b}var e=d3.nest().key(function(a){return a.origin}).entries(a),g=b.selectAll("svg").data(e).enter().append("svg").attr("width",2*(radius+c.left+c.right)).attr("height",2*(radius+c.left+c.right)).append("g").attr("transform","translate("+(radius+c.left+c.right)+","+(radius+c.left+c.right)+")"),h=d3.svg.arc().innerRadius(radius/2).outerRadius(radius),i=d3.layout.pie().value(function(a){return+a.count}).sort(function(a,b){return b.count-a.count});g.append("text").attr("dy",".35em").style("text-anchor","middle").style("font-weight",500).text(function(a){return a.key});var j=g.selectAll("g").data(function(a){return i(a.values)}).enter().append("g").attr("class","d3-arc");j.append("path").attr("d",h).style("stroke","#fff").style("fill",function(a){return f(a.data.carrier)}).append("title").text(function(a){return a.data.carrier+": "+a.data.count}),j.filter(function(a){return a.endAngle-a.startAngle>.2}).append("text").attr("dy",".35em").attr("transform",function(a){return"translate("+h.centroid(a)+")rotate("+d(a)+")"}).style("fill","#fff").style("font-size",12).style("text-anchor","middle").text(function(a){return a.data.carrier})}),$(window).on("resize",a),$(".menu-toggle").on("click",a)});