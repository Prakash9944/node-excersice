// Tools Functions

var url = "http://localhost:9090/tools";
if (window.location.href.indexOf('www.atatus.com') !== -1) {
    url = "https://tools.atatus.com/tools";
}
var path;

var $output = document.getElementById("output");
var $comments = document.getElementById("comments");

function clearFields() {
    $comments.value = '';
}

function copy() {
    $output.select();
    document.execCommand("copy");
}

function onPageLoadPasswordInit() {
    document.getElementById("uppercase").checked = true;
    document.getElementById("lowercase").checked = true;
    document.getElementById("number").checked = true;
    document.getElementById("specialchars").checked = true;
}

function hideError() {
    var errorMsg = document.getElementById("error-box");

    if (errorMsg) {
        errorMsg.remove();
    }
}

function showResult() {
    hideError();
    document.getElementById("result-section").style.display = "block";
}

function hideResult() {

    var resultId = document.getElementById('result-section');
    resultId.setAttribute("style", "display: none;");
}

function showError(errMsg) {
    hideResult();
    var error = document.getElementById("error-message");

    if (!error) {
        $('#error-section').append("<div id='error-box' class='form-group'> <div class='error-box' style='display: block;'> <div class='error-title'>Error</div><div id='error-message' class='error-message'>" + errMsg + "</div></div></div>");
    } else {
        error.innerHTML = errMsg;
    }
}

function loadSpinner(event) {
    var $btn = $(event);
    $btn.html($btn.attr('data-loading-text'));
    $btn.attr('disabled', 'disabled');
}

function removeSpinner(event, btnName) {
    removeProgressBar();
    var $btn = $(event);
    $btn.html(btnName);
    $btn.removeAttr('disabled');
}

function createTable(response, id) {
    $.each(response, function (key, value) {
       $(id).append("<tr>" + "<td class= 'td-width table-row font-bold td-padding'>" + key + "</td>" + "<td class= 'table-row td-padding'>" + value + " </td>" + "</tr>");
    });
}

function loadProgressBar() {
    var progressBar = document.getElementById('progress');

    if(!progressBar) {
        $('#progress-bar').append("<div id='progress'> <div class='progress'> <div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:100%;'> </div> </div> </div>");
    }
}

function removeProgressBar() {
    var removeBar = document.getElementById("progress");

    if (removeBar) {
        removeBar.remove();
    }
}


var postData = function(path, data, callback) {

    $.post(url + path, data, function (response, status) {
        return callback(null, response);
    })
    .fail(function(err) {
        return callback(err);
    });
}

var getData = function (path, callback) {

    $.get(url + path, function (response, status) {
        return callback(null, response);
    })
    .fail(function(err) {
        return callback(err);
    });
}

var updateResult = function(err, response, event, btnName) {
    if (err) {
        removeSpinner(event, btnName);
        $output.innerHTML = err.responseJSON.error;
    }

    if (response) {
        removeSpinner(event, btnName);
        $output.innerHTML = response;
    }
}

function getBeautifiedCSS() {
    var data = {
        style: $comments.value
    };

    postData ('/cssbeautify', data, function (err, response) {
        updateResult(err, response);
    });
}

function getMinifiedCSS() {
    var data = {
        cssStyle:  $comments.value
    };

    path = '/cssminify';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function getBeautifedJs() {
    var data = {
        jsCode:  $comments.value
    };

    path = '/jsbeautify';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function getMinifiedJs(event) {
    loadSpinner(event);
    var data = {
        jsCode:  $comments.value
    };

    path = '/jsminify';
    postData (path, data, function (err, response) {
        updateResult(err, response, event, 'Minify');
    });
}

function getXMLFormatter() {
    var data = {
        xml:  $comments.value
    };

    path = '/xmlformatter';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function xmlToJsonConvertor() {
    var data = {
        xmlData:  $comments.value
    };

    path = '/xmltojsonconvertor';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function getURLDetails() {
    var data = {
        url:  $comments.value
    };

    path = '/urlsplitter';
    postData (path, data, function (err, response) {

        if (err) {
            showError(err.responseJSON.error);
        }

        if (response) {
            showResult();
            createTable(response, '#url-result-section')
        }
    });
}

function getFormattedJson() {

    try {
        var jsonObj = JSON.parse($comments.value);
        var beautified = JSON.stringify(jsonObj, null, "\t");
        // JSON.stringify(tex, null, 4);
        $output.innerHTML = beautified;

    } catch (err) {
        $output.innerHTML = err;
    }
}

function getBeautifiedJSON() {
    var data = $comments.value;

    try {
        var Obj = JSON.parse(data);
        var beautified = JSON.stringify(Obj, null, "\t");
        // JSON.stringify(tex, null, 4);
        $output.innerHTML = beautified;

    } catch (err) {
        $output.innerHTML = err;
    }
}

function getMinifiedJSON() {
    var data = $comments.value;

    try {
        var minified = JSON.stringify(JSON.parse(data));
        $output.innerHTML = minified;

    } catch (err) {
        $output.innerHTML = err;
    }
}

function getFormattedHTML() {
    var data = {
        htmlTemplate: $comments.value
    };

    path = '/htmlvalidator';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function XPathValidator() {
    var data = {
        xmlData: $comments.value,
        xmlElementName: document.getElementById('xml').value,
    };

    path = '/xpath';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function convertXMLToXSD() {
    var data = {
        xmldDocument: $comments.value
    };

    path = '/xmltoxsd';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function JSONToXML() {
    var data = {
        jsonData: $comments.value
    };

    path = '/jsontoxmlconvertor';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function jsonToYaml() {
    var data = {
        jsonData: $comments.value
    };

    path = '/jsontoyaml';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function CSVToJSON() {
    var data = {
        csvData: $comments.value
    };

    path = '/csvtojson';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function JSONPathEvaluator() {
    var data = {
        jsonData: $comments.value,
        jsonPath: document.getElementById('jsonpath').value
    };

    path = '/jsonpathevaluator';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function generateJSON() {
    var data = {
        jsonData: $comments.value
    };

    path = '/jsoncreator';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function htmlToJade() {
    var data = {
        htmlTemplate: $comments.value
    };

    path = '/htmltojade';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function pugToHtml() {
    var data = {
        pugTemplate: $comments.value
    };

    path = '/pugtohtml';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function xmlToYamlConvertor() {
    var data = {
        xmlData: $comments.value
    };

    path = '/xmltoyaml';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function notifyInfo(clsName, msg) {
    $("#ssl").append("<div class=result-row> <div class= "+ clsName +" result-label >" + msg  + " <i class='fas fa-exclamation-triangle' style='font-size:18px;color:red'></i> </div> </div>");
}

function getSSLDetails (event) {

    loadSpinner(event);
    var data = {
        domainName: $comments.value
    };

    path = '/sslchecker';
    postData (path, data, function (err, response) {

        removeSpinner(event, 'Test');

        if (err) {
            showError(err.responseJSON.error);
        }

        if (response) {
            showResult();

            var msg = 'SSL certificate going to expires ';
            var info;
            response.daysRemaining = 10
            if (response.daysRemaining > 30 && response.daysRemaining < 45) {
                info = 'Warning ' + msg + response.daysRemaining + ' Days';
                notifyInfo('text-color-warning', info)
            } else if (response.daysRemaining < 15) {
                info = 'Urgent ' + msg + response.daysRemaining + ' Days';
                notifyInfo('text-color-red', info)
            }

            document.getElementById("issueDate").innerHTML = response.validFrom;
            document.getElementById("expiry").innerHTML = response.validTo;
            document.getElementById("dayremain").innerHTML = response.daysRemaining;
            document.getElementById("validFor").innerHTML = response.validFor[0];

        }
    });
}

function getReadableTime() {

    var timeStamp = $comments.value;
    var isNumber = (timeStamp !== "number") ? parseInt(timeStamp) : timeStamp;

    $output.innerHTML = new Date(isNumber).toUTCString();
}

function generatePassword() {

    var data = {
        passwordLength: document.getElementById('passlength').value,
        capsLetters: document.getElementById("uppercase").checked,
        smallCase: document.getElementById("lowercase").checked,
        number: document.getElementById("number").checked,
        spacialCharactors: document.getElementById("specialchars").checked,
    }

    path = '/passwordgen';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function findIPAddress() {
    var data = {
        domainName: $comments.value
    };

    path = '/findipaddress';
    postData (path, data, function (err, response) {
        if (err) {
            showError(err.responseJSON.error);
        }

        if (response) {
            showResult();
            document.getElementById("ipaddress").innerHTML = response.ipAddress;
            document.getElementById("family").innerHTML = response.family;
        }
    });
}

function findWebsiteLocation() {
    var data = {
        domainName: $comments.value
    };

    path = '/findlocation';
    postData (path, data, function (err, response) {
        if (err) {
            showError(err.responseJSON.error);
        }

        if (response) {
            showResult();
            document.getElementById("country").innerHTML = response.country;
            document.getElementById("city").innerHTML = response.timezone;
            document.getElementById("region").innerHTML = response.region || response.timezone;
        }
    });
}

function csvToYaml() {
    var data = {
        csvData: $comments.value
    };

    path = '/csvtoyaml';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function csvToXml() {
    var data = {
        csvData: $comments.value
    };

    path = '/csvtoxml';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function whatIsMyIPAddress() {
    path = '/whatismyipaddress';
    getData (path, function (err, response) {
        if (err) {
            document.getElementById("ipaddress").innerHTML = err.responseJSON.error;
        }

        if (response) {
            document.getElementById("ipaddress").innerHTML = response.ipAddress;
            document.getElementById("location").innerHTML = response.location.timezone;
            document.getElementById("country").innerHTML = response.country
            document.getElementById("city").innerHTML = response.location.city;
        }
    });
}

function iniToJson() {
    var data = {
        iniData: $comments.value
    };

    path = '/initojson';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function iniToXML() {
    var data = {
        iniData: $comments.value
    };

    path = '/initoxml';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function iniToYaml() {
    var data = {
        iniData: $comments.value
    };

    path = '/initoyaml';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function mongoToSQL() {
    var data = {
        userQuery: $comments.value
    };

    path = '/mongotosql';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function getUrlHeader(event) {
    loadSpinner(event);
    loadProgressBar();
    var data = {
        url: $comments.value
    };

    path = '/serverheader';
    postData (path, data, function (err, response) {

        removeSpinner(event, 'View Header');

        if (err) {
            showError(err.responseJSON.error);
        }

        if (response) {
            showResult();
            createTable(response, '#headerresponse')
        }
    });
}

function getSQLFormatter() {
    var data = {
        sqlQuery: $comments.value
    };

    path = '/sqlformatter';
    postData (path, data, function (err, response) {
        updateResult(err, response);
    });
}

function changeEvent(event) {

    var methodType = document.getElementById("checkbox"),
        body = document.getElementById("body"),
        customHeader = document.getElementById("customHeader");

    if (event == 'post' || event == 'put' ||
        event == 'patch' || event == 'delete') {
        methodType.style.display = "block";
        body.style.display = "block";
        customHeader.style.display = "block";

    } else {
        methodType.style.display = "none";
        body.style.display = "none";
        customHeader.style.display = "none";
    }
}

function restApiCall(event) {
    loadSpinner(event);

    var reqType = (document.getElementById("xml").checked == true) ?  'xml': null || (document.getElementById("json").checked == true) ?  'json' : null;

    var data = {
        reqType: reqType,
        requestData: document.getElementById("requestbody").value,
        method: document.getElementById("method").value,
        userAgent: document.getElementById("useragent").value,
        url: $comments.value,
        headerName: document.getElementById("customeName").value,
        headerValue: document.getElementById("customeValue").value,
        token: document.getElementById("token").value,
        autherization: document.getElementById("autherization").value,
    };

    path = '/restapicall';
    postData (path, data, function (err, result) {

        removeSpinner(event, 'Test');

        if (err) {
            showError(err.responseJSON.error);
        }

        if (result) {
            showResult();

            if (result && result.response.request.headers) {
                $.each(result.response.request.headers, function (key, value) {
                   $('#result-request-header').append("<tr>" + "<td class= 'td-width'>" + key + "</td>" + "<td>" + value + " </td>" + "</tr>");
                });
            }

            if (result && result.response.headers) {
                $.each(result.response.headers, function (key, value) {
                   $('#result-response-header').append("<tr>" + "<td class= 'td-width'>" + key + "</td>" + "<td>" + value + " </td>" + "</tr>");
                });
            }

            var bodyResponse = document.getElementById("result-body");
            if (result && (typeof result.body) == 'object') {
                var Obj = JSON.parse(result.body);
                bodyResponse.innerHTML = JSON.stringify(Obj, null, "\t");
            }

            // if (result && (typeof result.body) === 'string') {
            //     bodyResponse.innerHTML = result.body;
            // }
        }
    });
}

function doPing(event) {

    loadSpinner(event);
    var data = {
        hostName: $comments.value
    };

    var startDate = new Date();
    path = '/pingwebsite';
    postData (path, data, function (err, response) {

        removeSpinner(event, 'Ping Now');

        if(err) {
            showError(err.responseJSON.error);
        }

        if (response) {
            var endDate = new Date();

            showResult();
            var seconds = (endDate - startDate) / 1000;

            document.getElementById("ip").innerHTML = response.host;
            document.getElementById("status").innerHTML = (response.alive === true) ? "UP" : "DOWN";
            document.getElementById("packtloss").innerHTML = response.packetLoss;
            document.getElementById("response").innerHTML = (seconds >= 1)  ? seconds + ' sec' : seconds + ' ms';
        }
    });
}

function addDynamicStyle(id) {
    $(id).addClass('header-box-green');
}

function removeStyle(id) {
    $(id).removeClass('header-box-red');
}

function securityHeader(event) {

    loadSpinner(event);
    var data = {
        url: $comments.value
    };

    path = '/securityheader';
    postData (path, data, function (err, response) {

        removeSpinner(event, 'Scan Now');

        if(err) {
            showError(err.responseJSON.error);
        }

        if (response) {
            showResult();
            document.getElementById("site").innerHTML = data.url;
            document.getElementById("report-time").innerHTML = response.headers.date;

            $.each(response.headers, function (key, value) {
               $('#result-response-header').append("<tr>" + "<td class= 'td-width table-row font-bold'>" + key + "</td>" + "<td class= 'table-row'>" + value + " </td>" + "</tr>");
            });

            var grade = 0;

            if (response.headers['content-security-policy']) {
                addDynamicStyle('#security-policy');
                grade = grade + 1;
            }

            if (response.headers['permissions-policy']) {
                addDynamicStyle('#permission-policy');
                grade = grade + 1;
            }

            if (response.headers['strict-transport-security']) {
                addDynamicStyle('#transport-security');
                grade = grade + 1;
            }

            if (response.headers['x-content-type-options']) {
                addDynamicStyle('#content-type');
                grade = grade + 1;
            }

            if (response.headers['referrer-policy']) {
                addDynamicStyle('#refer-policy');
                grade = grade + 1;
            }

            if (response.headers['x-frame-options']) {
                addDynamicStyle('#xframe-option');
                grade = grade + 1;
            }

            var gradeStyle = document.getElementById("security-header-grade");
            var gradeType = document.getElementById("grade");

            if (grade >= 5) {
                 gradeStyle.className = "score score-green score-style";
                 gradeType.innerHTML = "A";

            } else if (grade >= 3 && grade <= 4) {
                gradeStyle.className = "score score-yellow score-style";
                gradeType.innerHTML = "B";

            } else if (grade >= 1 && grade <= 2) {
                gradeType.innerHTML = "C";
                gradeStyle.className = "score score-orange score-style";

            } else if (grade == 0) {
                gradeType.innerHTML = "F";
                gradeStyle.className = "score score-red score-style";

            }
        }
    });
}

function add(){
  var new_chq_no = parseInt($('#total_chq').val())+1;
  var new_input="<input type='text' class ='form-control' placeholder='Value' id='new_"+new_chq_no+"'> <br>";
  var input_two="<input type='text' class ='form-control' placeholder='Name' id='new_"+new_chq_no+"'> <br>";
  $('#new_chq').append(new_input);
  $('#new_one').append(input_two);
  $('#total_chq').val(new_chq_no)
  $('#total_chqs').val(new_chq_no)
}

function remove(){
  var last_chq_no = $('#total_chq').val();
  var last_chq_nos = $('#total_chq').val();

  if(last_chq_no>1 && last_chq_nos > 1){
    $('#new_'+last_chq_no).remove();
    $('#new_'+last_chq_nos).remove();
    $('#total_chq').val(last_chq_no-1);
     $('#total_chqs').val(last_chq_nos-1);
  }
}


function fillSampleData(name) {
    var sampleData;

    if (name === "css") {
        sampleData = obj.cssStyle;
    } else if (name === "cssminify"){
        sampleData = obj.cssMinifier;
    } else if (name === "csv") {
        sampleData = obj.csv;
    } else if (name === "html"){
        sampleData = obj.htmlTemplate;
    }  else if (name === "javascript") {
        sampleData = obj.javascriptBeautifier;
    } else if (name === "json") {
        sampleData = obj.json;
    } else if (name === "jsonminify") {
        sampleData = obj.jsonMinify;
    } else if (name === "jsonpath") {
        sampleData = obj.jsonMinify;
        document.getElementById("jsonpath").innerHTML = obj.JSONPath;
    } else if (name === "url") {
        document.getElementById("comments").value = obj.urlSplitter;
    } else if (name === "xml") {
        sampleData = obj.xml;
    } else if (name === "xpath") {
        sampleData = obj.XPathData;
        document.getElementById("xml").innerHTML = obj.XPath;
    } else if (name === "ssl") {
        document.getElementById("comments").value = obj.domainName;
    } else if (name === "timestamp") {
        sampleData = obj.unixTime;
    } else if (name === "jsminify") {
        sampleData = obj.javascriptMinifier;
    } else if (name === "xmldata") {
        sampleData = obj.xmlData;
    } else if (name === "domain") {
        document.getElementById("comments").value = obj.domainName;
    } else if (name === "inidata") {
        sampleData = obj.iniData;
    } else if (name === "mongodb") {
        sampleData = JSON.stringify(obj.userQuery, null, "\t");
    } else if (name === "urlheader") {
        document.getElementById("comments").value = obj.urlSplitter;
    } else if (name === "pug") {
        sampleData = obj.bugTemplate;
    } else if (name === "jsongenerator") {
        sampleData = JSON.stringify(obj.jsonData, null, "\t");
    } else if (name === "sqldata") {
        sampleData = obj.sqlData;
    }

    document.getElementById("comments").innerHTML = sampleData;
}