import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/navigation/url-serializer';
import { Engine } from 'json-rules-engine';
import { Jexl } from 'jexl';


/**
 * Generated class for the CaculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "caculator-page"
  }
)
@Component({
  selector: 'page-caculator',
  templateUrl: 'caculator.html',
})
export class CaculatorPage {

  source: string;
  ruleinput: string = `
  {
    "edvi": [{
        "conditions": {
          "all": [{
            "fact": "result",
            "operator": "lessThan",
            "value": 35
          }]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Input Error"
          }
        }
      },
      {
        "conditions": {
          "all": [{
              "fact": "result",
              "operator": "lessThanInclusive",
              "value": 75
            },
            {
              "fact": "result",
              "operator": "greaterThanInclusive",
              "value": 35
            }
          ]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Normal"
          }
        }
      },
      {
        "conditions": {
          "all": [{
              "fact": "result",
              "operator": "lessThanInclusive",
              "value": 86
            },
            {
              "fact": "result",
              "operator": "greaterThan",
              "value": 75
            }
          ]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Mild"
          }
        }
      },
      {
        "conditions": {
          "all": [{
              "fact": "result",
              "operator": "lessThanInclusive",
              "value": 96
            },
            {
              "fact": "result",
              "operator": "greaterThan",
              "value": 86
            }
          ]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Moderate"
          }
        }
      },
      {
        "conditions": {
          "all": [{
            "fact": "result",
            "operator": "greaterThan",
            "value": 96
          }]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Severe"
          }
        }
      }
    ],
    "esvi": [{
        "conditions": {
          "all": [{
            "fact": "result",
            "operator": "lessThan",
            "value": 12
          }]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Input Error"
          }
        }
      },
      {
        "conditions": {
          "all": [{
              "fact": "result",
              "operator": "lessThanInclusive",
              "value": 30
            },
            {
              "fact": "result",
              "operator": "greaterThanInclusive",
              "value": 12
            }
          ]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Normal"
          }
        }
      },
      {
        "conditions": {
          "all": [{
              "fact": "result",
              "operator": "lessThanInclusive",
              "value": 36
            },
            {
              "fact": "result",
              "operator": "greaterThan",
              "value": 30
            }
          ]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Mild"
          }
        }
      },
      {
        "conditions": {
          "all": [{
              "fact": "result",
              "operator": "lessThanInclusive",
              "value": 42
            },
            {
              "fact": "result",
              "operator": "greaterThan",
              "value": 36
            }
          ]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Moderate"
          }
        }
      },
      {
        "conditions": {
          "all": [{
            "fact": "result",
            "operator": "greaterThan",
            "value": 42
          }]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Severe"
          }
        }
      }
    ],
    "lvsbef": [{
        "conditions": {
          "all": [{
            "fact": "result",
            "operator": "greaterThanInclusive",
            "value": 55
          }]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Normal"
          }
        }
      },
      {
        "conditions": {
          "all": [{
              "fact": "result",
              "operator": "lessThan",
              "value": 55
            },
            {
              "fact": "result",
              "operator": "greaterThanInclusive",
              "value": 45
            }
          ]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Mild"
          }
        }
      },
      {
        "conditions": {
          "all": [{
              "fact": "result",
              "operator": "lessThan",
              "value": 45
            },
            {
              "fact": "result",
              "operator": "greaterThanInclusive",
              "value": 30
            }
          ]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Moderate"
          }
        }
      },
      {
        "conditions": {
          "all": [{
            "fact": "result",
            "operator": "lessThan",
            "value": 30
          }]
        },
        "event": {
          "type": "message",
          "params": {
            "data": "Severe"
          }
        }
      }
    ]
  }

  `;


  formulainput: string = `{
    "edvi": {
    "var" :[{
      "label" : "EDV",
      "field" :"var1"
    },
    {
      "label" : "BSA",
      "field" : "var2"
    }],
    "formula" : "Math.round(100*(var1/(var2+0.0000001)))/100",
    "note" : "The normal range of EDVI is 35-75; Mild range is 76-86; Moderate range is 87-96;Severe/abnormal range is >=97.",
    "result":{
      "label": "EDVI",
      "field": "result"
    },
    "diagnosis" :{
      "label" : "Patient Diagnosis",
      "field" : "diagnosis"
    },
    "title": "edvi Caculator",
    "instruction": "Please enter the measurement"
  },
  "esvi": {
    "var" :[{
      "label" : "ESV",
      "field" :"var1"
    },
    {
      "label" : "BSA",
      "field" :"var2"
    }],
    "formula" : "Math.round(100*(var1/(var2+0.0000001)))/100",
    "note" : "The normal range of ESVI is 12-30; Mild range is 31-36; Moderate range is 37-42; Severe/abnormal range is >=43. ",
    "result":{
      "label": "ESVI",
      "field": "result"
    },
    "diagnosis" :{
      "label" : "Patient Diagnosis",
      "field" : "diagnosis"
    },
    "title": "esvi caculator",
    "instruction": "Please enter the measurement"

  },
  "lvsbef": {
    "var" :[{
      "label" : "EDV",
      "field" : "var1"
    },
    {
      "label" : "ESV",
      "field" : "var2"
    }],
    "formula" : "Math.round(10000*((var1-var2)/(var1+0.0000001)))/100",
    "note" : "",
    "result":{
      "label": "Simpson Biplance EF(%)",
      "field": "result",
      "isPercentage" : true
    },
    "diagnosis" :{
      "label" : "Patient Diagnosis",
      "field" : "diagnosis"
    },
    "title": "LV Simpsons Biplane EF Calculator",
    "instruction": "Please enter the measurement"
  }
}
  `
  caculator: any = JSON.parse(`
{
  "var1":0,
  "var2":0,
  "var3":0,
  "var4":0,
  "result":0,
  "diagnosis":""
}

`)

  getResult() {
    //var jexl1 = new Jexl();
    // if (this.checkNotZero()) {
    //   let jexl = new Jexl();
    //   console.log(this.caculator)
    //   jexl.eval('10000*((var1*1-var2*1)/(var1*1+0.0000001))/100', this.caculator, function (err, res) {
    //     console.log(res); // Output: 72
    //   });
    // }


    if (this.checkNotZero()) {
      //let var1:number = parseFloat(this.caculator["var1"]);
      // let var2:number = parseFloat(this.caculator["var2"]);
      if (this.source == 'esvi')
        this.caculator.result = Math.round(100 * (this.caculator.var1 * 1 / (this.caculator.var2 * 1 + 0.0000001))) / 100
      else if (this.source == 'edvi')
        this.caculator.result = Math.round(100 * (this.caculator.var1 * 1 / (this.caculator.var2 * 1 + 0.0000001))) / 100
      else if (this.source == 'lvsbef')
        this.caculator.result = Math.round(10000 * ((this.caculator.var1 * 1 - this.caculator.var2 * 1) / (this.caculator.var1 * 1 + 0.0000001))) / 100
      this.getDiagnosis();
    }

    // //   jexl.eval('age * (3 - 1)', this.caculator, function(err, res) {
    // //     console.log(res); // Output: 72
    // // });
    //   return this.caculator.result ;
  }

  checkNotZero() {
    let result: boolean = true;
    for (var item of this.formular.var) {
      result = result && this.caculator[item.field] != 0;
    }
    return result;
  }
  getDiagnosis() {

    if (this.caculator.result) {
      let engine = new Engine();
      for (let item of this.rule) {
        console.log(item)
        engine.addRule(item);
      }
      let facts = {
        result: this.caculator.result
      }
      console.log(facts)
      engine
        .run(facts)
        .then(events => { // run() returns events with truthy conditions
          events.map(event => this.caculator.diagnosis = event.params.data )
        })
      return 'severe';
    }
  }
  formular: any;
  rule: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.source = navParams.get("source");
    this.formular = JSON.parse(this.formulainput)[this.source];
    console.log(this.formular);
    this.rule = JSON.parse(this.ruleinput)[this.source]
    console.log(this.rule)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CaculatorPage');
  }

}
