{
    "exportFormatVersion": 2,
    "exportTime": "2023-04-13 09:03:11",
    "containerVersion": {
        "path": "accounts/6083911161/containers/108470643/versions/4",
        "accountId": "6083911161",
        "containerId": "108470643",
        "containerVersionId": "4",
        "name": "GT-WFMRKFW",
        "description": "<!-- Google tag (gtag.js) -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=GT-WFMRKFW\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'GT-WFMRKFW');\n</script>",
        "container": {
            "path": "accounts/6083911161/containers/108470643",
            "accountId": "6083911161",
            "containerId": "108470643",
            "name": "httpsrathanaphon.websites.co.in",
            "publicId": "GTM-N99WQPH",
            "usageContext": [
                "WEB"
            ],
            "fingerprint": "1681158202671",
            "tagManagerUrl": "https://tagmanager.google.com/#/container/accounts/6083911161/containers/108470643/workspaces?apiLink=container",
            "features": {
                "supportUserPermissions": true,
                "supportEnvironments": true,
                "supportWorkspaces": true,
                "supportGtagConfigs": false,
                "supportBuiltInVariables": true,
                "supportClients": false,
                "supportFolders": true,
                "supportTags": true,
                "supportTemplates": true,
                "supportTriggers": true,
                "supportVariables": true,
                "supportVersions": true,
                "supportZones": true
            },
            "tagIds": [
                "GTM-N99WQPH"
            ]
        },
        "tag": [
            {
                "accountId": "6083911161",
                "containerId": "108470643",
                "tagId": "10",
                "name": "httpsrathanaphon.website.co.in",
                "type": "gaawc",
                "liveOnly": true,
                "priority": {
                    "type": "INTEGER",
                    "value": "50"
                },
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "serverContainerUrl",
                        "value": "https://httpsrathanaphon.website. co. in"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "userDataVariable",
                        "value": "{{G-P08HKS4NF3}}"
                    },
                    {
                        "type": "LIST",
                        "key": "fieldsToSet",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "name",
                                        "value": "null"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "value",
                                        "value": "100%"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enhancedUserId",
                        "value": "true"
                    },
                    {
                        "type": "LIST",
                        "key": "userProperties",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "name",
                                        "value": "true"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "value",
                                        "value": "100%"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "sendPageView",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableSendToServerContainer",
                        "value": "true"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "measurementId",
                        "value": "G-P08HKS4NF3"
                    }
                ],
                "fingerprint": "1681158542598",
                "firingTriggerId": [
                    "2147479553"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "paused": true,
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            }
        ],
        "trigger": [
            {
                "accountId": "6083911161",
                "containerId": "108470643",
                "triggerId": "8",
                "name": "httpsrathanaphon.website.co.in",
                "type": "PAGEVIEW",
                "fingerprint": "1681156448088"
            }
        ],
        "variable": [
            {
                "accountId": "6083911161",
                "containerId": "108470643",
                "variableId": "7",
                "name": "httpsrathanaphon. website. co. in",
                "type": "cvt_108470643_5",
                "fingerprint": "1681156376562",
                "formatValue": {
                    "caseConversionType": "LOWERCASE",
                    "convertNullToValue": {
                        "type": "TEMPLATE",
                        "value": "100%"
                    },
                    "convertUndefinedToValue": {
                        "type": "TEMPLATE",
                        "value": "100%"
                    },
                    "convertTrueToValue": {
                        "type": "TEMPLATE",
                        "value": "100%"
                    },
                    "convertFalseToValue": {
                        "type": "TEMPLATE",
                        "value": "100%"
                    }
                }
            },
            {
                "accountId": "6083911161",
                "containerId": "108470643",
                "variableId": "9",
                "name": "G-P08HKS4NF3",
                "type": "awec",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "mode",
                        "value": "CODE"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "dataSource",
                        "value": "{{httpsrathanaphon. website. co. in}}"
                    }
                ],
                "fingerprint": "1681157289758",
                "formatValue": {
                    "caseConversionType": "LOWERCASE",
                    "convertNullToValue": {
                        "type": "TEMPLATE",
                        "value": "100%"
                    },
                    "convertUndefinedToValue": {
                        "type": "TEMPLATE",
                        "value": "100%"
                    },
                    "convertTrueToValue": {
                        "type": "TEMPLATE",
                        "value": "100%"
                    },
                    "convertFalseToValue": {
                        "type": "TEMPLATE",
                        "value": "100%"
                    }
                }
            }
        ],
        "builtInVariable": [
            {
                "accountId": "6083911161",
                "containerId": "108470643",
                "type": "PAGE_URL",
                "name": "Page URL"
            }
        ],
        "fingerprint": "1681376565636",
        "tagManagerUrl": "https://tagmanager.google.com/#/versions/accounts/6083911161/containers/108470643/versions/4?apiLink=version",
        "customTemplate": [
            {
                "accountId": "6083911161",
                "containerId": "108470643",
                "templateId": "5",
                "name": "G-P08HKS4NF3",
                "fingerprint": "1681155775301",
                "templateData": "___INFO___\n\n{\n  \"type\": \"MACRO\",\n  \"id\": \"cvt_temp_public_id\",\n  \"version\": 1,\n  \"securityGroups\": [],\n  \"displayName\": \"G-P08HKS4NF3\",\n  \"description\": \"\",\n  \"containerContexts\": [\n    \"WEB\"\n  ]\n}\n\n\n___TEMPLATE_PARAMETERS___\n\n[\n  {\n    \"type\": \"LABEL\",\n    \"name\": \"label1\",\n    \"displayName\": \"\"\n  }\n]\n\n\n___SANDBOXED_JS_FOR_WEB_TEMPLATE___\n\n// Enter your template code here.\nconst log = require('logToConsole');\nlog('data =', data);\n\n// Variables must return a value.\nreturn false;\n//<!-- Google tag (gtag.js) -->\n//<script async src=\"https://www.googletagmanager.com/gtag/js?id=GT-WFMRKFW\"></script>\n//<script>\n  //window.dataLayer = window.dataLayer || [];\n  //function gtag(){dataLayer.push(arguments);}\n  //gtag('js', new Date());\n\n  //gtag('config', 'G-P08HKS4NF3');\n//</script>\n\n\n___WEB_PERMISSIONS___\n\n[\n  {\n    \"instance\": {\n      \"key\": {\n        \"publicId\": \"logging\",\n        \"versionId\": \"1\"\n      },\n      \"param\": [\n        {\n          \"key\": \"environments\",\n          \"value\": {\n            \"type\": 1,\n            \"string\": \"debug\"\n          }\n        }\n      ]\n    },\n    \"isRequired\": true\n  }\n]\n\n\n___TESTS___\n\nscenarios: []\n\n\n___NOTES___\n\n\n\n\n"
            },
            {
                "accountId": "6083911161",
                "containerId": "108470643",
                "templateId": "6",
                "name": "httpsrathanaphon.wedsite.co.in",
                "fingerprint": "1681156180412",
                "templateData": "___INFO___\n\n{\n  \"type\": \"TAG\",\n  \"id\": \"cvt_temp_public_id\",\n  \"version\": 1,\n  \"securityGroups\": [],\n  \"displayName\": \"httpsrathanaphon.wedsite.co.in\",\n  \"brand\": {\n    \"id\": \"brand_dummy\",\n    \"displayName\": \"\"\n  },\n  \"description\": \"\",\n  \"containerContexts\": [\n    \"WEB\"\n  ]\n}\n\n\n___TEMPLATE_PARAMETERS___\n\n[\n  {\n    \"type\": \"LABEL\",\n    \"name\": \"label1\",\n    \"displayName\": \"\"\n  }\n]\n\n\n___SANDBOXED_JS_FOR_WEB_TEMPLATE___\n\n// Enter your template code here.\nconst log = require('logToConsole');\nlog('data =', data);\n\n// Call data.gtmOnSuccess when the tag is finished.\ndata.gtmOnSuccess();\n//<!-- Google Tag Manager -->\n//<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n//new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n//j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n//'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n//})(window,document,'script','dataLayer','G-P08HKS4NF3');</script>\n//<!-- End Google Tag Manager -->\n\n\n___WEB_PERMISSIONS___\n\n[\n  {\n    \"instance\": {\n      \"key\": {\n        \"publicId\": \"logging\",\n        \"versionId\": \"1\"\n      },\n      \"param\": [\n        {\n          \"key\": \"environments\",\n          \"value\": {\n            \"type\": 1,\n            \"string\": \"debug\"\n          }\n        }\n      ]\n    },\n    \"clientAnnotations\": {\n      \"isEditedByUser\": true\n    },\n    \"isRequired\": true\n  }\n]\n\n\n___TESTS___\n\nscenarios: []\n\n\n___NOTES___\n\n\n\n\n"
            }
        ]
    }
}