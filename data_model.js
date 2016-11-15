var Papa = require('papaparse')

class FoodModel {
  constructor(data) {
    this.database = data
  }
  get(uniNumber) {
    return this.database[uniNumber];
  }
  all() {
    return this.database;
  }
  search(keyword) {
    return [this.database['J15301']];
  }
}

export const FoodDB = {
  init(onSuccess) {
    FoodDB.NutritionIndex={}
    const Nutritions = ["熱量","粗脂肪","脂肪酸S總量","脂肪酸P總量","脂肪酸M總量","總碳水化合物","膳食纖維","糖質總量","粗蛋白"]
    Nutritions.forEach((n,i)=> FoodDB.NutritionIndex[n] = i)
    var columnIndex = { category:0, dataType:1, uniNumber:2, name:3, nickName:4, enName:5, contents:6, deprecateRate:7,
      nutritionCategory:8, nutritionName:9, unit:10, amountPer100g:11, sampleCount:12, standardDeviation:13, amountPerUnit:14, weightPerUnit:15, amountPerUnitWeight:16 }
    var foods={};
    Papa.parse("/nutrition_facts_tw/data/data.csv", {
      delimiter: "\t",
      download: true,
      complete: function(results) {
        if ( results.errors.length > 0 ) {
          console.log(results)
        } else {
          for (var rowIndex=0; rowIndex<results.data.length; rowIndex++) {
            var row = results.data[rowIndex]
            var nutritionKey = FoodDB.NutritionIndex[ row[columnIndex.nutritionName] ]
            if (nutritionKey !== undefined) {
              var key = row[columnIndex.uniNumber]
              if (!foods[key]) {
                foods[key] = {
                  uniNumber: row[columnIndex.uniNumber],
                  category: row[columnIndex.category],
                  dataType: row[columnIndex.dataType],
                  name: row[columnIndex.name],
                  nickName: row[columnIndex.nickName],
                  enName: row[columnIndex.enName],
                  contents: row[columnIndex.contents],
                  deprecateRate: row[columnIndex.deprecateRate],
                  nutritionItems: {
                    get: function(name) { return this.items[FoodDB.NutritionIndex[name]] },
                    items: []
                  }
                }
              }
              var caloriesWeightPerGram = nutritionKey==1 ? 9 : (nutritionKey==5 ? 4 : (nutritionKey==8 ? 4 : null)) // 1:fat, 5:carb, 8:protein
              foods[key].nutritionItems.items[ nutritionKey ] = {
                category: row[columnIndex.nutritionCategory],
                name: row[columnIndex.nutritionName],
                unit: (row[columnIndex.unit]=="kcal" ? '大卡' : (row[columnIndex.unit]=="g" ? '公克' : row[columnIndex.unit])),
                amountPer100g: row[columnIndex.amountPer100g],
                amountPerUnit: row[columnIndex.amountPerUnit],
                caloriesPer100g: (caloriesWeightPerGram ? row[columnIndex.amountPer100g] * caloriesWeightPerGram : null)
              }
            }
          }
          //console.log(foods)
          onSuccess(new FoodModel(foods))
        }
      }
    })
  }
}
