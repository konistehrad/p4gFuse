/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var $ = require('jquery');
var Arcana = require('./arcana.js');
var Persona = require('./persona.js');


var sortedByNamePersona = Persona.ByLevel.sort(function(a, b)  {
    if( a.name > b.name ) return 1;
    if( a.name < b.name ) return -1;
    return 0;
});
var personaNamesInOrder = sortedByNamePersona.map(function(persona){ return persona.name; })

function drawIndividual(result) {
    var $results = $("#results").empty();
    if( !!result ) {
        $results.append($("<div class='column'></div>").text(result.name));
    }
}

function drawResults(resultsArray) {
    var $results = $("#results tbody").empty();
    for (var i = 0; !!resultsArray && i < resultsArray.length; i++) {
        var result = resultsArray[i];
        var $row = $("<tr></tr>");

        if( result.length === 2 ) {
            $row.append($("<td></td>").text(Persona.ToString(result[0])));
            $row.append($("<td></td>").text(Persona.ToString(result[1])));
        } else if( result.length === 3 ) {
            $row.append($("<td></td>").text(Persona.ToString(result[0])));
            $row.append($("<td></td>").text(Persona.ToString(result[1])));
            $row.append($("<td></td>").text(Persona.ToString(result[2])));
        }
        $results.append($row);
    };
}

var triangle = false;
function recalculateFusion() {
    var result = null;
    var firstName = $("#firstFusion").val();
    var secondName = $("#secondFusion").val();

    if( !!firstName && !!secondName ) {
        var firstPersona = Persona.ByName[firstName];
        var secondPersona = Persona.ByName[secondName];

        if( triangle ) {
            var thirdName = $("#thirdFusion").val();
            if( !!thirdName ) {
                result = Persona.TriangleCalculation(firstPersona,secondPersona,Persona.ByName[thirdName]);
            }
            
        } else {
            result = Persona.NormalCalculation(firstPersona,secondPersona);
        }
    }

    drawIndividual(result);
}

function recalculateFission() {
    var results = [];
    var fissibleName = $("#fissible").val();
    if( !!fissibleName ) {
        var fissiblePersona = Persona.ByName[fissibleName];
        if( triangle ) {
            var containingName = $("#containing").val();
            if(!!containingName) {
                results = Persona.BackCalcTriangle(fissiblePersona,Persona.ByName[containingName]);
            }
        } else {    
            results = Persona.BackCalcNormal(fissiblePersona);
        }
    }

    drawResults(results);
}

$(function(){
    var $selects = $("select.persona");
    $selects.empty();
    $selects.append($("<option></option>"));
    $.each(personaNamesInOrder, function(i,e) {
        $selects.append($("<option>"+e+"</option>"));
    });

    $("#trinaryFusion").prop("checked",false).change(function(){
        triangle = this.checked;
        if(triangle) {
            $("#thirdFusion").val("").parent().show();
        } else {
            $("#thirdFusion").val("").parent().hide();
        }
        recalculateFusion();
    });

    $("#trinaryFission").change(function(){
        triangle = this.checked;
        if(triangle) {
            $("#containing").val("").parent().show();
        } else {
            $("#containing").val("").parent().hide();
        }
        recalculateFission();
    });

    $("#firstFusion, #secondFusion, #thirdFusion").change(recalculateFusion);
    $("#fissible, #containing").change(recalculateFission);

    $("#thirdFusion, #containing").parent().hide();
});